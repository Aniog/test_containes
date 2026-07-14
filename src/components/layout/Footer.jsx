import { Link } from "react-router-dom"
import { Instagram, Send } from "lucide-react"

const shopLinks = [
  { to: "/shop?category=earrings", label: "Earrings" },
  { to: "/shop?category=necklaces", label: "Necklaces" },
  { to: "/shop?category=huggies", label: "Huggies" },
  { to: "/shop?category=sets", label: "Sets" },
  { to: "/shop", label: "New In" },
]

const helpLinks = [
  { to: "/help/shipping", label: "Shipping" },
  { to: "/help/returns", label: "30-Day Returns" },
  { to: "/help/care", label: "Jewelry Care" },
  { to: "/help/size", label: "Size Guide" },
  { to: "/contact", label: "Contact Us" },
]

const companyLinks = [
  { to: "/about", label: "Our Story" },
  { to: "/journal", label: "Journal" },
  { to: "/sustainability", label: "Sustainability" },
  { to: "/careers", label: "Careers" },
  { to: "/press", label: "Press" },
]

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-wider2 text-gold-400">
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              to={l.to}
              className="text-[14px] text-ivory-50/70 transition-colors duration-300 hover:text-ivory-50"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function PaymentIcon({ label }) {
  return (
    <span className="inline-flex h-6 min-w-[40px] items-center justify-center rounded-sm border border-ivory-50/15 bg-ivory-50/5 px-1.5 text-[9px] font-semibold uppercase tracking-wider2 text-ivory-50/70">
      {label}
    </span>
  )
}

export function Footer() {
  return (
    <footer className="bg-ink-600 text-ivory-50">
      <div className="container-x py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="font-serif text-3xl tracking-wider2">VELMORA</span>
            <p className="mt-5 max-w-sm font-serif text-[18px] leading-relaxed text-ivory-50/70">
              Demi-fine gold jewelry, handcrafted and made to be lived in —
              quietly, daily, for a long time.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center border border-ivory-50/20 transition-colors duration-300 hover:border-gold-400 hover:text-gold-400"
              >
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a
                href="https://tiktok.com"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center border border-ivory-50/20 transition-colors duration-300 hover:border-gold-400 hover:text-gold-400"
              >
                <Send size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 md:col-span-7 md:grid-cols-3 md:gap-8 md:pl-6">
            <FooterColumn title="Shop" links={shopLinks} />
            <FooterColumn title="Help" links={helpLinks} />
            <FooterColumn title="Company" links={companyLinks} />
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-ivory-50/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-[12px] uppercase tracking-wider2 text-ivory-50/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry · All rights reserved
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <PaymentIcon label="Visa" />
            <PaymentIcon label="MC" />
            <PaymentIcon label="Amex" />
            <PaymentIcon label="PayPal" />
            <PaymentIcon label="Apple" />
            <PaymentIcon label="G Pay" />
          </div>
        </div>
      </div>
    </footer>
  )
}
