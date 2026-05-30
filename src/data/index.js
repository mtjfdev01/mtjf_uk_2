// =================================================================
// SITE DATA — Customise all content in this file for your NGO
// =================================================================

// CUSTOMISE: Your organisation's core details
export const orgInfo = {
  name:          'Mercy to Justice Foundation',
  shortName:     'MTJF',
  tagline:       'Leading with Mercy. Standing for Justice.',
  // CUSTOMISE: Update once your charity registration is approved
  charityNumber: 'Registration in Progress',
  email:         'hello@mtjfoundation.org',
  phone:         '+44 (0)20 0000 0000',           // CUSTOMISE: Replace with real number
  address:       'London, United Kingdom',         // CUSTOMISE: Replace with full address
  social: {
    twitter:   '#',  // CUSTOMISE: Replace with real social media URLs
    facebook:  '#',
    instagram: '#',
    linkedin:  '#',
  },
}

// We just launched — these reflect our founding commitments, not past achievements.
// CUSTOMISE: Update these when real data is available.
export const impactStats = [
  {
    number:      '2025',
    label:       'Year Founded',
    description: 'We officially launched this year with a clear mission and a commitment to act.',
  },
  {
    number:      '4',
    label:       'Core Pillars',
    description: 'Education, health, shelter, and community — the foundations of our work.',
  },
  {
    number:      '100%',
    label:       'Transparent',
    description: 'From day one, every penny donated will be tracked and reported openly.',
  },
  {
    number:      'You',
    label:       'Could Be First',
    description: 'We have just begun. Be among our founding supporters and help us take our first steps.',
  },
]

// CUSTOMISE: Our four programme areas — what we intend to do
export const helpCards = [
  {
    id:          1,
    icon:        'education',
    title:       'Education & Skills',
    description:
      'We intend to open doors to quality education and vocational training, giving individuals the knowledge and confidence to shape their own futures.',
  },
  {
    id:          2,
    icon:        'health',
    title:       'Health & Wellbeing',
    description:
      'Our plan is to support access to essential health services and mental health resources, restoring dignity and improving quality of life.',
  },
  {
    id:          3,
    icon:        'shelter',
    title:       'Shelter & Safety',
    description:
      'We are committed to working towards safe, stable environments for those facing hardship or crisis — because everyone deserves a place of safety.',
  },
  {
    id:          4,
    icon:        'community',
    title:       'Community Development',
    description:
      'We aim to invest in local leaders and grassroots initiatives, helping communities build the resilience and capacity to thrive on their own terms.',
  },
]

// No stories yet — we just launched.
// CUSTOMISE: Add real stories as your work begins.
export const stories = []

// CUSTOMISE: Ways people can support your work
export const supportOptions = [
  {
    id:          1,
    icon:        'donate',
    title:       'Donate',
    description: 'We have just launched and every founding gift — however large or small — will go directly towards getting our first programmes off the ground.',
    cta:         'Be a Founding Donor',
    href:        '/support-us',
    highlight:   true,
  },
  {
    id:          2,
    icon:        'volunteer',
    title:       'Volunteer',
    description: 'We are building our volunteer community from scratch. If you have time, passion, and a desire to help — we want to hear from you.',
    cta:         'Join Our Team',
    href:        '/support-us#volunteer',
    highlight:   false,
  },
  {
    id:          3,
    icon:        'partner',
    title:       'Partner With Us',
    description: 'As a new organisation, we are actively seeking partnerships with organisations who share our values. Let us build something together.',
    cta:         'Explore Partnerships',
    href:        '/support-us#partner',
    highlight:   false,
  },
  {
    id:          4,
    icon:        'fundraise',
    title:       'Fundraise',
    description: 'Help us spread the word and raise our first funds. A sponsored event, a social share, or a community fundraiser — every effort counts.',
    cta:         'Start Fundraising',
    href:        '/support-us#fundraise',
    highlight:   false,
  },
]

// CUSTOMISE: Donation amount presets
export const donationAmounts = [5, 10, 25, 50]

// CUSTOMISE: What each donation amount will help us do
export const donationImpact = {
  5:  'would help us cover essential admin costs as we set up our first programme.',
  10: 'could contribute towards printing our first outreach materials.',
  25: 'could help fund our first community consultation session.',
  50: 'could help us take a meaningful step towards launching our first programme.',
}

// Our commitment to transparency — planned fund allocation
// CUSTOMISE: Update as your actual figures become available
export const fundBreakdown = [
  { label: 'Direct Programmes',  percentage: 80, color: 'bg-forest',       description: 'Will go directly to our work on the ground' },
  { label: 'Operations',         percentage: 12, color: 'bg-forest-light',  description: 'Keeps the organisation running effectively' },
  { label: 'Fundraising',        percentage: 8,  color: 'bg-gold',          description: 'Ensures we can continue to raise vital funds' },
]

// CUSTOMISE: Founding team — replace with real names, roles, and photos
export const teamMembers = [
  {
    id:    1,
    name:  'Founder / Director',
    role:  'Chief Executive',
    bio:   'A passionate advocate for justice and mercy, our founder established MTJF to turn conviction into action.',
    // CUSTOMISE: Replace with a real headshot
    image: null,
  },
  {
    id:    2,
    name:  'Co-Founder',
    role:  'Head of Programmes',
    bio:   'Bringing expertise and heart to our programme design, our co-founder is committed to getting our work right from the start.',
    image: null,
  },
]

// We just launched — only one milestone so far.
// CUSTOMISE: Add milestones as your journey unfolds.
export const milestones = [
  {
    year:        '2025',
    title:       'We Launched',
    description: 'Mercy to Justice Foundation was established. Our mission is live. Our journey begins today.',
  },
]

// CUSTOMISE: FAQ entries for the Contact page
export const faqs = [
  {
    q: 'Are you a registered charity?',
    a: 'We have recently launched and our charity registration is currently in progress with the Charity Commission for England and Wales. We will update this page as soon as registration is confirmed.',
  },
  {
    q: 'Can I claim Gift Aid on my donation?',
    a: 'We are working towards Gift Aid approval as part of our charity registration process. We will announce when Gift Aid is available. Thank you for your patience.',
  },
  {
    q: 'How will my donation be used right now?',
    a: 'As a newly launched organisation, your founding donation will go directly towards setting up our first programmes, covering essential operational costs, and enabling us to begin our community work.',
  },
  {
    q: 'Can I volunteer with a brand new organisation?',
    a: 'Absolutely — and we especially welcome it. Founding volunteers help shape who we become. Get in touch and let us know your skills and availability.',
  },
  {
    q: 'How can I stay updated on your progress?',
    a: 'Sign up to our newsletter at the bottom of any page and follow us on social media. We will share updates as our work develops.',
  },
]

// CUSTOMISE: Story categories — will be used once stories are added
export const storyCategories = ['All', 'Education', 'Health', 'Community', 'Shelter']
