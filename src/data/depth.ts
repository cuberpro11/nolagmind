// The "and it goes deeper" index — breadth features beyond the four stories.

export interface DepthItem {
  name: string;
  blurb: string;
}

export const depthFeatures: DepthItem[] = [
  { name: 'Graph view', blurb: 'See every connection between your notes as a living map.' },
  { name: 'Mind maps', blurb: 'Think in branches. Full markdown inside every node.' },
  { name: 'Boards', blurb: 'Kanban with tasks, subtasks, priorities, and drag and drop.' },
  { name: 'Task view', blurb: 'Every checkbox from every note, gathered in one place.' },
  { name: 'Daily notes', blurb: 'One keystroke to today. A calendar to walk back through time.' },
  { name: 'Split panes', blurb: 'Two notes side by side, each with its own history, like a browser.' },
  { name: 'Workspace tabs', blurb: 'Jump between working sets with ⌘1 through 9.' },
  { name: 'Vaults', blurb: 'Separate worlds for work, life, and projects. Switch with vault:.' },
  { name: 'Properties', blurb: 'Tags, aliases, dates, and your own custom fields on any note.' },
  { name: 'Backlinks', blurb: 'Every note shows which notes mention it, with the exact sentence.' },
  { name: 'Find & replace', blurb: 'Inside a note or across the whole vault, instantly.' },
  { name: 'Heading folds', blurb: 'Collapse sections to see the shape of long notes.' },
];
