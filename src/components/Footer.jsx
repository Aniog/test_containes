import { Link } from "react-router-dom"
import { Instagram, Youtube, ExternalLink } from "lucide-react"

const footerSections = [
  {
    title: "Shop",
    links: [
      { name: "All Jewelry", path: "/shop" },
      { name: "Earrings", path: "/shop?category=earrings" },
      { name: "Necklaces", path: "/shop?category=necklaces" },
      { name: "Huggies", path: "/shop?category=huggies" },
      { name: "Gift Sets", path: "/shop?category=sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "Shipping & Returns", path: "/shipping" },
      { name: "Care Guide", path: "/care" },
      { name: "FAQ", path: "/faq" },
      { name: "Contact Us", path: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "Our Story", path: "/about" },
      { name: "Journal", path: "/journal" },
      { name: "Sustainability", path: "/sustainability" },
      { name: "Careers", path: "/careers" },
    ],
  },
]

const paymentIcons = [
  "Visa", "Mastercard", "Amex", "PayPal", "Apple Pay", "Klarna"
]

export default function Footer() {
  return (
    <footer className="bg-espresso text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="font-serif text-2xl tracking-[0.15em] font-semibold">
              VELMORA
            </Link>
            <p className="text-sm text-white/60 mt-4 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted to be treasured. Each piece is designed for the modern woman who values quality, elegance, and timeless style.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-white/60 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-white/60 hover:text-gold transition-colors" aria-label="Pinterest">
                <ExternalLink className="w-4 h-4" />
              </a>
              <a href="#" className="text-white/60 hover:text-gold transition-colors" aria-label="Youtube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs uppercase tracking-[0.12em] font-medium text-white/80 mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr className="border-white/10 mt-14 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-3">
            {paymentIcons.map((icon) => (
              <span
                key={icon}
                className="text-[11px] uppercase tracking-wider text-white/40 border border-white/10 px-3 py-1.5"
              >
                {icon}
              </span>
            ))}
          </div>
          <p className="text-xs text-white/30">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}