import { Link } from "react-router-dom"
import { Instagram, Send } from "lucide-react"

const columns = [
  {
    title: "Shop",
    links: [
      { label: "All Jewelry", to: "/shop" },
      { label: "Earrings", to: "/shop?category=earrings" },
      { label: "Necklaces", to: "/shop?category=necklaces" },
      { label: "Huggies", to: "/shop?category=huggies" },
      { label: "Gift Sets", to: "/shop?category=earrings" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping", to: "/" },
      { label: "Returns", to: "/" },
      { label: "Care Guide", to: "/" },
      { label: "Contact", to: "/" },
      { label: "FAQ", to: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "/about" },
      { label: "Press", to: "/about" },
    ],
  },
]

// Tiny inline SVG payment marks (text-only, not brand logos)
function PayMark({ children }) {
  return (
    <div className="h-7 px-2.5 border border-hairline-dark text-cream/80 text-[10px] tracking-wider-2 font-medium flex items-center uppercase">
      {children}
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-ink text-cream mt-24">
      <div className="container-x py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-12">
          {/* Brand block */}
          <div className="col-span-2 md:col-span-2">
            <Link
              to="/"
              className="font-serif text-3xl tracking-wider-3 text-cream"
            >
              VELMORA
            </Link>
            <p className="mt-5 text-sm text-cream/70 max-w-xs leading-relaxed">
              Demi-fine jewelry, made to be worn — not stored. Designed in
              small batches. Crafted to last.
            </p>
            <div className="flex items-center gap-4 mt-7">
              <a
                href="#"
                aria-label="Instagram"
                className="text-cream/80 hover:text-cream transition-colors"
              >
                <Instagram className="w-5 h-5" strokeWidth={1.25} />
              </a>
              <a
                href="#"
                aria-label="Pinterest"
                className="text-cream/80 hover:text-cream transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9 21l3-9" />
                  <path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="text-cream/80 hover:text-cream transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 16a4 4 0 1 0 4-4v-8a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="label-2 text-cream/60 mb-5">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-cream/80 hover:text-cream transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="hairline-dark mt-16 mb-8" />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-2 flex-wrap">
            <PayMark>Visa</PayMark>
            <PayMark>Mastercard</PayMark>
            <PayMark>Amex</PayMark>
            <PayMark>Apple Pay</PayMark>
            <PayMark>PayPal</PayMark>
            <PayMark>Klarna</PayMark>
          </div>
          <p className="text-xs text-cream/50 tracking-wider-2 uppercase">
            © 2026 Velmora Fine Jewelry
          </p>
        </div>
      </div>
    </footer>
  )
}
