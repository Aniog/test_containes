import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const SHOP_LINKS = [
  { label: 'Earrings', href: '/shop?category=earrings' },
  { label: 'Necklaces', href: '/shop?category=necklaces' },
  { label: 'Huggies', href: '/shop?category=huggies' },
  { label: 'All Jewelry', href: '/shop' },
]

const HELP_LINKS = [
  { label: 'Shipping & Returns', href: '#' },
  { label: 'Care Guide', href: '#' },
  { label: 'FAQ', href: '#' },
  { label: 'Contact Us', href: '#' },
]

const COMPANY_LINKS = [
  { label: 'Our Story', href: '#' },
  { label: 'Journal', href: '#' },
  { label: 'Sustainability', href: '#' },
  { label: 'Stockists', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-velvet-950 text-velvet-200 pt-16 pb-10 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-[0.3em] text-white font-semibold">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-velvet-400 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold-plated pieces designed for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-sm tracking-wider text-white mb-3">Shop</h4>
            <ul className="space-y-2">
              {SHOP_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-velvet-400 hover:text-gold-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-serif text-sm tracking-wider text-white mb-3">Help</h4>
            <ul className="space-y-2">
              {HELP_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-velvet-400 hover:text-gold-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-sm tracking-wider text-white mb-3">Company</h4>
            <ul className="space-y-2">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-velvet-400 hover:text-gold-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-velvet-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velvet-500">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Instagram className="w-4 h-4 text-velvet-400 hover:text-gold-400 transition-colors cursor-pointer" />
            <Facebook className="w-4 h-4 text-velvet-400 hover:text-gold-400 transition-colors cursor-pointer" />
            <Twitter className="w-4 h-4 text-velvet-400 hover:text-gold-400 transition-colors cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  )
}
