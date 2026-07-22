import { Link } from "react-router-dom"
import { Instagram, Send } from "lucide-react"

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { to: "/shop", label: "All Jewelry" },
      { to: "/shop?cat=earrings", label: "Earrings" },
      { to: "/shop?cat=necklaces", label: "Necklaces" },
      { to: "/shop?cat=huggies", label: "Huggies" },
      { to: "/shop", label: "Gift Sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { to: "#", label: "Contact Us" },
      { to: "#", label: "Shipping & Returns" },
      { to: "#", label: "Care Guide" },
      { to: "#", label: "Order Tracking" },
      { to: "#", label: "FAQ" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "Our Story" },
      { to: "/journal", label: "Journal" },
      { to: "#", label: "Sustainability" },
      { to: "#", label: "Press" },
      { to: "#", label: "Careers" },
    ],
  },
]

const PAYMENT_METHODS = ["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay", "Google Pay"]

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12 pt-20 md:pt-24 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Link
              to="/"
              className="font-serif text-[28px] tracking-wider3 font-semibold"
            >
              VELMORA
            </Link>
            <p className="mt-5 text-cream/60 text-sm leading-relaxed max-w-sm">
              Demi-fine jewelry, designed to be worn daily. Hand-finished in 18K gold plating, made for the women you are and the woman you're becoming.
            </p>
            <div className="mt-7 flex items-center gap-4 text-cream/80">
              <a href="#" aria-label="Instagram" className="hover:text-gold transition-colors"><Instagram size={18} strokeWidth={1.5} /></a>
              <a href="#" aria-label="Telegram" className="hover:text-gold transition-colors"><Send size={18} strokeWidth={1.5} /></a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="eyebrow text-gold-soft mb-5">{col.title}</h4>
              <ul className="space-y-3.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-cream/70 hover:text-gold-soft transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <h4 className="eyebrow text-gold-soft mb-5">Contact</h4>
            <p className="text-sm text-cream/70 leading-relaxed">
              hello@velmora.com<br />
              Mon–Fri · 9am–6pm EST
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-hairline-dark">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="text-xs text-cream/40 tracking-wider">
              © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-cream/50">
              {PAYMENT_METHODS.map((m) => (
                <li key={m} className="border border-hairline-dark px-2.5 py-1 rounded-sm tracking-wider">
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
