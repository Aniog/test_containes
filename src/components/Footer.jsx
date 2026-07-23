import { Link } from "react-router-dom"
import { Instagram, Facebook, Twitter } from "lucide-react"

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "Earrings", to: "/shop?category=Earrings" },
      { label: "Necklaces", to: "/shop?category=Necklaces" },
      { label: "Huggies", to: "/shop?category=Huggies" },
      { label: "Gift Sets", to: "/shop?category=Sets" },
      { label: "Bestsellers", to: "/shop" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping", to: "/about" },
      { label: "Returns & Exchanges", to: "/about" },
      { label: "Materials & Care", to: "/about" },
      { label: "Size Guide", to: "/about" },
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
      { label: "Careers", to: "/about" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="mx-auto max-w-content px-6 py-16 md:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <Link
              to="/"
              className="font-serif text-3xl tracking-[0.3em] text-cream"
            >
              VELMORA
            </Link>
            <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-cream/70">
              Demi-fine 18K gold plated jewelry, crafted to be treasured. Designed
              in studio, made to be worn every day.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" aria-label="Instagram" className="text-cream/70 transition-colors hover:text-gold">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="text-cream/70 transition-colors hover:text-gold">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-cream/70 transition-colors hover:text-gold">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-sans text-xs uppercase tracking-widest2 text-gold">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="font-sans text-sm text-cream/70 transition-colors hover:text-cream"
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
        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-cream/15 pt-8 md:flex-row">
          <p className="font-sans text-xs text-cream/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {["VISA", "MC", "AMEX", "PAYPAL", "APPLE"].map((p) => (
              <span
                key={p}
                className="border border-cream/20 px-2.5 py-1 font-sans text-[10px] tracking-widest2 text-cream/60"
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
