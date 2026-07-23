import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-stone-950 border-t border-stone-700">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest uppercase text-stone-50 hover:text-gold transition-colors">
              Velmora
            </Link>
            <p className="text-stone-400 text-sm mt-4 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Everyday elegance, elevated.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-stone-500 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-stone-500 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-stone-500 hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop column */}
          <div>
            <h3 className="font-serif text-sm uppercase tracking-widest text-stone-50 mb-6">Shop</h3>
            <ul className="space-y-3">
              <li><Link to="/shop?category=earrings" className="text-stone-400 text-sm hover:text-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-stone-400 text-sm hover:text-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-stone-400 text-sm hover:text-gold transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-stone-400 text-sm hover:text-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop" className="text-stone-400 text-sm hover:text-gold transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help column */}
          <div>
            <h3 className="font-serif text-sm uppercase tracking-widest text-stone-50 mb-6">Help</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-stone-400 text-sm hover:text-gold transition-colors">Shipping & Delivery</a></li>
              <li><a href="#" className="text-stone-400 text-sm hover:text-gold transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-stone-400 text-sm hover:text-gold transition-colors">Care Guide</a></li>
              <li><a href="#" className="text-stone-400 text-sm hover:text-gold transition-colors">FAQ</a></li>
              <li><a href="#" className="text-stone-400 text-sm hover:text-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="font-serif text-sm uppercase tracking-widest text-stone-50 mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-stone-400 text-sm hover:text-gold transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-stone-400 text-sm hover:text-gold transition-colors">Journal</Link></li>
              <li><a href="#" className="text-stone-400 text-sm hover:text-gold transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-stone-400 text-sm hover:text-gold transition-colors">Press</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-stone-500 text-xs">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          {/* Payment icons placeholder */}
          <div className="flex items-center gap-3 text-stone-500 text-xs">
            <span className="border border-stone-700 px-2 py-1 rounded">Visa</span>
            <span className="border border-stone-700 px-2 py-1 rounded">MC</span>
            <span className="border border-stone-700 px-2 py-1 rounded">Amex</span>
            <span className="border border-stone-700 px-2 py-1 rounded">PayPal</span>
            <span className="border border-stone-700 px-2 py-1 rounded">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
