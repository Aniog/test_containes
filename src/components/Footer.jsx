import { Link } from "react-router-dom"
import { Instagram } from "lucide-react"

function PinterestIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  )
}

function XIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const footerLinks = {
  Shop: [
    { label: "All Jewelry", path: "/shop" },
    { label: "Earrings", path: "/shop?category=earrings" },
    { label: "Necklaces", path: "/shop?category=necklaces" },
    { label: "Huggies", path: "/shop?category=huggies" },
    { label: "Gift Sets", path: "/shop?category=sets" },
  ],
  Help: [
    { label: "Shipping & Delivery", path: "/shipping" },
    { label: "Returns & Exchanges", path: "/returns" },
    { label: "FAQ", path: "/faq" },
    { label: "Size Guide", path: "/size-guide" },
    { label: "Track Order", path: "/track" },
  ],
  Company: [
    { label: "About Us", path: "/about" },
    { label: "Our Story", path: "/story" },
    { label: "Journal", path: "/journal" },
    { label: "Careers", path: "/careers" },
    { label: "Contact", path: "/contact" },
  ],
}

const paymentIcons = [
  "Visa",
  "Mastercard",
  "Amex",
  "PayPal",
  "Apple Pay",
  "Shop Pay",
]

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl font-semibold tracking-[0.15em] text-brand-white inline-block mb-4">
              VELMORA
            </Link>
            <p className="text-brand-stone text-sm leading-relaxed max-w-sm mb-6">
              Demi-fine jewelry crafted for the modern woman. Each piece is designed to be treasured, worn daily, and passed down.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-brand-stone hover:text-brand-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-stone hover:text-brand-gold transition-colors" aria-label="Pinterest">
                <PinterestIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-stone hover:text-brand-gold transition-colors" aria-label="X">
                <XIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-sans font-semibold uppercase tracking-[0.15em] text-brand-gold mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-brand-stone hover:text-brand-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-brand-charcoal">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 flex-wrap justify-center">
              {paymentIcons.map((icon) => (
                <span
                  key={icon}
                  className="text-xs text-brand-stone font-sans uppercase tracking-wider border border-brand-charcoal px-3 py-1.5 rounded"
                >
                  {icon}
                </span>
              ))}
            </div>
            <p className="text-xs text-brand-stone font-sans">
              &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}