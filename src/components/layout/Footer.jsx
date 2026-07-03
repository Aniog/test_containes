import { Link } from "react-router-dom"
import { Instagram, Facebook, Twitter } from "lucide-react"

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "Earrings", to: "/shop?category=earrings" },
      { label: "Necklaces", to: "/shop?category=necklaces" },
      { label: "Huggies", to: "/shop?category=huggies" },
      { label: "Gift Sets", to: "/shop" },
      { label: "Bestsellers", to: "/shop" },
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
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-8xl px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link to="/" className="font-serif text-3xl tracking-[0.3em] text-cream">
              VELMORA
            </Link>
            <p className="mt-5 text-sm text-cream/60 leading-relaxed max-w-xs">
              Demi-fine 18K gold plated jewelry, crafted to be treasured.
              Designed in studio, made for everyday luxury.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-cream/70 hover:text-gold transition-colors">
                <Instagram className="w-[18px] h-[18px]" />
              </a>
              <a href="#" aria-label="Facebook" className="text-cream/70 hover:text-gold transition-colors">
                <Facebook className="w-[18px] h-[18px]" />
              </a>
              <a href="#" aria-label="Twitter" className="text-cream/70 hover:text-gold transition-colors">
                <Twitter className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="text-[11px] uppercase tracking-[0.25em] text-cream/50 mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-cream/80 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Payment / trust */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-cream/50 mb-5">
              We Accept
            </h4>
            <div className="flex flex-wrap gap-2">
              {["VISA", "MC", "AMEX", "PAY"].map((p) => (
                <span
                  key={p}
                  className="text-[10px] tracking-wider text-cream/70 border border-cream/20 rounded-sm px-2 py-1"
                >
                  {p}
                </span>
              ))}
            </div>
            <p className="mt-6 text-xs text-cream/50 leading-relaxed">
              18K Gold Plated · Hypoallergenic · Nickel-Free
            </p>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-cream/50 hover:text-gold transition-colors">Privacy</a>
            <a href="#" className="text-xs text-cream/50 hover:text-gold transition-colors">Terms</a>
            <a href="#" className="text-xs text-cream/50 hover:text-gold transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
