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
  { name: 'Catppuccin Mocha', bg: '#1e1e2e', surface: '#181825', text: '#cdd6f4', muted: '#6c7086', accent: '#89b4fa', border: '#313244' },
  { name: 'Gruvbox Dark', bg: '#282828', surface: '#3c3836', text: '#ebdbb2', muted: '#928374', accent: '#fabd2f', border: '#504945' },
  { name: 'Tokyo Night Storm', bg: '#24283b', surface: '#1f2335', text: '#c0caf5', muted: '#565f89', accent: '#7aa2f7', border: '#3b4261' },
  { name: 'Rosé Pine', bg: '#191724', surface: '#1f1d2e', text: '#e0def4', muted: '#6e6a86', accent: '#ebbcba', border: '#26233a' },
  { name: 'Nord Dark', bg: '#2e3440', surface: '#3b4252', text: '#eceff4', muted: '#616e88', accent: '#88c0d0', border: '#434c5e' },
  { name: 'Dracula', bg: '#282a36', surface: '#343746', text: '#f8f8f2', muted: '#6272a4', accent: '#bd93f9', border: '#44475a' },
  { name: 'Everforest Dark', bg: '#2d353b', surface: '#343f44', text: '#d3c6aa', muted: '#859289', accent: '#a7c080', border: '#475258' },
  { name: 'Kanagawa Wave', bg: '#1f1f28', surface: '#2a2a37', text: '#dcd7ba', muted: '#727169', accent: '#7e9cd8', border: '#363646' },
  { name: 'Solarized Light', bg: '#fdf6e3', surface: '#eee8d5', text: '#657b83', muted: '#93a1a1', accent: '#268bd2', border: '#d9d2c2' },
  { name: 'Catppuccin Latte', bg: '#eff1f5', surface: '#e6e9ef', text: '#4c4f69', muted: '#9ca0b0', accent: '#1e66f5', border: '#ccd0da' },
  { name: 'Rosé Pine Dawn', bg: '#faf4ed', surface: '#fffaf3', text: '#575279', muted: '#9893a5', accent: '#d7827e', border: '#f2e9e1' },
  { name: 'Ayu Light', bg: '#fafafa', surface: '#f3f4f5', text: '#5c6166', muted: '#8a9199', accent: '#399ee6', border: '#e7e8e9' },
];
