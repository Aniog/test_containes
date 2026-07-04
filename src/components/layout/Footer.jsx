import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { toast } from "sonner";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "All Jewelry", to: "/shop" },
      { label: "Earrings", to: "/shop?category=earrings" },
      { label: "Necklaces", to: "/shop?category=necklaces" },
      { label: "Huggies", to: "/shop?category=huggies" },
      { label: "Gifting", to: "/shop?category=sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping & Returns", to: "/about" },
      { label: "Care Guide", to: "/about" },
      { label: "Contact Us", to: "/about" },
      { label: "Size Guide", to: "/about" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "/about" },
      { label: "Press", to: "/about" },
    ],
  },
];

const PAYMENTS = ["VISA", "MC", "AMEX", "PAYPAL", "APPLE PAY", "SHOP PAY"];

export default function Footer() {
  const [email, setEmail] = useState("");

  function onSubscribe(e) {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("Welcome to Velmora. Your 10% code is on its way.");
    setEmail("");
  }

  return (
    <footer className="bg-ink text-cream">
      <div className="container-editorial py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand block */}
          <div className="md:col-span-4">
            <span className="font-serif text-3xl tracking-[0.32em] text-cream">
              VELMORA
            </span>
            <p className="mt-6 text-sm text-cream/70 max-w-xs leading-relaxed">
              Crafted demi-fine 18K gold plated jewelry, designed to be worn for
              years and remembered for longer.
            </p>
            <div className="mt-8 flex items-center gap-5 text-cream/70">
              <a href="#" aria-label="Instagram" className="hover:text-gold transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-gold transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-gold transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="eyebrow text-cream/60">{col.title}</h4>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        className="text-sm text-cream/85 hover:text-gold transition-colors"
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

        <div className="hairline mt-16 mb-6 bg-cream/15" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-[11px] uppercase tracking-[0.22em] text-cream/60">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {PAYMENTS.map((p) => (
              <li
                key={p}
                className="text-[10px] uppercase tracking-[0.18em] text-cream/55 border border-cream/20 px-2.5 py-1"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
