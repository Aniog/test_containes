import { Link } from "react-router-dom"
import { Instagram, Facebook, Twitter } from "lucide-react"

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "Earrings", to: "/shop?category=earrings" },
      { label: "Necklaces", to: "/shop?category=necklaces" },
      { label: "Huggies", to: "/shop?category=huggies" },
      { label: "Gift Sets", to: "/shop?category=sets" },
      { label: "Bestsellers", to: "/shop" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping", to: "/help/shipping" },
      { label: "Returns & Exchanges", to: "/help/returns" },
      { label: "Materials & Care", to: "/help/care" },
      { label: "Contact Us", to: "/help/contact" },
      { label: "FAQ", to: "/help/faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "/about" },
      { label: "Careers", to: "/about" },
      { label: "Wholesale", to: "/about" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-serif text-3xl tracking-[0.4em] text-cream"
            >
              VELMORA
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/70">
              Demi-fine gold jewelry, crafted to be treasured. Designed in
              studio, made for everyday wear and a lifetime of gifting.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-cream/70 hover:text-champagne transition-colors">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-cream/70 hover:text-champagne transition-colors">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Twitter" className="text-cream/70 hover:text-champagne transition-colors">
                <Twitter size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-[11px] uppercase tracking-widest2 text-champagne">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-cream/70 hover:text-cream transition-colors"
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
          <p className="text-[11px] uppercase tracking-widest2 text-cream/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry
          </p>
          <div className="flex items-center gap-3">
            {["VISA", "MC", "AMEX", "PAYPAL", "APPLE PAY"].map((p) => (
              <span
                key={p}
                className="border border-cream/25 px-2.5 py-1 text-[9px] uppercase tracking-widest2 text-cream/60"
              >
                {p}
              </span>
            ))}
          </div>
          <div className="flex gap-5 text-[11px] uppercase tracking-widest2 text-cream/50">
            <Link to="/help/privacy" className="hover:text-cream">Privacy</Link>
            <Link to="/help/terms" className="hover:text-cream">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
