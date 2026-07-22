import React from 'react'
import { Link } from 'react-router-dom'
import { Separator } from '@/components/ui/separator'

const Footer = () => {
  const shopLinks = [
    { label: 'Earrings', path: '/shop?category=earrings' },
    { label: 'Necklaces', path: '/shop?category=necklaces' },
    { label: 'Huggies', path: '/shop?category=huggies' },
    { label: 'New Arrivals', path: '/shop' },
    { label: 'Bestsellers', path: '/shop' },
  ]

  const helpLinks = [
    { label: 'Shipping & Returns', path: '/shipping' },
    { label: 'Care Guide', path: '/care' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact Us', path: '/contact' },
  ]

  const companyLinks = [
    { label: 'Our Story', path: '/about' },
    { label: 'Journal', path: '/journal' },
    { label: 'Sustainability', path: '/sustainability' },
  ]

  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-content mx-auto px-4 md:px-6 py-16 md:py-20">
        {/* Logo */}
        <div className="mb-12">
          <Link to="/" className="font-serif text-2xl tracking-logo uppercase text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal rounded-sm">
            Velmora
          </Link>
          <p className="font-sans text-sm text-white/60 mt-2 max-w-xs">
            Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, made for everyday.
          </p>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div>
            <h4 className="font-sans text-xs tracking-cta uppercase text-gold mb-4">Shop</h4>
            <ul className="space-y-2">
              {shopLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.path} className="font-sans text-sm text-white/70 hover:text-gold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal rounded-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-sans text-xs tracking-cta uppercase text-gold mb-4">Help</h4>
            <ul className="space-y-2">
              {helpLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.path} className="font-sans text-sm text-white/70 hover:text-gold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal rounded-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-sans text-xs tracking-cta uppercase text-gold mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.path} className="font-sans text-sm text-white/70 hover:text-gold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal rounded-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-sans text-xs tracking-cta uppercase text-gold mb-4">Follow Us</h4>
            <ul className="space-y-2">
              <li><a href="#" className="font-sans text-sm text-white/70 hover:text-gold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal rounded-sm">Instagram</a></li>
              <li><a href="#" className="font-sans text-sm text-white/70 hover:text-gold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal rounded-sm">Pinterest</a></li>
              <li><a href="#" className="font-sans text-sm text-white/70 hover:text-gold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal rounded-sm">TikTok</a></li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white/10 mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/40">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Payment icons placeholder */}
            <span className="font-sans text-xs text-white/40">Visa</span>
            <span className="font-sans text-xs text-white/40">Mastercard</span>
            <span className="font-sans text-xs text-white/40">Amex</span>
            <span className="font-sans text-xs text-white/40">PayPal</span>
            <span className="font-sans text-xs text-white/40">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
