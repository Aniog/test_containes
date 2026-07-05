import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";
import { toast } from "sonner";

const FOOTER_COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "All Jewelry", to: "/shop" },
      { label: "Earrings", to: "/shop?category=earrings" },
      { label: "Necklaces", to: "/shop?category=necklaces" },
      { label: "Huggies", to: "/shop?category=huggies" },
      { label: "Gift Sets", to: "/shop?category=giftsets" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping & Returns", to: "/help/shipping" },
      { label: "Care Guide", to: "/help/care" },
      { label: "Size Guide", to: "/help/size" },
      { label: "Contact Us", to: "/help/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "/about#materials" },
      { label: "Press", to: "/about#press" },
    ],
  },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onSubscribe = (e) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Thank you. Your 10% off code is on its way to " + email + ".");
      setEmail("");
      setSubmitting(false);
    }, 600);
  };

  return (
    <footer className="bg-ink text-cream mt-24">
      <div className="container-velmora py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Brand + newsletter */}
          <div className="md:col-span-5">
            <Link to="/" className="font-serif text-3xl tracking-widest3">
              VELMORA
            </Link>
            <p className="mt-6 max-w-sm text-sm text-cream/70 leading-relaxed">
              Demi-fine 18K gold plated jewelry, handcrafted in small batches.
              Designed to be worn — and treasured — every day.
            </p>

            <form
              onSubmit={onSubscribe}
              className="mt-8 flex max-w-sm border-b border-cream/30 pb-2"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                aria-label="Email address"
                className="flex-1 bg-transparent text-sm text-cream placeholder:text-cream/50 focus:outline-none"
              />
              <button
                type="submit"
                disabled={submitting}
                className="text-[11px] font-medium uppercase tracking-widest2 text-cream transition-opacity hover:opacity-70 disabled:opacity-50"
              >
                {submitting ? "Joining…" : "Join"}
              </button>
            </form>
            <p className="mt-3 text-[11px] uppercase tracking-widest2 text-cream/50">
              10% off your first order
            </p>
          </div>

          {/* Link columns */}
          <div className="md:col-span-7 grid grid-cols-2 gap-10 md:grid-cols-3">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="text-[11px] font-medium uppercase tracking-widest2 text-cream/50">
                  {col.title}
                </h4>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-sm text-cream/80 transition-colors hover:text-cream"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px w-full bg-cream/15" />

        {/* Bottom row */}
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3 text-[11px] uppercase tracking-widest2 text-cream/60 md:flex-row md:items-center md:gap-6">
            <span>© {new Date().getFullYear()} Velmora Fine Jewelry</span>
            <Link to="/privacy" className="hover:text-cream">Privacy</Link>
            <Link to="/terms" className="hover:text-cream">Terms</Link>
            <Link to="/accessibility" className="hover:text-cream">Accessibility</Link>
          </div>

          <div className="flex items-center gap-4 text-cream/70">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Velmora on Instagram"
              className="transition-opacity hover:opacity-70"
            >
              <Instagram size={18} strokeWidth={1.5} />
            </a>
            <a
              href="mailto:hello@velmora.com"
              aria-label="Email Velmora"
              className="transition-opacity hover:opacity-70"
            >
              <Mail size={18} strokeWidth={1.5} />
            </a>
          </div>

          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest2 text-cream/50">
            <span className="rounded-sm border border-cream/30 px-2 py-1">Visa</span>
            <span className="rounded-sm border border-cream/30 px-2 py-1">Mastercard</span>
            <span className="rounded-sm border border-cream/30 px-2 py-1">Amex</span>
            <span className="rounded-sm border border-cream/30 px-2 py-1">PayPal</span>
            <span className="rounded-sm border border-cream/30 px-2 py-1">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
