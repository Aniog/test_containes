import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram } from 'lucide-react'

const footerLinks = {
  Shop: [
    { label: 'Earrings', to: '/shop?category=Earrings' },
    { label: 'Necklaces', to: '/shop?category=Necklaces' },
    { label: 'Huggies', to: '/shop?category=Huggies' },
    { label: 'Gift Sets', to: '/shop' },
    { label: 'New Arrivals', to: '/shop' },
  ],
  Help: [
    { label: 'Shipping & Returns', to: '/shipping' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Contact Us', to: '/contact' },
    { label: 'Size Guide', to: '/size-guide' },
  ],
  Company: [
    { label: 'Our Story', to: '/about' },
    { label: 'Journal', to: '/journal' },
    { label: 'Sustainability', to: '/sustainability' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-ultra-wide text-cream">
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-stone-400 max-w-xs">
              Demi-fine jewelry crafted with intention. 18K gold plated, hypoallergenic, and designed to be treasured.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-stone-400 hover:text-gold transition-colors duration-300" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-gold transition-colors duration-300" aria-label="Pinterest">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
              </a>
              <a href="#" className="text-stone-400 hover:text-gold transition-colors duration-300" aria-label="TikTok">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.16v-3.44a4.85 4.85 0 01-3-.59v-.01l.01-4.43h-.01z"/></svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-sans text-xs font-semibold tracking-widest uppercase text-cream mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-stone-400 hover:text-gold transition-colors duration-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-stone-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {/* Payment icons as text badges */}
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map(method => (
              <span key={method} className="text-[10px] font-sans font-medium tracking-wide text-stone-500 border border-stone-600 rounded px-2 py-0.5">
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
