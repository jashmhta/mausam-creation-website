/* ============================================================
   MAUSAM CREATION — Products Page v2
   Design: Full-width filterable grid, mobile filter drawer,
   animated category pills, search with live results
   ============================================================ */
import { useState, useEffect } from "react";
import { useSearch } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, X, Trophy, ChevronDown } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS, CATEGORIES } from "@/lib/products";

export default function Products() {
  const search = useSearch();
  const params = new URLSearchParams(search);
  const initialCategory = params.get("category") || "all";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const p = new URLSearchParams(search);
    setSelectedCategory(p.get("category") || "all");
  }, [search]);

  const filtered = PRODUCTS
    .filter((p) => {
      const matchCat = selectedCategory === "all" || p.category === selectedCategory;
      const matchSearch =
        !searchQuery ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.material.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    })
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "featured") return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      return 0;
    });

  const activeCatName = selectedCategory === "all"
    ? "All Products"
    : CATEGORIES.find(c => c.id === selectedCategory)?.name || "Products";

  return (
    <div className="min-h-screen bg-background pt-24 overflow-x-hidden">
      {/* Grain overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Page Header */}
      <div className="relative bg-card/40 border-b border-border py-14 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 rounded-full"
            style={{ background: "radial-gradient(circle, oklch(0.72 0.12 75 / 0.06) 0%, transparent 70%)" }} />
        </div>
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-gold text-xs font-700 tracking-widest uppercase mb-3 block">
              Our Collection
            </span>
            <h1 className="font-['Playfair_Display'] font-700 text-4xl md:text-5xl text-foreground mb-3">
              {activeCatName}
            </h1>
            <p className="text-muted-foreground">
              <span className="text-gold font-600">{filtered.length}</span> products available
              {selectedCategory !== "all" && ` · ${CATEGORIES.find(c => c.id === selectedCategory)?.description}`}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container py-10">
        {/* Search & Sort Bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search trophies, materials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none pl-4 pr-9 py-3 rounded-xl bg-card border border-border text-foreground text-sm focus:outline-none focus:border-gold transition-colors cursor-pointer"
            >
              <option value="featured">Featured First</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          </div>

          <button
            onClick={() => setShowMobileFilters(true)}
            className="lg:hidden flex items-center gap-2 px-4 py-3 rounded-xl bg-card border border-border text-foreground text-sm hover:border-gold transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filter
            {selectedCategory !== "all" && <span className="w-2 h-2 rounded-full bg-gold" />}
          </button>
        </div>

        {/* Category Pills — desktop horizontal scroll */}
        <div className="hidden lg:flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-full text-sm font-600 transition-all duration-200 ${
              selectedCategory === "all"
                ? "bg-gold text-yellow-950 shadow-md shadow-gold/25"
                : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-gold/50"
            }`}
          >
            All ({PRODUCTS.length})
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-600 transition-all duration-200 flex items-center gap-1.5 ${
                selectedCategory === cat.id
                  ? "bg-gold text-yellow-950 shadow-md shadow-gold/25"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-gold/50"
              }`}
            >
              <span>{cat.icon}</span>
              {cat.name}
              <span className="opacity-60 text-xs">({cat.count})</span>
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-center py-24"
            >
              <Trophy className="w-16 h-16 text-muted-foreground/25 mx-auto mb-4" />
              <h3 className="font-['Playfair_Display'] font-600 text-xl text-foreground mb-2">No products found</h3>
              <p className="text-muted-foreground text-sm">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
                className="mt-6 btn-gold-outline px-6 py-2.5 rounded-xl text-sm"
              >
                Clear Filters
              </button>
            </motion.div>
          ) : (
            <motion.div
              key={`${selectedCategory}-${sortBy}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            >
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i % 8} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {showMobileFilters && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowMobileFilters(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-72 bg-card border-l border-border p-6 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-['Playfair_Display'] font-700 text-lg text-foreground">Filter</h3>
                <button onClick={() => setShowMobileFilters(false)} className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-2">
                <button
                  onClick={() => { setSelectedCategory("all"); setShowMobileFilters(false); }}
                  className={`w-full text-left px-3 py-3 rounded-xl text-sm transition-all flex items-center justify-between ${
                    selectedCategory === "all" ? "bg-gold/10 text-gold font-600" : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  <span>All Products</span>
                  <span className="text-xs opacity-60">{PRODUCTS.length}</span>
                </button>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => { setSelectedCategory(cat.id); setShowMobileFilters(false); }}
                    className={`w-full text-left px-3 py-3 rounded-xl text-sm transition-all flex items-center justify-between ${
                      selectedCategory === cat.id ? "bg-gold/10 text-gold font-600" : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{cat.icon}</span>
                      {cat.name}
                    </span>
                    <span className="text-xs opacity-60">{cat.count}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
