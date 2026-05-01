/* ============================================================
   MAUSAM CREATION — Product Detail Page
   Full Add to Cart, quantity controls, WhatsApp checkout
   ============================================================ */
import { useEffect, useState } from "react";
import { useParams, Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, Trophy, Star, CheckCircle2, Phone, ShoppingBag,
  Layers, Ruler, Palette, Package, Plus, Minus, MessageCircle, Check
} from "lucide-react";
import { PRODUCTS, formatPrice, getProductsByCategory } from "@/lib/products";
import { useCart } from "@/contexts/CartContext";
import ProductCard from "@/components/ProductCard";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find((p) => p.id === id);
  const [imgError, setImgError] = useState(false);
  const [localQty, setLocalQty] = useState(1);
  const [addedFeedback, setAddedFeedback] = useState(false);
  const { addToCart, isInCart, getItemQty, updateQuantity, openCart } = useCart();
  const inCart = product ? isInCart(product.id) : false;
  const cartQty = product ? getItemQty(product.id) : 0;

  useEffect(() => { window.scrollTo(0, 0); setLocalQty(1); setAddedFeedback(false); }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-background pt-24 flex items-center justify-center">
        <div className="text-center">
          <Trophy className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
          <h2 className="font-['Playfair_Display'] font-700 text-2xl text-foreground mb-2">
            Product Not Found
          </h2>
          <Link href="/products">
            <button className="btn-gold px-6 py-2.5 rounded-xl mt-4 flex items-center gap-2 mx-auto">
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const related = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, localQty);
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 2000);
  };

  const handleViewCart = () => {
    openCart();
  };

  const buildWhatsAppMessage = () => {
    const msg = [
      `🏆 *Product Enquiry — Mausam Creation*`,
      ``,
      `*Product:* ${product.name}`,
      `*Material:* ${product.material}`,
      `*Size:* ${product.size}`,
      `*Quantity:* ${localQty} ${product.priceUnit}(s)`,
      `*Price:* ${formatPrice(product.price * localQty)}`,
      ``,
      `Please share availability and delivery details.`,
    ].join("\n");
    return `https://wa.me/919820123456?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container py-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/products">
            <span className="hover:text-gold transition-colors cursor-pointer">Products</span>
          </Link>
          <span>/</span>
          <span className="text-foreground capitalize">
            {product.category.replace(/-/g, " ")}
          </span>
          <span>/</span>
          <span className="text-gold truncate max-w-48">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="card-beam rounded-2xl p-0.5">
              <div className="rounded-[calc(var(--radius-lg)-1px)] overflow-hidden bg-gradient-to-b from-accent/20 to-accent/50 aspect-square flex items-center justify-center">
                <img
                  src={imgError ? "/manus-storage/award-fiber-champions_9c139799.png" : product.image}
                  alt={product.name}
                  onError={() => setImgError(true)}
                  className="w-full h-full object-contain p-8"
                  style={{ filter: "drop-shadow(0 16px 40px rgba(0,0,0,0.25))" }}
                />
              </div>
            </div>
            {product.featured && (
              <div className="absolute top-4 left-4 flex items-center gap-1 bg-gradient-to-r from-yellow-500 to-yellow-400 text-yellow-950 text-xs font-700 px-3 py-1.5 rounded-full shadow-lg">
                <Star className="w-3 h-3 fill-current" />
                Featured Product
              </div>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-gold text-xs font-700 tracking-widest uppercase mb-3 block">
              {product.category.replace(/-/g, " ")}
            </span>
            <h1 className="font-['Playfair_Display'] font-700 text-3xl md:text-4xl text-foreground mb-4 leading-tight">
              {product.name}
            </h1>

            {/* Price */}
            <div className="mb-6 p-4 rounded-2xl bg-gold/5 border border-gold/20">
              <p className="text-muted-foreground text-xs mb-1">Starting from</p>
              <p className="font-['Playfair_Display'] font-700 text-4xl text-gold">
                {formatPrice(product.price * localQty)}
                {localQty > 1 && (
                  <span className="text-base text-muted-foreground font-400 ml-2">
                    ({formatPrice(product.price)} × {localQty})
                  </span>
                )}
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                {formatPrice(product.price)} per {product.priceUnit}
                {product.minOrder && product.minOrder > 1 && ` · Min. ${product.minOrder} pcs`}
              </p>
            </div>

            {/* Specs */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { icon: Layers, label: "Material", value: product.material },
                { icon: Ruler, label: "Size", value: product.size },
                { icon: Palette, label: "Category", value: product.category.replace(/-/g, " ") },
                { icon: Package, label: "Min. Order", value: product.minOrder ? `${product.minOrder} pcs` : "1 pc" },
              ].map((spec) => (
                <div key={spec.label} className="card-beam rounded-xl p-0.5">
                  <div className="flex items-center gap-3 p-3 rounded-[calc(var(--radius-lg)-1px)] bg-card">
                    <spec.icon className="w-4 h-4 text-gold shrink-0" />
                    <div>
                      <p className="text-muted-foreground text-xs">{spec.label}</p>
                      <p className="text-foreground text-sm font-600 capitalize">{spec.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="space-y-2 mb-6">
              {[
                "Premium quality materials with gold finish",
                "Custom engraving & personalization available",
                "Bulk order discounts — contact for pricing",
                "Pan-India delivery with secure packaging",
              ].map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  {f}
                </div>
              ))}
            </div>

            {/* Quantity Selector */}
            <div className="mb-5">
              <p className="text-sm font-600 text-foreground mb-2">Quantity</p>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 bg-accent/60 rounded-xl p-1">
                  <button
                    onClick={() => setLocalQty(q => Math.max(1, q - 1))}
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-background transition-all"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-700 text-lg text-foreground">{localQty}</span>
                  <button
                    onClick={() => setLocalQty(q => q + 1)}
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-gold hover:bg-gold hover:text-yellow-950 transition-all"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-sm text-muted-foreground">
                  Total: <span className="text-gold font-700">{formatPrice(product.price * localQty)}</span>
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <AnimatePresence mode="wait">
                {!inCart ? (
                  <motion.button
                    key="add"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleAddToCart}
                    className={`btn-gold px-6 py-3.5 rounded-xl flex items-center gap-2 text-sm flex-1 justify-center transition-all ${
                      addedFeedback ? "bg-green-500 border-green-500 text-white" : ""
                    }`}
                  >
                    {addedFeedback ? (
                      <><Check className="w-4 h-4" /> Added to Cart!</>
                    ) : (
                      <><ShoppingBag className="w-4 h-4" /> Add to Cart</>
                    )}
                  </motion.button>
                ) : (
                  <motion.div
                    key="incart"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 flex-1"
                  >
                    <div className="flex items-center gap-1 bg-gold/10 border border-gold/30 rounded-xl p-1 flex-1 justify-between">
                      <button
                        onClick={() => updateQuantity(product.id, cartQty - 1)}
                        className="w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-background transition-all"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-700 text-base text-gold">{cartQty} in cart</span>
                      <button
                        onClick={() => updateQuantity(product.id, cartQty + 1)}
                        className="w-9 h-9 rounded-lg flex items-center justify-center text-gold hover:bg-gold hover:text-yellow-950 transition-all"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <button
                      onClick={handleViewCart}
                      className="btn-gold-outline px-4 py-3.5 rounded-xl text-sm whitespace-nowrap"
                    >
                      View Cart
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <a
                href={buildWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-700 text-sm transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Enquiry
              </a>
            </div>

            <div className="mt-3 flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span className="text-xs text-muted-foreground">
                Call us: <a href="tel:+919820123456" className="text-gold hover:underline">+91 98201 23456</a>
              </span>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div>
            <div className="section-divider mb-12" />
            <h2 className="font-['Playfair_Display'] font-700 text-2xl text-foreground mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
