export const HERO_BG =
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2400&q=80'

/** Tighter crop for the hero accent card (large screens). */
export const HERO_PANEL_IMG =
  'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=85'

export const NAV_LINKS = [
  { href: '#plans', label: 'Plans' },
  { href: '#transformations', label: 'Results' },
  { href: '#trainers', label: 'Trainers' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#testimonials', label: 'Stories' },
  { href: '#contact', label: 'Contact' },
] as const

export type Plan = {
  id: string
  name: string
  price: string
  period: string
  description: string
  features: string[]
  featured?: boolean
}

export const PLANS: Plan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: '₹999',
    period: '/month',
    description: 'Essential access for consistent training.',
    features: ['Gym access', 'Locker use', 'Starter orientation'],
  },
  {
    id: 'standard',
    name: 'Standard',
    price: '₹1,999',
    period: '/month',
    description: 'Balanced training with cardio and coach support.',
    features: ['Gym access', 'Full cardio zone', 'Trainer support on the floor'],
    featured: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '₹3,499',
    period: '/month',
    description: 'Everything you need for a complete transformation.',
    features: ['All-access membership', 'Personal trainer sessions', 'Diet & nutrition plan'],
  },
]

export type Transformation = {
  name: string
  metric: string
  beforeSrc: string
  afterSrc: string
}

export const TRANSFORMATIONS: Transformation[] = [
  {
    name: 'Karan M.',
    metric: '−14 kg · 16 weeks',
    beforeSrc:
      'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80',
    afterSrc:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Ishita R.',
    metric: 'Strength + mobility focus',
    beforeSrc:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80',
    afterSrc:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Dev S.',
    metric: 'Muscle gain · 12 weeks',
    beforeSrc:
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=600&q=80',
    afterSrc:
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80',
  },
]

export type Trainer = {
  name: string
  role: string
  bio: string
  image: string
}

export const TRAINERS: Trainer[] = [
  {
    name: 'Rahul Verma',
    role: 'Strength Coach · 5+ yrs',
    bio: 'Powerlifting background coaching athletes to move heavy, safely, and with intent.',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Neha Singh',
    role: 'Yoga Trainer',
    bio: 'Blends mobility, breathwork, and mindful movement so you recover faster and train harder.',
    image:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Arjun Patel',
    role: 'Personal Trainer',
    bio: 'Builds structured programs around your schedule—fat loss, conditioning, or hybrid goals.',
    image:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Priya Mehta',
    role: 'HIIT & Conditioning',
    bio: 'High-energy sessions that torch calories while improving athleticism and core stability.',
    image:
      'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=80',
  },
]

export const SERVICES = [
  {
    title: 'Weight Loss Programs',
    description:
      'Science-backed training blocks paired with accountability so fat loss feels sustainable, not extreme.',
  },
  {
    title: 'Muscle Building',
    description:
      'Progressive overload, nutrition checkpoints, and recovery protocols built for lean, dense gains.',
  },
  {
    title: 'Personal Training',
    description:
      '1:1 coaching tailored to your biomechanics, goals, and schedule—every rep has a purpose.',
  },
  {
    title: 'Diet & Nutrition Guidance',
    description:
      'Practical meal frameworks and macro coaching that fit real life—not another crash diet.',
  },
] as const

export const ABOUT_TEXT =
  'FitZone Gym – Helping people achieve their dream physique with expert guidance and modern equipment.'

export const TESTIMONIALS = [
  {
    quote: 'Best gym in the area, great trainers!',
    author: 'Amit Kumar',
  },
  {
    quote: 'Lost 10kg in 3 months!',
    author: 'Sneha Gupta',
  },
  {
    quote: 'Amazing environment and support.',
    author: 'Vikas Sharma',
  },
] as const

export const CONTACT = {
  phone: '+91 9876543210',
  phoneHref: 'tel:+919876543210',
  address: 'Sector 18, Noida',
  whatsappHref: 'https://wa.me/919876543210',
} as const
