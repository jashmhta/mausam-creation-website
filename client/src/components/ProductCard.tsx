/* ============================================================
   MAUSAM CREATION — ProductCard
   Design: Always-on beam border, transparent product image,
   Add to Cart with quantity awareness, spring lift on hover
   ============================================================ */
import { useState } from "react";
import { Link } from "wouter";
import { ShoppingBag, Eye, Star, Check, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [imgError, setImgError] = useState(false);
  const [addedFeedback, setAddedFeedback] = useState(false);
  const { addToCart, isInCart, getItemQty, updateQuantity, removeFromCart } = useCart();
  const inCart = isInCart(product.id);
  const qty = getItemQty(product.id);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 1800);
  };

  const handleIncrease = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    updateQuantity(product.id, qty + 1);
  };

  const handleDecrease = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (qty <= 1) removeFromCart(product.id);
    else updateQuantity(product.id, qty - 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="card-beam rounded-2xl product-card group">
        {/* Inner card face */}
        <div className="rounded-[calc(var(--radius-lg)-1px)] overflow-hidden bg-card">
          {/* Image area — transparent bg, full product visible */}
          <Link href={`/product/${product.id}`}>
            <div className="relative aspect-[4/3] flex items-center justify-center overflow-hidden cursor-pointer"
              style={{ background: "radial-gradient(ellipse at center, var(--accent) 0%, transparent 80%)" }}>
              <img
                src={imgError ? "/manus-storage/award-fiber-champions_9c139799.png" : product.image}
                alt={product.name}
                onError={() => setImgError(true)}
                className="w-full h-full object-contain p-3 transition-transform duration-500 group-hover:scale-108 drop-shadow-lg"
                style={{ filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.18))" }}
                loading="lazy"
              />

              {/* Featured badge */}
              {product.featured && (
                <div className="absolute top-3 left-3 flex items-center gap-1 bg-gradient-to-r from-yellow-500 to-yellow-400 text-yellow-950 text-[10px] font-700 px-2.5 py-1 rounded-full shadow-md">
                  <Star className="w-2.5 h-2.5 fill-current" />
                  Featured
                </div>
              )}

              {/* In-cart badge */}
              {inCart && (
                <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-gold flex items-center justify-center shadow-md">
                  <Check className="w-3 h-3 text-yellow-950" />
                </div>
              )}

              {/* Quick view overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                <span className="flex items-center gap-1.5 text-white text-xs font-600 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Eye className="w-3 h-3" />
                  View Details
                </span>
              </div>
            </div>
          </Link>

          {/* Content */}
          <div className="p-4">
            {/* Category tag */}
            <span className="text-[10px] font-700 tracking-widest uppercase text-gold mb-1.5 block">
              {product.material} · {product.size}
            </span>

            {/* Name */}
            <Link href={`/product/${product.id}`}>
              <h3 className="font-['Playfair_Display'] font-600 text-sm text-foreground leading-snug mb-3 line-clamp-2 hover:text-gold transition-colors duration-200 cursor-pointer">
                {product.name}
              </h3>
            </Link>

            {/* Price */}
            <div className="mb-3">
              <p className="text-[10px] text-muted-foreground">Starting from</p>
              <p className="font-['Nunito_Sans'] font-700 text-base text-gold">
                {formatPrice(product.price)}
                <span className="text-xs text-muted-foreground font-400">/{product.priceUnit}</span>
              </p>
              {product.minOrder && product.minOrder > 1 && (
                <p className="text-[10px] text-muted-foreground">Min. {product.minOrder} pcs</p>
              )}
            </div>

            {/* Add to Cart / Qty Controls */}
            <AnimatePresence mode="wait">
              {!inCart ? (
                <motion.button
                  key="add"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.18 }}
                  onClick={handleAdd}
                  className={`w-full py-2.5 rounded-xl flex items-center justify-center gap-2 text-[11px] font-700 tracking-wider uppercase transition-all duration-200 ${
                    addedFeedback
                      ? "bg-green-500 text-white"
                      : "btn-gold"
                  }`}
                >
                  {addedFeedback ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      Added!
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Add to Cart
                    </>
                  )}
                </motion.button>
              ) : (
                <motion.div
                  key="qty"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.18 }}
                  className="flex items-center justify-between gap-2"
                >
                  <div className="flex items-center gap-1 bg-accent/60 rounded-xl p-1 flex-1 justify-between">
                    <button
                      onClick={handleDecrease}
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-background transition-all"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="font-700 text-sm text-foreground min-w-[1.5rem] text-center">{qty}</span>
                    <button
                      onClick={handleIncrease}
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-gold hover:bg-gold hover:text-yellow-950 transition-all"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                  <span className="text-xs font-700 text-gold shrink-0">{formatPrice(product.price * qty)}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
