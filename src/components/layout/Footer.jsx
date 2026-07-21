import React from "react"
import { Link } from "react-router-dom"
import { Instagram, Facebook, Youtube } from "lucide-react"

const columns = [
  {
    title: "Shop",
    links: [
      { to: "/shop", label: "All Jewelry" },
      { to: "/shop?cat=earrings", label: "Earrings" },
      { to: "/shop?cat=necklaces", label: "Necklaces" },
      { to: "/shop?cat=huggies", label: "Huggies" },
      { to: "/shop?type=gift", label: "Gift Sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { to: "/help/shipping", label: "Shipping" },
      { to: "/help/returns", label: "Returns" },
      { to: "/help/care", label: "Jewelry Care" },
      { to: "/help/size", label: "Size Guide" },
      { to: "/contact", label: "Contact" },
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
]

const payments = ["Visa", "Mastercard", "Amex", "Apple Pay", "PayPal"]

export default function Footer() {
  return (
    <footer className="bg-ink text-bone">
      <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12 py-16 md:py-24">
        {/* Top: brand + columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          <div className="md:col-span-5 lg:col-span-5">
            <Link
              to="/"
              className="font-serif text-3xl tracking-widest2 leading-none"
            >
              VELMORA
            </Link>
            <p className="mt-6 max-w-sm text-muted-dark text-[15px] leading-relaxed">
              Demi-fine jewelry, hand-finished in 18K gold plate. Designed in
              small batches, made to be worn, made to be treasured.
            </p>
            <div className="mt-8 flex items-center gap-5">
              <a
                href="#"
                aria-label="Instagram"
                className="text-bone/70 hover:text-champagne transition-colors duration-300"
              >
                <Instagram className="w-[18px] h-[18px]" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-bone/70 hover:text-champagne transition-colors duration-300"
              >
                <Facebook className="w-[18px] h-[18px]" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="text-bone/70 hover:text-champagne transition-colors duration-300"
              >
                <Youtube className="w-[18px] h-[18px]" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="md:col-span-2 lg:col-span-2">
              <h3 className="text-[11px] tracking-widest3 uppercase text-muted-dark mb-5">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-[14px] text-bone/80 hover:text-champagne transition-colors duration-300"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-1 lg:col-span-1" />
        </div>

        {/* Hairline */}
        <div className="my-12 h-px bg-line-dark" />

        {/* Bottom: legal + payments */}
        <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-xs text-muted-dark tracking-wide">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-2">
            {payments.map((p) => (
              <li
                key={p}
                className="px-3 py-1.5 border border-line-dark text-[10px] tracking-widest3 uppercase text-muted-dark"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
