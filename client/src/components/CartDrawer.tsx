/* ============================================================
   MAUSAM CREATION — CartDrawer
   Premium slide-out cart drawer with quantity controls, order summary,
   WhatsApp checkout, and animated entrance
   ============================================================ */
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight, Package } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { formatPrice } from "@/lib/products";
import { Link } from "wouter";

export default function CartDrawer() {
  const { items, totalItems, totalPrice, isOpen, closeCart, removeFromCart, updateQuantity, clearCart } = useCart();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        closeCart();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen, closeCart]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Build WhatsApp order message
  const buildWhatsAppMessage = () => {
    const lines = items.map((item) =>
      `• ${item.product.name} (${item.product.size}) × ${item.quantity} = ${formatPrice(item.product.price * item.quantity)}`
    );
    const msg = [
      "*Order Enquiry - Mausam Creation*",
      "",
      ...lines,
      "",
      `*Total: ${formatPrice(totalPrice)}*`,
      "",
      "Please confirm availability and delivery details.",
    ].join("\n");
    return `https://wa.me/919820123456?text=${encodeURIComponent(msg)}`;
  };

  const gst = Math.round(totalPrice * 0.18);
  const grandTotal = totalPrice + gst;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[998]"
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            ref={drawerRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-card border-l border-border z-[999] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gold/15 flex items-center justify-center">
                  <ShoppingBag className="w-4.5 h-4.5 text-gold" />
                </div>
                <div>
                  <h2 className="font-['Playfair_Display'] font-700 text-lg text-foreground leading-none">
                    Your Cart
                  </h2>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {totalItems} {totalItems === 1 ? "item" : "items"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {items.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="text-xs text-muted-foreground hover:text-destructive transition-colors px-2 py-1 rounded-lg hover:bg-destructive/10"
                  >
                    Clear all
                  </button>
                )}
                <button
                  onClick={closeCart}
                  className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent/80 transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              <AnimatePresence initial={false}>
                {items.length === 0 ? (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center h-64 text-center"
                  >
                    <div className="w-20 h-20 rounded-2xl bg-accent/50 flex items-center justify-center mb-4">
                      <Package className="w-9 h-9 text-muted-foreground/50" />
                    </div>
                    <h3 className="font-['Playfair_Display'] font-600 text-lg text-foreground mb-2">
                      Your cart is empty
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      Add trophies and awards to get started
                    </p>
                    <Link href="/products">
                      <button
                        onClick={closeCart}
                        className="btn-gold px-6 py-2.5 rounded-xl flex items-center gap-2 text-sm"
                      >
                        Browse Collection
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </Link>
                  </motion.div>
                ) : (
                  items.map((item) => (
                    <motion.div
                      key={item.product.id}
                      layout
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 30, height: 0, marginBottom: 0 }}
                      transition={{ duration: 0.25 }}
                      className="card-beam rounded-2xl p-0.5"
                    >
                      <div className="bg-card rounded-[calc(var(--radius-lg)-1px)] p-3 flex gap-3">
                        {/* Product image */}
                        <div className="w-20 h-20 rounded-xl bg-gradient-to-b from-accent/30 to-accent/60 flex items-center justify-center shrink-0 overflow-hidden">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-full h-full object-contain p-1"
                          />
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] font-700 tracking-widest uppercase text-gold mb-0.5">
                            {item.product.material} · {item.product.size}
                          </p>
                          <h4 className="font-['Playfair_Display'] text-sm font-600 text-foreground leading-snug line-clamp-2 mb-2">
                            {item.product.name}
                          </h4>

                          <div className="flex items-center justify-between">
                            {/* Qty controls */}
                            <div className="flex items-center gap-1 bg-accent/50 rounded-lg p-0.5">
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                className="w-6 h-6 rounded-md flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-background transition-all"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="w-7 text-center text-sm font-700 text-foreground">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                className="w-6 h-6 rounded-md flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-background transition-all"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            {/* Price + delete */}
                            <div className="flex items-center gap-2">
                              <span className="font-700 text-sm text-gold">
                                {formatPrice(item.product.price * item.quantity)}
                              </span>
                              <button
                                onClick={() => removeFromCart(item.product.id)}
                                className="w-6 h-6 rounded-md flex items-center justify-center text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-all"
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>

            {/* Footer — Order Summary + Checkout */}
            {items.length > 0 && (
              <div className="border-t border-border px-6 py-5 space-y-4 bg-card/80 backdrop-blur-sm">
                {/* Price breakdown */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Subtotal ({totalItems} items)</span>
                    <span>{formatPrice(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>GST (18%)</span>
                    <span>{formatPrice(gst)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Delivery</span>
                    <span className="text-green-500 font-600">Free</span>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="flex justify-between font-700 text-base text-foreground">
                    <span>Total</span>
                    <span className="text-gold font-['Playfair_Display'] text-lg">{formatPrice(grandTotal)}</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-2.5">
                  {/* WhatsApp Checkout */}
                  <a
                    href={buildWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-700 text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Order via WhatsApp
                  </a>

                  {/* Contact for Quote */}
                  <Link href="/contact">
                    <button
                      onClick={closeCart}
                      className="btn-gold w-full py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      Request Formal Quote
                    </button>
                  </Link>
                </div>

                <p className="text-[10px] text-muted-foreground text-center">
                  Prices are indicative. Final quote includes customization & bulk discounts.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
