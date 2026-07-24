import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const footerLinks = {
  shop: [
    { to: '/shop', label: 'All' },
    { to: '/shop?category=earrings', label: 'Earrings' },
    { to: '/shop?category=necklaces', label: 'Necklaces' },
    { to: '/shop?category=huggies', label: 'Huggies' },
  ],
  help: [
    { to: '/about', label: 'About' },
    { to: '/about', label: 'Contact' },
    { to: '/about', label: 'Shipping & Returns' },
    { to: '/about', label: 'FAQ' },
  ],
  company: [
    { to: '/about', label: 'Our Story' },
    { to: '/about', label: 'Journal' },
    { to: '/about', label: 'Sustainability' },
    { to: '/about', label: 'Press' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block">
              <span className="font-serif text-2xl tracking-widest text-white">
                VELMORA
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-stone-400">
              Quiet luxury for the modern woman. Demi-fine jewelry crafted to be treasured.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-stone-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-stone-500 mb-4">Shop</h4>
            <ul className="space-y-2">
              {footerLinks.shop.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase text-stone-500 mb-4">Help</h4>
            <ul className="space-y-2">
              {footerLinks.help.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase text-stone-500 mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-stone-500">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-stone-500">
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
