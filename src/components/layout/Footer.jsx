import { Link } from "react-router-dom"
import { Instagram, Facebook, Youtube, Globe } from "lucide-react"

const footerLinks = {
  Shop: ["All Jewelry", "Earrings", "Necklaces", "Huggies", "Gift Sets"],
  Help: ["Shipping & Returns", "Care Guide", "FAQ", "Size Guide", "Contact"],
  Company: ["Our Story", "Journal", "Sustainability", "Careers", "Press"],
}

const payments = [
  "Visa",
  "Mastercard",
  "Amex",
  "PayPal",
  "Afterpay",
  "Klarna",
]

export default function Footer() {
  return (
    <footer className="bg-midnight-950 text-velvet-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
        {/* Top */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Logo + social */}
          <div className="col-span-2 lg:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl tracking-wider text-velvet-100 block mb-4"
            >
              VELMORA
            </Link>
            <p className="text-xs text-velvet-300 leading-relaxed mb-4 max-w-[220px]">
              Demi-fine gold jewelry crafted to be treasured. Ethical, accessible,
              undeniably beautiful.
            </p>
            <div className="flex gap-3">
              {[Instagram, Globe, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-full border border-velvet-700 flex items-center justify-center hover:border-velvet-400 transition-colors"
                  aria-label="Social link"
                >
                  <Icon size={14} className="text-velvet-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs tracking-widest uppercase text-velvet-300 mb-3">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-velvet-400 hover:text-velvet-100 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="hairline bg-velvet-800/50 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velvet-500">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-velvet-500 tracking-wide">
              We accept
            </span>
            <div className="flex gap-2">
              {payments.map((p) => (
                <span
                  key={p}
                  className="text-[10px] tracking-wider px-2 py-1 border border-velvet-800 text-velvet-400 rounded"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}