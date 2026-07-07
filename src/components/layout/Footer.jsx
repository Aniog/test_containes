import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const footerLinks = {
  shop: [
    { label: 'All Products', href: '/shop' },
    { label: 'Earrings', href: '/shop?category=earrings' },
    { label: 'Necklaces', href: '/shop?category=necklaces' },
    { label: 'Huggies', href: '/shop?category=huggies' },
    { label: 'Gift Sets', href: '/shop?category=sets' },
  ],
  help: [
    { label: 'Shipping & Delivery', href: '/' },
    { label: 'Returns & Exchanges', href: '/' },
    { label: 'Care Guide', href: '/' },
    { label: 'FAQ', href: '/' },
    { label: 'Contact Us', href: '/' },
  ],
  company: [
    { label: 'About Us', href: '/' },
    { label: 'Our Story', href: '/' },
    { label: 'Journal', href: '/' },
    { label: 'Sustainability', href: '/' },
    { label: 'Careers', href: '/' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#1C1814] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-heading text-2xl tracking-widest text-white">
              VELMORA
            </Link>
            <p className="font-body text-xs text-white/50 mt-4 leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Heirloom quality, honest prices.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="/" className="text-white/50 hover:text-[#C9A96E] transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="/" className="text-white/50 hover:text-[#C9A96E] transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="/" className="text-white/50 hover:text-[#C9A96E] transition-colors" aria-label="Pinterest">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.4 9.1-.1-.8-.2-2 .1-2.8.2-.8 1-3.5 1-3.5s-.2-.5-.2-1.2c0-1.1.7-2 1.5-2 .7 0 1 .5 1 1.2 0 .7-.5 1.9-.7 2.9-.2.9.5 1.6 1.4 1.6 1.7 0 2.9-2.2 2.9-4.7 0-1.9-1.3-3.4-3.6-3.4-2.6 0-4.2 1.9-4.2 4.1 0 .7.3 1.5.6 2 .1.1.1.2.1.4-.1.4-.2 1.1-.2 1.2-.1.2-.3.2-.5.2-1.4-.6-2.2-2.3-2.2-3.9 0-2.9 2.5-6.3 7.2-6.3 3.8 0 6.4 2.8 6.4 5.7 0 3.9-2.2 6.8-5.5 6.8-1.1 0-2.1-.6-2.5-1.3 0 0-.6 2.4-.7 2.8-.2.8-.7 1.6-1.1 2.2 1 .3 2 .5 3.1.5 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
              </a>
              <a href="/" className="text-white/50 hover:text-[#C9A96E] transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop links */}
          <div>
            <h4 className="font-body text-[10px] uppercase tracking-widest text-[#C9A96E] mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="font-body text-xs text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help links */}
          <div>
            <h4 className="font-body text-[10px] uppercase tracking-widest text-[#C9A96E] mb-4">Help</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="font-body text-xs text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-body text-[10px] uppercase tracking-widest text-[#C9A96E] mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="font-body text-xs text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-[10px] text-white/40 tracking-wider">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {/* Payment icons */}
            {['Visa', 'MC', 'Amex', 'PayPal', 'Afterpay'].map((brand) => (
              <span key={brand} className="font-body text-[9px] text-white/30 uppercase tracking-wider border border-white/10 px-2 py-1">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}