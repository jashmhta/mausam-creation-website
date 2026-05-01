/* ============================================================
   MAUSAM CREATION — Home Page v3
   Design: "Golden Ceremony" — Pure Black Cinema + Warm Ivory
   Innovations:
   - Dual-theme hero video (dark: cinematic black, light: warm overlay)
   - Word-by-word text reveal on scroll
   - Marquee brand ticker
   - Marketing process video section
   - Grain texture overlay
   - Floating WhatsApp FAB
   - Parallax scroll effects
   - Animated stat counters
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import {
  Trophy, Star, Award, Sparkles, ChevronRight,
  Phone, CheckCircle2, Layers, Palette, Clock, Shield,
  ArrowRight, Quote, Play, Pause, MessageCircle, Zap,
  Package, Users, TrendingUp
} from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { CATEGORIES, FEATURED_PRODUCTS } from "@/lib/products";

const STATS = [
  { value: 500, suffix: "+", label: "Happy Clients", icon: Users },
  { value: 1000, suffix: "+", label: "Trophies Crafted", icon: Trophy },
  { value: 5, suffix: "+", label: "Years Experience", icon: TrendingUp },
  { value: 35, suffix: "+", label: "Sport Designs", icon: Award },
];

const WHY_US = [
  { icon: Award, title: "Expert Craftsmanship", desc: "Every trophy is designed with meticulous attention to detail, ensuring top-tier quality and durability that stands the test of time." },
  { icon: Layers, title: "Premium Materials", desc: "We use only the finest metals, crystals, and finishes — giving our trophies a refined look that stands out in any setting." },
  { icon: Palette, title: "Custom Designs", desc: "Our creative team tailors each trophy to match your event's theme, brand, or sport — making each award truly one of a kind." },
  { icon: Clock, title: "Timely Delivery", desc: "We understand the importance of deadlines. Our streamlined process ensures your trophies arrive on time, every time." },
  { icon: Shield, title: "Quality Guarantee", desc: "Every product undergoes rigorous quality checks before dispatch. Your satisfaction is our highest priority." },
  { icon: Sparkles, title: "Bulk Orders Welcome", desc: "Special pricing for bulk orders. Perfect for tournaments, corporate events, and annual award ceremonies." },
];

const TESTIMONIALS = [
  { name: "Rajesh Kumar", role: "Cricket Tournament Organizer", text: "Mausam Creation delivered stunning cricket trophies for our annual tournament. The quality exceeded our expectations and the team was incredibly responsive.", rating: 5 },
  { name: "Priya Sharma", role: "Corporate HR Manager", text: "We ordered custom corporate award trophies for our annual day. The marble trophies were exquisite and our employees were thrilled. Highly recommended!", rating: 5 },
  { name: "Amit Patel", role: "Fitness Competition Director", text: "The bodybuilder trophies were absolutely perfect for our championship. Detailed, durable, and delivered on time. Will definitely order again.", rating: 5 },
  { name: "Sunita Mehta", role: "School Principal", text: "Ordered 200 trophies for our annual sports day. Every single one was perfect. The bulk pricing was very reasonable and delivery was on time!", rating: 5 },
  { name: "Vikram Singh", role: "Badminton Club President", text: "The acrylic trophies for our state-level tournament were a massive hit. Players loved them. Will be ordering again for next season.", rating: 5 },
];

const MARQUEE_ITEMS = [
  "🏆 Sport Trophies", "⭐ Award Trophies", "💎 Crystal Trophies",
  "🪵 Wooden Trophies", "💪 Bodybuilder Trophies", "🔷 Acrylic Trophies",
  "🥇 Custom Engraving", "📦 Bulk Orders", "🚀 Pan-India Delivery",
  "✨ GST Registered", "🎯 5+ Years Experience", "🏅 1000+ Trophies Crafted",
];

const PROCESS_STEPS = [
  { num: "01", title: "Choose Your Design", desc: "Browse our catalog or share your custom vision with our design team." },
  { num: "02", title: "Personalize It", desc: "Add custom engraving, logos, colors, and sizing to match your event." },
  { num: "03", title: "We Craft It", desc: "Our artisans hand-craft each trophy with premium materials and precision." },
  { num: "04", title: "Delivered to You", desc: "Securely packaged and shipped pan-India, on time, every time." },
];

// Animated counter hook
function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return { count, ref };
}

// Word reveal component
function WordReveal({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const words = text.split(" ");

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div className="flex flex-wrap gap-x-[0.3em] gap-y-1">
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ y: "110%", opacity: 0, rotate: 3 }}
            animate={inView ? { y: 0, opacity: 1, rotate: 0 } : {}}
            transition={{
              duration: 0.65,
              delay: delay + i * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ display: "inline-block" }}
          >
            {word}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

// Stat card with counter
function StatCard({ stat, index }: { stat: typeof STATS[0]; index: number }) {
  const { count, ref } = useCountUp(stat.value);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="text-center group"
    >
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gold/10 border border-gold/20 mb-3 group-hover:bg-gold/20 transition-colors mx-auto">
        <stat.icon className="w-5 h-5 text-gold" />
      </div>
      <p className="font-['Playfair_Display'] font-900 text-4xl text-gold mb-1">
        {count}{stat.suffix}
      </p>
      <p className="text-muted-foreground text-sm font-['Nunito_Sans']">{stat.label}</p>
    </motion.div>
  );
}

// Floating particle
function Particle({ delay, x, size }: { delay: number; x: number; size: number }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size, height: size, left: `${x}%`, bottom: "15%",
        background: `radial-gradient(circle, oklch(0.78 0.13 75 / 0.6) 0%, transparent 70%)`,
      }}
      animate={{ y: [0, -150, -250], opacity: [0, 0.7, 0], scale: [1, 0.7, 0.3] }}
      transition={{ duration: 5 + delay, delay, repeat: Infinity, ease: "easeOut" }}
    />
  );
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoPaused, setVideoPaused] = useState(false);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (videoPaused) { videoRef.current.play(); setVideoPaused(false); }
    else { videoRef.current.pause(); setVideoPaused(true); }
  };

  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* ── GRAIN OVERLAY ── */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* ── FLOATING WHATSAPP FAB ── */}
      <a
        href="https://wa.me/919820123456?text=Hi%2C%20I%27m%20interested%20in%20your%20trophies%20and%20awards."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-fab"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white fill-white" />
      </a>

      {/* ── HERO SECTION ── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Video Background with Parallax */}
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY, scale: heroScale }}>
          <video
            ref={videoRef}
            autoPlay muted loop playsInline
            className="w-full h-full object-cover"
            poster="https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/hero-video-ref-A7QyNfcAq8d2erZ2bifdt3.webp"
          >
            <source src="/manus-storage/hero-video_b48edbf8.mp4" type="video/mp4" />
          </video>

          {/* Dual-theme overlay — dark: deep black, light: warm ivory */}
          <div className="hero-light-overlay absolute inset-0" />
          <div className="hero-bottom-fade absolute bottom-0 left-0 right-0 h-40" />
        </motion.div>

        {/* Floating Gold Particles */}
        {[...Array(14)].map((_, i) => (
          <Particle key={i} delay={i * 0.35} x={5 + i * 6.5} size={3 + (i % 4) * 3} />
        ))}

        {/* Gold radial glow */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
            style={{ background: "radial-gradient(circle, oklch(0.72 0.12 75 / 0.06) 0%, transparent 70%)" }}
          />
        </div>

        {/* Video control */}
        <button
          onClick={toggleVideo}
          className="absolute bottom-10 right-6 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/60 transition-all"
          aria-label={videoPaused ? "Play video" : "Pause video"}
        >
          {videoPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
        </button>

        {/* Hero Content */}
        <motion.div className="relative z-10 container pt-32 pb-24" style={{ opacity: heroOpacity }}>
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span className="text-gold text-xs font-700 tracking-widest uppercase">
                Mumbai's Premier Trophy Maker
              </span>
            </motion.div>

            {/* Headline — word-by-word reveal */}
            <div className="mb-6">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="font-['Playfair_Display'] font-900 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-foreground leading-[1.02]"
              >
                <div className="overflow-hidden">
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    style={{ display: "block" }}
                  >
                    Craft Your
                  </motion.span>
                </div>
                <div className="overflow-hidden">
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.75, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    className="text-gold-gradient italic"
                    style={{ display: "block" }}
                  >
                    Legacy
                  </motion.span>
                </div>
                <div className="overflow-hidden">
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.75, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
                    style={{ display: "block" }}
                  >
                    in Gold &amp; Glory
                  </motion.span>
                </div>
              </motion.h1>
            </div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-foreground/70 text-lg leading-relaxed mb-8 max-w-lg"
            >
              Premium trophies and awards for sports, corporate events, and special occasions.
              From cricket to crystal — we craft symbols of achievement that last a lifetime.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/products">
                <button className="btn-gold px-7 py-4 rounded-xl flex items-center gap-2.5 text-sm shadow-lg shadow-gold/20">
                  <Trophy className="w-4 h-4" />
                  Explore Collection
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="btn-gold-outline px-7 py-4 rounded-xl flex items-center gap-2.5 text-sm backdrop-blur-sm">
                  <Phone className="w-4 h-4" />
                  Get Custom Quote
                </button>
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap items-center gap-5 mt-10"
            >
              {[
                { icon: CheckCircle2, text: "GST Registered" },
                { icon: Shield, text: "Quality Assured" },
                { icon: Clock, text: "5+ Years" },
                { icon: Package, text: "Pan-India Delivery" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-1.5 text-foreground/60 text-xs">
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
          <div className="w-5 h-9 rounded-full border-2 border-gold/40 flex items-start justify-center pt-1.5">
            <motion.div
              className="w-1 h-2.5 rounded-full bg-gold"
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* ── MARQUEE TICKER ── */}
      <section className="py-5 border-y border-border bg-card/40 overflow-hidden">
        <div className="marquee-container">
          <div className="flex animate-marquee">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span key={i} className="flex items-center gap-3 px-6 text-sm font-['Nunito_Sans'] font-600 text-muted-foreground whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS SECTION ── */}
      <section className="py-20 border-b border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {STATS.map((stat, i) => <StatCard key={stat.label} stat={stat} index={i} />)}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES SECTION ── */}
      <section className="py-28">
        <div className="container">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold text-xs font-700 tracking-widest uppercase mb-4 block"
            >
              Our Collections
            </motion.span>
            <WordReveal
              text="Browse by Category"
              className="font-['Playfair_Display'] font-700 text-4xl md:text-5xl text-foreground mb-4"
              delay={0.1}
            />
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground max-w-xl mx-auto"
            >
              From sport trophies to crystal awards — discover our complete range of premium recognition products.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.slice(0, 6).map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link href={`/products?category=${cat.id}`}>
                  <div className="card-beam group relative rounded-2xl overflow-visible product-card cursor-pointer">
                    <div className="bg-card rounded-[calc(var(--radius-lg)-1px)] overflow-hidden">
                      <div className="relative h-56 overflow-hidden bg-gradient-to-b from-accent/20 to-accent/50 flex items-center justify-center">
                        <img
                          src={cat.image}
                          alt={cat.name}
                          className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-108"
                          loading="lazy"
                          style={{ filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.3))" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                        <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-gold/20 backdrop-blur-sm border border-gold/30 flex items-center justify-center text-xl">
                          {cat.icon}
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="font-['Playfair_Display'] font-700 text-lg text-white mb-1">{cat.name}</h3>
                          <div className="flex items-center justify-between">
                            <p className="text-white/70 text-xs">{cat.count} products</p>
                            <div className="flex items-center gap-1 text-gold text-xs font-600">
                              View All
                              <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">{cat.description}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link href="/categories">
              <button className="btn-gold-outline px-8 py-3.5 rounded-xl flex items-center gap-2 mx-auto">
                View All Categories
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="py-28 bg-card/20">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-gold text-xs font-700 tracking-widest uppercase mb-4 block"
              >
                Bestsellers
              </motion.span>
              <WordReveal
                text="Featured Products"
                className="font-['Playfair_Display'] font-700 text-4xl md:text-5xl text-foreground"
                delay={0.05}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link href="/products">
                <button className="btn-gold-outline px-6 py-2.5 rounded-xl flex items-center gap-2 text-sm">
                  View All Products
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_PRODUCTS.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── MARKETING VIDEO SECTION ── */}
      <section className="py-28 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full"
            style={{ background: "radial-gradient(ellipse, oklch(0.72 0.12 75 / 0.05) 0%, transparent 70%)" }}
          />
        </div>

        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Video */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="card-beam rounded-3xl overflow-visible">
                <div className="relative rounded-[calc(var(--radius-xl)-1px)] overflow-hidden aspect-video bg-black">
                  <video
                    autoPlay muted loop playsInline
                    className="w-full h-full object-cover opacity-90"
                    poster="https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/hero-video-ref-A7QyNfcAq8d2erZ2bifdt3.webp"
                  >
                    <source src="/manus-storage/hero-video_b48edbf8.mp4" type="video/mp4" />
                  </video>
                  <div className="video-overlay" />
                  {/* Play badge */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-white text-xs font-600">Crafting Excellence</span>
                  </div>
                </div>
              </div>

              {/* Floating stat badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -right-4 card-beam rounded-2xl"
              >
                <div className="bg-card rounded-[calc(var(--radius-lg)-1px)] px-5 py-4 text-center">
                  <p className="font-['Playfair_Display'] font-900 text-3xl text-gold">1000+</p>
                  <p className="text-muted-foreground text-xs mt-0.5">Trophies Crafted</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              <span className="text-gold text-xs font-700 tracking-widest uppercase mb-4 block">
                Our Story
              </span>
              <WordReveal
                text="Crafting Symbols of Achievement Since 2019"
                className="font-['Playfair_Display'] font-700 text-3xl md:text-4xl text-foreground mb-6 leading-tight"
                delay={0.1}
              />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Based in Mumbai, Mausam Creation has been crafting premium trophies and awards for sports events, 
                corporate ceremonies, schools, and fitness competitions across India. Our commitment to quality 
                and customization sets us apart.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From a single custom trophy to bulk orders of 1000+ pieces, we deliver the same level of 
                craftsmanship, attention to detail, and timely service every single time.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Zap, title: "Fast Turnaround", desc: "48-hour express available" },
                  { icon: Package, title: "Bulk Specialist", desc: "Min. 1 piece — no max" },
                  { icon: Palette, title: "100% Custom", desc: "Your vision, our craft" },
                  { icon: Shield, title: "Quality Check", desc: "Every piece inspected" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <p className="text-foreground text-sm font-700">{item.title}</p>
                      <p className="text-muted-foreground text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/about">
                <button className="btn-gold px-7 py-3.5 rounded-xl flex items-center gap-2.5 text-sm">
                  Learn Our Story
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PROCESS SECTION ── */}
      <section className="py-28 bg-card/20">
        <div className="container">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold text-xs font-700 tracking-widest uppercase mb-4 block"
            >
              How It Works
            </motion.span>
            <WordReveal
              text="From Idea to Award in 4 Steps"
              className="font-['Playfair_Display'] font-700 text-4xl md:text-5xl text-foreground"
              delay={0.05}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="card-beam rounded-2xl group"
              >
                <div className="bg-card rounded-[calc(var(--radius-lg)-1px)] p-6 text-center">
                  <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold/10 border border-gold/20 mb-4 group-hover:bg-gold/20 transition-colors mx-auto">
                    <span className="font-['Playfair_Display'] font-900 text-2xl text-gold">{step.num}</span>
                    <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gold/20 border border-gold/30 animate-pulse" />
                  </div>
                  <h3 className="font-['Playfair_Display'] font-700 text-lg text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CUSTOM DESIGN BANNER ── */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/6CqYEmFXebAK7qztirwcW6/hero-video-last-8fyihMCoZzv9FGMgfdcFdQ.webp"
            alt="Custom Trophy Design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/96 via-background/85 to-background/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold text-xs font-700 tracking-widest uppercase mb-4 block"
            >
              Bespoke Service
            </motion.span>
            <WordReveal
              text="Design Your Perfect Trophy"
              className="font-['Playfair_Display'] font-700 text-4xl md:text-5xl text-foreground mb-6 leading-tight"
              delay={0.05}
            />
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground text-base leading-relaxed mb-8"
            >
              Have a unique vision? Our expert team can craft completely custom trophies
              tailored to your event theme, brand identity, or sport. From concept to creation,
              we bring your ideas to life.
            </motion.p>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-3 mb-8"
            >
              {[
                "Custom engraving and personalization",
                "Any size from 5inch to 45inch",
                "Bulk orders with special pricing",
                "Fast turnaround for urgent orders",
              ].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="flex items-center gap-2.5 text-sm text-foreground"
                >
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
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
      <section className="py-28 bg-card/20">
        <div className="container">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold text-xs font-700 tracking-widest uppercase mb-4 block"
            >
              Our Promise
            </motion.span>
            <WordReveal
              text="Why Choose Mausam Creation?"
              className="font-['Playfair_Display'] font-700 text-4xl md:text-5xl text-foreground mb-4"
              delay={0.05}
            />
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground max-w-xl mx-auto"
            >
              We don't just make trophies — we craft symbols of achievement that leave a lasting impression.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_US.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="card-beam group rounded-2xl"
              >
                <div className="bg-card rounded-[calc(var(--radius-lg)-1px)] p-6">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-['Playfair_Display'] font-700 text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-28 overflow-hidden">
        <div className="container">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold text-xs font-700 tracking-widest uppercase mb-4 block"
            >
              Client Stories
            </motion.span>
            <WordReveal
              text="What Our Clients Say"
              className="font-['Playfair_Display'] font-700 text-4xl md:text-5xl text-foreground"
              delay={0.05}
            />
          </div>

          {/* Testimonials grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="card-beam rounded-2xl"
              >
                <div className="bg-card rounded-[calc(var(--radius-lg)-1px)] p-6">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 text-gold fill-gold" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-gold/25 mb-3" />
                  <p className="text-foreground text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 border border-gold/20 flex items-center justify-center">
                      <span className="text-gold font-700 text-sm">{t.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-['Nunito_Sans'] font-700 text-sm text-foreground">{t.name}</p>
                      <p className="text-muted-foreground text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-28 bg-card/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl overflow-hidden border border-gold/15"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/15 via-yellow-800/8 to-transparent" />
            <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-gold/5 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-gold/5 blur-3xl" />

            <div className="relative z-10 text-center py-24 px-6">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block mb-6"
              >
                <Trophy className="w-14 h-14 text-gold mx-auto" />
              </motion.div>
              <WordReveal
                text="Ready to Honor Excellence?"
                className="font-['Playfair_Display'] font-700 text-4xl md:text-5xl text-foreground mb-4"
                delay={0.05}
              />
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-muted-foreground text-lg max-w-xl mx-auto mb-10"
              >
                Contact us today for a custom quote. Whether it's 1 trophy or 1000,
                we deliver the same premium quality every time.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4 justify-center"
              >
                <Link href="/contact">
                  <button className="btn-gold px-8 py-4 rounded-xl flex items-center gap-2.5 text-sm shadow-lg shadow-gold/20">
                    <Phone className="w-4 h-4" />
                    Get Your Custom Quote
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <a
                  href="https://wa.me/919820123456?text=Hi%2C%20I%27m%20interested%20in%20ordering%20trophies."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-700 text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-green-500/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
                <Link href="/products">
                  <button className="btn-gold-outline px-8 py-4 rounded-xl flex items-center gap-2.5 text-sm">
                    <Trophy className="w-4 h-4" />
                    Browse Catalog
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
