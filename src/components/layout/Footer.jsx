import { Link } from "react-router-dom"
import { Instagram } from "lucide-react"

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { to: "/shop", label: "All Jewelry" },
      { to: "/shop?category=earrings", label: "Earrings" },
      { to: "/shop?category=necklaces", label: "Necklaces" },
      { to: "/shop?category=huggies", label: "Huggies" },
      { to: "/shop?category=sets", label: "Gift Sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { to: "/help/shipping", label: "Shipping" },
      { to: "/help/returns", label: "30-Day Returns" },
      { to: "/help/care", label: "Jewelry Care" },
      { to: "/help/size", label: "Size Guide" },
      { to: "/contact", label: "Contact Us" },
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

const PAYMENT_METHODS = ["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay", "Google Pay"]

export default function Footer() {
  return (
    <footer className="bg-ink text-bone/80 mt-24">
      <div className="container-editorial py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-4">
            <Link to="/" className="font-serif text-2xl tracking-wider2 text-bone">VELMORA</Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-bone/65 font-sans">
              Demi-fine jewelry designed in-studio and finished by hand. Made to be worn every day, gifted without occasion, and treasured for years.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Velmora on Instagram"
                className="h-10 w-10 rounded-full border border-bone/20 inline-flex items-center justify-center text-bone/80 hover:text-bone hover:border-bone/60 transition-colors"
              >
                <Instagram size={16} strokeWidth={1.4} />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Velmora on Pinterest"
                className="h-10 w-10 rounded-full border border-bone/20 inline-flex items-center justify-center text-bone/80 hover:text-bone hover:border-bone/60 transition-colors text-[11px] tracking-product"
              >
                PIN
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Velmora on TikTok"
                className="h-10 w-10 rounded-full border border-bone/20 inline-flex items-center justify-center text-bone/80 hover:text-bone hover:border-bone/60 transition-colors text-[11px] tracking-product"
              >
                TT
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="text-[0.7rem] uppercase tracking-eyebrow text-bone/60 mb-5 font-sans">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm font-sans text-bone/75 hover:text-bone transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <h4 className="text-[0.7rem] uppercase tracking-eyebrow text-bone/60 mb-5 font-sans">
              Visit
            </h4>
            <p className="text-sm text-bone/75 leading-relaxed font-sans">
              Velmora Atelier<br />
              14 Rue des Fleurs<br />
              Paris, 75004
            </p>
            <p className="text-sm text-bone/60 mt-3 font-sans">By appointment only.</p>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-bone/15 flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-5">
          <p className="text-[11px] text-bone/55 tracking-wide font-sans">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center flex-wrap gap-2 text-[10px] uppercase tracking-eyebrow text-bone/55 font-sans">
            {PAYMENT_METHODS.map((m) => (
              <span key={m} className="px-2.5 py-1 border border-bone/15 rounded-sm">
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
