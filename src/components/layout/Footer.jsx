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
  { label: 'Shipping & Returns', href: '/help' },
  { label: 'Size Guide', href: '/help' },
  { label: 'Care Instructions', href: '/help' },
  { label: 'FAQ', href: '/help' },
  { label: 'Contact Us', href: '/contact' },
]

const companyLinks = [
  { label: 'Our Story', href: '/about' },
  { label: 'Journal', href: '/journal' },
  { label: 'Sustainability', href: '/about' },
  { label: 'Press', href: '/press' },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-charcoal text-velmora-subtle">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="font-cormorant text-2xl font-medium tracking-[0.18em] uppercase text-velmora-ivory block mb-4">
              Velmora
            </Link>
            <p className="font-manrope text-xs leading-relaxed text-velmora-subtle max-w-xs mb-6">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be treasured, worn every day.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-velmora-subtle hover:text-velmora-gold transition-colors">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-velmora-subtle hover:text-velmora-gold transition-colors">
                <Facebook size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Twitter" className="text-velmora-subtle hover:text-velmora-gold transition-colors">
                <Twitter size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-manrope text-[10px] tracking-[0.2em] uppercase text-velmora-ivory mb-5 font-600">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="font-manrope text-xs text-velmora-subtle hover:text-velmora-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-manrope text-[10px] tracking-[0.2em] uppercase text-velmora-ivory mb-5 font-600">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="font-manrope text-xs text-velmora-subtle hover:text-velmora-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-manrope text-[10px] tracking-[0.2em] uppercase text-velmora-ivory mb-5 font-600">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="font-manrope text-xs text-velmora-subtle hover:text-velmora-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-manrope text-[10px] tracking-widest text-velmora-subtle/60">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE'].map(p => (
              <span
                key={p}
                className="font-manrope text-[8px] tracking-widest text-velmora-subtle/50 border border-white/10 px-2 py-1"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
