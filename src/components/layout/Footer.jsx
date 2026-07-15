import { Link } from "react-router-dom"
import { Instagram, Facebook, Twitter } from "lucide-react"

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "Earrings", to: "/shop?category=Earrings" },
      { label: "Necklaces", to: "/shop?category=Necklaces" },
      { label: "Huggies", to: "/shop?category=Huggies" },
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
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "/about" },
      { label: "Careers", to: "/about" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-3xl tracking-widest2 text-cream">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-muted-dark leading-relaxed max-w-xs">
              Demi-fine gold jewelry, crafted to be treasured. Designed in
              studio, made for everyday luxury.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-muted-dark hover:text-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="text-muted-dark hover:text-gold transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="text-muted-dark hover:text-gold transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs uppercase tracking-widest2 text-gold-soft mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-muted-dark hover:text-cream transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-dark tracking-wide">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {["VISA", "MC", "AMEX", "PAYPAL", "APPLE"].map((p) => (
              <span
                key={p}
                className="text-[10px] tracking-widest2 text-muted-dark border border-cream/15 rounded px-2 py-1"
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
