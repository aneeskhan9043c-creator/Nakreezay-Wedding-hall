import heroHallWebp from '../assets/images/nakreezay_hero.webp';
import hall1Webp from '../assets/images/nakreezay_hall_1.webp';
import hall2Webp from '../assets/images/nakreezay_hall_2.webp';
import decorAisleWebp from '../assets/images/nakreezay_decor_aisle.webp';
import decorRosesWebp from '../assets/images/nakreezay_decor_roses.webp';
import foodBbqWebp from '../assets/images/nakreezay_food_bbq.webp';
import foodTandoorWebp from '../assets/images/nakreezay_food_tandoor.webp';
import occasionMehndiWebp from '../assets/images/nakreezay_occasion_mehndi.webp';
import occasionBaratWebp from '../assets/images/nakreezay_occasion_barat.webp';
import occasionWalimaWebp from '../assets/images/nakreezay_occasion_walima.webp';

import { HALL_CONFIG } from './hallDetails';
export { HALL_CONFIG };

export type GalleryCategory =
  | 'All'
  | 'Hall'
  | 'Stage & Décor'
  | 'Food'
  | 'Mehndi'
  | 'Barat'
  | 'Walima';

export type StrictPhotoCategory = Exclude<GalleryCategory, 'All'>;

export const GALLERY_FILTERS: GalleryCategory[] = [
  'All',
  'Hall',
  'Stage & Décor',
  'Food',
  'Mehndi',
  'Barat',
  'Walima',
];

export interface PhotoAssetSpec {
  id: string;
  src: string;
  title: string;
  caption: string;
}

export interface HallCardItem {
  id: string;
  name: string;
  characterLine: string;
  photo: PhotoAssetSpec;
}

export interface OccasionTileItem {
  id: string;
  title: string;
  description: string;
  photo: PhotoAssetSpec;
}

export interface GalleryPhotoItem extends PhotoAssetSpec {
  category: StrictPhotoCategory;
}

/* 1 Eager Hero WebP + 9 Lazy Gallery WebPs = Strictly 10 Unique Images Total */
export const HERO_PHOTO: PhotoAssetSpec = {
  id: 'hero-grand-hall',
  src: heroHallWebp,
  title: 'Nakreezay Banquet — Grand Draped Wedding Hall in Mingora, Swat',
  caption: 'Evening banquet hall illuminated with chandeliers, floral arches, and maroon drapes.',
};

/* Section 2: Two Halls Side-by-Side (Reuses Hall WebPs from the 10-image budget) */
export const HALL_CARDS: HallCardItem[] = [
  {
    id: 'hall-1',
    name: 'Hall 1',
    characterLine:
      'Flowing ivory ceiling drapes beneath crystal chandeliers with spacious round-table family seating.',
    photo: {
      id: 'hall-1-photo',
      src: hall1Webp,
      title: 'Nakreezay Banquet Hall 1 — Draped Ceiling & Round Tables',
      caption: 'Spacious banquet seating beneath ivory drapes and glowing chandeliers.',
    },
  },
  {
    id: 'hall-2',
    name: 'Hall 2',
    characterLine:
      'Elevated crimson-rose and antique-gold bridal stage framed by velvet drapes and grand aisles.',
    photo: {
      id: 'hall-2-photo',
      src: hall2Webp,
      title: 'Nakreezay Banquet Hall 2 — Rose & Gold Stage',
      caption: 'Refined bridal stage and dining setting inside our second main hall.',
    },
  },
];

/* Section 3: Occasions (Reuses Mehndi, Barat, Walima WebPs from the 10-image budget) */
export const OCCASIONS: OccasionTileItem[] = [
  {
    id: 'occasion-mehndi',
    title: 'Mehndi',
    description: 'Colourful marigold garlands, warm fairy lights, and an open floor for festive gatherings.',
    photo: {
      id: 'occ-mehndi-photo',
      src: occasionMehndiWebp,
      title: 'Mehndi Celebration — Colourful Stage & Open Floor',
      caption: 'Festive marigold florals and generous gathering floor inside Nakreezay Banquet.',
    },
  },
  {
    id: 'occasion-barat',
    title: 'Barat',
    description: 'Central bridal aisle leading toward a lit rose-and-gold stage framed for family welcomes.',
    photo: {
      id: 'occ-barat-photo',
      src: occasionBaratWebp,
      title: 'Barat Reception — Modest Pakistani Stage Celebration',
      caption: 'Traditional Pakistani wedding couple seated on an illuminated floral stage.',
    },
  },
  {
    id: 'occasion-walima',
    title: 'Walima',
    description: 'Dressed round tables, fresh floral centrepieces, and calm chandelier dining hospitality.',
    photo: {
      id: 'occ-walima-photo',
      src: occasionWalimaWebp,
      title: 'Walima Reception — Round Tables & Floral Centrepieces',
      caption: 'Families dining together at dressed round tables with fresh rose centrepieces.',
    },
  },
];

/* Section 4: 9 Gallery Photos (Strict 1 category per photo -> 2+2+2+1+1+1 = 9) */
export const GALLERY_PHOTOS: GalleryPhotoItem[] = [
  {
    id: 'gal-hall-1',
    src: hall1Webp,
    title: 'Hall 1 Draped Banquet Seating',
    caption: 'Ivory ceiling drapes above neatly dressed round family tables.',
    category: 'Hall',
  },
  {
    id: 'gal-hall-2',
    src: hall2Webp,
    title: 'Hall 2 Chandelier & Velvet Lounge',
    caption: 'Warm chandeliers paired with deep maroon velvet and rose framing.',
    category: 'Hall',
  },
  {
    id: 'gal-decor-aisle',
    src: decorAisleWebp,
    title: 'Mirrored Bridal Aisle & Arches',
    caption: 'Grand central walkway illuminated under tiered crystal chandeliers.',
    category: 'Stage & Décor',
  },
  {
    id: 'gal-decor-roses',
    src: decorRosesWebp,
    title: 'Crimson Roses & Brass Lanterns',
    caption: 'Fresh crimson and ivory rose floral artistry with warm lantern light.',
    category: 'Stage & Décor',
  },
  {
    id: 'gal-food-bbq',
    src: foodBbqWebp,
    title: 'Charcoal BBQ & Zafrani Pulao',
    caption: 'Sizzling seekh kababs, malai boti, and almond Kabuli pulao.',
    category: 'Food',
  },
  {
    id: 'gal-food-tandoor',
    src: foodTandoorWebp,
    title: 'Live Tandoor & Grill Station',
    caption: 'Fresh clay-oven roghni naan and charcoal skewers prepared hot on-site.',
    category: 'Food',
  },
  {
    id: 'gal-mehndi',
    src: occasionMehndiWebp,
    title: 'Marigold & Fairy-Light Mehndi Stage',
    caption: 'Vibrant marigold strings and warm canopy glow for Mehndi evenings.',
    category: 'Mehndi',
  },
  {
    id: 'gal-barat',
    src: occasionBaratWebp,
    title: 'Traditional Barat Stage Reception',
    caption: 'Modest Pakistani Barat ceremony surrounded by crimson floral arches.',
    category: 'Barat',
  },
  {
    id: 'gal-walima',
    src: occasionWalimaWebp,
    title: 'Walima Dining Tables & Florals',
    caption: 'Serene Walima family dinner setting with fresh rose centrepieces.',
    category: 'Walima',
  },
];
