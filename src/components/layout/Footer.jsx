import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "Earrings", to: "/shop?category=earrings" },
      { label: "Necklaces", to: "/shop?category=necklaces" },
      { label: "Huggies", to: "/shop?category=huggies" },
      { label: "Gift Sets", to: "/shop?category=sets" },
      { label: "All Jewelry", to: "/shop" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping & Returns", to: "/help/shipping" },
      { label: "Care Guide", to: "/help/care" },
      { label: "Contact Us", to: "/help/contact" },
      { label: "FAQ", to: "/help/faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Sustainability", to: "/about#values" },
      { label: "Journal", to: "/journal" },
      { label: "Press", to: "/press" },
    ],
  },
];

const PAYMENTS = ["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay", "Google Pay"];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <footer className="bg-[var(--color-ink)] text-[var(--color-bone)] mt-24">
      <Container className="pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 md:gap-10">
          {/* Brand block */}
          <div className="flex flex-col gap-5 max-w-sm">
            <Link to="/" className="font-serif text-3xl tracking-display text-[var(--color-bone)]">
              VELMORA
            </Link>
            <p className="text-[var(--color-bone)]/70 text-sm leading-relaxed font-light">
              Demi-fine jewelry crafted in small batches. Made to wear daily,
              made to be treasured — quietly, for years.
            </p>
            <div className="flex items-center gap-4 mt-2 text-[var(--color-bone)]/70">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-[var(--color-gold-soft)] transition-colors">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-[var(--color-gold-soft)] transition-colors">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a href="mailto:hello@velmora.com" aria-label="Email" className="hover:text-[var(--color-gold-soft)] transition-colors">
                <Mail size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-sans text-[0.7rem] uppercase tracking-eyebrow text-[var(--color-gold-soft)] font-medium mb-5">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-[var(--color-bone)]/80 hover:text-[var(--color-gold-soft)] transition-colors link-underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--color-bone)]/15 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-wrap items-center gap-2">
            {PAYMENTS.map((p) => (
              <span
                key={p}
                className="px-3 py-1.5 border border-[var(--color-bone)]/20 rounded-sm text-[0.65rem] uppercase tracking-eyebrow text-[var(--color-bone)]/70"
              >
                {p}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs text-[var(--color-bone)]/50">
            <span>© {new Date().getFullYear()} Velmora Fine Jewelry</span>
            <span className="hidden sm:inline">·</span>
            <Link to="/privacy" className="hover:text-[var(--color-gold-soft)] transition-colors">
              Privacy
            </Link>
            <span>·</span>
            <Link to="/terms" className="hover:text-[var(--color-gold-soft)] transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}