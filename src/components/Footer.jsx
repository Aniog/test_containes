import { Link } from "react-router-dom"
import { Instagram, Facebook, Twitter } from "lucide-react"

const footerLinks = {
  Shop: ["Earrings", "Necklaces", "Huggies", "Gift Sets", "New Arrivals"],
  Help: ["Shipping & Returns", "Care Guide", "FAQ", "Contact Us"],
  Company: ["Our Story", "Sustainability", "Careers", "Press"],
}

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-divider">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          <div className="col-span-2 md:col-span-2">
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.18em] text-cream uppercase"
            >
              Velmora
            </Link>
            <p className="mt-4 text-sm text-cream-muted max-w-xs">
              Demi-fine gold jewelry designed to be worn, loved, and treasured
              for years to come.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-cream-muted hover:text-champagne transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-cream-muted hover:text-champagne transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-cream-muted hover:text-champagne transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs uppercase tracking-[0.15em] text-cream mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/shop"
                      className="text-sm text-cream-muted hover:text-champagne transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 pt-8 border-t border-divider flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-muted">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-cream-muted">
            <span className="px-2 py-1 border border-divider">Visa</span>
            <span className="px-2 py-1 border border-divider">Mastercard</span>
            <span className="px-2 py-1 border border-divider">Amex</span>
            <span className="px-2 py-1 border border-divider">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
