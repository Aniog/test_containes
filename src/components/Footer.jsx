import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Globe } from "lucide-react";

const socialLinks = [
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "Pinterest", icon: Globe, href: "#" },
  { label: "Twitter", icon: Globe, href: "#" },
];

const footerColumns = [
  {
    title: "Shop",
    links: [
      { label: "All Jewelry", path: "/shop" },
      { label: "Earrings", path: "/shop?category=earrings" },
      { label: "Necklaces", path: "/shop?category=necklaces" },
      { label: "Huggies", path: "/shop?category=huggies" },
      { label: "Gift Sets", path: "/shop?category=sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping & Returns", path: "/shipping" },
      { label: "Care Guide", path: "/care" },
      { label: "FAQ", path: "/faq" },
      { label: "Contact Us", path: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", path: "/about" },
      { label: "Journal", path: "/journal" },
      { label: "Sustainability", path: "/sustainability" },
      { label: "Press", path: "/press" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-velmora-ebony text-velmora-warm-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl tracking-wider text-velmora-warm-white hover:opacity-80 transition-opacity"
            >
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-velmora-stone leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted to be treasured. Ethically made,
              thoughtfully designed, built to last.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-velmora-stone hover:text-velmora-gold transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs tracking-widest uppercase text-velmora-gold mb-4 font-sans">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-velmora-stone hover:text-velmora-warm-white transition-colors"
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

      {/* Bottom bar */}
      <div className="border-t border-velmora-pewter/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velmora-stone">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {/* Payment icons */}
            {["Visa", "MC", "Amex", "PayPal", "Afterpay"].map((method) => (
              <span
                key={method}
                className="text-[10px] uppercase tracking-wider text-velmora-stone/60 border border-velmora-stone/20 px-2 py-1 rounded"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}