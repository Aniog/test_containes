import { Link } from "react-router-dom"
import { Instagram, Facebook, Twitter, Mail } from "lucide-react"

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { to: "/shop?cat=earrings",  label: "Earrings" },
      { to: "/shop?cat=necklaces", label: "Necklaces" },
      { to: "/shop?cat=huggies",   label: "Huggies" },
      { to: "/shop?cat=sets",      label: "Gift Sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { to: "#", label: "Shipping & Returns" },
      { to: "#", label: "Care Guide" },
      { to: "#", label: "Size Guide" },
      { to: "#", label: "Contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about",   label: "Our Story" },
      { to: "/journal", label: "Journal" },
      { to: "#",        label: "Sustainability" },
      { to: "#",        label: "Press" },
    ],
  },
]

const PAYMENTS = ["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay", "Google Pay"]

export function Footer() {
  return (
    <footer className="bg-cocoa text-bone">
      <div className="max-w-editorial mx-auto px-6 md:px-10 lg:px-14 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10">
          <div className="md:col-span-4 flex flex-col gap-4">
            <Link to="/" className="font-serif text-3xl tracking-[0.32em] font-medium">
              VELMORA
            </Link>
            <p className="text-bone-200/80 text-sm max-w-xs leading-relaxed">
              Demi-fine gold jewelry, crafted to be treasured. Designed in small
              batches, made to last.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" aria-label="Instagram" className="hover:text-gold-100 transition-colors"><Instagram size={18} strokeWidth={1.4} /></a>
              <a href="#" aria-label="Facebook"  className="hover:text-gold-100 transition-colors"><Facebook  size={18} strokeWidth={1.4} /></a>
              <a href="#" aria-label="Twitter"   className="hover:text-gold-100 transition-colors"><Twitter   size={18} strokeWidth={1.4} /></a>
              <a href="#" aria-label="Email"     className="hover:text-gold-100 transition-colors"><Mail      size={18} strokeWidth={1.4} /></a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className="md:col-span-2 flex flex-col gap-3">
              <h4 className="eyebrow text-gold-100">{col.title}</h4>
              <ul className="flex flex-col gap-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-bone-200/80 text-sm hover:text-bone transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2 flex flex-col gap-3">
            <h4 className="eyebrow text-gold-100">Stay In Touch</h4>
            <p className="text-bone-200/80 text-sm leading-relaxed">
              Letters from the studio, twice a month.
            </p>
            <a
              href="#"
              className="eyebrow text-bone hover:text-gold-100 transition-colors"
            >
              hello@velmora.com →
            </a>
          </div>
        </div>

        <div className="hairline mt-16 mb-6 opacity-30" />

        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-bone-200/60 text-xs tracking-widest2 uppercase">
            © {new Date().getFullYear()} Velmora Fine Jewelry
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {PAYMENTS.map((p) => (
              <span
                key={p}
                className="text-[10px] tracking-widest2 uppercase px-2.5 py-1 border border-bone-200/20 rounded-sm text-bone-200/70"
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
