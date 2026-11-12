export const profile = {
  name: 'Luke Edmonds',
  role: 'Principal Engineer',
  tagline: 'Engineering leadership for ambitious digital products.',
  summary:
    'Principal Engineer supporting multi-disciplinary squads at AND Digital. Guides product strategy, frontend platforms, and inclusive delivery for enterprise and public-sector teams across the UK.',
  location: 'Leeds, United Kingdom',
  email: 'hello@lukeedmonds.com',
  linkedin: 'https://www.linkedin.com/in/luke-edmonds-73421957/',
  availability:
    'Partnering with teams on staff+ engineering leadership and digital transformation.'
} as const;

export const experience = [
  {
    company: 'AND Digital',
    title: 'Principal Engineer',
    period: '2022 — Present',
    description:
      'Technical lead for large-scale client engagements—mentoring engineers and shaping modern product delivery across data, UX, and platform.'
  },
  {
    company: 'Infinity Works (now Accenture)',
    title: 'Senior Software Engineer',
    period: '2018 — 2022',
    description:
      'Delivered cloud-native services and web platforms for travel, retail, and public-sector partners with resilient architecture and DevOps practice.'
  },
  {
    company: 'Sky Betting & Gaming',
    title: 'Software Engineer',
    period: '2015 — 2018',
    description:
      'Built customer-facing experiences and internal tooling for peak sporting events—real-time scale and reliability first.'
  }
] as const;

export const projects = [
  {
    name: 'Co-op Membership Platform',
    description:
      'Led a cross-functional squad delivering the next-generation membership web experience for millions of active members.',
    year: '2024'
  },
  {
    name: 'NHS Digital Service Hub',
    description:
      'Partnered with NHS teams to modernise patient and clinician tooling with an accessibility-first approach and solid observability.',
    year: '2023'
  },
  {
    name: 'Global Retail Commerce Rebuild',
    description:
      'Architected a composable commerce stack for a worldwide retailer—55% faster loads and a weekly release cadence.',
    year: '2022'
  }
] as const;

export const capabilities = [
  'Design systems & frontend platforms',
  'Technical discovery & product shaping',
  'Team coaching & engineering leadership',
  'Inclusive delivery & accessibility',
  'Experimentation & measurement',
  'Cloud-native architecture & DevOps'
] as const;
