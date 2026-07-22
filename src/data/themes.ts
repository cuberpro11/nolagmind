// Real palettes lifted from the app (src/utils/themes.ts in the note-app repo).
// The app ships 41 themes; this is the showcase subset for the marketing strip.

export interface ThemeSwatch {
  name: string;
  bg: string;
  surface: string;
  text: string;
  muted: string;
  accent: string;
  border: string;
}

export const TOTAL_THEMES = 41;

export const showcaseThemes: ThemeSwatch[] = [
  { name: 'Catppuccin Mocha', bg: '#1e1e2e', surface: '#181825', text: '#cdd6f4', muted: '#7f849c', accent: '#89b4fa', border: '#313244' },
  { name: 'Gruvbox Dark', bg: '#282828', surface: '#3c3836', text: '#ebdbb2', muted: '#928374', accent: '#d65d0e', border: '#3c3836' },
  { name: 'Tokyo Night Storm', bg: '#24283b', surface: '#1f2335', text: '#c0caf5', muted: '#565f89', accent: '#7aa2f7', border: '#292e42' },
  { name: 'Rosé Pine', bg: '#191724', surface: '#1f1d2e', text: '#e0def4', muted: '#6e6a86', accent: '#ebbcba', border: '#403d52' },
  { name: 'Nord Dark', bg: '#2e3440', surface: '#3b4252', text: '#d8dee9', muted: '#4c566a', accent: '#88c0d0', border: '#434c5e' },
  { name: 'Dracula', bg: '#282a36', surface: '#3d3f4d', text: '#f8f8f2', muted: '#6272a4', accent: '#ff79c6', border: '#44475a' },
  { name: 'Everforest Dark', bg: '#2d353b', surface: '#343f44', text: '#d3c6aa', muted: '#859289', accent: '#a7c080', border: '#475258' },
  { name: 'Kanagawa Wave', bg: '#1f1f28', surface: '#181820', text: '#dcd7ba', muted: '#727169', accent: '#7aa89f', border: '#2a2a37' },
  { name: 'Solarized Light', bg: '#fdf6e3', surface: '#eee8d5', text: '#586e75', muted: '#93a1a1', accent: '#2aa198', border: '#d6d0c5' },
  { name: 'Catppuccin Latte', bg: '#eff1f5', surface: '#e6e9ef', text: '#4c4f69', muted: '#8c8fa1', accent: '#1e66f5', border: '#bcc0cc' },
  { name: 'Rosé Pine Dawn', bg: '#faf4ed', surface: '#fffaf3', text: '#464261', muted: '#9893a5', accent: '#d7827e', border: '#dfdad9' },
  { name: 'Ayu Light', bg: '#fcfcfc', surface: '#f8f9fa', text: '#5c6166', muted: '#adaeb1', accent: '#f29718', border: '#d5d3ce' },
];
