import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/Button";

const columns = [
  {
    title: "Shop",
    links: [
      { to: "/shop?category=earrings", label: "Earrings" },
      { to: "/shop?category=necklaces", label: "Necklaces" },
      { to: "/shop?category=huggies", label: "Huggies" },
      { to: "/shop?category=sets", label: "Gift Sets" },
      { to: "/shop", label: "New Arrivals" },
    ],
  },
  {
    title: "Help",
    links: [
      { to: "/help/shipping", label: "Shipping" },
      { to: "/help/returns", label: "Returns" },
      { to: "/help/care", label: "Jewelry Care" },
      { to: "/help/size", label: "Size Guide" },
      { to: "/contact", label: "Contact Us" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "Our Story" },
      { to: "/sustainability", label: "Sustainability" },
      { to: "/journal", label: "Journal" },
      { to: "/press", label: "Press" },
      { to: "/careers", label: "Careers" },
    ],
  },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <footer className="bg-ink text-cream">
      {/* Newsletter strip */}
      <div className="border-b border-white/10">
        <div className="max-w-editorial mx-auto px-5 sm:px-8 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <p className="eyebrow !text-cream/60 mb-4">Join the Atelier</p>
              <h3 className="font-serif text-3xl md:text-4xl leading-tight">
                Join for 10% off your first order.
              </h3>
              <p className="text-cream/60 text-sm mt-3 max-w-md font-sans">
                New collections, quiet launches, and editorial stories — delivered twice a month.
              </p>
            </div>
            <form onSubmit={onSubmit} className="w-full max-w-md md:ml-auto">
              <div className="flex items-stretch border border-white/20 focus-within:border-gold transition-colors">
                <label htmlFor="footer-email" className="sr-only">Email address</label>
                <input
                  id="footer-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 bg-transparent px-4 py-4 text-cream placeholder:text-cream/40 outline-none font-sans text-sm"
                />
                <button
                  type="submit"
                  className="bg-cream text-ink px-5 sm:px-7 font-sans text-[0.66rem] tracking-widest2 uppercase font-medium hover:bg-gold transition-colors"
                >
                  Subscribe
                </button>
              </div>
              <p
                className={`text-xs mt-3 font-sans transition-opacity ${
                  submitted ? "text-gold opacity-100" : "text-cream/40 opacity-100"
                }`}
                role="status"
              >
                {submitted
                  ? "Welcome to the atelier. Check your inbox."
                  : "By subscribing you agree to receive marketing emails."}
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Link columns */}
      <div className="max-w-editorial mx-auto px-5 sm:px-8 py-14 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest2 block mb-4">
              VELMORA
            </Link>
            <p className="text-sm text-cream/60 max-w-xs font-sans leading-relaxed">
              Demi-fine gold jewelry, made to be lived in. Designed in small batches, made to last.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="w-9 h-9 border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              >
                <Instagram size={15} strokeWidth={1.5} />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="w-9 h-9 border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              >
                <Facebook size={15} strokeWidth={1.5} />
              </a>
              <a
                href="https://youtube.com"
                aria-label="YouTube"
                className="w-9 h-9 border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              >
                <Youtube size={15} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="font-sans text-[0.7rem] tracking-widest2 uppercase text-cream/60 mb-4">
                {col.title}
              </p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm font-sans text-cream/80 hover:text-gold transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-cream/50 font-sans">
          <p>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="px-2 py-1 border border-white/15 rounded-sm">Visa</span>
            <span className="px-2 py-1 border border-white/15 rounded-sm">Mastercard</span>
            <span className="px-2 py-1 border border-white/15 rounded-sm">Amex</span>
            <span className="px-2 py-1 border border-white/15 rounded-sm">Apple Pay</span>
            <span className="px-2 py-1 border border-white/15 rounded-sm">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
