import { Link } from "react-router-dom"
import { Instagram, Pin, Mail } from "lucide-react"
import Logo from "./Logo"

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { to: "/shop?cat=earrings", label: "Earrings" },
      { to: "/shop?cat=necklaces", label: "Necklaces" },
      { to: "/shop?cat=huggies", label: "Huggies" },
      { to: "/shop?cat=sets", label: "Sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { to: "#", label: "Shipping" },
      { to: "#", label: "Returns" },
      { to: "#", label: "Care Guide" },
      { to: "#", label: "Contact" },
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

const PAYMENT = ["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay", "Shop Pay"]

export default function Footer() {
  return (
    <footer className="bg-ink-deep text-bone">
      <div className="mx-auto max-w-editorial px-6 md:px-10 pt-16 md:pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-4">
            <Logo tone="bone" />
            <p
              id="footer-tagline"
              className="mt-6 text-bone/70 text-[14px] leading-relaxed max-w-sm"
            >
              Demi-fine jewelry, hand-finished in small batches. Designed to be
              worn, made to be treasured.
            </p>
            <div className="mt-6 flex items-center gap-4 text-bone/70">
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-gold transition-colors"
              >
                <Instagram className="w-[18px] h-[18px]" />
              </a>
              <a
                href="#"
                aria-label="Pinterest"
                className="hover:text-gold transition-colors"
              >
                <Pin className="w-[18px] h-[18px]" />
              </a>
              <a
                href="mailto:hello@velmora.com"
                aria-label="Email Velmora"
                className="hover:text-gold transition-colors"
              >
                <Mail className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h3 className="text-[11px] tracking-widest2 uppercase text-bone/60 font-medium">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-[14px] text-bone/85 hover:text-gold transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <h3 className="text-[11px] tracking-widest2 uppercase text-bone/60 font-medium">
              Stay in touch
            </h3>
            <p className="mt-5 text-[14px] text-bone/85 leading-relaxed">
              Quiet dispatches from the studio.
            </p>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-bone/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[12px] text-bone/55">
          <p>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-2">
            {PAYMENT.map((p) => (
              <li
                key={p}
                className="px-2 py-1 border border-bone/15 rounded text-[10px] tracking-widest2 uppercase text-bone/70"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
