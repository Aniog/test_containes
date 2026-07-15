import { Link } from "react-router-dom"
import { Instagram, Mail } from "lucide-react"

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
      { to: "/help/returns", label: "Returns" },
      { to: "/help/care", label: "Jewelry Care" },
      { to: "/help/sizing", label: "Size Guide" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "Our Story" },
      { to: "/sustainability", label: "Sustainability" },
      { to: "/journal", label: "Journal" },
      { to: "/press", label: "Press" },
      { to: "/careers", label: "Careers" },
    ],
  },
]

function PaymentIcon({ children, label }) {
  return (
    <span
      className="flex h-6 w-10 items-center justify-center rounded-[3px] border border-onNight/20 px-1.5 text-[8px] font-semibold uppercase tracking-[0.18em] text-onNight/70"
      aria-label={label}
    >
      {children}
    </span>
  )
}

export default function Footer() {
  return (
    <footer className="bg-night text-onNight">
      <div className="container-content py-20 md:py-28">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <Link
              to="/"
              className="font-serif text-3xl tracking-[0.34em] text-onNight"
            >
              VELMORA
            </Link>
            <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-onNight-soft">
              Demi-fine 18K gold plated jewelry, hand-finished in small batches.
              Designed to be worn, gifted, and treasured.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram"
                className="text-onNight/70 transition-colors duration-300 hover:text-gold"
              >
                <Instagram className="h-[18px] w-[18px]" strokeWidth={1.4} />
              </a>
              <a
                href="mailto:hello@velmora.com"
                aria-label="Email"
                className="text-onNight/70 transition-colors duration-300 hover:text-gold"
              >
                <Mail className="h-[18px] w-[18px]" strokeWidth={1.4} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 md:col-span-7 md:grid-cols-3 md:gap-6">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-onNight">
                  {col.title}
                </h4>
                <ul className="mt-6 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-sm font-light text-onNight-soft transition-colors duration-300 hover:text-gold"
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

        <div className="mt-20 hairline-dark" />

        <div className="mt-8 flex flex-col items-start justify-between gap-6 text-[11px] font-medium uppercase tracking-[0.22em] text-onNight-soft md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Velmora Fine Jewelry</p>
          <div className="flex flex-wrap items-center gap-2">
            <PaymentIcon label="Visa">VISA</PaymentIcon>
            <PaymentIcon label="Mastercard">MC</PaymentIcon>
            <PaymentIcon label="American Express">AMEX</PaymentIcon>
            <PaymentIcon label="Apple Pay">PAY</PaymentIcon>
            <PaymentIcon label="PayPal">PYPL</PaymentIcon>
            <PaymentIcon label="Klarna">KLAR</PaymentIcon>
          </div>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="hover:text-gold">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-gold">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
