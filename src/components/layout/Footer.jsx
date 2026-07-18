import { Link } from "react-router-dom"
import { Instagram, Facebook, Twitter } from "lucide-react"

const columns = [
  {
    title: "Shop",
    links: [
      { label: "All Jewelry", to: "/shop" },
      { label: "Earrings", to: "/shop?category=earrings" },
      { label: "Necklaces", to: "/shop?category=necklaces" },
      { label: "Huggies", to: "/shop?category=huggies" },
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
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-serif text-3xl tracking-[0.3em] text-cream"
            >
              VELMORA
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
              Demi-fine gold jewelry, crafted to be treasured. Designed in
              studio, made to be worn every day.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-cream/70 transition-colors hover:text-champagne"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-cream/70 transition-colors hover:text-champagne"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-cream/70 transition-colors hover:text-champagne"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-sans text-[11px] uppercase tracking-[0.25em] text-champagne">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-cream/70 transition-colors hover:text-champagne"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-cream/10 pt-8 md:flex-row">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {["VISA", "MC", "AMEX", "PAYPAL", "APPLE PAY"].map((p) => (
              <span
                key={p}
                className="rounded-sm border border-cream/20 px-2 py-1 text-[10px] uppercase tracking-[0.1em] text-cream/60"
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
