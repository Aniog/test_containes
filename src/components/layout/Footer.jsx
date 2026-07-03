import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const shopLinks = [
  { label: 'Earrings', to: '/shop?category=Earrings' },
  { label: 'Necklaces', to: '/shop?category=Necklaces' },
  { label: 'Huggies', to: '/shop?category=Huggies' },
  { label: 'Gift Sets', to: '/shop' },
  { label: 'New Arrivals', to: '/shop' },
]

const helpLinks = [
  { label: 'Shipping & Returns', to: '#' },
  { label: 'Care Guide', to: '#' },
  { label: 'FAQ', to: '#' },
  { label: 'Contact Us', to: '#' },
]

const companyLinks = [
  { label: 'Our Story', to: '/about' },
  { label: 'Journal', to: '/journal' },
  { label: 'Sustainability', to: '#' },
  { label: 'Careers', to: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-dark text-white/80">
      <div className="max-w-content mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] font-semibold text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, and made for everyday elegance.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-white/50 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/50 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/50 hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase font-semibold text-white mb-4">Shop</h4>
            <ul className="space-y-2">
              {shopLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-white/60 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase font-semibold text-white mb-4">Help</h4>
            <ul className="space-y-2">
              {helpLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-white/60 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-white/60 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-white/40">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
