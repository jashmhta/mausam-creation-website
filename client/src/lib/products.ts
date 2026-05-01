// ============================================================
// MAUSAM CREATION — Product Data
// All products sourced from IndiaMart profile
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

export const CATEGORIES: Category[] = [
  {
    id: "sport-trophy",
    name: "Sport Trophy",
    count: 35,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/sport-trophy-category-ZcihEDBCpCtrTxn4radZzk.webp",
    description: "Celebrate athletic excellence with our premium sport trophies for cricket, badminton, chess, football, and more.",
    icon: "🏆",
  },
  {
    id: "award-trophy",
    name: "Award Trophy",
    count: 16,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/award-trophy-category-WKSsHuE7gpitTetqYRtgLK.webp",
    description: "Elegant award trophies for corporate events, cultural programs, and special recognition ceremonies.",
    icon: "⭐",
  },
  {
    id: "wooden-trophy",
    name: "Wooden Trophy",
    count: 9,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80",
    description: "Timeless wooden trophies and mementos crafted from premium wood with intricate detailing.",
    icon: "🪵",
  },
  {
    id: "crystal-trophy",
    name: "Crystal Trophy",
    count: 3,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/crystal-trophy-category-AzrMz7d9xMqwHrP7Akuk6D.webp",
    description: "Stunning crystal and glass trophies that catch light beautifully — perfect for prestigious awards.",
    icon: "💎",
  },
  {
    id: "bodybuilder-trophy",
    name: "Bodybuilder Trophy",
    count: 4,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
    description: "Powerful bodybuilder and fitness trophies that honor strength, dedication, and athletic achievement.",
    icon: "💪",
  },
  {
    id: "acrylic-trophy",
    name: "Acrylic Trophy",
    count: 2,
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&q=80",
    description: "Modern acrylic trophies with a sleek, contemporary look ideal for all occasions.",
    icon: "🔷",
  },
  {
    id: "metal-trophy",
    name: "Metal Trophy",
    count: 2,
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80",
    description: "Durable and prestigious metal trophies with polished finishes for lasting impressions.",
    icon: "🥇",
  },
  {
    id: "statue",
    name: "Statues & Idols",
    count: 5,
    image: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=600&q=80",
    description: "Beautifully crafted Chhatrapati Shivaji Maharaj statues, Krishna idols, and decorative resin statues.",
    icon: "🗿",
  },
  {
    id: "decor",
    name: "Decor & Accessories",
    count: 3,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
    description: "Elegant pen stands, wooden name plates, and table clocks for your office or home.",
    icon: "🖊️",
  },
];

