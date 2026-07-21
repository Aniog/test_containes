import { Link } from "react-router-dom"
import { Instagram, Mail } from "lucide-react"

const columns = [
  {
    title: "Shop",
    links: [
      { to: "/shop?category=earrings", label: "Earrings" },
      { to: "/shop?category=necklaces", label: "Necklaces" },
      { to: "/shop?category=huggies", label: "Huggies" },
      { to: "/shop", label: "All Jewelry" },
    ],
  },
  {
    title: "Help",
    links: [
      { to: "#", label: "Shipping & Returns" },
      { to: "#", label: "Care Guide" },
      { to: "#", label: "Size Guide" },
      { to: "#", label: "Contact Us" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "Our Story" },
      { to: "/journal", label: "Journal" },
      { to: "#", label: "Sustainability" },
      { to: "#", label: "Press" },
    ],
  },
]

function PaymentBadge({ label }) {
  return (
    <span className="inline-flex items-center justify-center h-7 px-2.5 text-[10px] font-medium tracking-[0.15em] uppercase border border-line rounded-sm text-taupe-500">
      {label}
    </span>
  )
}

export default function Footer() {
  return (
    <footer className="bg-espresso-800 text-ivory-200">
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo + tagline */}
          <div className="md:col-span-4 space-y-6">
            <Link
              to="/"
              className="inline-block font-serif text-3xl tracking-[0.32em] text-ivory"
            >
              VELMORA
            </Link>
            <p className="text-sm leading-relaxed text-ivory-200/70 max-w-xs font-light">
              Demi-fine gold jewelry, crafted to be treasured. Designed in small
              batches. Made to last a lifetime.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="#"
                aria-label="Instagram"
                className="text-ivory-200/70 hover:text-gold-300 transition-colors"
              >
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="text-ivory-200/70 hover:text-gold-300 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14 3v10.5a3.5 3.5 0 1 1-3.5-3.5h.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14 3c.5 2.5 2.5 4 5 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="mailto:hello@velmora.com"
                aria-label="Email"
                className="text-ivory-200/70 hover:text-gold-300 transition-colors"
              >
                <Mail className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-10">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="eyebrow text-ivory-200/60 mb-5">{col.title}</h4>
                <ul className="space-y-3.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-sm text-ivory-200/85 hover:text-gold-300 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className="my-12 border-t border-ivory-200/10" />

        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-8">
          <p className="text-xs tracking-[0.15em] uppercase text-ivory-200/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <PaymentBadge label="Visa" />
            <PaymentBadge label="Mastercard" />
            <PaymentBadge label="Amex" />
            <PaymentBadge label="PayPal" />
            <PaymentBadge label="Apple Pay" />
            <PaymentBadge label="Shop Pay" />
          </div>
        </div>
      </div>
    </footer>
  )
}
