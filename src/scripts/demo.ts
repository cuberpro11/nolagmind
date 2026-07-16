// Shared helpers for the animated product mockups.

/** True when demos should render their final state without animating:
 *  the user prefers reduced motion, or `?static` is in the URL (testing). */
export const prefersReducedMotion = () =>
  matchMedia('(prefers-reduced-motion: reduce)').matches ||
  new URLSearchParams(location.search).has('static');

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/** Type text into an element character by character. Fast on purpose. */
export async function typeText(
  el: Element,
  text: string,
  speed = 26,
  jitter = 24
): Promise<void> {
  for (const ch of text) {
    el.textContent += ch;
    await sleep(speed + Math.random() * jitter);
  }
}

/** Delete the last `count` characters of an element's text, quickly. */
export async function deleteText(el: Element, count: number, speed = 14): Promise<void> {
  for (let i = 0; i < count; i++) {
    el.textContent = (el.textContent ?? '').slice(0, -1);
    await sleep(speed);
  }
}

export interface Surface {
  caret: HTMLElement;
  clear(): void;
  newLine(cls?: string): HTMLElement;
  span(parent: Element, cls?: string): HTMLElement;
  caretTo(el: Element): void;
  typeIn(parent: Element, cls: string, text: string, speed?: number): Promise<HTMLElement>;
}

/** A little typed-editor surface: lines, spans, and a block caret. */
export function createSurface(page: HTMLElement): Surface {
  const caret = document.createElement('span');
  caret.className = 'caret';

  const surface: Surface = {
    caret,
    clear() {
      page.innerHTML = '';
    },
    newLine(cls = '') {
      const l = document.createElement('div');
      l.className = `l ${cls}`.trim();
      page.appendChild(l);
      return l;
    },
    span(parent, cls = '') {
      const s = document.createElement('span');
      if (cls) s.className = cls;
      parent.appendChild(s);
      return s;
    },
    caretTo(el) {
      el.appendChild(caret);
    },
    async typeIn(parent, cls, text, speed) {
      const s = surface.span(parent, cls);
      if (caret.parentElement === parent) parent.insertBefore(s, caret);
      surface.caretTo(parent);
      await typeText(s, text, speed);
      return s;
    },
  };
  return surface;
}

/** Run `cb` once, the first time `el` scrolls into view. */
export function onVisible(el: Element, cb: () => void): void {
  if (!('IntersectionObserver' in window)) {
    cb();
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        io.disconnect();
        cb();
      }
    },
    { threshold: 0.25 }
  );
  io.observe(el);
}

/** Loop `iteration` forever, but only while `el` is on screen —
 *  offscreen demos go fully quiet instead of burning CPU. */
export function runLoop(el: Element, iteration: () => Promise<void>): void {
  if (!('IntersectionObserver' in window)) return;

  let visible = false;
  let notify: (() => void) | null = null;
  const io = new IntersectionObserver(
    (entries) => {
      visible = entries.some((e) => e.isIntersecting);
      if (visible && notify) {
        notify();
        notify = null;
      }
    },
    { threshold: 0.2 }
  );
  io.observe(el);

  const whenVisible = () =>
    visible ? Promise.resolve() : new Promise<void>((r) => (notify = r));

  (async () => {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      await whenVisible();
      await iteration();
    }
  })();
}
