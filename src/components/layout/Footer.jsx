import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube } from "lucide-react";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { to: "/shop?category=earrings", label: "Earrings" },
      { to: "/shop?category=necklaces", label: "Necklaces" },
      { to: "/shop?category=huggies", label: "Huggies" },
      { to: "/shop?collection=bestsellers", label: "Bestsellers" },
      { to: "/shop?collection=new", label: "New Arrivals" },
    ],
  },
  {
    title: "Help",
    links: [
      { to: "/help/shipping", label: "Shipping & Delivery" },
      { to: "/help/returns", label: "Returns & Exchanges" },
      { to: "/help/care", label: "Jewelry Care" },
      { to: "/help/sizing", label: "Sizing Guide" },
      { to: "/help/contact", label: "Contact Us" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "Our Story" },
      { to: "/about/sustainability", label: "Sustainability" },
      { to: "/journal", label: "Journal" },
      { to: "/about/press", label: "Press" },
      { to: "/about/careers", label: "Careers" },
    ],
  },
];

const PAYMENT_METHODS = ["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay", "Klarna"];

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-cream">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
          {/* Brand */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <Link
              to="/"
              className="font-serif text-3xl tracking-[0.35em] font-light text-velmora-cream"
            >
              VELMORA
            </Link>
            <p className="text-[14px] leading-relaxed text-velmora-cream/70 max-w-sm">
              Demi-fine jewelry, crafted with care in small batches. 18k gold plated, hypoallergenic, made to be worn every day.
            </p>
            <div className="flex items-center gap-5 pt-2">
              <a href="#" aria-label="Instagram" className="text-velmora-cream/80 hover:text-velmora-gold transition-colors">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-velmora-cream/80 hover:text-velmora-gold transition-colors">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="YouTube" className="text-velmora-cream/80 hover:text-velmora-gold transition-colors">
                <Youtube size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Columns */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-10">
            {COLUMNS.map((col) => (
              <div key={col.title} className="flex flex-col gap-4">
                <h4 className="text-[11px] uppercase tracking-[0.32em] text-velmora-cream">
                  {col.title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        className="text-[13px] text-velmora-cream/70 hover:text-velmora-gold transition-colors"
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

        {/* Hairline */}
        <div className="mt-16 pt-6 border-t border-velmora-cream/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-[11px] uppercase tracking-[0.24em] text-velmora-cream/60">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            {PAYMENT_METHODS.map((method) => (
              <span
                key={method}
                className="px-2.5 py-1 border border-velmora-cream/20 text-[10px] uppercase tracking-[0.18em] text-velmora-cream/70"
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
