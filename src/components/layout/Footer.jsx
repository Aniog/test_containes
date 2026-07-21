import React from "react"
import { Link } from "react-router-dom"
import { Facebook, Instagram, Youtube } from "lucide-react"

const COLUMNS = [
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
      { label: "Shipping & Returns", to: "/about" },
      { label: "Materials & Care", to: "/about" },
      { label: "Size Guide", to: "/about" },
      { label: "Contact Us", to: "/about" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Collections", to: "/collections" },
      { label: "Sustainability", to: "/about" },
    ],
  },
]

function PaymentMark({ label }) {
  return (
    <span className="flex h-7 items-center border border-white/15 px-2.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#CBBEA9]">
      {label}
    </span>
  )
}

export default function Footer() {
  return (
    <footer className="bg-ink text-[#E8DFCF]">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Link to="/" className="font-serif text-2xl font-medium uppercase tracking-[0.3em]">
              Velmora
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#A99C87]">
              Demi-fine jewelry in warm 18k gold — designed to be lived in, gifted, and treasured
              for years.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-[#A99C87] transition-colors hover:text-[#E8DFCF]">
                <Instagram className="h-[18px] w-[18px]" strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-[#A99C87] transition-colors hover:text-[#E8DFCF]">
                <Facebook className="h-[18px] w-[18px]" strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="YouTube" className="text-[#A99C87] transition-colors hover:text-[#E8DFCF]">
                <Youtube className="h-[18px] w-[18px]" strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Pinterest" className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#A99C87] transition-colors hover:text-[#E8DFCF]">
                Pin
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#8D8171]">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-[#CBBEA9] transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs tracking-wide text-[#8D8171]">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <PaymentMark label="Visa" />
            <PaymentMark label="Mastercard" />
            <PaymentMark label="Amex" />
            <PaymentMark label="PayPal" />
            <PaymentMark label="Apple Pay" />
          </div>
        </div>
      </div>
    </footer>
  )
}
