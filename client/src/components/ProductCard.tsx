/* ============================================================
   MAUSAM CREATION — ProductCard
   Design: Border beam on hover, gold shimmer, spring lift
   ============================================================ */
import { useState } from "react";
import { Link } from "wouter";
import { ShoppingBag, Eye, Star } from "lucide-react";
import { motion } from "framer-motion";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="card-beam rounded-2xl bg-card border border-border product-card group overflow-hidden">
        {/* Inner content wrapper */}
        <div className="bg-card rounded-2xl overflow-hidden">
          {/* Image */}
          <div className="relative overflow-hidden aspect-[4/3] bg-accent/30">
            <img
              src={imgError ? "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&q=80" : product.image}
              alt={product.name}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Featured badge */}
            {product.featured && (
              <div className="absolute top-3 left-3 flex items-center gap-1 bg-gradient-to-r from-yellow-500 to-yellow-400 text-yellow-950 text-[10px] font-700 px-2.5 py-1 rounded-full">
                <Star className="w-2.5 h-2.5 fill-current" />
                Featured
              </div>
            )}

            {/* Quick actions */}
            <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <Link href={`/product/${product.id}`}>
                <button className="w-8 h-8 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-gold hover:text-yellow-950 transition-all duration-200 shadow-lg">
                  <Eye className="w-3.5 h-3.5" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="w-8 h-8 rounded-lg bg-gold flex items-center justify-center text-yellow-950 hover:bg-yellow-400 transition-all duration-200 shadow-lg">
                  <ShoppingBag className="w-3.5 h-3.5" />
                </button>
              </Link>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            {/* Category tag */}
            <span className="text-[10px] font-700 tracking-widest uppercase text-gold mb-2 block">
              {product.material} · {product.size}
            </span>

            {/* Name */}
            <h3 className="font-['Playfair_Display'] font-600 text-sm text-foreground leading-snug mb-3 line-clamp-2 group-hover:text-gold transition-colors duration-200">
              {product.name}
            </h3>

            {/* Price & CTA */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] text-muted-foreground">Starting from</p>
                <p className="font-['Nunito_Sans'] font-700 text-base text-gold">
                  {formatPrice(product.price)}
                  <span className="text-xs text-muted-foreground font-400">/{product.priceUnit}</span>
                </p>
              </div>
              <Link href="/contact">
                <button className="btn-gold-outline text-[10px] px-3 py-1.5 rounded-lg">
                  Quote
                </button>
              </Link>
            </div>

            {/* Min order */}
            {product.minOrder && (
              <p className="text-[10px] text-muted-foreground mt-2">
                Min. Order: {product.minOrder} {product.priceUnit}s
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
