import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const shopLinks = [
  { label: 'All Jewelry', href: '/shop' },
  { label: 'Earrings', href: '/shop?category=earrings' },
  { label: 'Necklaces', href: '/shop?category=necklaces' },
  { label: 'Huggies', href: '/shop?category=huggies' },
]

const helpLinks = [
  { label: 'Shipping & Returns', href: '#' },
  { label: 'Size Guide', href: '#' },
  { label: 'FAQ', href: '#' },
  { label: 'Contact Us', href: '#' },
]

const companyLinks = [
  { label: 'Our Story', href: '/#about' },
  { label: 'Journal', href: '/#journal' },
  { label: 'Sustainability', href: '#' },
  { label: 'Press', href: '#' },
]

const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay']

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-widest-2xl uppercase text-cream-100">
              Velmora
            </Link>
            <p className="text-sm text-cream-400 mt-4 max-w-xs leading-relaxed">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman — elegant, accessible, and made to last.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-cream-400 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-cream-400 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-cream-400 hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs font-medium tracking-widest uppercase text-cream-100 mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {shopLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-cream-400 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs font-medium tracking-widest uppercase text-cream-100 mb-5">
              Help
            </h4>
            <ul className="space-y-3">
              {helpLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-cream-400 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs font-medium tracking-widest uppercase text-cream-100 mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-cream-400 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-cream-600/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              {paymentIcons.map(icon => (
                <span key={icon} className="text-xs text-cream-500 border border-cream-600/30 px-2 py-1 rounded">
                  {icon}
                </span>
              ))}
            </div>
            <p className="text-xs text-cream-500">
              &copy; 2026 Velmora Fine Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
