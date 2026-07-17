export interface FaqItem {
  q: string;
  a: string; // may contain inline HTML
}

export const faq: FaqItem[] = [
  {
    q: 'Is it really free?',
    a: 'Yes. The app costs nothing: no account, no trial period, no feature gates. Optional paid services like Sync and Publish are planned for later, and they will always be exactly that: optional.',
  },
  {
    q: 'Where do my notes live?',
    a: 'On your disk, as plain markdown files inside folders we call vaults. There is no server and no proprietary database. You can open your notes in any editor, back them up however you like, and leave any time with everything intact.',
  },
  {
    q: 'macOS says the app is from an unidentified developer. What do I do?',
    a: 'The app is not yet notarized with Apple, so the first launch takes one extra step: right click the app in your Applications folder, choose <strong>Open</strong>, then confirm. You only do this once. After that it opens normally, and updates install automatically.',
  },
  {
    q: 'What platforms are supported?',
    a: 'Today: macOS on Apple Silicon. Intel Mac and Windows builds are on the roadmap. Join the Discord to hear the moment they ship.',
  },
  {
    q: 'How do updates work?',
    a: 'The app checks for updates when you open it and installs them in place, with release notes shown after each update. No reinstalling, no hunting for downloads.',
  },
  {
    q: 'What makes it faster than other note apps?',
    a: 'It is a native app built with Tauri: the interface runs in your system webview and the heavy lifting (search, file access, indexing) happens in compiled Rust code. There is no bundled browser doing everything in JavaScript, which is why it launches in a blink and stays light while it runs.',
  },
];
