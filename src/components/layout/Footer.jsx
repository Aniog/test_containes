import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const footerLinks = {
  Shop: [
    { label: 'All Jewelry', href: '/shop' },
    { label: 'Earrings', href: '/shop' },
    { label: 'Necklaces', href: '/shop' },
    { label: 'Huggies', href: '/shop' },
    { label: 'Gift Sets', href: '/shop' },
  ],
  Help: [
    { label: 'Shipping & Returns', href: '#' },
    { label: 'Size Guide', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Contact Us', href: '#' },
  ],
  Company: [
    { label: 'Our Story', href: '/#about' },
    { label: 'Journal', href: '/#journal' },
    { label: 'Press', href: '#' },
    { label: 'Careers', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.15em] font-medium text-white block mb-4"
            >
              VELMORA
            </Link>
            <p className="text-sm text-white/50 leading-relaxed mb-6 max-w-[240px]">
              Crafted to be treasured. Demi-fine gold jewelry for the modern woman.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="text-white/40 hover:text-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="text-white/40 hover:text-gold transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="text-white/40 hover:text-gold transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-white/60 mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/40 hover:text-gold transition-colors duration-300"
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
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-white/20 text-[10px] uppercase tracking-wider">
            <span>Visa</span>
            <span>·</span>
            <span>Mastercard</span>
            <span>·</span>
            <span>Amex</span>
            <span>·</span>
            <span>PayPal</span>
            <span>·</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
