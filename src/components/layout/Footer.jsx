import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const shopLinks = [
  { label: 'Earrings', href: '/shop?category=earrings' },
  { label: 'Necklaces', href: '/shop?category=necklaces' },
  { label: 'Huggies', href: '/shop?category=huggies' },
  { label: 'Gift Sets', href: '/shop?category=sets' },
  { label: 'New Arrivals', href: '/shop' },
]

const helpLinks = [
  { label: 'Shipping & Returns', href: '/' },
  { label: 'Size Guide', href: '/' },
  { label: 'Care Instructions', href: '/' },
  { label: 'FAQ', href: '/' },
  { label: 'Contact Us', href: '/' },
]

const companyLinks = [
  { label: 'Our Story', href: '/#about' },
  { label: 'Sustainability', href: '/' },
  { label: 'Press', href: '/' },
  { label: 'Affiliates', href: '/' },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-obsidian text-velmora-text-light">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/">
              <span className="font-cormorant text-2xl font-light tracking-[0.25em] uppercase text-velmora-text-light">
                Velmora
              </span>
            </Link>
            <p className="font-manrope text-xs text-velmora-text-muted leading-relaxed mt-4 max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be worn every day, treasured forever.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-velmora-text-muted hover:text-velmora-gold transition-colors duration-300">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Twitter" className="text-velmora-text-muted hover:text-velmora-gold transition-colors duration-300">
                <Twitter size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-velmora-text-muted hover:text-velmora-gold transition-colors duration-300">
                <Facebook size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-manrope text-xs tracking-widest uppercase text-velmora-gold mb-5">Shop</h4>
            <ul className="flex flex-col gap-3">
              {shopLinks.map(l => (
                <li key={l.label}>
                  <Link to={l.href} className="font-manrope text-xs text-velmora-text-muted hover:text-velmora-text-light transition-colors duration-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-manrope text-xs tracking-widest uppercase text-velmora-gold mb-5">Help</h4>
            <ul className="flex flex-col gap-3">
              {helpLinks.map(l => (
                <li key={l.label}>
                  <Link to={l.href} className="font-manrope text-xs text-velmora-text-muted hover:text-velmora-text-light transition-colors duration-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-manrope text-xs tracking-widest uppercase text-velmora-gold mb-5">Company</h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map(l => (
                <li key={l.label}>
                  <Link to={l.href} className="font-manrope text-xs text-velmora-text-muted hover:text-velmora-text-light transition-colors duration-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-velmora-stone/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-manrope text-xs text-velmora-text-muted">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {/* Payment icons as text badges */}
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map(p => (
              <span key={p} className="font-manrope text-[9px] tracking-wide border border-velmora-stone/40 text-velmora-text-muted px-1.5 py-0.5">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
