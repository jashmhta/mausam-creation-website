// ============================================================
// MAUSAM CREATION — Product Data
// All products sourced from IndiaMart profile
// Real product images from IndiaMart CDN (imimg.com)
// ============================================================

export interface Product {
  id: string;
  name: string;
  price: number;
  priceUnit: string;
  category: string;
  material: string;
  size: string;
  color: string;
  usage: string;
  style?: string;
  minOrder?: number;
  image: string;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  count: number;
  image: string;
  description: string;
  icon: string;
}

// Real product images from IndiaMart CDN
const IMG = {
  // Sport trophies
  badminton: "/manus-storage/sport-badminton-trophy_c56b46eb.png",
  metalCup: "/manus-storage/sport-metal-cricket-cup_91e21ef9.png",
  // Award trophies
  fiberStar: "/manus-storage/award-fiber-star_a413dc2d.png",
  fiberMusic: "/manus-storage/award-fiber-music_ab1d1a25.png",
  fiberChampions: "/manus-storage/award-fiber-champions_9c139799.png",
  fiberBook: "/manus-storage/award-fiber-book_8a23f2d0.png",
  metalStar: "/manus-storage/metal-award-20_89343edf.png",
  marbleCorporate: "/manus-storage/award-marble-corporate_5a0dc07b.png",
  // Wooden trophies
  mdfMemento: "/manus-storage/wooden-mdf-memento_431e18ca.png",
  woodenMemento10: "/manus-storage/wooden-memento-10_55327c88.png",
  woodenAward8: "/manus-storage/wooden-award-8_ea5d544d.png",
  // Crystal trophies
  crystal12: "/manus-storage/crystal-award-12_246bfaae.png",
  crystal7: "/manus-storage/crystal-award-7_183274ce.png",
  // Bodybuilder trophies
  bodybuilderAcrylic: "/manus-storage/bodybuilder-acrylic-8_d6b6e9e3.png",
  bodybuilderResin14: "/manus-storage/bodybuilder-resin-14_0a5f2936.png",
  // Acrylic trophies
  acrylicWinner: "/manus-storage/acrylic-winner-11_d9091aa3.png",
  acrylicPainting: "/manus-storage/acrylic-painting-5_3d47dd82.png",
  // Metal trophies
  metalCup18: "/manus-storage/metal-cup-18_f4f537e5.png",
  metalAward20: "/manus-storage/metal-award-20_89343edf.png",
  // Statues
  statueShivaji: "/manus-storage/statue-shivaji_c04c1ec6.png",
  statueKrishna: "/manus-storage/statue-krishna_0f71303f.png",
  // Decor
  clockStand: "/manus-storage/decor-clock-stand_3c5ef2a1.png",
  nameplate: "/manus-storage/decor-nameplate_812389e7.png",
};

