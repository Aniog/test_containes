import { Link } from "react-router-dom"
import { Instagram, Facebook, Twitter } from "lucide-react"

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "Earrings", to: "/shop?category=Earrings" },
      { label: "Necklaces", to: "/shop?category=Necklaces" },
      { label: "Huggies", to: "/shop?category=Huggies" },
      { label: "Gift Sets", to: "/shop" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping", to: "/about" },
      { label: "Returns", to: "/about" },
      { label: "Materials & Care", to: "/about" },
      { label: "Contact", to: "/about" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "/about" },
      { label: "Stockists", to: "/about" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="max-w-8xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <span className="font-serif text-3xl tracking-[0.25em] text-ivory">VELMORA</span>
            <p className="mt-4 text-sm text-ivory/60 max-w-xs leading-relaxed">
              Demi-fine 18K gold plated jewelry, crafted to be treasured. Designed
              in studio, made to be worn every day.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-ivory/70 hover:text-gold transition-colors">
                <Instagram className="w-[18px] h-[18px]" />
              </a>
              <a href="#" aria-label="Facebook" className="text-ivory/70 hover:text-gold transition-colors">
                <Facebook className="w-[18px] h-[18px]" />
              </a>
              <a href="#" aria-label="Twitter" className="text-ivory/70 hover:text-gold transition-colors">
                <Twitter className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="text-[11px] uppercase tracking-widest3 text-gold-light font-medium mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-ivory/70 hover:text-ivory transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Payment + note */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] uppercase tracking-widest3 text-gold-light font-medium mb-4">
              We Accept
            </h4>
            <div className="flex flex-wrap gap-2">
              {["VISA", "MC", "AMEX", "PAY"].map((p) => (
                <span
                  key={p}
                  className="text-[10px] tracking-wider text-ivory/80 border border-ivory/25 rounded-sm px-2 py-1"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-ivory/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-ivory/50 hover:text-ivory transition-colors">Privacy</a>
            <a href="#" className="text-xs text-ivory/50 hover:text-ivory transition-colors">Terms</a>
            <a href="#" className="text-xs text-ivory/50 hover:text-ivory transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
