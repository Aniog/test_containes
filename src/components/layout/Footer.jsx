import * as React from "react"
import { Link } from "react-router-dom"
import { Instagram, Facebook, Twitter } from "lucide-react"

const footerLinks = {
  Shop: ["New Arrivals", "Bestsellers", "Earrings", "Necklaces", "Huggies", "Gift Sets"],
  Help: ["Shipping & Returns", "Care Guide", "Size Guide", "Contact Us", "FAQ"],
  Company: ["Our Story", "Sustainability", "Journal", "Careers", "Press"],
}

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="inline-block font-serif text-3xl font-semibold tracking-[0.12em] text-white"
            >
              VELMORA
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-velmora-stone/80">
              Demi-fine gold jewelry, designed to be treasured. Made for everyday
              moments and the memories you carry with them.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" className="text-velmora-stone transition-colors hover:text-velmora-gold" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-velmora-stone transition-colors hover:text-velmora-gold" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-velmora-stone transition-colors hover:text-velmora-gold" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-velmora-gold">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/shop"
                      className="text-sm text-velmora-stone/80 transition-colors hover:text-white"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-velmora-stone/60">
              © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-3 text-xs text-velmora-stone/60">
              <span>Visa</span>
              <span>Mastercard</span>
              <span>Amex</span>
              <span>PayPal</span>
              <span>Apple Pay</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
