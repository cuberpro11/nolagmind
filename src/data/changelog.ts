// Release notes, mirrored from the app repo's changelogs/ directory.
// Add new releases to the top when shipping.

export interface Release {
  version: string;
  highlights: string[];
}

export const releases: Release[] = [
  {
    version: '2.0.0',
    highlights: [
      'No Lag Mind Note App 2.0 — clean version numbering from 1.7.9 through 1.9.9',
      'Removed experimental move-to-Applications first-launch prompt',
    ],
  },
  {
    version: '1.9.9',
    highlights: [
      'Updates — startup update check now always hits the network so the update popup appears reliably on launch (Settings manual check was already correct)',
    ],
  },
  {
    version: '1.9.8',
    highlights: [
      'macOS — first launch now offers to move the app from Downloads to your Applications folder (with App Translocation support and optional "Don\'t ask again")',
      'Themes — Rosé Pine accent colors updated to match the official palette',
    ],
  },
  {
    version: '1.9.7',
    highlights: [
      'Welcome notes — advanced shortcuts walkthrough now documents autocomplete list actions (⌘Delete to remove custom properties or slash commands, ⌘Enter to edit a slash command)',
    ],
  },
  {
    version: '1.9.6',
    highlights: [
      'macOS — Option+letter shortcuts (⌥N, ⌥D, ⌥Z, ⌥[, ⌥1–9, etc.) no longer insert special characters or dead keys into the editor',
      'macOS — Escape in native fullscreen no longer exits fullscreen when a modal or in-app handler should consume it',
      'Wikilink autocomplete — typing [[ after an existing wikilink in the same paragraph is detected correctly',
      'Slash commands — modal editor round-trips markdown the same way as note content (tasks, wikilinks, blank lines)',
      'Slash commands — command names are sanitized as you type; Enter/Escape work in the delete confirmation dialog',
      'Slash command insertion — expanded content uses the same TipTap markdown pipeline as note loading',
      'Editor — opening or switching notes no longer adds spurious undo history steps from post-load normalization',
    ],
  },
  {
    version: '1.9.5',
    highlights: [
      'Onboarding walkthrough — welcome notes are reorganized into beginner, intermediate, and advanced stages with dedicated subfolders for each level',
      'New vaults — welcome notes copy recursively so nested walkthrough folders come along automatically',
      'First vault — the app now opens "Welcome (start here!)" as the landing note instead of the old welcome.md',
    ],
  },
  {
    version: '1.9.4',
    highlights: [
      'Board task detail panel — opening task details suspends board keyboard shortcuts and inline editing so the side panel keeps focus without fighting the board behind it',
      'Board find — blocked task titles are excluded from search until their blockers are completed',
      'Mind map editing — clicking a node to edit now places the caret where you clicked instead of snapping to the end, so wikilink navigation works right after a click',
    ],
  },
  {
    version: '1.9.3',
    highlights: [
      'Mind map grow-down layout — top-down trees now use a dedicated layout with tighter sibling spacing and width caps, so cousin branches no longer overlap',
      'Faster note switching — wikilink resolution and sidebar sorting no longer rescan the vault on every click or note change',
      'Smoother startup — update checks wait until the app is idle and respect the check cooldown, so relaunching does not compete with vault loading',
    ],
  },
  {
    version: '1.9.2',
    highlights: [
      'Faster vault switching: revisiting a vault you already opened this session restores its note list instantly',
      'Smoother update checks: the app checks for updates immediately on launch instead of waiting for the home screen to finish loading',
    ],
  },
  {
    version: '1.9.1',
    highlights: [
      'Developer theme colors: official palette colors for Gruvbox, Monokai Pro, One Dark, Tokyo Night, Ayu, Night Owl, Everforest, Kanagawa, Rosé Pine, and Horizon',
    ],
  },
  {
    version: '1.9.0',
    highlights: [
      'Sort by note type: filter notes in Search with sort: note type markdown, mindmap, or board (supports or to combine types)',
      'Mind map zoom: Ctrl+scroll to zoom toward the cursor in mind map panes',
      'Alias search: aliases now match only when the query appears as a consecutive substring',
      'Sort list autocomplete: list property values in sort filters now use prefix matching',
    ],
  },
  {
    version: '1.8.5',
    highlights: [
      'Catppuccin themes: official Mocha (dark) and Latte (light) palette colors in Developer Themes',
    ],
  },
  {
    version: '1.8.4',
    highlights: [
      'Add due dates to board tasks: set from the column, slash menu, or task detail panel',
      'Task view groups board tasks by due date (Overdue, Today, This week, Later)',
      'Faster sidebar, search, and startup with improved property cache and usage stats',
    ],
  },
  {
    version: '1.8.3',
    highlights: [
      'Fixed the Recent Cards entrance animation stacking cards on top of each other',
      'Streamlined the release pipeline for faster updates',
    ],
  },
  {
    version: '1.8.2',
    highlights: [
      'Update available popup on launch: blurred backdrop, version, and full release notes',
      'Developer themes reorganized: dark and light variants aligned in matching rows',
      'Quick, snappy entrance animations for home screens, tasks, calendar, and graph (respects reduced motion)',
    ],
  },
  {
    version: '1.8.1',
    highlights: [
      'Rosé Pine theme: the popular developer palette in dark and light (Dawn) variants',
      'Find it in Settings → Developer Themes',
    ],
  },
  {
    version: '1.8.0',
    highlights: [
      'Automatic updates: the app checks for new versions when you open it',
      "What's New popup shows release notes after each update",
      'Check for Updates added to Settings → About',
      'Board find: only the selected match stays highlighted after pressing Enter',
      'Bug fixes and performance improvements',
    ],
  },
  {
    version: '1.7.9',
    highlights: [
      'Local first vault storage with markdown, mind maps, and boards',
      'Graph view, daily notes, keyboard shortcuts, and themes',
    ],
  },
];
