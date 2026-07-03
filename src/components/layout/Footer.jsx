import React from "react"
import { Link } from "react-router-dom"
import { Instagram, Mail } from "lucide-react"

const FOOTER_COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "All Jewelry", to: "/shop" },
      { label: "Earrings", to: "/shop?category=earrings" },
      { label: "Necklaces", to: "/shop?category=necklaces" },
      { label: "Huggies", to: "/shop?category=huggies" },
      { label: "Gift Sets", to: "/shop?category=earrings" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Contact Us", to: "/about" },
      { label: "Shipping & Returns", to: "/about" },
      { label: "Materials & Care", to: "/about" },
      { label: "Size Guide", to: "/about" },
      { label: "FAQ", to: "/about" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "/about" },
      { label: "Reviews", to: "/" },
    ],
  },
]

const PAYMENT_METHODS = ["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay"]

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory-50">
      <div className="container-velmora py-20 md:py-24">
        <div className="grid gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <Link
              to="/"
              className="font-serif text-2xl font-medium tracking-wider2 text-ivory"
            >
              VELMORA
            </Link>
            <p className="mt-5 max-w-[34ch] text-[14px] leading-relaxed text-ivory-300/70">
              Demi-fine gold jewelry, hand-finished in small batches.
              Crafted to be treasured, kept, and re-discovered.
            </p>
            <div className="mt-7 flex items-center gap-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center border border-ivory-300/20 text-ivory transition-colors duration-300 hover:border-champagne-300 hover:text-champagne-300 focus-ring"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href="mailto:hello@velmora.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center border border-ivory-300/20 text-ivory transition-colors duration-300 hover:border-champagne-300 hover:text-champagne-300 focus-ring"
              >
                <Mail className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 md:col-span-8 md:grid-cols-3 md:gap-8">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="font-sans text-[11px] font-medium uppercase tracking-widest2 text-champagne-200">
                  {col.title}
                </h4>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-[14px] text-ivory-300/80 transition-colors duration-300 hover:text-ivory"
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

        <div className="mt-16 border-t border-ivory-300/15 pt-8">
          <div className="flex flex-col gap-6 text-[12px] text-ivory-300/60 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
            <ul className="flex flex-wrap items-center gap-4">
              {PAYMENT_METHODS.map((m) => (
                <li
                  key={m}
                  className="rounded-sm border border-ivory-300/20 px-2.5 py-1 text-[10px] uppercase tracking-widest2"
                >
                  {m}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-5">
              <Link
                to="/about"
                className="transition-colors duration-300 hover:text-ivory"
              >
                Privacy
              </Link>
              <Link
                to="/about"
                className="transition-colors duration-300 hover:text-ivory"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
