import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  const shopLinks = [
    { to: '/shop?category=earrings', label: 'Earrings' },
    { to: '/shop?category=necklaces', label: 'Necklaces' },
    { to: '/shop?category=huggies', label: 'Huggies' },
    { to: '/shop', label: 'All Jewelry' },
  ]

  const helpLinks = [
    { to: '/shipping', label: 'Shipping & Returns' },
    { to: '/faq', label: 'FAQ' },
    { to: '/size-guide', label: 'Size Guide' },
    { to: '/contact', label: 'Contact Us' },
  ]

  const companyLinks = [
    { to: '/about', label: 'Our Story' },
    { to: '/journal', label: 'Journal' },
    { to: '/sustainability', label: 'Sustainability' },
    { to: '/careers', label: 'Careers' },
  ]

  return (
    <footer className="bg-velmora-black text-white">
      {/* Main footer */}
      <div className="section-padding py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
            {/* Brand column */}
            <div className="lg:col-span-2">
              <Link to="/" className="inline-block">
                <span className="font-serif text-3xl font-medium tracking-wider text-white">
                  VELMORA
                </span>
              </Link>
              <p className="mt-4 text-velmora-warm text-sm leading-relaxed max-w-xs">
                Demi-fine jewelry crafted to be treasured. 18K gold plating, hypoallergenic materials, designed for everyday luxury.
              </p>
              <div className="flex gap-4 mt-6">
                <a href="#" aria-label="Instagram" className="text-velmora-warm hover:text-velmora-gold transition-colors">
                  <Instagram size={20} strokeWidth={1.5} />
                </a>
                <a href="#" aria-label="Facebook" className="text-velmora-warm hover:text-velmora-gold transition-colors">
                  <Facebook size={20} strokeWidth={1.5} />
                </a>
                <a href="#" aria-label="Twitter" className="text-velmora-warm hover:text-velmora-gold transition-colors">
                  <Twitter size={20} strokeWidth={1.5} />
                </a>
              </div>
            </div>

            {/* Link columns */}
            <div>
              <h4 className="text-xs font-medium tracking-widest uppercase text-velmora-gold mb-5">Shop</h4>
              <ul className="space-y-3">
                {shopLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-velmora-warm hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-medium tracking-widest uppercase text-velmora-gold mb-5">Help</h4>
              <ul className="space-y-3">
                {helpLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-velmora-warm hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-medium tracking-widest uppercase text-velmora-gold mb-5">Company</h4>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-velmora-warm hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Payment & copyright */}
      <div className="border-t border-white/10">
        <div className="section-padding py-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-velmora-warm">
              © 2026 Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              {/* Payment icons as text badges */}
              {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map((p) => (
                <span
                  key={p}
                  className="text-[10px] px-2 py-1 border border-white/20 text-velmora-warm rounded"
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
