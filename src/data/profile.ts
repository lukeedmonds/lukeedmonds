export const profile = {
  name: 'Luke Edmonds',
  role: 'Lead Frontend Engineer',
  headline: {
    leading: 'Shipping',
    accent: 'high-performing web apps',
    trailing: 'for healthcare, travel, and retail teams.'
  },
  summary:
    'Lead frontend engineer contracting with The49 to evolve Patchs Health’s patient triage experience. Over a decade of guiding Vue and React delivery for large-scale travel, logistics, and analytics platforms across the UK.',
  location: 'Leeds, United Kingdom',
  email: 'hello@lukeedmonds.com',
  linkedin: 'https://www.linkedin.com/in/luke-edmonds-73421957/',
  availability: 'Currently engaged with The49 — open to senior and lead frontend partnerships.'
} as const;

export const highlights = [
  {
    label: 'Current Role',
    value: 'Lead Frontend Engineer (Contract) @ <span class="text-primary">The49 / Patchs Health</span>'
  },
  {
    label: 'Experience',
    value: '14+ years shipping production web platforms across travel, logistics, and healthcare'
  },
  {
    label: 'Focus',
    value: 'Vue & React specialist delivering accessible, performant interfaces'
  }
] as const;

export const projects = [
  {
    name: 'Patchs Health Triage Platform',
    description:
      'Leading the front-end roadmap for patient and GP workflows, evolving a Vue application that supports practices across the UK with reliable digital triage.',
    year: '2024'
  },
  {
    name: 'Hermes Courier Web Tools',
    description:
      'Delivered React and Vue interfaces for couriers and operations teams, improving parcel tracking accuracy and speeding up daily routing decisions.',
    year: '2020'
  },
  {
    name: 'Jet2.com Responsive Rebuild',
    description:
      'Led the responsive relaunch of jet2.com and jet2holidays.com, creating reusable components and performance-focused journeys for millions of holidaymakers.',
    year: '2017'
  }
] as const;

export const experience = [
  {
    company: 'The49 / Patchs Health',
    title: 'Lead Frontend Developer (Contract)',
    period: 'Mar 2021 — Present',
    description:
      'Guiding the front-end strategy for Patchs Health, shaping Vue architecture, design system foundations, and patient-first journeys for nationwide GP practices.'
  },
  {
    company: 'Spectra Analytics',
    title: 'Frontend Developer (Contract)',
    period: 'Sep 2020 — Feb 2021',
    description:
      'Built data-rich dashboards and onboarding flows, collaborating with data scientists to bring complex analytics insights into intuitive React interfaces.'
  },
  {
    company: 'Hermes',
    title: 'VueJS / Front End Developer (Contract)',
    period: 'Mar 2018 — Sep 2020',
    description:
      'Delivered courier- and customer-facing applications with Vue, improving parcel tracking, delivery bookings, and operational tooling at national scale.'
  },
  {
    company: 'Jet2.com & Jet2holidays',
    title: 'Senior Front End Developer (Contract)',
    period: 'Jul 2015 — Jan 2018',
    description:
      'Owned the responsive rebuild of jet2.com and jet2holidays.com, creating modular components, performance budgets, and CI pipelines with Vue, SCSS, and Webpack.'
  },
  {
    company: 'First Found',
    title: 'Front End Developer (Contract)',
    period: 'Jun 2015 — Jul 2015',
    description:
      'Produced bespoke Magento and WordPress sites, collaborating with designers to translate briefs into responsive, SEO-friendly builds.'
  },
  {
    company: 'Connect Advertising & Marketing LLP',
    title: 'Front End Developer',
    period: 'Oct 2013 — May 2015',
    description:
      'Developed global Land Rover and Jaguar digital experiences, working in agile teams to build reusable components and launch multi-market campaigns.'
  },
  {
    company: 'eSterling Ltd (Sterling Group)',
    title: 'Web Designer & Front End Developer',
    period: 'Jun 2010 — Sep 2013',
    description:
      'Delivered full website builds for SMEs, covering UX, visual design, and custom WordPress themes alongside ecommerce implementations.'
  }
] as const;

export const capabilities = [
  'Lead cross-functional squads delivering Vue & React frontends',
  'Create scalable design systems and component libraries',
  'Raise accessibility, performance, and Core Web Vitals',
  'Mentor engineers and embed front-end best practices',
  'Translate product goals into delivery roadmaps and rituals',
  'Champion automated testing, CI/CD, and reliable releases'
] as const;
