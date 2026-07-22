import { Link } from "react-router-dom"
import { Instagram, Mail } from "lucide-react"

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { to: "/shop", label: "All Jewelry" },
      { to: "/shop?cat=earrings", label: "Earrings" },
      { to: "/shop?cat=necklaces", label: "Necklaces" },
      { to: "/shop?cat=huggies", label: "Huggies" },
      { to: "/shop?cat=sets", label: "Gift Sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { to: "/help/shipping", label: "Shipping" },
      { to: "/help/returns", label: "30-Day Returns" },
      { to: "/help/care", label: "Jewelry Care" },
      { to: "/help/faq", label: "FAQ" },
      { to: "/help/contact", label: "Contact Us" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "Our Story" },
      { to: "/journal", label: "Journal" },
      { to: "/sustainability", label: "Sustainability" },
      { to: "/press", label: "Press" },
      { to: "/careers", label: "Careers" },
    ],
  },
]

const PAYMENT_METHODS = ["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay", "Shop Pay"]

export default function Footer() {
  return (
    <footer className="bg-espresso-800 text-cream-100">
      <div className="mx-auto max-w-editorial px-5 md:px-10 pt-16 md:pt-24 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          {/* Brand block */}
          <div className="md:col-span-5">
            <Link
              to="/"
              className="font-serif text-3xl tracking-[0.18em] text-cream-50"
            >
              VELMORA
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream-100/70">
              Demi-fine gold jewelry, crafted in small batches. Designed in
              New York, made to be treasured for years to come.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream-100/20 text-cream-100/80 hover:border-gold-300 hover:text-gold-300 transition-colors"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.4} />
              </a>
              <a
                href="mailto:care@velmora.com"
                aria-label="Email us"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream-100/20 text-cream-100/80 hover:border-gold-300 hover:text-gold-300 transition-colors"
              >
                <Mail className="h-4 w-4" strokeWidth={1.4} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <p className="eyebrow text-cream-100/60">{col.title}</p>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-cream-100/80 hover:text-gold-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="md:col-span-1 md:text-right">
            <p className="eyebrow text-cream-100/60">Contact</p>
            <p className="mt-5 text-sm text-cream-100/80 leading-relaxed md:text-right">
              care@velmora.com<br />
              Mon–Fri, 9–5 EST
            </p>
          </div>
        </div>

        {/* Payment + bottom */}
        <div className="mt-16 pt-8 border-t border-cream-100/10 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-xs text-cream-100/50 tracking-wide">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-2">
            {PAYMENT_METHODS.map((m) => (
              <li
                key={m}
                className="text-[10px] tracking-widest2 uppercase rounded-sm border border-cream-100/15 px-2.5 py-1.5 text-cream-100/70"
              >
                {m}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
