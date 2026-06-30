import React from "react"
import { Link } from "react-router-dom"
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react"

const SHOP = [
  { to: "/shop?category=earrings", label: "Earrings" },
  { to: "/shop?category=necklaces", label: "Necklaces" },
  { to: "/shop?category=huggies", label: "Huggies" },
  { to: "/shop?category=sets", label: "Gift Sets" },
  { to: "/shop", label: "New Arrivals" },
]

const HELP = [
  { to: "#", label: "Shipping & Returns" },
  { to: "#", label: "Care Guide" },
  { to: "#", label: "Size Guide" },
  { to: "#", label: "Order Tracking" },
  { to: "#", label: "Contact Us" },
]

const COMPANY = [
  { to: "/about", label: "Our Story" },
  { to: "/journal", label: "Journal" },
  { to: "#", label: "Sustainability" },
  { to: "#", label: "Press" },
  { to: "#", label: "Careers" },
]

const SOCIAL = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
]

function Column({ title, links }) {
  return (
    <div>
      <h4 className="kicker kicker-on-dark mb-5">{title}</h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.to}
              className="font-serif text-[17px] text-bone-soft hover:text-bone transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-noir text-bone">
      <div className="mx-auto max-w-page px-6 md:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.32em] text-bone inline-block"
            >
              VELMORA
            </Link>
            <p className="mt-5 max-w-sm font-serif text-[17px] leading-relaxed text-bone-soft">
              Demi-fine jewelry designed to be worn, gifted, and kept. Hand-finished in 18K gold plating.
            </p>
            <div className="mt-6 flex items-center gap-5">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="text-bone-soft hover:text-bone transition-colors"
                >
                  <s.icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <Column title="Shop" links={SHOP} />
          </div>
          <div className="md:col-span-2">
            <Column title="Help" links={HELP} />
          </div>
          <div className="md:col-span-2">
            <Column title="Company" links={COMPANY} />
          </div>

          <div className="md:col-span-2">
            <h4 className="kicker kicker-on-dark mb-5">Contact</h4>
            <p className="font-serif text-[17px] text-bone-soft leading-relaxed">
              hello@velmora.co
            </p>
            <p className="mt-2 font-serif text-[17px] text-bone-soft leading-relaxed">
              Mon–Fri · 9am–6pm GMT
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-bone-soft/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="font-sans text-xs tracking-[0.18em] text-bone-soft uppercase">
            © {new Date().getFullYear()} Velmora Fine Jewelry
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            {["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay"].map((p) => (
              <span
                key={p}
                className="inline-flex items-center justify-center border border-bone-soft/30 px-2.5 py-1 font-sans text-[10px] tracking-[0.2em] uppercase text-bone-soft"
              >
                {p}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="font-sans text-[11px] tracking-[0.24em] uppercase text-bone-soft hover:text-bone">
              Privacy
            </a>
            <a href="#" className="font-sans text-[11px] tracking-[0.24em] uppercase text-bone-soft hover:text-bone">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
