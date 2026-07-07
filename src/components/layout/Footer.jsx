import React from "react"
import { Link } from "react-router-dom"
import { Instagram, Facebook, Twitter } from "lucide-react"

const columns = [
  {
    title: "Shop",
    links: [
      { label: "Earrings", to: "/shop?category=earrings" },
      { label: "Necklaces", to: "/shop?category=necklaces" },
      { label: "Huggies", to: "/shop?category=huggies" },
      { label: "Bestsellers", to: "/shop" },
      { label: "Gift Sets", to: "/shop" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping", to: "/about" },
      { label: "Returns & Exchanges", to: "/about" },
      { label: "Materials & Care", to: "/about" },
      { label: "Contact Us", to: "/about" },
      { label: "FAQ", to: "/about" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "/about" },
      { label: "Wholesale", to: "/about" },
      { label: "Careers", to: "/about" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="container-editorial py-16 md:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p className="font-serif text-3xl tracking-[0.3em] text-ivory">
              VELMORA
            </p>
            <p className="mt-4 max-w-xs font-serif text-lg italic text-ivory/70">
              Demi-fine gold jewelry, crafted to be treasured.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-ivory/70 transition-colors hover:text-gold-light"
              >
                <Instagram className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-ivory/70 transition-colors hover:text-gold-light"
              >
                <Facebook className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-ivory/70 transition-colors hover:text-gold-light"
              >
                <Twitter className="h-5 w-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-sans text-xs uppercase tracking-widest text-gold-light">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-ivory/70 transition-colors hover:text-ivory"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-ivory/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-xs text-ivory/50">
              © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              {["VISA", "MC", "AMEX", "PAYPAL", "APPLE"].map((p) => (
                <span
                  key={p}
                  className="rounded border border-ivory/20 px-2.5 py-1 font-sans text-[10px] tracking-widest text-ivory/60"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
