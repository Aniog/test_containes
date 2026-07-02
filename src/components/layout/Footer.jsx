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
  { label: 'Privacy Policy', href: '/' },
]

export default function Footer() {
  return (
    <footer className="bg-obsidian text-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-cream/10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-cormorant text-2xl font-light tracking-[0.2em] uppercase text-cream">
              Velmora
            </Link>
            <p className="font-manrope text-xs text-cream/60 mt-4 leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be treasured, worn every day.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-cream/60 hover:text-gold transition-colors duration-300" aria-label="Instagram">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-cream/60 hover:text-gold transition-colors duration-300" aria-label="Facebook">
                <Facebook size={16} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-cream/60 hover:text-gold transition-colors duration-300" aria-label="Twitter">
                <Twitter size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-manrope text-xs uppercase tracking-[0.15em] text-cream mb-5">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="font-manrope text-xs text-cream/60 hover:text-gold transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-manrope text-xs uppercase tracking-[0.15em] text-cream mb-5">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="font-manrope text-xs text-cream/60 hover:text-gold transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-manrope text-xs uppercase tracking-[0.15em] text-cream mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="font-manrope text-xs text-cream/60 hover:text-gold transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="font-manrope text-xs text-cream/40">
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>
          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map(p => (
              <span key={p} className="font-manrope text-[10px] text-cream/40 border border-cream/20 px-2 py-1 rounded-sm">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
