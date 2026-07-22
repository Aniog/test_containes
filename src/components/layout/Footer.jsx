import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-velmora-charcoal text-stone-300">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo + tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest text-stone-100">
              VELMORA
            </Link>
            <p className="mt-4 font-sans text-sm text-stone-400 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, and designed for everyday elegance.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-stone-400 hover:text-velmora-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-velmora-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-velmora-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop column */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-widest text-stone-100 mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop?category=earrings" className="font-sans text-sm text-stone-400 hover:text-velmora-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="font-sans text-sm text-stone-400 hover:text-velmora-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="font-sans text-sm text-stone-400 hover:text-velmora-gold transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="font-sans text-sm text-stone-400 hover:text-velmora-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop" className="font-sans text-sm text-stone-400 hover:text-velmora-gold transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help column */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-widest text-stone-100 mb-4">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="font-sans text-sm text-stone-400 hover:text-velmora-gold transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="font-sans text-sm text-stone-400 hover:text-velmora-gold transition-colors">Care Guide</a></li>
              <li><a href="#" className="font-sans text-sm text-stone-400 hover:text-velmora-gold transition-colors">FAQ</a></li>
              <li><a href="#" className="font-sans text-sm text-stone-400 hover:text-velmora-gold transition-colors">Contact Us</a></li>
              <li><a href="#" className="font-sans text-sm text-stone-400 hover:text-velmora-gold transition-colors">Size Guide</a></li>
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-widest text-stone-100 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="font-sans text-sm text-stone-400 hover:text-velmora-gold transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="font-sans text-sm text-stone-400 hover:text-velmora-gold transition-colors">Journal</Link></li>
              <li><a href="#" className="font-sans text-sm text-stone-400 hover:text-velmora-gold transition-colors">Sustainability</a></li>
              <li><a href="#" className="font-sans text-sm text-stone-400 hover:text-velmora-gold transition-colors">Press</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Payment icons + copyright */}
      <div className="border-t border-stone-700">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-stone-500">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {/* Payment method icons as text labels */}
            <span className="font-sans text-xs text-stone-500 border border-stone-600 px-2 py-1 rounded">Visa</span>
            <span className="font-sans text-xs text-stone-500 border border-stone-600 px-2 py-1 rounded">Mastercard</span>
            <span className="font-sans text-xs text-stone-500 border border-stone-600 px-2 py-1 rounded">Amex</span>
            <span className="font-sans text-xs text-stone-500 border border-stone-600 px-2 py-1 rounded">PayPal</span>
            <span className="font-sans text-xs text-stone-500 border border-stone-600 px-2 py-1 rounded">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
