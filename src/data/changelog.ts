// Release notes, mirrored from the app repo's changelogs/ directory.
// Add new releases to the top when shipping.

export interface Release {
  version: string;
  highlights: string[];
}

export const releases: Release[] = [
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
      'Update-available popup on launch — blurred backdrop, version, and full release notes',
      'Developer themes reorganized — dark and light variants aligned in matching rows',
      'Quick, snappy entrance animations for home screens, tasks, calendar, and graph (respects reduced motion)',
    ],
  },
  {
    version: '0.2.1',
    highlights: [
      'Rosé Pine theme — the popular developer palette in dark and light (Dawn) variants',
      'Find it in Settings → Developer Themes',
    ],
  },
  {
    version: '0.2.0',
    highlights: [
      'Automatic updates — the app checks for new versions when you open it',
      "What's New popup shows release notes after each update",
      'Check for Updates added to Settings → About',
      'Board find: only the selected match stays highlighted after pressing Enter',
      'Bug fixes and performance improvements',
    ],
  },
  {
    version: '0.1.9',
    highlights: [
      'Local-first vault storage with markdown, mind maps, and boards',
      'Graph view, daily notes, keyboard shortcuts, and themes',
    ],
  },
];
