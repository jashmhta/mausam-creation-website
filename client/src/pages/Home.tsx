/* ============================================================
   MAUSAM CREATION — Home Page
   Design: "Golden Ceremony" — Contemporary Indian Luxury
   Sections: Hero, Stats, Categories, Featured Products, 
             Why Us, Custom Design, Testimonials, CTA
   ============================================================ */
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Trophy, Star, Award, Sparkles, ChevronRight,
  Phone, CheckCircle2, Layers, Palette, Clock, Shield,
  ArrowRight, Quote
} from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { CATEGORIES, FEATURED_PRODUCTS } from "@/lib/products";

const STATS = [
  { value: "500+", label: "Happy Clients" },
  { value: "1000+", label: "Trophies Crafted" },
  { value: "5+", label: "Years Experience" },
  { value: "35+", label: "Sport Trophy Designs" },
];

const WHY_US = [
  {
    icon: Award,
    title: "Expert Craftsmanship",
    desc: "Every trophy is designed with meticulous attention to detail, ensuring top-tier quality and durability that stands the test of time.",
  },
  {
    icon: Layers,
    title: "Premium Materials",
    desc: "We use only the finest metals, crystals, and finishes — giving our trophies a refined look that stands out in any setting.",
  },
  {
    icon: Palette,
    title: "Custom Designs",
    desc: "Our creative team tailors each trophy to match your event's theme, brand, or sport — making each award truly one of a kind.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    desc: "We understand the importance of deadlines. Our streamlined process ensures your trophies arrive on time, every time.",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    desc: "Every product undergoes rigorous quality checks before dispatch. Your satisfaction is our highest priority.",
  },
  {
    icon: Sparkles,
    title: "Bulk Orders Welcome",
    desc: "Special pricing for bulk orders. Perfect for tournaments, corporate events, and annual award ceremonies.",
  },
];

const TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    role: "Cricket Tournament Organizer",
    text: "Mausam Creation delivered stunning cricket trophies for our annual tournament. The quality exceeded our expectations and the team was incredibly responsive.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Corporate HR Manager",
    text: "We ordered custom corporate award trophies for our annual day. The marble trophies were exquisite and our employees were thrilled. Highly recommended!",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "Fitness Competition Director",
    text: "The bodybuilder trophies were absolutely perfect for our championship. Detailed, durable, and delivered on time. Will definitely order again.",
    rating: 5,
  },
];

