import { Instagram, Facebook, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerLinks = {
  Shop: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'],
  Help: ['Shipping & Returns', 'Care Guide', 'FAQ', 'Contact Us', 'Size Guide'],
  Company: ['Our Story', 'Sustainability', 'Press', 'Careers', 'Privacy Policy'],
}

export default function Footer() {
  return (
    <footer className="bg-velmora-surface border-t border-velmora-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.18em] uppercase font-semibold"
            >
              Velmora
            </Link>
            <p className="mt-4 text-sm text-velmora-muted leading-relaxed max-w-xs">
              Demi-fine jewelry, designed to be treasured. Crafted with care for
              everyday elegance.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="text-velmora-muted hover:text-velmora-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-velmora-muted hover:text-velmora-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-velmora-muted hover:text-velmora-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-velmora-text mb-5">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-velmora-muted hover:text-velmora-accent transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-velmora-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velmora-muted">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-velmora-muted">We accept</span>
            <div className="flex items-center gap-2">
              {['Visa', 'Mastercard', 'Amex', 'PayPal'].map((p) => (
                <span
                  key={p}
                  className="px-2 py-1 border border-velmora-border text-[10px] uppercase tracking-wide text-velmora-muted"
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
