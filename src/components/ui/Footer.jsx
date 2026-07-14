import { Link } from "react-router-dom"
import { Instagram } from "lucide-react"

const cols = [
  {
    title: "Shop",
    items: [
      { label: "Earrings", to: "/shop?cat=earrings" },
      { label: "Necklaces", to: "/shop?cat=necklaces" },
      { label: "Huggies", to: "/shop?cat=huggies" },
      { label: "Gift Sets", to: "/shop?cat=sets" },
      { label: "Bestsellers", to: "/shop?sort=bestsellers" },
    ],
  },
  {
    title: "Help",
    items: [
      { label: "Shipping & Returns", to: "#" },
      { label: "Care Guide", to: "#" },
      { label: "Sizing", to: "#" },
      { label: "Contact", to: "#" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "Our Story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "#" },
      { label: "Press", to: "#" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="container-x py-16 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-4">
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.22em] text-ivory"
              aria-label="Velmora — home"
            >
              VELMORA
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-taupe-light">
              Considered, demi-fine gold jewelry — crafted to be treasured.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-ivory transition-colors hover:text-gold"
              >
                <Instagram className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                aria-label="Pinterest"
                className="text-ivory transition-colors hover:text-gold"
              >
                <PinterestGlyph />
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="text-ivory transition-colors hover:text-gold"
              >
                <TikTokGlyph />
              </a>
            </div>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 gap-10 md:grid-cols-3 md:gap-8">
            {cols.map((col) => (
              <div key={col.title}>
                <h4 className="font-sans text-[11px] uppercase tracking-[0.22em] text-gold">
                  {col.title}
                </h4>
                <ul className="mt-5 space-y-3">
                  {col.items.map((it) => (
                    <li key={it.label}>
                      <Link
                        to={it.to}
                        className="text-sm text-ivory/80 transition-colors hover:text-gold"
                      >
                        {it.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-espresso-soft/60 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-taupe-light">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-taupe-light">
            <span>Visa</span>
            <span className="h-3 w-px bg-taupe-light/30" />
            <span>Mastercard</span>
            <span className="h-3 w-px bg-taupe-light/30" />
            <span>Amex</span>
            <span className="h-3 w-px bg-taupe-light/30" />
            <span>PayPal</span>
            <span className="h-3 w-px bg-taupe-light/30" />
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

function PinterestGlyph() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9 21l2-9" />
      <path d="M9.5 14.5c.5 1.5 1.5 2 2.5 2 2 0 3.5-1.8 3.5-4 0-2.4-1.7-4-4-4-2.5 0-4.5 1.8-4.5 4.2 0 1.2.4 2 1 2.6" />
    </svg>
  )
}

function TikTokGlyph() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 4v8.5a3.5 3.5 0 1 1-3.5-3.5" />
      <path d="M15 4c.5 2.5 2.5 4 5 4" />
    </svg>
  )
}
