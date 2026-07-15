import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const shopLinks = [
  { label: 'Earrings', path: '/shop?category=earrings' },
  { label: 'Necklaces', path: '/shop?category=necklaces' },
  { label: 'Huggies', path: '/shop?category=huggies' },
  { label: 'Gift Sets', path: '/shop' },
  { label: 'New Arrivals', path: '/shop' },
]

const helpLinks = [
  { label: 'Shipping Info', path: '#' },
  { label: 'Returns & Exchanges', path: '#' },
  { label: 'Care Guide', path: '#' },
  { label: 'FAQ', path: '#' },
  { label: 'Contact Us', path: '#' },
]

const companyLinks = [
  { label: 'Our Story', path: '/about' },
  { label: 'Journal', path: '/journal' },
  { label: 'Sustainability', path: '#' },
  { label: 'Press', path: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-espresso text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-light tracking-wider">
              VELMORA
            </Link>
            <p className="font-sans text-sm text-brand-soft-gray mt-4 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, and made for everyday elegance.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-brand-soft-gray hover:text-brand-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-soft-gray hover:text-brand-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-soft-gray hover:text-brand-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-sans text-[11px] uppercase tracking-extra-wide text-brand-gold mb-5">
              Shop
            </h3>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="font-sans text-sm text-brand-soft-gray hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-sans text-[11px] uppercase tracking-extra-wide text-brand-gold mb-5">
              Help
            </h3>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="font-sans text-sm text-brand-soft-gray hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-sans text-[11px] uppercase tracking-extra-wide text-brand-gold mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="font-sans text-sm text-brand-soft-gray hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-brand-soft-gray">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="font-sans text-xs text-brand-soft-gray">Visa</span>
            <span className="font-sans text-xs text-brand-soft-gray">Mastercard</span>
            <span className="font-sans text-xs text-brand-soft-gray">Amex</span>
            <span className="font-sans text-xs text-brand-soft-gray">PayPal</span>
            <span className="font-sans text-xs text-brand-soft-gray">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
