import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const columns = [
  {
    title: "Shop",
    links: [
      { to: "/shop?category=earrings", label: "Earrings" },
      { to: "/shop?category=necklaces", label: "Necklaces" },
      { to: "/shop?category=huggies", label: "Huggies" },
      { to: "/shop?category=sets", label: "Sets" },
      { to: "/shop", label: "All Jewelry" },
    ],
  },
  {
    title: "Help",
    links: [
      { to: "/help/shipping", label: "Shipping & Returns" },
      { to: "/help/care", label: "Jewelry Care" },
      { to: "/help/size", label: "Size Guide" },
      { to: "/help/contact", label: "Contact Us" },
      { to: "/help/faq", label: "FAQ" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "Our Story" },
      { to: "/journal", label: "Journal" },
      { to: "/sustainability", label: "Sustainability" },
      { to: "/press", label: "Press" },
      { to: "/careers", label: "Careers" },
    ],
  },
];

const socials = [
  { Icon: Instagram, label: "Instagram" },
  { Icon: Facebook, label: "Facebook" },
  { Icon: Youtube, label: "YouTube" },
  { Icon: Twitter, label: "X" },
];

function PaymentBadge({ children }) {
  return (
    <div className="h-7 px-2.5 inline-flex items-center justify-center bg-cream-200/80 border border-hairline rounded-sm text-[10px] tracking-[0.18em] uppercase text-ink-800 font-medium">
      {children}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-cream-200">
      <div className="mx-auto max-w-editorial px-4 sm:px-6 lg:px-10 pt-16 pb-10">
        {/* Top: brand + columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand block */}
          <div className="md:col-span-4">
            <Link to="/" className="font-serif text-2xl tracking-[0.4em] text-cream-100">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-cream-200/70 max-w-[320px] leading-relaxed">
              Demi-fine jewelry, designed in small batches and finished by hand.
              Heirloom in the making — for the everyday, the evenings, and the in-between.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 max-w-sm"
              aria-label="Newsletter signup"
            >
              <label htmlFor="footer-newsletter" className="eyebrow text-cream-200/60">
                Stay in the loop
              </label>
              <div className="mt-2 flex border-b border-cream-200/30 focus-within:border-gold-300 transition-colors">
                <input
                  id="footer-newsletter"
                  type="email"
                  required
                  placeholder="Your email"
                  className="flex-1 bg-transparent text-cream-100 placeholder:text-cream-200/40 text-sm py-2.5 outline-none"
                />
                <button
                  type="submit"
                  className="text-[11px] tracking-[0.32em] uppercase text-cream-100 hover:text-gold-300 transition-colors py-2.5 px-3"
                >
                  Join
                </button>
              </div>
            </form>
          </div>

          {/* Columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-6">
            {columns.map((c) => (
              <div key={c.title}>
                <h4 className="eyebrow text-cream-200/60">{c.title}</h4>
                <ul className="mt-4 space-y-3">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        className="text-sm text-cream-200/85 hover:text-gold-300 transition-colors"
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

        <div className="hairline-dark mt-14" />

        {/* Bottom row */}
        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-[11px] tracking-[0.22em] uppercase text-cream-200/55">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            <PaymentBadge>Visa</PaymentBadge>
            <PaymentBadge>Mastercard</PaymentBadge>
            <PaymentBadge>Amex</PaymentBadge>
            <PaymentBadge>PayPal</PaymentBadge>
            <PaymentBadge>Apple Pay</PaymentBadge>
          </div>
          <ul className="flex items-center gap-3">
            {socials.map(({ Icon, label }) => (
              <li key={label}>
                <a
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 inline-flex items-center justify-center border border-cream-200/25 text-cream-200/85 hover:text-gold-300 hover:border-gold-300/60 transition-colors"
                >
                  <Icon className="w-4 h-4" strokeWidth={1.5} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
