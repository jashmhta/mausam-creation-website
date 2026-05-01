/* ============================================================
   MAUSAM CREATION — Product Detail Page
   ============================================================ */
import { useEffect, useState } from "react";
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowLeft, Trophy, Star, CheckCircle2, Phone, ShoppingBag,
  Layers, Ruler, Palette, Package
} from "lucide-react";
import { PRODUCTS, formatPrice, getProductsByCategory } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find((p) => p.id === id);
  const [imgError, setImgError] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

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
            {product.category.replace("-", " ")}
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
            <div className="rounded-2xl overflow-hidden bg-card border border-border aspect-square">
              <img
                src={imgError ? "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80" : product.image}
                alt={product.name}
                onError={() => setImgError(true)}
                className="w-full h-full object-cover"
              />
            </div>
            {product.featured && (
              <div className="absolute top-4 left-4 flex items-center gap-1 bg-gradient-to-r from-yellow-500 to-yellow-400 text-yellow-950 text-xs font-700 px-3 py-1.5 rounded-full">
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
              {product.category.replace("-", " ")}
            </span>
            <h1 className="font-['Playfair_Display'] font-700 text-3xl md:text-4xl text-foreground mb-4 leading-tight">
              {product.name}
            </h1>

            {/* Price */}
            <div className="mb-6">
              <p className="text-muted-foreground text-sm mb-1">Starting from</p>
              <p className="font-['Playfair_Display'] font-700 text-4xl text-gold">
                {formatPrice(product.price)}
                <span className="text-base text-muted-foreground font-400 ml-1">
                  per {product.priceUnit}
                </span>
              </p>
              {product.minOrder && (
                <p className="text-muted-foreground text-sm mt-1">
                  Minimum Order: {product.minOrder} {product.priceUnit}s
                </p>
              )}
            </div>

            {/* Specs */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { icon: Layers, label: "Material", value: product.material },
                { icon: Ruler, label: "Size", value: product.size },
                { icon: Palette, label: "Color", value: product.color },
                { icon: Package, label: "Usage", value: product.usage },
              ].map((spec) => (
                <div key={spec.label} className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border">
                  <spec.icon className="w-4 h-4 text-gold shrink-0" />
                  <div>
                    <p className="text-muted-foreground text-xs">{spec.label}</p>
                    <p className="text-foreground text-sm font-600">{spec.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="space-y-2 mb-8">
              {[
                "Premium quality materials",
                "Custom engraving available",
                "Bulk order discounts",
                "Pan-India delivery",
              ].map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  {f}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact">
                <button className="btn-gold px-6 py-3.5 rounded-xl flex items-center gap-2 text-sm flex-1 justify-center">
                  <ShoppingBag className="w-4 h-4" />
                  Get Quote for This Product
                </button>
              </Link>
              <Link href="/contact">
                <button className="btn-gold-outline px-6 py-3.5 rounded-xl flex items-center gap-2 text-sm justify-center">
                  <Phone className="w-4 h-4" />
                  Call Us
                </button>
              </Link>
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
