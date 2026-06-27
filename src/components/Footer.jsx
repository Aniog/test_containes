import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-warm-ivory border-t border-border-light">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Logo & description */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="text-2xl font-serif tracking-[0.08em] font-medium">
              VELMORA
            </Link>
            <p className="text-sm text-charcoal-light mt-3 max-w-xs leading-relaxed">
              Demi-fine jewelry crafted for the modern woman. Elevated essentials for every day and every occasion.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] font-medium mb-4">Shop</h4>
            <ul className="space-y-2.5">
              <li><Link to="/shop" className="text-sm text-charcoal-light hover:text-charcoal transition-colors">All Jewelry</Link></li>
              <li><Link to="/collections" className="text-sm text-charcoal-light hover:text-charcoal transition-colors">Collections</Link></li>
              <li><Link to="/collections" className="text-sm text-charcoal-light hover:text-charcoal transition-colors">Bestsellers</Link></li>
              <li><Link to="/collections" className="text-sm text-charcoal-light hover:text-charcoal transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] font-medium mb-4">Help</h4>
            <ul className="space-y-2.5">
              <li><Link to="/" className="text-sm text-charcoal-light hover:text-charcoal transition-colors">Shipping & Delivery</Link></li>
              <li><Link to="/" className="text-sm text-charcoal-light hover:text-charcoal transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/" className="text-sm text-charcoal-light hover:text-charcoal transition-colors">Care Guide</Link></li>
              <li><Link to="/" className="text-sm text-charcoal-light hover:text-charcoal transition-colors">FAQ</Link></li>
              <li><Link to="/" className="text-sm text-charcoal-light hover:text-charcoal transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] font-medium mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><Link to="/" className="text-sm text-charcoal-light hover:text-charcoal transition-colors">About Us</Link></li>
              <li><Link to="/journal" className="text-sm text-charcoal-light hover:text-charcoal transition-colors">Journal</Link></li>
              <li><Link to="/" className="text-sm text-charcoal-light hover:text-charcoal transition-colors">Sustainability</Link></li>
              <li><Link to="/" className="text-sm text-charcoal-light hover:text-charcoal transition-colors">Privacy Policy</Link></li>
              <li><Link to="/" className="text-sm text-charcoal-light hover:text-charcoal transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border-light flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-xs text-charcoal-light">&copy; 2026 Velmora Fine Jewelry. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            {/* Payment icons */}
            <div className="flex items-center gap-2 text-charcoal-light">
              <span className="text-xs uppercase tracking-wider font-medium">Visa</span>
              <span className="text-xs uppercase tracking-wider font-medium">MC</span>
              <span className="text-xs uppercase tracking-wider font-medium">Amex</span>
              <span className="text-xs uppercase tracking-wider font-medium">PayPal</span>
              <span className="text-xs uppercase tracking-wider font-medium">Klarna</span>
            </div>
            <span className="text-border-medium">|</span>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:opacity-60 transition-opacity" aria-label="Instagram">
                <Instagram size={16} className="text-charcoal-light" />
              </a>
              <a href="#" className="hover:opacity-60 transition-opacity" aria-label="Pinterest">
                <svg size={16} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-charcoal-light">
                  <path d="M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.3 9.3-.1-.8-.2-2.1 0-3 .2-.9 1.4-5.8 1.4-5.8s-.4-.8-.4-1.9c0-1.8 1-3.1 2.3-3.1 1.1 0 1.6.8 1.6 1.8 0 1.1-.7 2.7-1.1 4.2-.3 1.3.6 2.3 1.9 2.3 2.3 0 3.8-2.9 3.8-6.4 0-2.7-1.8-4.7-5.1-4.7C7.5 5.5 5 8 5 11.3c0 1 .3 1.7.9 2.2.2.2.3.7.1 1.1-.1.3-.3.9-.4 1.2-.1.4-.5.5-.9.3-2.5-.9-3.9-3.7-3.9-6.6 0-4.9 4.2-8.5 9.2-8.5 4.9 0 8.4 3.6 8.4 7.4 0 5.1-2.8 8.9-6.9 8.9-1.4 0-2.7-.7-3.1-1.6l-.9 3.5c-.3 1.1-1.1 2.5-1.7 3.4 1.3.4 2.7.6 4.1.6 5.5 0 10-4.5 10-10S17.5 2 12 2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}