export interface WhyNakreezaySpec {
  id: string;
  title: string;
  detail: string;
}

export interface FaqItemSpec {
  id: string;
  question: string;
  answer: string;
}

export const HALL_CONFIG = {
  hallName: 'Nakreezay Banquet',
  monogram: 'N',
  tagline: 'Where Swat Celebrates',
  city: 'Mingora, Swat',
  region: 'Khyber Pakhtunkhwa',
  phone: '0340-9553001',
  phoneHref: 'tel:03409553001',
  whatsappDisplay: '0340-9553001',
  whatsappDigits: '923409553001',
  whatsappUrl: 'https://wa.me/923409553001',
  address: 'Qamber Bypass Road, Rahimabad, Mingora, Swat, Khyber Pakhtunkhwa',
  landmark: 'Main Qamber Bypass Road access in Rahimabad, Mingora — spacious entry for Barat & family cars',
  ratingStars: '4 Stars',
  ratingNumeric: 4,
  hallsSummary: 'Two spacious main halls',
  timingsNote: 'Call or WhatsApp 0340-9553001 for available afternoon and evening event slots.',
  social: {
    instagramUrl: 'https://www.instagram.com/explore/tags/nakreezaybanquet/',
    facebookUrl: 'https://www.facebook.com/search/top?q=Nakreezay%20Banquet%20Mingora',
  },
  googleMapEmbedUrl:
    'https://www.google.com/maps?q=Nakreezay+Banquet,+Qamber+Bypass+Road,+Rahimabad,+Mingora,+Swat&output=embed',
  googleMapLinkUrl:
    'https://www.google.com/maps/search/?api=1&query=Nakreezay+Banquet+Qamber+Bypass+Road+Rahimabad+Mingora+Swat',
};

export const WHY_NAKREEZAY: WhyNakreezaySpec[] = [
  {
    id: 'two-halls',
    title: 'Two Spacious Main Halls',
    detail: 'Two dedicated banquet halls prepared for calm, segregated family celebrations.',
  },
  {
    id: 'big-parking',
    title: 'Big Car Parking',
    detail: 'Large inside parking compound for Barat processions and arriving guest vehicles.',
  },
  {
    id: 'food-management',
    title: 'Food & Management Praised by Guests',
    detail: 'BBQ, chicken karahi, pulao, desserts, live stations — backed by attentive service.',
  },
  {
    id: 'main-road',
    title: 'Qamber Bypass Main Road',
    detail: 'Direct main-road entrance in Rahimabad, Mingora for effortless arrival across Swat.',
  },
];

export const FAQ_ITEMS: FaqItemSpec[] = [
  {
    id: 'check-date',
    question: 'How do I check a date and book?',
    answer:
      'Call 0340-9553001, message us on WhatsApp, or use the Check My Date form below to confirm availability directly with management.',
  },
  {
    id: 'per-head-rate',
    question: 'What is the per-head rate?',
    answer:
      'Rates depend on your menu, guest count and date — call us and you will have a clear figure in one call.',
  },
  {
    id: 'events-hosted',
    question: 'What events can you host?',
    answer:
      'We host Mehndi, Barat, Walima, Nikah, engagements, birthdays and corporate events across two spacious main halls.',
  },
  {
    id: 'location',
    question: 'Where are you located?',
    answer:
      'We are located on Qamber Bypass Road, Rahimabad, Mingora, Swat, Khyber Pakhtunkhwa, with big on-site car parking.',
  },
  {
    id: 'timings',
    question: 'What are your timings?',
    answer:
      'Please call 0340-9553001 or WhatsApp us for available afternoon and evening event slots or to schedule a hall walkthrough.',
  },
];