export const CATEGORIES: Category[] = [
  {
    id: "sport-trophy",
    name: "Sport Trophy",
    count: 35,
    image: IMG.badminton,
    description: "Celebrate athletic excellence with our premium sport trophies for cricket, badminton, chess, football, and more.",
    icon: "🏆",
  },
  {
    id: "award-trophy",
    name: "Award Trophy",
    count: 16,
    image: IMG.fiberStar,
    description: "Elegant award trophies for corporate events, cultural programs, and special recognition ceremonies.",
    icon: "⭐",
  },
  {
    id: "wooden-trophy",
    name: "Wooden Trophy",
    count: 9,
    image: IMG.mdfMemento,
    description: "Timeless wooden trophies and mementos crafted from premium wood with intricate detailing.",
    icon: "🪵",
  },
  {
    id: "crystal-trophy",
    name: "Crystal Trophy",
    count: 3,
    image: IMG.crystal12,
    description: "Stunning crystal and glass trophies that catch light beautifully — perfect for prestigious awards.",
    icon: "💎",
  },
  {
    id: "bodybuilder-trophy",
    name: "Bodybuilder Trophy",
    count: 4,
    image: IMG.bodybuilderAcrylic,
    description: "Powerful bodybuilder and fitness trophies that honor strength, dedication, and athletic achievement.",
    icon: "💪",
  },
  {
    id: "acrylic-trophy",
    name: "Acrylic Trophy",
    count: 2,
    image: IMG.acrylicWinner,
    description: "Modern acrylic trophies with a sleek, contemporary look ideal for all occasions.",
    icon: "🔷",
  },
  {
    id: "metal-trophy",
    name: "Metal Trophy",
    count: 2,
    image: IMG.metalCup18,
    description: "Durable and prestigious metal trophies with polished finishes for lasting impressions.",
    icon: "🥇",
  },
  {
    id: "statue",
    name: "Statues & Idols",
    count: 5,
    image: IMG.statueShivaji,
    description: "Beautifully crafted Chhatrapati Shivaji Maharaj statues, Krishna idols, and decorative resin statues.",
    icon: "🗿",
  },
  {
    id: "decor",
    name: "Decor & Accessories",
    count: 3,
    image: IMG.clockStand,
    description: "Elegant pen stands, wooden name plates, and table clocks for your office or home.",
    icon: "🖊️",
  },
];

