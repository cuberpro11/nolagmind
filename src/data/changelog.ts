// Release notes, mirrored from the app repo's changelogs/ directory.
// Add new releases to the top when shipping.

export interface Release {
  version: string;
  highlights: string[];
}

export const releases: Release[] = [
  {
    version: '2.1.2',
    highlights: [
      'Faster vault switching: revisiting a vault you already opened this session restores its note list instantly',
      'Smoother update checks: the app checks for updates immediately on launch instead of waiting for the home screen to finish loading',
    ],
  },
  {
    version: '2.1.1',
    highlights: [
      'Developer theme colors: official palette colors for Gruvbox, Monokai Pro, One Dark, Tokyo Night, Ayu, Night Owl, Everforest, Kanagawa, Rosé Pine, and Horizon',
    ],
  },
  {
    version: '2.1.0',
    highlights: [
      'Sort by note type: filter notes in Search with sort: note type markdown, mindmap, or board (supports or to combine types)',
      'Mind map zoom: Ctrl+scroll to zoom toward the cursor in mind map panes',
      'Alias search: aliases now match only when the query appears as a consecutive substring',
      'Sort list autocomplete: list property values in sort filters now use prefix matching',
    ],
  },
  {
    version: '0.2.5',
    highlights: [
      'Catppuccin themes: official Mocha (dark) and Latte (light) palette colors in Developer Themes',
    ],
  },
  {
    version: '0.2.4',
    highlights: [
      'Add due dates to board tasks: set from the column, slash menu, or task detail panel',
      'Task view groups board tasks by due date (Overdue, Today, This week, Later)',
      'Faster sidebar, search, and startup with improved property cache and usage stats',
    ],
  },
  {
    version: '0.2.3',
    highlights: [
      'Fixed the Recent Cards entrance animation stacking cards on top of each other',
      'Streamlined the release pipeline for faster updates',
    ],
  },
  {
    version: '0.2.2',
    highlights: [
      'Update available popup on launch: blurred backdrop, version, and full release notes',
      'Developer themes reorganized: dark and light variants aligned in matching rows',
      'Quick, snappy entrance animations for home screens, tasks, calendar, and graph (respects reduced motion)',
    ],
  },
  {
    version: '0.2.1',
    highlights: [
      'Rosé Pine theme: the popular developer palette in dark and light (Dawn) variants',
      'Find it in Settings → Developer Themes',
    ],
  },
  {
    version: '0.2.0',
    highlights: [
      'Automatic updates: the app checks for new versions when you open it',
      "What's New popup shows release notes after each update",
      'Check for Updates added to Settings → About',
      'Board find: only the selected match stays highlighted after pressing Enter',
      'Bug fixes and performance improvements',
    ],
  },
  {
    version: '0.1.9',
    highlights: [
      'Local first vault storage with markdown, mind maps, and boards',
      'Graph view, daily notes, keyboard shortcuts, and themes',
    ],
  },
];
