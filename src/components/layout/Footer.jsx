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
      { label: "Careers", to: "/about" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2">
            <p className="font-serif text-3xl tracking-[0.25em]">VELMORA</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone">
              Demi-fine gold jewelry, crafted to be treasured. Designed in
              studio, made to be worn every day.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-stone transition-colors hover:text-champagne"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-stone transition-colors hover:text-champagne"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-stone transition-colors hover:text-champagne"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-xs uppercase tracking-[0.18em] text-champagne">
                {col.title}
              </p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-stone transition-colors hover:text-cream"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-cream/15 pt-8 md:flex-row">
          <p className="text-xs text-stone">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {["VISA", "MC", "AMEX", "PAYPAL", "APPLE"].map((p) => (
              <span
                key={p}
                className="rounded-sm border border-cream/20 px-2.5 py-1 text-[10px] tracking-wider text-stone"
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
