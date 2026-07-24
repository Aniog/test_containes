import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";
import Container from "@/components/common/Container";
import Logo from "@/components/common/Logo";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { to: "/shop", label: "All Jewelry" },
      { to: "/shop?cat=earrings", label: "Earrings" },
      { to: "/shop?cat=necklaces", label: "Necklaces" },
      { to: "/shop?cat=huggies", label: "Huggies" },
      { to: "/shop?cat=sets", label: "Gifts" },
    ],
  },
  {
    title: "Help",
    links: [
      { to: "/help/shipping", label: "Shipping" },
      { to: "/help/returns", label: "Returns & Exchanges" },
      { to: "/help/care", label: "Jewelry Care" },
      { to: "/help/faq", label: "FAQ" },
      { to: "/help/contact", label: "Contact Us" },
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

const SOCIALS = [
  { Icon: Instagram, label: "Instagram", href: "#" },
  { Icon: Facebook,  label: "Facebook",  href: "#" },
  { Icon: Youtube,   label: "YouTube",   href: "#" },
  { Icon: Twitter,   label: "Twitter",   href: "#" },
];

const PAYMENT = ["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay", "Klarna"];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream mt-24">
      <Container className="pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Logo invert size="lg" />
            <p className="mt-6 text-sm text-cream/70 max-w-sm leading-relaxed">
              Demi-fine 18K gold plated jewelry, crafted to be treasured. Designed
              in small batches, worn every day.
            </p>

            <div className="mt-8 flex items-center gap-4">
              {SOCIALS.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-2 border border-cream/20 rounded-full hover:border-gold hover:text-gold transition-colors"
                >
                  <Icon size={16} strokeWidth={1.4} />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="label-eyebrow text-gold-pale mb-5">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-cream/80 hover:text-gold-pale transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-1" />
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-2">
            {PAYMENT.map((p) => (
              <span
                key={p}
                className="text-[10px] tracking-[0.18em] uppercase px-3 py-1.5 border border-cream/15 text-cream/70 rounded-sm"
              >
                {p}
              </span>
            ))}
          </div>
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            <span className="hidden md:inline"> · </span>
            <Link to="/privacy" className="hover:text-cream/80 ml-1">Privacy</Link>
            <span className="mx-2">·</span>
            <Link to="/terms" className="hover:text-cream/80">Terms</Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}
