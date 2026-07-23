import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  const shopLinks = [
    { path: '/shop?category=earrings', label: 'Earrings' },
    { path: '/shop?category=necklaces', label: 'Necklaces' },
    { path: '/shop?category=huggies', label: 'Huggies' },
    { path: '/shop', label: 'All Jewelry' },
  ]

  const helpLinks = [
    { path: '/shipping', label: 'Shipping & Delivery' },
    { path: '/returns', label: 'Returns & Exchanges' },
    { path: '/care', label: 'Jewelry Care' },
    { path: '/contact', label: 'Contact Us' },
  ]

  const companyLinks = [
    { path: '/about', label: 'Our Story' },
    { path: '/journal', label: 'Journal' },
    { path: '/sustainability', label: 'Sustainability' },
    { path: '/press', label: 'Press' },
  ]

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-brand uppercase text-foreground hover:text-primary transition-colors duration-300">
              Velmora
            </Link>
            <p className="mt-4 font-sans text-sm text-muted-foreground leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, and designed for everyday elegance.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop column */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-nav text-foreground mb-4">Shop</h3>
            <ul className="space-y-3">
              {shopLinks.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help column */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-nav text-foreground mb-4">Help</h3>
            <ul className="space-y-3">
              {helpLinks.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-nav text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-muted-foreground">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          {/* Payment icons placeholder */}
          <div className="flex items-center gap-3">
            <span className="font-sans text-xs text-muted-foreground border border-border rounded px-2 py-1">Visa</span>
            <span className="font-sans text-xs text-muted-foreground border border-border rounded px-2 py-1">Mastercard</span>
            <span className="font-sans text-xs text-muted-foreground border border-border rounded px-2 py-1">Amex</span>
            <span className="font-sans text-xs text-muted-foreground border border-border rounded px-2 py-1">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
