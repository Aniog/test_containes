import { Link } from "react-router-dom"
import { Instagram, Facebook, Twitter } from "lucide-react"

const columns = [
  {
    title: "Shop",
    links: [
      { label: "Earrings", to: "/shop?category=Earrings" },
      { label: "Necklaces", to: "/shop?category=Necklaces" },
      { label: "Huggies", to: "/shop?category=Huggies" },
      { label: "Gift Sets", to: "/shop?category=Sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping", to: "/about" },
      { label: "Returns & Exchanges", to: "/about" },
      { label: "Materials & Care", to: "/about" },
      { label: "Contact Us", to: "/about" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "/about" },
      { label: "Wholesale", to: "/about" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-cream-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h2 className="font-serif text-3xl tracking-widest2 text-cream-50">
              VELMORA
            </h2>
            <p className="mt-4 text-sm text-ink-300 leading-relaxed max-w-xs">
              Demi-fine gold jewelry, crafted to be treasured. Designed in
              studio, made to be worn every day.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-ink-300 hover:text-gold-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-ink-300 hover:text-gold-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-ink-300 hover:text-gold-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs uppercase tracking-widest2 font-semibold text-gold-400 mb-5">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-ink-200 hover:text-cream-50 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Payment + legal */}
        <div className="mt-14 pt-8 border-t border-ink-700/60 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-ink-400 tracking-wide">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {["VISA", "MC", "AMEX", "PAYPAL", "APPLE"].map((p) => (
              <span
                key={p}
                className="text-[10px] font-semibold tracking-wider text-ink-300 border border-ink-700 rounded px-2 py-1"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
