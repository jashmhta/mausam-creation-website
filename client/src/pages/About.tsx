/* ============================================================
   MAUSAM CREATION — About Page
   ============================================================ */
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Trophy, Award, Users, Star, CheckCircle2, MapPin } from "lucide-react";
import { Link } from "wouter";

const MILESTONES = [
  { year: "2019", event: "Mausam Creation founded in Mumbai" },
  { year: "2020", event: "Expanded product range to 50+ designs" },
  { year: "2021", event: "Served 100+ satisfied clients" },
  { year: "2022", event: "Launched custom design service" },
  { year: "2023", event: "500+ trophies crafted milestone" },
  { year: "2024", event: "GST registered, expanded to pan-India delivery" },
];

export default function About() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Hero */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/10 via-transparent to-transparent" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-gold text-xs font-700 tracking-widest uppercase mb-4 block">
              Our Story
            </span>
            <h1 className="font-['Playfair_Display'] font-700 text-5xl md:text-6xl text-foreground mb-6 leading-tight">
              Crafting Symbols of{" "}
              <span className="text-gold-gradient italic">Achievement</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Mausam Creation is Mumbai's premier trophy and award manufacturer, dedicated to 
              crafting premium recognition products that celebrate excellence in sports, 
              corporate events, and special occasions.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <div className="border-y border-border bg-card/50 py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Trophy, value: "1000+", label: "Trophies Crafted" },
              { icon: Users, value: "500+", label: "Happy Clients" },
              { icon: Award, value: "35+", label: "Design Styles" },
              { icon: Star, value: "5+", label: "Years Experience" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-6 h-6 text-gold mx-auto mb-3" />
                <p className="font-['Playfair_Display'] font-900 text-3xl text-gold mb-1">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Story */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold text-xs font-700 tracking-widest uppercase mb-4 block">
                Who We Are
              </span>
              <h2 className="font-['Playfair_Display'] font-700 text-3xl md:text-4xl text-foreground mb-6">
                Passion for Perfection
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2019 by Jainam Rajesh Shah, Mausam Creation was born from a passion 
                  for celebrating human achievement. Based in Mumbai, Maharashtra, we have grown 
                  to become one of the city's most trusted trophy manufacturers.
                </p>
                <p>
                  We specialize in a wide range of trophies including sport trophies, award trophies, 
                  crystal trophies, wooden trophies, metal trophies, bodybuilder trophies, and 
                  acrylic trophies. We also craft beautiful statues, pen stands, and name plates.
                </p>
                <p>
                  Every product we create undergoes rigorous quality checks to ensure it meets 
                  our high standards. We believe that a trophy is more than just an object — 
                  it's a symbol of hard work, dedication, and excellence.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-6 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-gold" />
                Mumbai, Maharashtra, India
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/manus-storage/hero-video-ref-A7QyNfcAq8d2erZ2bifdt3.webp"
                alt="Our Trophy Collection"
                className="rounded-2xl w-full object-cover h-80 shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <img
                    src="/manus-storage/mausam-logo-nobg_340d5579.png"
                    alt="Mausam Creation"
                    className="w-12 h-12 object-contain rounded-lg"
                  />
                  <div>
                    <p className="font-['Playfair_Display'] font-700 text-foreground">GST Registered</p>
                    <p className="text-muted-foreground text-xs">Trusted Business</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-700 tracking-widest uppercase mb-3 block">
              Our Journey
            </span>
            <h2 className="font-['Playfair_Display'] font-700 text-3xl md:text-4xl text-foreground">
              Milestones & Growth
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            {MILESTONES.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-gold" />
                  </div>
                  {i < MILESTONES.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-gold font-700 text-sm">{m.year}</span>
                  <p className="text-foreground mt-1">{m.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="font-['Playfair_Display'] font-700 text-3xl md:text-4xl text-foreground mb-4">
            Partner with Us
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Ready to create something extraordinary? Let's craft your perfect trophy together.
          </p>
          <Link href="/contact">
            <button className="btn-gold px-8 py-3.5 rounded-xl mx-auto flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              Get in Touch
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
