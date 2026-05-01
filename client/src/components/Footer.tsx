/* ============================================================
   MAUSAM CREATION — Footer
   Design: Rich dark footer with gold accents, links, contact info
   ============================================================ */
import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";

const FOOTER_LINKS = {
  Products: [
    { label: "Sport Trophies", href: "/products?category=sport-trophy" },
    { label: "Award Trophies", href: "/products?category=award-trophy" },
    { label: "Crystal Trophies", href: "/products?category=crystal-trophy" },
    { label: "Wooden Trophies", href: "/products?category=wooden-trophy" },
    { label: "Metal Trophies", href: "/products?category=metal-trophy" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Products", href: "/products" },
    { label: "Categories", href: "/categories" },
    { label: "Contact Us", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Gold divider */}
      <div className="section-divider" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/manus-storage/mausam-logo-original_d18bff3f.jpeg"
                  alt="Mausam Creation"
                  className="w-12 h-12 object-contain rounded-lg"
                />
                <div>
                  <span className="font-['Playfair_Display'] font-bold text-lg text-foreground block leading-tight">
                    Mausam Creation
                  </span>
                  <span className="text-[10px] font-['Nunito_Sans'] tracking-widest text-gold uppercase">
                    Premium Trophies & Awards
                  </span>
                </div>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Crafting symbols of achievement that leave a lasting impression. 
              Premium trophies for sports, corporate events, and special occasions.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-['Playfair_Display'] font-bold text-foreground mb-5 text-sm tracking-wide uppercase">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>
                      <span className="text-muted-foreground hover:text-gold text-sm transition-colors duration-200 flex items-center gap-1.5 group">
                        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h4 className="font-['Playfair_Display'] font-bold text-foreground mb-5 text-sm tracking-wide uppercase">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-sm leading-relaxed">
                  Mumbai, Maharashtra, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href="tel:+91" className="text-muted-foreground hover:text-gold text-sm transition-colors">
                  Contact for Price
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href="mailto:info@mausamcreation.com" className="text-muted-foreground hover:text-gold text-sm transition-colors">
                  info@mausamcreation.com
                </a>
              </li>
            </ul>

            {/* GST Info */}
            <div className="mt-6 p-3 rounded-xl bg-accent/50 border border-border">
              <p className="text-xs text-muted-foreground">
                <span className="text-gold font-600">GST Registered</span> · 5 Years in Business
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                CEO: Jainam Rajesh Shah
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Mausam Creation. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground text-xs">Mumbai, Maharashtra</span>
            <span className="text-gold text-xs">✦</span>
            <span className="text-muted-foreground text-xs">Premium Quality Since 2019</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
