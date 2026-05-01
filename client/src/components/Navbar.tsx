/* ============================================================
   MAUSAM CREATION — Navbar
   Design: Glassmorphic pill navigation, scroll-hide behavior,
   Cart icon with animated badge, dual theme toggle
   ============================================================ */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Sun, Moon, Phone, ShoppingBag } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useCart } from "@/contexts/CartContext";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/categories", label: "Categories" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { theme, toggleTheme } = useTheme();
  const { totalItems, toggleCart } = useCart();
  const [location] = useLocation();
  const [prevTotal, setPrevTotal] = useState(totalItems);
  const [cartBounce, setCartBounce] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  // Bounce animation when cart item count increases
  useEffect(() => {
    if (totalItems > prevTotal) {
      setCartBounce(true);
      setTimeout(() => setCartBounce(false), 600);
    }
    setPrevTotal(totalItems);
  }, [totalItems, prevTotal]);

  return (
    <>
      <motion.header
        id="main-nav"
        initial={{ y: -100 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 px-4 pt-3"
      >
        <div
          className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 ${
            scrolled
              ? "glass-nav shadow-lg shadow-black/10"
              : "bg-transparent"
          }`}
        >
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center gap-2.5 group">
                <img
                  src="/manus-storage/mausam-logo-nobg_340d5579.png"
                  alt="Mausam Creation"
                  className="w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-300"
                  style={{ filter: "drop-shadow(0 2px 8px rgba(212,175,55,0.3))" }}
                />
                <div>
                  <span className="font-['Playfair_Display'] font-bold text-base leading-tight block text-foreground">
                    Mausam
                  </span>
                  <span className="text-[10px] font-['Nunito_Sans'] font-600 tracking-widest text-gold uppercase leading-tight block">
                    Creation
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className={`px-4 py-2 rounded-xl text-sm font-['Nunito_Sans'] font-600 transition-all duration-200 ${
                      location === link.href
                        ? "bg-primary/10 text-primary font-700"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-muted-foreground hover:text-gold hover:bg-accent transition-all duration-200"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-4.5 h-4.5" />
                ) : (
                  <Moon className="w-4.5 h-4.5" />
                )}
              </button>

              {/* Cart Button */}
              <button
                onClick={toggleCart}
                className={`relative w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 ${
                  totalItems > 0
                    ? "text-gold bg-gold/10 hover:bg-gold/20"
                    : "text-muted-foreground hover:text-gold hover:bg-accent"
                }`}
                aria-label="Open cart"
              >
                <motion.div
                  animate={cartBounce ? { scale: [1, 1.3, 0.9, 1.1, 1] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <ShoppingBag className="w-4.5 h-4.5" />
                </motion.div>
                <AnimatePresence>
                  {totalItems > 0 && (
                    <motion.span
                      key="badge"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="absolute -top-1 -right-1 w-4.5 h-4.5 rounded-full bg-gold text-yellow-950 text-[9px] font-800 flex items-center justify-center leading-none"
                    >
                      {totalItems > 9 ? "9+" : totalItems}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              {/* CTA Button */}
              <Link href="/contact">
                <button className="hidden md:flex items-center gap-2 btn-gold px-4 py-2 rounded-xl text-xs font-700">
                  <Phone className="w-3.5 h-3.5" />
                  Get Quote
                </button>
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center text-foreground hover:bg-accent transition-all duration-200"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 pt-24 px-4"
          >
            <div className="glass-nav rounded-2xl p-6 shadow-2xl max-w-sm mx-auto">
              <nav className="flex flex-col gap-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link href={link.href}>
                      <span
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-['Nunito_Sans'] font-600 transition-all duration-200 ${
                          location === link.href
                            ? "bg-primary/10 text-primary"
                            : "text-foreground hover:bg-accent"
                        }`}
                      >
                        {link.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
                <div className="section-divider my-2" />
                <button
                  onClick={() => { setMenuOpen(false); toggleCart(); }}
                  className="w-full btn-gold-outline py-3 rounded-xl flex items-center justify-center gap-2 mb-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Cart {totalItems > 0 && `(${totalItems})`}
                </button>
                <Link href="/contact">
                  <button className="w-full btn-gold py-3 rounded-xl flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    Get a Quote
                  </button>
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-background/60 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
