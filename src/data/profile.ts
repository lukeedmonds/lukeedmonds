export const profile = {
  name: 'Luke Edmonds',
  role: 'Principal Engineer',
  headline: {
    leading: 'Modern',
    accent: 'engineering leadership',
    trailing: 'for ambitious digital products.'
  },
  summary:
    'Principal Engineer currently supporting multi-disciplinary squads at AND Digital. Specialises in guiding product strategy, frontend platforms, and inclusive delivery for enterprise and public sector teams across the UK.',
  location: 'Leeds, United Kingdom',
  email: 'hello@lukeedmonds.com',
  linkedin: 'https://www.linkedin.com/in/luke-edmonds-73421957/',
  availability: 'Partnering with teams on staff+ engineering leadership and digital transformation initiatives.'
} as const;

export const highlights = [
  {
    label: 'Current Role',
    value: 'Principal Engineer @ <span class="text-primary">AND Digital</span>'
  },
  {
    label: 'Experience',
    value: '10+ years building web products for retail, travel, and public sector organisations'
  },
  {
    label: 'Location',
    value: 'Leeds, United Kingdom'
  }
] as const;

export const projects = [
  {
    name: 'Co-op Membership Platform',
    description:
      'Led a cross-functional squad delivering the next-generation membership web experience, aligning product, data, and design to serve millions of active members.',
    year: '2024'
  },
  {
    name: 'NHS Digital Service Hub',
    description:
      'Partnered with NHS teams to modernise patient and clinician tooling with an accessibility-first approach and robust observability.',
    year: '2023'
  },
  {
    name: 'Global Retail Commerce Rebuild',
    description:
      'Architected a composable commerce stack for a worldwide retailer, reducing page load times by 55% and unlocking weekly release cadence.',
    year: '2022'
  }
] as const;

export const experience = [
  {
    company: 'AND Digital',
    title: 'Principal Engineer',
    period: '2022 — Present',
    description:
      'Technical lead for large-scale client engagements, mentoring engineers and shaping modern product delivery across data, UX, and platform disciplines.'
  },
  {
    company: 'Infinity Works (now Accenture)',
    title: 'Senior Software Engineer',
    period: '2018 — 2022',
    description:
      'Delivered cloud-native services and web platforms for travel, retail, and public sector partners with a focus on resilient architecture and DevOps practices.'
  },
  {
    company: 'Sky Betting & Gaming',
    title: 'Software Engineer',
    period: '2015 — 2018',
    description:
      'Built customer-facing experiences and internal tooling supporting peak sporting events with real-time scale and reliability considerations.'
  }
] as const;

export const capabilities = [
  'Design systems & frontend platforms',
  'Technical discovery & product shaping',
  'Team coaching and engineering leadership',
  'Inclusive delivery & accessibility advocacy',
  'Experimentation and measurement frameworks',
  'Cloud-native architecture & DevOps enablement'
] as const;
