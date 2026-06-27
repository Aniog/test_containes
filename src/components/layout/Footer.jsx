import { Link } from "react-router-dom"
import { Instagram, Mail } from "lucide-react"

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { to: "/shop", label: "All Pieces" },
      { to: "/shop?category=earrings", label: "Earrings" },
      { to: "/shop?category=necklaces", label: "Necklaces" },
      { to: "/shop?category=huggies", label: "Huggies" },
      { to: "/shop?category=earrings", label: "Gift Sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { to: "/about", label: "Contact Us" },
      { to: "/about", label: "Shipping" },
      { to: "/about", label: "Returns & Exchanges" },
      { to: "/about", label: "Care Guide" },
      { to: "/about", label: "FAQ" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "Our Story" },
      { to: "/journal", label: "Journal" },
      { to: "/about", label: "Sustainability" },
      { to: "/about", label: "Press" },
      { to: "/about", label: "Careers" },
    ],
  },
]

function PaymentBadge({ label }) {
  return (
    <span className="inline-flex h-7 min-w-[44px] items-center justify-center rounded-sm border border-hairline px-2 text-[10px] tracking-[0.18em] uppercase text-espresso-soft">
      {label}
    </span>
  )
}

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand block */}
          <div className="md:col-span-4">
            <Link to="/" className="font-serif text-2xl tracking-[0.32em]">
              VELMORA
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-ivory/70 max-w-[320px]">
              Demi-fine jewelry designed for the everyday and the heirloom. Quietly made,
              meant to be lived in.
            </p>
            <div className="mt-6 flex items-center gap-4 text-ivory/70">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold-soft transition-colors"
                aria-label="Velmora on Instagram"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a
                href="mailto:hello@velmora.com"
                className="hover:text-gold-soft transition-colors"
                aria-label="Email Velmora"
              >
                <Mail size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-10">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="eyebrow !text-gold-soft">{col.title}</h4>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-sm text-ivory/80 hover:text-ivory transition-colors"
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

        <div className="mt-16 border-t border-ivory/15 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-[11px] tracking-[0.22em] uppercase text-ivory/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry
          </p>
          <div className="flex items-center gap-2">
            <PaymentBadge label="Visa" />
            <PaymentBadge label="MC" />
            <PaymentBadge label="Amex" />
            <PaymentBadge label="PayPal" />
            <PaymentBadge label="Apple" />
          </div>
        </div>
      </div>
    </footer>
  )
}