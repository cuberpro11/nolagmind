// Placeholder services — structure inspired by Obsidian's optional add-ons.
// Update name/price/status here when an offering goes live.

export interface Offering {
  name: string;
  kind: 'service' | 'license';
  price: string;
  priceNote: string;
  summary: string;
  points: string[];
  status: 'coming-soon';
}

export const offerings: Offering[] = [
  {
    name: 'Sync',
    kind: 'service',
    price: 'TBA',
    priceNote: 'per month',
    summary: 'Your vaults on every machine, end to end encrypted.',
    points: [
      'Encrypted sync across devices',
      'Version history for every note',
      'Works alongside local first storage',
    ],
    status: 'coming-soon',
  },
  {
    name: 'Publish',
    kind: 'service',
    price: 'TBA',
    priceNote: 'per site / month',
    summary: 'Turn a vault into a website. Wikilinks become hyperlinks.',
    points: [
      'One click publishing from the app',
      'Your notes, your domain',
      'Full text search included',
    ],
    status: 'coming-soon',
  },
  {
    name: 'Insider',
    kind: 'license',
    price: 'TBA',
    priceNote: 'one-time',
    summary: 'Back independent development, get pulled into the process.',
    points: [
      'Early builds before everyone else',
      'Insider badge on Discord',
      'A real say in the roadmap',
    ],
    status: 'coming-soon',
  },
  {
    name: 'Business',
    kind: 'license',
    price: 'TBA',
    priceNote: 'per seat / year',
    summary: 'A commercial license for teams that run on it at work.',
    points: [
      'Use at any size of company',
      'Priority support',
      'Simple volume licensing',
    ],
    status: 'coming-soon',
  },
];
