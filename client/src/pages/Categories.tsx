/* ============================================================
   MAUSAM CREATION — Categories Page
   ============================================================ */
import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, Trophy, Star, TreePine, Gem, Dumbbell, Layers, Medal, Landmark, PenLine } from "lucide-react";
import { CATEGORIES } from "@/lib/products";

const CAT_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Trophy, Star, TreePine, Gem, Dumbbell, Layers, Medal, Landmark, PenLine,
};

export default function Categories() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Header */}
      <div className="bg-card/50 border-b border-border py-12">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-gold text-xs font-700 tracking-widest uppercase mb-3 block">
              Explore
            </span>
            <h1 className="font-['Playfair_Display'] font-700 text-4xl md:text-5xl text-foreground mb-3">
              All Categories
            </h1>
            <p className="text-muted-foreground">
              Browse our complete range of premium trophy and award categories
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
            >
              <Link href={`/products?category=${cat.id}`}>
                <div className="card-beam group rounded-2xl bg-card border border-border product-card overflow-hidden cursor-pointer">
                  <div className="bg-card rounded-2xl overflow-hidden">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden bg-gradient-to-b from-accent/20 to-accent/50 flex items-center justify-center">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-gold/20 backdrop-blur-sm border border-gold/30 flex items-center justify-center">
                        {(() => { const Icon = CAT_ICONS[cat.icon]; return Icon ? <Icon className="w-5 h-5 text-gold" /> : null; })()}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-['Playfair_Display'] font-700 text-xl text-foreground group-hover:text-gold transition-colors">
                          {cat.name}
                        </h3>
                        <span className="text-xs bg-gold/10 text-gold px-2.5 py-1 rounded-full font-600 shrink-0 ml-2">
                          {cat.count} items
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {cat.description}
                      </p>
                      <div className="flex items-center gap-1.5 text-gold text-sm font-600">
                        Browse Collection
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center p-12 rounded-3xl bg-card border border-border relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/10 to-transparent" />
          <div className="relative z-10">
            <h2 className="font-['Playfair_Display'] font-700 text-3xl text-foreground mb-3">
              Need Something Custom?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              We can create any trophy design you envision. Contact us for a personalized quote.
            </p>
            <Link href="/contact">
              <button className="btn-gold px-8 py-3.5 rounded-xl flex items-center gap-2 mx-auto">
                Request Custom Design
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