export const PRODUCTS: Product[] = [
  // ── Sport Trophies ──
  { id: "st-001", name: "15inch Acrylic Badminton Runner Up Trophy", price: 1650, priceUnit: "Piece", category: "sport-trophy", material: "Acrylic", size: "15inch", color: "Golden", usage: "Games", style: "Sports", image: IMG.badminton, featured: true },
  { id: "st-002", name: "8inch Fiber Golden Boot Winner Trophy", price: 450, priceUnit: "Piece", category: "sport-trophy", material: "Fiber", size: "8inch", color: "Golden", usage: "Games", style: "Sports", image: IMG.fiberStar },
  { id: "st-003", name: "18inch Resin Chess Winner Trophy", price: 2800, priceUnit: "Piece", category: "sport-trophy", material: "Resin", size: "18inch", color: "Black", usage: "Games", style: "Sports", image: IMG.metalCup, featured: true },
  { id: "st-004", name: "10inch Fiber Sports Runner Winner Trophy", price: 280, priceUnit: "Piece", category: "sport-trophy", material: "Fiber", size: "10inch", color: "Golden", usage: "College", minOrder: 100, image: IMG.fiberChampions },
  { id: "st-005", name: "10.5inch Resin Cricket Winner Trophy", price: 2100, priceUnit: "Piece", category: "sport-trophy", material: "Resin", size: "10.5inch", color: "Golden", usage: "Games", style: "Sports", image: IMG.metalCup, featured: true },
  { id: "st-006", name: "10inch Resin Lawn Tennis Winner Trophy", price: 650, priceUnit: "Piece", category: "sport-trophy", material: "Resin", size: "10inch", color: "Brown", usage: "Games", minOrder: 100, image: IMG.badminton },
  { id: "st-007", name: "12inch Acrylic Carrom Winner Trophy", price: 650, priceUnit: "Piece", category: "sport-trophy", material: "Acrylic", size: "12inch", color: "Yellow", usage: "Games", image: IMG.acrylicWinner },
  { id: "st-008", name: "10inch Acrylic Racing Cup Winner Trophy", price: 450, priceUnit: "Piece", category: "sport-trophy", material: "Acrylic", size: "10inch", color: "Golden", usage: "Games", image: IMG.acrylicPainting },
  { id: "st-009", name: "10inch Acrylic Cricket Wicket Winner Trophy", price: 1250, priceUnit: "Piece", category: "sport-trophy", material: "Acrylic", size: "10inch", color: "White", usage: "Games", image: IMG.badminton },
  { id: "st-010", name: "10inch Acrylic Cricket Mementos Trophy", price: 450, priceUnit: "Piece", category: "sport-trophy", material: "Acrylic", size: "10inch", color: "Golden", usage: "Games", image: IMG.acrylicWinner },
  { id: "st-011", name: "15inch Acrylic Badminton Winner Trophy", price: 1500, priceUnit: "Piece", category: "sport-trophy", material: "Acrylic", size: "15inch", color: "Blue", usage: "Games", image: IMG.badminton },
  { id: "st-012", name: "5inch Acrylic Carrom Board Winner Trophy", price: 200, priceUnit: "Piece", category: "sport-trophy", material: "Acrylic", size: "5inch", color: "Brown", usage: "Games", minOrder: 100, image: IMG.acrylicPainting },
  { id: "st-013", name: "10inch Acrylic Man Of The Match Winner Trophy", price: 400, priceUnit: "Piece", category: "sport-trophy", material: "Acrylic", size: "10inch", color: "Dark Brown", usage: "Games", image: IMG.acrylicWinner },
  { id: "st-014", name: "14inch Wooden Cricket Winner Trophy", price: 1200, priceUnit: "Piece", category: "sport-trophy", material: "Wooden", size: "14inch", color: "Black", usage: "Games", image: IMG.woodenAward8 },
  { id: "st-015", name: "12inch Metal Bowler Winner Trophy", price: 1300, priceUnit: "Piece", category: "sport-trophy", material: "Metal", size: "12inch", color: "Golden", usage: "Games", image: IMG.metalCup, featured: true },
  { id: "st-016", name: "12inch Fiber Pickle Ball Winner Trophy", price: 1800, priceUnit: "Piece", category: "sport-trophy", material: "Fiber", size: "12inch", color: "Golden", usage: "Games", image: IMG.fiberChampions },
  { id: "st-017", name: "15inch Fiber Cricket Winner Trophy", price: 1800, priceUnit: "Piece", category: "sport-trophy", material: "Fiber", size: "15inch", color: "Golden", usage: "Games", image: IMG.fiberBook },
  { id: "st-018", name: "8inch Metal Batsmen Winner Trophy", price: 1300, priceUnit: "Piece", category: "sport-trophy", material: "Metal", size: "8inch", color: "Golden", usage: "Games", image: IMG.metalCup, featured: true },
  { id: "st-019", name: "9inch Metal Cricket Tournament Winner Trophy", price: 1700, priceUnit: "Piece", category: "sport-trophy", material: "Metal", size: "9inch", color: "Golden", usage: "Games", image: IMG.metalCup18 },
  { id: "st-020", name: "19inch Metal Cricket World Cup Winner Trophy", price: 2000, priceUnit: "Piece", category: "sport-trophy", material: "Metal", size: "19inch", color: "Golden", usage: "Games", image: IMG.metalCup18, featured: true },
  { id: "st-021", name: "11inch Metal Cricket Winner Trophy", price: 1450, priceUnit: "Piece", category: "sport-trophy", material: "Metal", size: "11inch", color: "Golden", usage: "Games", image: IMG.metalCup },
  { id: "st-022", name: "45inch Fiber Cricket Winner Cup Trophy", price: 4900, priceUnit: "Piece", category: "sport-trophy", material: "Fiber", size: "45inch", color: "Golden", usage: "Games", image: IMG.fiberBook, featured: true },
  { id: "st-023", name: "18inch Fiber Cricket Winner Trophy", price: 2800, priceUnit: "Piece", category: "sport-trophy", material: "Fiber", size: "18inch", color: "Golden", usage: "Games", image: IMG.fiberChampions },
  { id: "st-024", name: "10inch Resin Golden Chess Winner Trophy", price: 950, priceUnit: "Piece", category: "sport-trophy", material: "Resin", size: "10inch", color: "Golden", usage: "Games", image: IMG.metalCup },
  { id: "st-025", name: "8inch Acrylic Pickle Ball Winner Trophy", price: 500, priceUnit: "Piece", category: "sport-trophy", material: "Acrylic", size: "8inch", color: "Golden", usage: "Games", image: IMG.acrylicWinner },

  // ── Award Trophies ──
  { id: "at-001", name: "10inch Metal Cup Winner Trophy", price: 4800, priceUnit: "Piece", category: "award-trophy", material: "Metal", size: "10inch", color: "Golden", usage: "Games", image: IMG.metalCup18, featured: true },
  { id: "at-002", name: "8inch Fiber Star Award Trophy", price: 150, priceUnit: "Piece", category: "award-trophy", material: "Fiber", size: "8inch", color: "Golden", usage: "Events", image: IMG.fiberStar },
  { id: "at-003", name: "6inch Fiber Golden Star Winner Trophy", price: 200, priceUnit: "Piece", category: "award-trophy", material: "Fiber", size: "6inch", color: "Pink", usage: "Events", image: IMG.fiberStar },
  { id: "at-004", name: "10inch Fiber Award Trophy", price: 600, priceUnit: "Set", category: "award-trophy", material: "Fiber", size: "10inch", color: "Golden and Silver", usage: "Events", minOrder: 100, image: IMG.fiberChampions },
  { id: "at-005", name: "6inch Metal Cup Trophy", price: 200, priceUnit: "Piece", category: "award-trophy", material: "Metal", size: "6inch", color: "Golden", usage: "Events", image: IMG.metalCup },
  { id: "at-006", name: "10inch Metal Star Excellence Award Winner Trophy", price: 900, priceUnit: "Piece", category: "award-trophy", material: "Metal", size: "10inch", color: "Golden", usage: "Events", image: IMG.metalStar, featured: true },
  { id: "at-007", name: "10inch Fiber Memento Trophy", price: 800, priceUnit: "Piece", category: "award-trophy", material: "Fiber", size: "10inch", color: "Golden", usage: "Events", image: IMG.fiberBook },
  { id: "at-008", name: "10inch Fiber Music Award Winner Trophy", price: 500, priceUnit: "Piece", category: "award-trophy", material: "Fiber", size: "10inch", color: "Golden", usage: "Events", image: IMG.fiberMusic },
  { id: "at-009", name: "10inch Fiber Golden Book Pen Trophy", price: 1250, priceUnit: "Piece", category: "award-trophy", material: "Fiber", size: "10inch", color: "Golden", usage: "Events", image: IMG.fiberBook, featured: true },
  { id: "at-010", name: "10inch Fiber Winner Trophy", price: 250, priceUnit: "Piece", category: "award-trophy", material: "Fiber", size: "10inch", color: "Golden", usage: "Events", image: IMG.fiberChampions },
  { id: "at-011", name: "10inch Fiber Champions Winner Trophy", price: 400, priceUnit: "Piece", category: "award-trophy", material: "Fiber", size: "10inch", color: "Golden", usage: "Games", image: IMG.fiberChampions },
  { id: "at-012", name: "16inch Fiber Award Trophy", price: 500, priceUnit: "Piece", category: "award-trophy", material: "Fiber", size: "16inch", color: "Golden", usage: "Events", image: IMG.fiberMusic },
  { id: "at-013", name: "18inch Fiber Award Trophy", price: 1200, priceUnit: "Piece", category: "award-trophy", material: "Fiber", size: "18inch", color: "Golden", usage: "Events", image: IMG.fiberBook },
  { id: "at-014", name: "5inch Fiber Singer Winner Trophy", price: 300, priceUnit: "Piece", category: "award-trophy", material: "Fiber", size: "5inch", color: "Golden", usage: "Events", image: IMG.fiberStar },
  { id: "at-015", name: "10inch Marble Corporate Award Winner Trophy", price: 950, priceUnit: "Piece", category: "award-trophy", material: "Marble", size: "10inch", color: "White", usage: "Events", image: IMG.marbleCorporate, featured: true },

  // ── Wooden Trophies ──
  { id: "wt-001", name: "12inch MDF Memento Trophy", price: 1250, priceUnit: "Piece", category: "wooden-trophy", material: "MDF", size: "12inch", color: "Brown", usage: "Events", image: IMG.mdfMemento, featured: true },
  { id: "wt-002", name: "10inch Wooden Memento Trophy", price: 800, priceUnit: "Piece", category: "wooden-trophy", material: "Wooden", size: "10inch", color: "Brown", usage: "Events", image: IMG.woodenMemento10 },
  { id: "wt-003", name: "8inch Wooden Memento Trophy", price: 750, priceUnit: "Piece", category: "wooden-trophy", material: "Wooden", size: "8inch", color: "Brown", usage: "Events", image: IMG.woodenAward8 },
  { id: "wt-004", name: "11inch Wooden Memento Trophy", price: 240, priceUnit: "Piece", category: "wooden-trophy", material: "Wooden", size: "11inch", color: "Brown", usage: "Events", image: IMG.woodenMemento10 },
  { id: "wt-005", name: "10.5inch Wooden Memento Trophy", price: 800, priceUnit: "Piece", category: "wooden-trophy", material: "Wooden", size: "10.5inch", color: "Brown", usage: "Events", image: IMG.mdfMemento },
  { id: "wt-006", name: "11.5inch Wooden Memento Trophy", price: 850, priceUnit: "Piece", category: "wooden-trophy", material: "Wooden", size: "11.5inch", color: "Brown", usage: "Events", image: IMG.woodenAward8 },
  { id: "wt-007", name: "8.5inch Wooden Memento Trophy", price: 700, priceUnit: "Piece", category: "wooden-trophy", material: "Wooden", size: "8.5inch", color: "Brown", usage: "Events", image: IMG.woodenMemento10 },
  { id: "wt-008", name: "5inch MDF Memento Trophy", price: 350, priceUnit: "Piece", category: "wooden-trophy", material: "MDF", size: "5inch", color: "Brown", usage: "Events", image: IMG.mdfMemento },
  { id: "wt-009", name: "8inch Wooden Award Trophy", price: 600, priceUnit: "Piece", category: "wooden-trophy", material: "Wooden", size: "8inch", color: "Brown", usage: "Events", image: IMG.woodenAward8 },

  // ── Crystal Trophies ──
  { id: "ct-001", name: "12inch Crystal Award Trophy", price: 1250, priceUnit: "Piece", category: "crystal-trophy", material: "Crystal", size: "12inch", color: "Clear", usage: "Events", image: IMG.crystal12, featured: true },
  { id: "ct-002", name: "7inch Crystal Award Trophy", price: 1800, priceUnit: "Piece", category: "crystal-trophy", material: "Crystal", size: "7inch", color: "Clear", usage: "Events", image: IMG.crystal7 },
  { id: "ct-003", name: "6inch Crystal Award Trophy", price: 1150, priceUnit: "Piece", category: "crystal-trophy", material: "Crystal", size: "6inch", color: "Clear", usage: "Events", image: IMG.crystal12 },

  // ── Bodybuilder Trophies ──
  { id: "bt-001", name: "8inch Acrylic Bodybuilders Winner Trophy", price: 350, priceUnit: "Piece", category: "bodybuilder-trophy", material: "Acrylic", size: "8inch", color: "Golden", usage: "Games", image: IMG.bodybuilderAcrylic, featured: true },
  { id: "bt-002", name: "14inch Resin Bodybuilder Winner Trophy", price: 1450, priceUnit: "Piece", category: "bodybuilder-trophy", material: "Resin", size: "14inch", color: "Bronze", usage: "Games", image: IMG.bodybuilderResin14 },
  { id: "bt-003", name: "11inch Resin Bodybuilder Winner Trophy", price: 1150, priceUnit: "Piece", category: "bodybuilder-trophy", material: "Resin", size: "11inch", color: "Bronze", usage: "Games", image: IMG.bodybuilderAcrylic },
  { id: "bt-004", name: "10inch Resin Bodybuilder Winner Trophy", price: 850, priceUnit: "Piece", category: "bodybuilder-trophy", material: "Resin", size: "10inch", color: "Bronze", usage: "Games", image: IMG.bodybuilderResin14 },

  // ── Acrylic Trophies ──
  { id: "acr-001", name: "11inch Acrylic Winner Trophy", price: 750, priceUnit: "Piece", category: "acrylic-trophy", material: "Acrylic", size: "11inch", color: "Golden", usage: "Events", image: IMG.acrylicWinner, featured: true },
  { id: "acr-002", name: "5inch Acrylic Painting Winner Trophy", price: 200, priceUnit: "Piece", category: "acrylic-trophy", material: "Acrylic", size: "5inch", color: "Golden", usage: "Events", image: IMG.acrylicPainting },

  // ── Metal Trophies ──
  { id: "mt-001", name: "18inch Metal Cup Trophy", price: 3800, priceUnit: "Piece", category: "metal-trophy", material: "Metal", size: "18inch", color: "Golden", usage: "Events", image: IMG.metalCup18, featured: true },
  { id: "mt-002", name: "20inch Metal Award Trophy", price: 600, priceUnit: "Piece", category: "metal-trophy", material: "Metal", size: "20inch", color: "Golden", usage: "Events", image: IMG.metalAward20 },

  // ── Statues ──
  { id: "ss-001", name: "12inch Resin Shivaji Maharaj Statue", price: 1150, priceUnit: "Piece", category: "statue", material: "Resin", size: "12inch", color: "Bronze", usage: "Decor", image: IMG.statueShivaji, featured: true },
  { id: "ss-002", name: "13inch Resin Shivaji Maharaj Statue", price: 1150, priceUnit: "Piece", category: "statue", material: "Resin", size: "13inch", color: "Bronze", usage: "Decor", image: IMG.statueShivaji },
  { id: "ss-003", name: "14inch Resin Krishna Statue", price: 3500, priceUnit: "Idol", category: "statue", material: "Resin", size: "14inch", color: "Multicolor", usage: "Decor", image: IMG.statueKrishna },
  { id: "ss-004", name: "12inch Resin Shree Krishna Statue", price: 3500, priceUnit: "Idol", category: "statue", material: "Resin", size: "12inch", color: "Multicolor", usage: "Decor", image: IMG.statueKrishna },
  { id: "ss-005", name: "5inch Resin Bull Statue", price: 450, priceUnit: "Piece", category: "statue", material: "Resin", size: "5inch", color: "Brown", usage: "Decor", image: IMG.statueShivaji },

  // ── Decor & Accessories ──
  { id: "dc-001", name: "Wooden Table Clock Pen Stand", price: 350, priceUnit: "Piece", category: "decor", material: "Wooden", size: "Standard", color: "Brown", usage: "Office Decor", image: IMG.clockStand, featured: true },
  { id: "dc-002", name: "3mm Wooden Name Plate", price: 800, priceUnit: "Piece", category: "decor", material: "Wooden", size: "3mm", color: "Brown", usage: "Office Decor", image: IMG.nameplate },
  { id: "dc-003", name: "Wooden Pen Stand", price: 250, priceUnit: "Piece", category: "decor", material: "Wooden", size: "Standard", color: "Brown", usage: "Office Decor", image: IMG.clockStand },
];

export const FEATURED_PRODUCTS = PRODUCTS.filter(p => p.featured).slice(0, 8);

export const getProductsByCategory = (categoryId: string) =>
  PRODUCTS.filter(p => p.category === categoryId);

export const getCategoryById = (id: string) =>
  CATEGORIES.find(c => c.id === id);

export const formatPrice = (price: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
