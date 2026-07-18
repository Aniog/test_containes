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
    <footer className="bg-espresso text-cream">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8">
          <div className="col-span-2">
            <Link to="/" className="font-serif text-3xl tracking-widest2 text-cream">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-cream/70 max-w-xs leading-relaxed">
              Demi-fine gold jewelry, crafted to be treasured. Designed in
              studio, made to be worn every day.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-cream/70 hover:text-gold transition-colors">
                <Instagram width={18} height={18} />
              </a>
              <a href="#" aria-label="Facebook" className="text-cream/70 hover:text-gold transition-colors">
                <Facebook width={18} height={18} />
              </a>
              <a href="#" aria-label="Twitter" className="text-cream/70 hover:text-gold transition-colors">
                <Twitter width={18} height={18} />
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-[11px] uppercase tracking-widest2 text-cream/50 mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-cream/80 hover:text-gold transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-cream/15 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {["VISA", "MC", "AMEX", "PAYPAL", "APPLE PAY"].map((p) => (
              <span
                key={p}
                className="text-[10px] tracking-widest2 text-cream/60 border border-cream/20 px-2.5 py-1.5"
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
