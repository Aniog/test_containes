import { Link } from "react-router-dom"
import { Instagram, Facebook, Globe } from "lucide-react"

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
      { label: "Shipping & Delivery", path: "/shipping" },
      { label: "Returns & Exchanges", path: "/returns" },
      { label: "Care Guide", path: "/care" },
      { label: "FAQ", path: "/faq" },
      { label: "Contact Us", path: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", path: "/about" },
      { label: "Journal", path: "/journal" },
      { label: "Sustainability", path: "/sustainability" },
      { label: "Press", path: "/press" },
    ],
  },
]

const paymentIcons = [
  { name: "Visa", icon: "VISA" },
  { name: "Mastercard", icon: "MC" },
  { name: "Amex", icon: "AMEX" },
  { name: "PayPal", icon: "PayPal" },
  { name: "Apple Pay", icon: "Apple" },
  { name: "Klarna", icon: "Klarna" },
]

export default function Footer() {
  return (
    <footer className="bg-dark-charcoal text-ivory/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-serif text-3xl tracking-[0.2em] text-ivory font-semibold inline-block mb-5"
            >
              VELMORA
            </Link>
            <p className="text-sm text-ivory/50 leading-relaxed max-w-sm mb-6">
              Demi-fine jewelry crafted for those who treasure quiet elegance.
              Every piece is designed to be worn, loved, and passed on.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center text-ivory/50 hover:text-warm-gold hover:border-warm-gold transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center text-ivory/50 hover:text-warm-gold hover:border-warm-gold transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center text-ivory/50 hover:text-warm-gold hover:border-warm-gold transition-colors"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-ivory text-xs uppercase tracking-[0.12em] font-medium mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-ivory/50 hover:text-warm-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="hairline mt-12 mb-8 opacity-20" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-ivory/40">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {paymentIcons.map((p) => (
              <span
                key={p.name}
                className="text-[10px] tracking-[0.06em] text-ivory/40 border border-ivory/15 rounded px-2.5 py-1"
              >
                {p.icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}