// Floating particle component
function Particle({ delay, x, size }: { delay: number; x: number; size: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-yellow-400/20 pointer-events-none"
      style={{ width: size, height: size, left: `${x}%`, bottom: "10%" }}
      animate={{
        y: [0, -120, -200],
        opacity: [0, 0.8, 0],
        scale: [1, 0.8, 0.4],
      }}
      transition={{
        duration: 4 + Math.random() * 3,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
    />
  );
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) =>
      observer.observe(el)
    );
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* ── HERO SECTION ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: heroY }}
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/hero-trophies-9nJnSxCGG69JV5Ghopgufm.webp"
            alt="Premium Trophy Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20 dark:from-background dark:via-background/85 dark:to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </motion.div>

        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <Particle
            key={i}
            delay={i * 0.4}
            x={10 + i * 7}
            size={4 + Math.random() * 8}
          />
        ))}

        {/* Hero Content */}
        <motion.div
          className="relative z-10 container pt-28 pb-20"
          style={{ opacity: heroOpacity }}
        >
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span className="text-gold text-xs font-700 tracking-widest uppercase">
                Mumbai's Premier Trophy Maker
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-['Playfair_Display'] font-900 text-5xl sm:text-6xl lg:text-7xl text-foreground leading-[1.05] mb-6"
            >
              Craft Your{" "}
              <span className="text-gold-gradient italic">Legacy</span>
              <br />
              in Gold & Glory
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg"
            >
              Premium trophies and awards for sports, corporate events, and special occasions. 
              From cricket to crystal — we craft symbols of achievement that last a lifetime.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/products">
                <button className="btn-gold px-7 py-3.5 rounded-xl flex items-center gap-2.5 text-sm">
                  <Trophy className="w-4 h-4" />
                  Explore Collection
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="btn-gold-outline px-7 py-3.5 rounded-xl flex items-center gap-2.5 text-sm">
                  <Phone className="w-4 h-4" />
                  Get Custom Quote
                </button>
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-6 mt-10"
            >
              {[
                { icon: CheckCircle2, text: "GST Registered" },
                { icon: Shield, text: "Quality Assured" },
                { icon: Clock, text: "5+ Years" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-1.5 text-muted-foreground text-xs">
                  <Icon className="w-3.5 h-3.5 text-gold" />
                  {text}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-5 h-8 rounded-full border-2 border-gold/40 flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-gold" />
          </div>
        </motion.div>
      </section>

      {/* ── STATS SECTION ── */}
      <section className="py-16 border-y border-border bg-card/50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="font-['Playfair_Display'] font-900 text-4xl text-gold mb-1">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm font-['Nunito_Sans']">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES SECTION ── */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-14 reveal">
            <span className="text-gold text-xs font-700 tracking-widest uppercase mb-3 block">
              Our Collections
            </span>
            <h2 className="font-['Playfair_Display'] font-700 text-4xl md:text-5xl text-foreground mb-4">
              Browse by Category
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From sport trophies to crystal awards — discover our complete range of premium recognition products.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.slice(0, 6).map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link href={`/products?category=${cat.id}`}>
                  <div className="card-beam group relative rounded-2xl overflow-hidden bg-card border border-border product-card cursor-pointer">
                    <div className="bg-card rounded-2xl overflow-hidden">
                      {/* Image */}
                      <div className="relative h-52 overflow-hidden">
                        <img
                          src={cat.image}
                          alt={cat.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        {/* Icon */}
                        <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-gold/20 backdrop-blur-sm border border-gold/30 flex items-center justify-center text-xl">
                          {cat.icon}
                        </div>
                        {/* Count badge */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="font-['Playfair_Display'] font-700 text-lg text-white mb-1">
                            {cat.name}
                          </h3>
                          <div className="flex items-center justify-between">
                            <p className="text-white/70 text-xs">{cat.count} products</p>
                            <div className="flex items-center gap-1 text-gold text-xs font-600">
                              View All
                              <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Description */}
                      <div className="p-4">
                        <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                          {cat.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10 reveal">
            <Link href="/categories">
              <button className="btn-gold-outline px-8 py-3 rounded-xl flex items-center gap-2 mx-auto">
                View All Categories
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="py-24 bg-card/30">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div className="reveal-left">
              <span className="text-gold text-xs font-700 tracking-widest uppercase mb-3 block">
                Bestsellers
              </span>
              <h2 className="font-['Playfair_Display'] font-700 text-4xl md:text-5xl text-foreground">
                Featured Products
              </h2>
            </div>
            <Link href="/products">
              <button className="btn-gold-outline px-6 py-2.5 rounded-xl flex items-center gap-2 text-sm reveal-right">
                View All Products
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_PRODUCTS.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CUSTOM DESIGN BANNER ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/custom-design-banner-8snUkvBgit2WTPrfhNUa3G.webp"
            alt="Custom Trophy Design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-xl reveal-left">
            <span className="text-gold text-xs font-700 tracking-widest uppercase mb-4 block">
              Bespoke Service
            </span>
            <h2 className="font-['Playfair_Display'] font-700 text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              Design Your{" "}
              <span className="text-gold-gradient italic">Perfect</span>{" "}
              Trophy
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Have a unique vision? Our expert team can craft completely custom trophies 
              tailored to your event theme, brand identity, or sport. From concept to creation, 
              we bring your ideas to life.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Custom engraving and personalization",
                "Any size from 5inch to 45inch",
                "Bulk orders with special pricing",
                "Fast turnaround for urgent orders",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/contact">
              <button className="btn-gold px-8 py-3.5 rounded-xl flex items-center gap-2.5">
                <Palette className="w-4 h-4" />
                Start Custom Order
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-24 bg-card/30">
        <div className="container">
          <div className="text-center mb-14 reveal">
            <span className="text-gold text-xs font-700 tracking-widest uppercase mb-3 block">
              Our Promise
            </span>
            <h2 className="font-['Playfair_Display'] font-700 text-4xl md:text-5xl text-foreground mb-4">
              Why Choose Mausam Creation?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We don't just make trophies — we craft symbols of achievement that leave a lasting impression.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_US.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="card-beam group p-6 rounded-2xl bg-card border border-border hover:border-gold/30 transition-all duration-300"
              >
                <div className="bg-card rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-['Playfair_Display'] font-700 text-lg text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-14 reveal">
            <span className="text-gold text-xs font-700 tracking-widest uppercase mb-3 block">
              Client Stories
            </span>
            <h2 className="font-['Playfair_Display'] font-700 text-4xl md:text-5xl text-foreground">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-beam p-6 rounded-2xl bg-card border border-border"
              >
                <div className="bg-card rounded-2xl">
                  <Quote className="w-8 h-8 text-gold/30 mb-4" />
                  <p className="text-foreground text-sm leading-relaxed mb-6 italic">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                      <span className="text-gold font-700 text-sm">
                        {t.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-['Nunito_Sans'] font-700 text-sm text-foreground">
                        {t.name}
                      </p>
                      <p className="text-muted-foreground text-xs">{t.role}</p>
                    </div>
                    <div className="ml-auto flex gap-0.5">
                      {[...Array(t.rating)].map((_, j) => (
                        <Star key={j} className="w-3 h-3 text-gold fill-gold" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="py-24 bg-card/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-yellow-800/10 to-transparent dark:from-yellow-900/30 dark:via-yellow-800/15" />
            <div className="absolute inset-0 border border-gold/20 rounded-3xl" />

            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gold/5 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-gold/5 blur-3xl" />

            <div className="relative z-10 text-center py-20 px-6">
              <Trophy className="w-14 h-14 text-gold mx-auto mb-6 animate-float" />
              <h2 className="font-['Playfair_Display'] font-700 text-4xl md:text-5xl text-foreground mb-4">
                Ready to Honor Excellence?
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
                Contact us today for a custom quote. Whether it's 1 trophy or 1000, 
                we deliver the same premium quality every time.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact">
                  <button className="btn-gold px-8 py-4 rounded-xl flex items-center gap-2.5 text-sm">
                    <Phone className="w-4 h-4" />
                    Get Your Custom Quote
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <Link href="/products">
                  <button className="btn-gold-outline px-8 py-4 rounded-xl flex items-center gap-2.5 text-sm">
                    <Trophy className="w-4 h-4" />
                    Browse Catalog
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