export const PRODUCTS: Product[] = [
  // ── Sport Trophies ──
  { id: "st-001", name: "15inch Acrylic Badminton Runner Up Trophy", price: 1650, priceUnit: "Piece", category: "sport-trophy", material: "Acrylic", size: "15inch", color: "Golden", usage: "Games", style: "Sports", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/sport-trophy-category-ZcihEDBCpCtrTxn4radZzk.webp", featured: true },
  { id: "st-002", name: "8inch Fiber Golden Boot Winner Trophy", price: 450, priceUnit: "Piece", category: "sport-trophy", material: "Fiber", size: "8inch", color: "Golden", usage: "Games", style: "Sports", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/sport-trophy-category-ZcihEDBCpCtrTxn4radZzk.webp" },
  { id: "st-003", name: "18inch Resin Chess Winner Trophy", price: 2800, priceUnit: "Piece", category: "sport-trophy", material: "Resin", size: "18inch", color: "Black", usage: "Games", style: "Sports", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/sport-trophy-category-ZcihEDBCpCtrTxn4radZzk.webp", featured: true },
  { id: "st-004", name: "10inch Fiber Sports Runner Winner Trophy", price: 280, priceUnit: "Piece", category: "sport-trophy", material: "Fiber", size: "10inch", color: "Golden", usage: "College", minOrder: 100, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/sport-trophy-category-ZcihEDBCpCtrTxn4radZzk.webp" },
  { id: "st-005", name: "10.5inch Resin Cricket Winner Trophy", price: 2100, priceUnit: "Piece", category: "sport-trophy", material: "Resin", size: "10.5inch", color: "Golden", usage: "Games", style: "Sports", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/hero-trophies-9nJnSxCGG69JV5Ghopgufm.webp", featured: true },
  { id: "st-006", name: "10inch Resin Lawn Tennis Winner Trophy", price: 650, priceUnit: "Piece", category: "sport-trophy", material: "Resin", size: "10inch", color: "Brown", usage: "Games", minOrder: 100, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/sport-trophy-category-ZcihEDBCpCtrTxn4radZzk.webp" },
  { id: "st-007", name: "12inch Acrylic Carrom Winner Trophy", price: 650, priceUnit: "Piece", category: "sport-trophy", material: "Acrylic", size: "12inch", color: "Yellow", usage: "Games", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/sport-trophy-category-ZcihEDBCpCtrTxn4radZzk.webp" },
  { id: "st-008", name: "10inch Acrylic Racing Cup Winner Trophy", price: 450, priceUnit: "Piece", category: "sport-trophy", material: "Acrylic", size: "10inch", color: "Golden", usage: "Games", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/hero-trophies-9nJnSxCGG69JV5Ghopgufm.webp" },
  { id: "st-009", name: "10inch Acrylic Cricket Wicket Winner Trophy", price: 1250, priceUnit: "Piece", category: "sport-trophy", material: "Acrylic", size: "10inch", color: "White", usage: "Games", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/sport-trophy-category-ZcihEDBCpCtrTxn4radZzk.webp" },
  { id: "st-010", name: "10inch Acrylic Cricket Mementos Trophy", price: 450, priceUnit: "Piece", category: "sport-trophy", material: "Acrylic", size: "10inch", color: "Golden", usage: "Games", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/hero-trophies-9nJnSxCGG69JV5Ghopgufm.webp" },
  { id: "st-011", name: "15inch Acrylic Badminton Winner Trophy", price: 1500, priceUnit: "Piece", category: "sport-trophy", material: "Acrylic", size: "15inch", color: "Blue", usage: "Games", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/sport-trophy-category-ZcihEDBCpCtrTxn4radZzk.webp" },
  { id: "st-012", name: "5inch Acrylic Carrom Board Winner Trophy", price: 200, priceUnit: "Piece", category: "sport-trophy", material: "Acrylic", size: "5inch", color: "Brown", usage: "Games", minOrder: 100, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/hero-trophies-9nJnSxCGG69JV5Ghopgufm.webp" },
  { id: "st-013", name: "10inch Acrylic Man Of The Match Winner Trophy", price: 400, priceUnit: "Piece", category: "sport-trophy", material: "Acrylic", size: "10inch", color: "Dark Brown", usage: "Games", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/sport-trophy-category-ZcihEDBCpCtrTxn4radZzk.webp" },
  { id: "st-014", name: "14inch Wooden Cricket Winner Trophy", price: 1200, priceUnit: "Piece", category: "sport-trophy", material: "Wooden", size: "14inch", color: "Black", usage: "Games", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80" },
  { id: "st-015", name: "12inch Metal Bowler Winner Trophy", price: 1300, priceUnit: "Piece", category: "sport-trophy", material: "Metal", size: "12inch", color: "Golden", usage: "Games", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/hero-trophies-9nJnSxCGG69JV5Ghopgufm.webp", featured: true },
  { id: "st-016", name: "12inch Fiber Pickle Ball Winner Trophy", price: 1800, priceUnit: "Piece", category: "sport-trophy", material: "Fiber", size: "12inch", color: "Golden", usage: "Games", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/sport-trophy-category-ZcihEDBCpCtrTxn4radZzk.webp" },
  { id: "st-017", name: "15inch Fiber Cricket Winner Trophy", price: 1800, priceUnit: "Piece", category: "sport-trophy", material: "Fiber", size: "15inch", color: "Golden", usage: "Games", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/hero-trophies-9nJnSxCGG69JV5Ghopgufm.webp" },
  { id: "st-018", name: "8inch Metal Batsmen Winner Trophy", price: 1300, priceUnit: "Piece", category: "sport-trophy", material: "Metal", size: "8inch", color: "Golden", usage: "Games", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/sport-trophy-category-ZcihEDBCpCtrTxn4radZzk.webp", featured: true },
  { id: "st-019", name: "9inch Metal Cricket Tournament Winner Trophy", price: 1700, priceUnit: "Piece", category: "sport-trophy", material: "Metal", size: "9inch", color: "Golden", usage: "Games", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/hero-trophies-9nJnSxCGG69JV5Ghopgufm.webp" },
  { id: "st-020", name: "19inch Metal Cricket World Cup Winner Trophy", price: 2000, priceUnit: "Piece", category: "sport-trophy", material: "Metal", size: "19inch", color: "Golden", usage: "Games", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/sport-trophy-category-ZcihEDBCpCtrTxn4radZzk.webp", featured: true },
  { id: "st-021", name: "11inch Metal Cricket Winner Trophy", price: 1450, priceUnit: "Piece", category: "sport-trophy", material: "Metal", size: "11inch", color: "Golden", usage: "Games", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/hero-trophies-9nJnSxCGG69JV5Ghopgufm.webp" },
  { id: "st-022", name: "45inch Fiber Cricket Winner Cup Trophy", price: 4900, priceUnit: "Piece", category: "sport-trophy", material: "Fiber", size: "45inch", color: "Golden", usage: "Games", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/sport-trophy-category-ZcihEDBCpCtrTxn4radZzk.webp", featured: true },
  { id: "st-023", name: "18inch Fiber Cricket Winner Trophy", price: 2800, priceUnit: "Piece", category: "sport-trophy", material: "Fiber", size: "18inch", color: "Golden", usage: "Games", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/hero-trophies-9nJnSxCGG69JV5Ghopgufm.webp" },
  { id: "st-024", name: "10inch Resin Golden Chess Winner Trophy", price: 950, priceUnit: "Piece", category: "sport-trophy", material: "Resin", size: "10inch", color: "Golden", usage: "Games", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/sport-trophy-category-ZcihEDBCpCtrTxn4radZzk.webp" },
  { id: "st-025", name: "8inch Acrylic Pickle Ball Winner Trophy", price: 500, priceUnit: "Piece", category: "sport-trophy", material: "Acrylic", size: "8inch", color: "Golden", usage: "Games", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/hero-trophies-9nJnSxCGG69JV5Ghopgufm.webp" },

  // ── Award Trophies ──
  { id: "at-001", name: "10inch Metal Cup Winner Trophy", price: 4800, priceUnit: "Piece", category: "award-trophy", material: "Metal", size: "10inch", color: "Golden", usage: "Games", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/award-trophy-category-WKSsHuE7gpitTetqYRtgLK.webp", featured: true },
  { id: "at-002", name: "8inch Fiber Star Award Trophy", price: 150, priceUnit: "Piece", category: "award-trophy", material: "Fiber", size: "8inch", color: "Golden", usage: "Events", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/award-trophy-category-WKSsHuE7gpitTetqYRtgLK.webp" },
  { id: "at-003", name: "6inch Fiber Golden Star Winner Trophy", price: 200, priceUnit: "Piece", category: "award-trophy", material: "Fiber", size: "6inch", color: "Pink", usage: "Events", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/hero-trophies-9nJnSxCGG69JV5Ghopgufm.webp" },
  { id: "at-004", name: "10inch Fiber Award Trophy", price: 600, priceUnit: "Set", category: "award-trophy", material: "Fiber", size: "10inch", color: "Golden and Silver", usage: "Events", minOrder: 100, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/award-trophy-category-WKSsHuE7gpitTetqYRtgLK.webp" },
  { id: "at-005", name: "6inch Metal Cup Trophy", price: 200, priceUnit: "Piece", category: "award-trophy", material: "Metal", size: "6inch", color: "Golden", usage: "Events", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/hero-trophies-9nJnSxCGG69JV5Ghopgufm.webp" },
  { id: "at-006", name: "10inch Metal Star Excellence Award Winner Trophy", price: 900, priceUnit: "Piece", category: "award-trophy", material: "Metal", size: "10inch", color: "Golden", usage: "Events", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/award-trophy-category-WKSsHuE7gpitTetqYRtgLK.webp", featured: true },
  { id: "at-007", name: "10inch Fiber Memento Trophy", price: 800, priceUnit: "Piece", category: "award-trophy", material: "Fiber", size: "10inch", color: "Golden", usage: "Events", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/hero-trophies-9nJnSxCGG69JV5Ghopgufm.webp" },
  { id: "at-008", name: "10inch Fiber Music Award Winner Trophy", price: 500, priceUnit: "Piece", category: "award-trophy", material: "Fiber", size: "10inch", color: "Golden", usage: "Events", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/award-trophy-category-WKSsHuE7gpitTetqYRtgLK.webp" },
  { id: "at-009", name: "10inch Fiber Golden Book Pen Trophy", price: 1250, priceUnit: "Piece", category: "award-trophy", material: "Fiber", size: "10inch", color: "Golden", usage: "Events", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/hero-trophies-9nJnSxCGG69JV5Ghopgufm.webp", featured: true },
  { id: "at-010", name: "10inch Fiber Winner Trophy", price: 250, priceUnit: "Piece", category: "award-trophy", material: "Fiber", size: "10inch", color: "Golden", usage: "Events", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/award-trophy-category-WKSsHuE7gpitTetqYRtgLK.webp" },
  { id: "at-011", name: "10inch Fiber Champions Winner Trophy", price: 400, priceUnit: "Piece", category: "award-trophy", material: "Fiber", size: "10inch", color: "Golden", usage: "Games", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/hero-trophies-9nJnSxCGG69JV5Ghopgufm.webp" },
  { id: "at-012", name: "16inch Fiber Award Trophy", price: 500, priceUnit: "Piece", category: "award-trophy", material: "Fiber", size: "16inch", color: "Golden", usage: "Events", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/award-trophy-category-WKSsHuE7gpitTetqYRtgLK.webp" },
  { id: "at-013", name: "18inch Fiber Award Trophy", price: 1200, priceUnit: "Piece", category: "award-trophy", material: "Fiber", size: "18inch", color: "Golden", usage: "Events", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/hero-trophies-9nJnSxCGG69JV5Ghopgufm.webp" },
  { id: "at-014", name: "5inch Fiber Singer Winner Trophy", price: 300, priceUnit: "Piece", category: "award-trophy", material: "Fiber", size: "5inch", color: "Golden", usage: "Events", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/award-trophy-category-WKSsHuE7gpitTetqYRtgLK.webp" },
  { id: "at-015", name: "10inch Marble Corporate Award Winner Trophy", price: 950, priceUnit: "Piece", category: "award-trophy", material: "Marble", size: "10inch", color: "White", usage: "Events", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/hero-trophies-9nJnSxCGG69JV5Ghopgufm.webp", featured: true },

  // ── Wooden Trophies ──
  { id: "wt-001", name: "12inch MDF Memento Trophy", price: 1250, priceUnit: "Piece", category: "wooden-trophy", material: "MDF", size: "12inch", color: "Brown", usage: "Events", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/custom-design-banner-8snUkvBgit2WTPrfhNUa3G.webp", featured: true },
  { id: "wt-002", name: "10inch Wooden Memento Trophy", price: 800, priceUnit: "Piece", category: "wooden-trophy", material: "Wooden", size: "10inch", color: "Brown", usage: "Events", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/award-trophy-category-WKSsHuE7gpitTetqYRtgLK.webp" },
  { id: "wt-003", name: "8inch Wooden Memento Trophy", price: 750, priceUnit: "Piece", category: "wooden-trophy", material: "Wooden", size: "8inch", color: "Brown", usage: "Events", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/custom-design-banner-8snUkvBgit2WTPrfhNUa3G.webp" },
  { id: "wt-004", name: "11inch Wooden Memento Trophy", price: 240, priceUnit: "Piece", category: "wooden-trophy", material: "Wooden", size: "11inch", color: "Brown", usage: "Events", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/award-trophy-category-WKSsHuE7gpitTetqYRtgLK.webp" },
  { id: "wt-005", name: "10.5inch Wooden Memento Trophy", price: 800, priceUnit: "Piece", category: "wooden-trophy", material: "Wooden", size: "10.5inch", color: "Brown", usage: "Events", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/custom-design-banner-8snUkvBgit2WTPrfhNUa3G.webp" },

  // ── Crystal Trophies ──
  { id: "ct-001", name: "12inch Crystal Award Trophy", price: 1250, priceUnit: "Piece", category: "crystal-trophy", material: "Crystal", size: "12inch", color: "Clear", usage: "Events", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/crystal-trophy-category-AzrMz7d9xMqwHrP7Akuk6D.webp", featured: true },
  { id: "ct-002", name: "7inch Crystal Award Trophy", price: 1800, priceUnit: "Piece", category: "crystal-trophy", material: "Crystal", size: "7inch", color: "Clear", usage: "Events", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/crystal-trophy-category-AzrMz7d9xMqwHrP7Akuk6D.webp" },
  { id: "ct-003", name: "6inch Crystal Award Trophy", price: 1150, priceUnit: "Piece", category: "crystal-trophy", material: "Crystal", size: "6inch", color: "Clear", usage: "Events", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/crystal-trophy-category-AzrMz7d9xMqwHrP7Akuk6D.webp" },

  // ── Bodybuilder Trophies ──
  { id: "bt-001", name: "8inch Acrylic Bodybuilders Winner Trophy", price: 350, priceUnit: "Piece", category: "bodybuilder-trophy", material: "Acrylic", size: "8inch", color: "Golden", usage: "Games", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/hero-trophies-9nJnSxCGG69JV5Ghopgufm.webp", featured: true },
  { id: "bt-002", name: "14inch Resin Bodybuilder Winner Trophy", price: 1450, priceUnit: "Piece", category: "bodybuilder-trophy", material: "Resin", size: "14inch", color: "Bronze", usage: "Games", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/sport-trophy-category-ZcihEDBCpCtrTxn4radZzk.webp" },
  { id: "bt-003", name: "11inch Resin Bodybuilder Winner Trophy", price: 1150, priceUnit: "Piece", category: "bodybuilder-trophy", material: "Resin", size: "11inch", color: "Bronze", usage: "Games", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/hero-trophies-9nJnSxCGG69JV5Ghopgufm.webp" },
  { id: "bt-004", name: "10inch Resin Bodybuilder Winner Trophy", price: 850, priceUnit: "Piece", category: "bodybuilder-trophy", material: "Resin", size: "10inch", color: "Bronze", usage: "Games", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/sport-trophy-category-ZcihEDBCpCtrTxn4radZzk.webp" },

  // ── Acrylic Trophies ──
  { id: "acr-001", name: "11inch Acrylic Winner Trophy", price: 750, priceUnit: "Piece", category: "acrylic-trophy", material: "Acrylic", size: "11inch", color: "Golden", usage: "Events", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/crystal-trophy-category-AzrMz7d9xMqwHrP7Akuk6D.webp", featured: true },
  { id: "acr-002", name: "5inch Acrylic Painting Winner Trophy", price: 200, priceUnit: "Piece", category: "acrylic-trophy", material: "Acrylic", size: "5inch", color: "Golden", usage: "Events", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/award-trophy-category-WKSsHuE7gpitTetqYRtgLK.webp" },

  // ── Metal Trophies ──
  { id: "mt-001", name: "18inch Metal Cup Trophy", price: 3800, priceUnit: "Piece", category: "metal-trophy", material: "Metal", size: "18inch", color: "Golden", usage: "Events", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/hero-trophies-9nJnSxCGG69JV5Ghopgufm.webp", featured: true },
  { id: "mt-002", name: "20inch Metal Award Trophy", price: 600, priceUnit: "Piece", category: "metal-trophy", material: "Metal", size: "20inch", color: "Golden", usage: "Events", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/sport-trophy-category-ZcihEDBCpCtrTxn4radZzk.webp" },

  // ── Statues ──
  { id: "ss-001", name: "12inch Resin Shivaji Maharaj Statue", price: 1150, priceUnit: "Piece", category: "statue", material: "Resin", size: "12inch", color: "Bronze", usage: "Decor", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/custom-design-banner-8snUkvBgit2WTPrfhNUa3G.webp", featured: true },
  { id: "ss-002", name: "13inch Resin Shivaji Maharaj Statue", price: 1150, priceUnit: "Piece", category: "statue", material: "Resin", size: "13inch", color: "Bronze", usage: "Decor", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/custom-design-banner-8snUkvBgit2WTPrfhNUa3G.webp" },
  { id: "ss-003", name: "14inch Resin Krishna Statue", price: 3500, priceUnit: "Idol", category: "statue", material: "Resin", size: "14inch", color: "Multicolor", usage: "Decor", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/award-trophy-category-WKSsHuE7gpitTetqYRtgLK.webp" },
  { id: "ss-004", name: "12inch Resin Shree Krishna Statue", price: 3500, priceUnit: "Idol", category: "statue", material: "Resin", size: "12inch", color: "Multicolor", usage: "Decor", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/custom-design-banner-8snUkvBgit2WTPrfhNUa3G.webp" },
  { id: "ss-005", name: "5inch Resin Bull Statue", price: 450, priceUnit: "Piece", category: "statue", material: "Resin", size: "5inch", color: "Brown", usage: "Decor", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/award-trophy-category-WKSsHuE7gpitTetqYRtgLK.webp" },

  // ── Decor & Accessories ──
  { id: "dc-001", name: "Wooden Table Clock Pen Stand", price: 350, priceUnit: "Piece", category: "decor", material: "Wooden", size: "Standard", color: "Brown", usage: "Office Decor", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/custom-design-banner-8snUkvBgit2WTPrfhNUa3G.webp", featured: true },
  { id: "dc-002", name: "3mm Wooden Name Plate", price: 800, priceUnit: "Piece", category: "decor", material: "Wooden", size: "3mm", color: "Brown", usage: "Office Decor", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/custom-design-banner-8snUkvBgit2WTPrfhNUa3G.webp" },
  { id: "dc-003", name: "Wooden Pen Stand", price: 250, priceUnit: "Piece", category: "decor", material: "Wooden", size: "Standard", color: "Brown", usage: "Office Decor", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/award-trophy-category-WKSsHuE7gpitTetqYRtgLK.webp" },
];

export const FEATURED_PRODUCTS = PRODUCTS.filter(p => p.featured).slice(0, 8);

export const getProductsByCategory = (categoryId: string) =>
  PRODUCTS.filter(p => p.category === categoryId);

export const getCategoryById = (id: string) =>
  CATEGORIES.find(c => c.id === id);

export const formatPrice = (price: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
