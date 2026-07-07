import React from "react"
import { Link } from "react-router-dom"
import { Instagram, Mail } from "lucide-react"

const columns = [
  {
    title: "Shop",
    links: [
      { label: "All Jewelry", to: "/shop" },
      { label: "Earrings", to: "/shop?cat=earrings" },
      { label: "Necklaces", to: "/shop?cat=necklaces" },
      { label: "Huggies", to: "/shop?cat=huggies" },
      { label: "Gifts", to: "/shop?cat=sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping", to: "/help/shipping" },
      { label: "Returns", to: "/help/returns" },
      { label: "Care Guide", to: "/help/care" },
      { label: "Contact", to: "/help/contact" },
      { label: "FAQ", to: "/help/faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Sustainability", to: "/about#materials" },
      { label: "Journal", to: "/journal" },
      { label: "Press", to: "/about#press" },
      { label: "Careers", to: "/about#careers" },
    ],
  },
]

const PaymentIcon = ({ label }) => (
  <span
    className="inline-flex h-7 items-center justify-center rounded-sm border border-hairline bg-ivory px-2.5 text-[10px] font-sans tracking-[0.18em] text-muted"
    aria-label={label}
  >
    {label}
  </span>
)

const Footer = () => {
  return (
    <footer className="bg-ink text-ivory/85">
      <div className="container-wrap py-20 lg:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.32em] text-ivory"
            >
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-ivory/65 leading-relaxed max-w-xs">
              Demi-fine gold jewelry, hand-finished and made to be treasured.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/15 text-ivory/70 transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                <Instagram size={15} strokeWidth={1.5} />
              </a>
              <a
                href="mailto:hello@velmora.com"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/15 text-ivory/70 transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                <Mail size={15} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-sans uppercase tracking-[0.22em] text-[11px] text-ivory/60">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-[14px] text-ivory/80 underline-grow transition-colors duration-300 hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-ivory/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-[12px] text-ivory/55 font-sans">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <PaymentIcon label="VISA" />
            <PaymentIcon label="MC" />
            <PaymentIcon label="AMEX" />
            <PaymentIcon label="PAYPAL" />
            <PaymentIcon label="APPLE" />
            <PaymentIcon label="SHOP" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
