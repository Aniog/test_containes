import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[var(--color-charcoal)] text-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="serif-heading text-2xl tracking-wider block mb-4">
              Velmora
            </Link>
            <p className="text-sm text-[var(--color-warm-gray)] leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, designed for everyday luxury.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-[var(--color-warm-gray)] hover:text-[var(--color-gold)] transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-[var(--color-warm-gray)] hover:text-[var(--color-gold)] transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-[var(--color-warm-gray)] hover:text-[var(--color-gold)] transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-[var(--color-warm-gray)] hover:text-[var(--color-gold)] transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-xs tracking-widest uppercase mb-4">Shop</h3>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-[var(--color-warm-gray)] hover:text-[var(--color-cream)] transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-[var(--color-warm-gray)] hover:text-[var(--color-cream)] transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-[var(--color-warm-gray)] hover:text-[var(--color-cream)] transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-[var(--color-warm-gray)] hover:text-[var(--color-cream)] transition-colors">Huggies</Link></li>
              <li><a href="#" className="text-sm text-[var(--color-warm-gray)] hover:text-[var(--color-cream)] transition-colors">Gift Sets</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-xs tracking-widest uppercase mb-4">Help</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-[var(--color-warm-gray)] hover:text-[var(--color-cream)] transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-sm text-[var(--color-warm-gray)] hover:text-[var(--color-cream)] transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-sm text-[var(--color-warm-gray)] hover:text-[var(--color-cream)] transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-[var(--color-warm-gray)] hover:text-[var(--color-cream)] transition-colors">Care Guide</a></li>
              <li><a href="#" className="text-sm text-[var(--color-warm-gray)] hover:text-[var(--color-cream)] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs tracking-widest uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#story" className="text-sm text-[var(--color-warm-gray)] hover:text-[var(--color-cream)] transition-colors">Our Story</a></li>
              <li><a href="#journal" className="text-sm text-[var(--color-warm-gray)] hover:text-[var(--color-cream)] transition-colors">Journal</a></li>
              <li><a href="#" className="text-sm text-[var(--color-warm-gray)] hover:text-[var(--color-cream)] transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-[var(--color-warm-gray)] hover:text-[var(--color-cream)] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-[var(--color-warm-gray)] hover:text-[var(--color-cream)] transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Payment & Bottom */}
        <div className="border-t border-[var(--color-dark)] mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-warm-gray)]">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-[var(--color-warm-gray)]">We accept</span>
            <div className="flex gap-2">
              {['Visa', 'MC', 'Amex', 'PayPal'].map(method => (
                <span
                  key={method}
                  className="px-2 py-1 bg-[var(--color-dark)] rounded text-[10px] text-[var(--color-warm-gray)]"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
