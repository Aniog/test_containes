import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Mail, Check } from "lucide-react";
import { toast } from "sonner";

const cols = [
  {
    title: "Shop",
    links: [
      { label: "All Jewelry", to: "/shop" },
      { label: "Earrings", to: "/shop?category=earrings" },
      { label: "Necklaces", to: "/shop?category=necklaces" },
      { label: "Huggies", to: "/shop?category=huggies" },
      { label: "Gift Sets", to: "/shop?category=sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping", to: "#" },
      { label: "Returns & Exchanges", to: "#" },
      { label: "Care Guide", to: "#" },
      { label: "Contact Us", to: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "#" },
      { label: "Journal", to: "#" },
      { label: "Sustainability", to: "#" },
      { label: "Press", to: "#" },
    ],
  },
];

function PaymentBadge({ label }) {
  return (
    <span className="inline-flex items-center justify-center h-7 px-2.5 text-[10px] font-medium uppercase tracking-wider-2 border border-hairline-dark/40 text-ivory/70">
      {label}
    </span>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setSubmitted(true);
    toast.success("Welcome — check your inbox for 10% off.");
    setEmail("");
  };

  return (
    <footer className="bg-espresso text-ivory">
      {/* Newsletter strip */}
      <div className="border-b border-hairline-dark/40">
        <div className="container-wide py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="kicker mb-3">The Velmora Circle</p>
            <h3 className="font-serif text-3xl md:text-4xl font-light leading-[1.1] text-ivory text-balance">
              Join for 10% off your first order.
            </h3>
            <p className="text-sm text-ivory/60 mt-3 max-w-md text-pretty">
              Early access to new collections, styling notes, and a quiet inbox —
              never spam.
            </p>
          </div>
          <form onSubmit={onSubscribe} className="flex flex-col sm:flex-row gap-3">
            <label className="sr-only" htmlFor="footer-email">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 bg-transparent border border-ivory/30 px-5 py-4 text-sm text-ivory placeholder:text-ivory/40 focus:outline-none focus:border-gold transition-colors"
            />
            <button type="submit" className="btn-accent shrink-0">
              {submitted ? (
                <>
                  <Check className="w-4 h-4 mr-2" strokeWidth={1.5} /> Subscribed
                </>
              ) : (
                "Subscribe"
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-wide py-16 md:py-20 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <Link
            to="/"
            className="font-serif text-2xl tracking-[0.32em] font-light"
          >
            VELMORA
          </Link>
          <p className="text-sm text-ivory/60 mt-5 max-w-xs text-pretty">
            Demi-fine jewelry, hand-finished. Designed in small batches to be worn
            for years — not seasons.
          </p>
          <div className="mt-8 flex items-center gap-2">
            <PaymentBadge label="Visa" />
            <PaymentBadge label="Mastercard" />
            <PaymentBadge label="Amex" />
            <PaymentBadge label="PayPal" />
            <PaymentBadge label="Apple Pay" />
          </div>
        </div>
        <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-[11px] uppercase tracking-widest-2 text-ivory/50 mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-ivory/80 hover:text-gold transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-hairline-dark/40">
        <div className="container-wide py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-ivory/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="text-ivory/60 hover:text-gold transition-colors"
            >
              <Instagram className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-ivory/60 hover:text-gold transition-colors"
            >
              <Facebook className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="text-ivory/60 hover:text-gold transition-colors"
            >
              <Youtube className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a
              href="mailto:hello@velmora.com"
              aria-label="Email"
              className="text-ivory/60 hover:text-gold transition-colors"
            >
              <Mail className="w-4 h-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
