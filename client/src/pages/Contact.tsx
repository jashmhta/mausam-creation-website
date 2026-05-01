/* ============================================================
   MAUSAM CREATION — Contact Page
   ============================================================ */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, Trophy, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [form, setForm] = useState({
    name: "", email: "", phone: "", product: "", quantity: "", message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success("Your inquiry has been sent! We'll get back to you within 24 hours.");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Header */}
      <div className="bg-card/50 border-b border-border py-12">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-gold text-xs font-700 tracking-widest uppercase mb-3 block">
              Get in Touch
            </span>
            <h1 className="font-['Playfair_Display'] font-700 text-4xl md:text-5xl text-foreground mb-3">
              Contact Us
            </h1>
            <p className="text-muted-foreground">
              Ready to order? Have a custom design in mind? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="font-['Playfair_Display'] font-700 text-2xl text-foreground mb-6">
                Get in Touch
              </h2>

              {[
                {
                  icon: MapPin,
                  title: "Location",
                  content: "Mumbai, Maharashtra, India",
                  sub: "Pan-India delivery available",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  content: "Contact for pricing",
                  sub: "Mon–Sat, 9am–7pm IST",
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: "info@mausamcreation.com",
                  sub: "We reply within 24 hours",
                },
                {
                  icon: Clock,
                  title: "Business Hours",
                  content: "Monday – Saturday",
                  sub: "9:00 AM – 7:00 PM IST",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-4 rounded-xl bg-card border border-border mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-4.5 h-4.5 text-gold" />
                  </div>
                  <div>
                    <p className="font-600 text-sm text-foreground">{item.title}</p>
                    <p className="text-foreground text-sm">{item.content}</p>
                    <p className="text-muted-foreground text-xs">{item.sub}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* IndiaMart Link */}
            <div className="p-4 rounded-xl bg-gold/5 border border-gold/20">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="w-4 h-4 text-gold" />
                <span className="text-gold font-600 text-sm">Also Find Us On</span>
              </div>
              <a
                href="https://www.indiamart.com/mausam-creation-mumbai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-gold text-sm transition-colors underline"
              >
                IndiaMart Profile →
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-20 text-center">
                <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-gold" />
                </div>
                <h3 className="font-['Playfair_Display'] font-700 text-2xl text-foreground mb-3">
                  Inquiry Sent!
                </h3>
                <p className="text-muted-foreground max-w-sm">
                  Thank you for reaching out. Our team will get back to you within 24 hours 
                  with pricing and availability details.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 btn-gold-outline px-6 py-2.5 rounded-xl text-sm"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-600 text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-600 text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-600 text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-600 text-foreground mb-2">
                      Product Interest
                    </label>
                    <select
                      value={form.product}
                      onChange={(e) => setForm({ ...form, product: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground text-sm focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="">Select a category</option>
                      <option value="sport-trophy">Sport Trophy</option>
                      <option value="award-trophy">Award Trophy</option>
                      <option value="crystal-trophy">Crystal Trophy</option>
                      <option value="wooden-trophy">Wooden Trophy</option>
                      <option value="metal-trophy">Metal Trophy</option>
                      <option value="bodybuilder-trophy">Bodybuilder Trophy</option>
                      <option value="acrylic-trophy">Acrylic Trophy</option>
                      <option value="statue">Statues & Idols</option>
                      <option value="decor">Decor & Accessories</option>
                      <option value="custom">Custom Design</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-600 text-foreground mb-2">
                    Quantity Required
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={form.quantity}
                    onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                    placeholder="e.g. 10"
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-600 text-foreground mb-2">
                    Message / Requirements *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your requirements, event details, customization needs, deadline, etc."
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold w-full py-4 rounded-xl flex items-center justify-center gap-2.5 text-sm"
                >
                  <Send className="w-4 h-4" />
                  Send Inquiry
                </button>

                <p className="text-muted-foreground text-xs text-center">
                  We'll respond within 24 hours with pricing and availability
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
