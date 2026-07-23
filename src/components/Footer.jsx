import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-warm-black text-warm-cream">
      {/* Newsletter block */}
      <div className="bg-warm-ivory py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 id="newsletter-title" className="font-serif text-2xl md:text-3xl uppercase tracking-wider text-warm-black">
            Join for 10% Off Your First Order
          </h2>
          <p id="newsletter-subtitle" className="font-sans text-sm text-warm-black/60 mt-3 max-w-md mx-auto">
            Be the first to know about new arrivals, exclusive offers, and styling inspiration.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full sm:w-auto flex-1 bg-transparent border border-warm-sand text-warm-black font-sans text-sm px-4 py-3 placeholder:text-warm-black/40 focus:outline-none focus:border-gold transition-colors"
            />
            <button className="w-full sm:w-auto bg-gold text-warm-black font-sans text-sm uppercase tracking-wider px-8 py-3 hover:bg-gold-light transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer columns */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo column */}
          <div>
            <Link to="/" className="font-serif text-xl uppercase tracking-logo text-warm-cream">
              VELMORA
            </Link>
            <p className="font-sans text-sm text-warm-cream/50 mt-4 max-w-xs">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, and designed for everyday elegance.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-warm-cream/50 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-warm-cream/50 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-warm-cream/50 hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-wider text-warm-cream/40 mb-4">Shop</h3>
            <div className="space-y-3">
              <Link to="/shop?category=earrings" className="block font-sans text-sm text-warm-cream/70 hover:text-gold transition-colors">Earrings</Link>
              <Link to="/shop?category=necklaces" className="block font-sans text-sm text-warm-cream/70 hover:text-gold transition-colors">Necklaces</Link>
              <Link to="/shop?category=huggies" className="block font-sans text-sm text-warm-cream/70 hover:text-gold transition-colors">Huggies</Link>
              <Link to="/shop" className="block font-sans text-sm text-warm-cream/70 hover:text-gold transition-colors">All Jewelry</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-wider text-warm-cream/40 mb-4">Help</h3>
            <div className="space-y-3">
              <a href="#" className="block font-sans text-sm text-warm-cream/70 hover:text-gold transition-colors">Shipping & Delivery</a>
              <a href="#" className="block font-sans text-sm text-warm-cream/70 hover:text-gold transition-colors">Returns & Exchanges</a>
              <a href="#" className="block font-sans text-sm text-warm-cream/70 hover:text-gold transition-colors">Care Guide</a>
              <a href="#" className="block font-sans text-sm text-warm-cream/70 hover:text-gold transition-colors">Contact Us</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-wider text-warm-cream/40 mb-4">Company</h3>
            <div className="space-y-3">
              <Link to="/about" className="block font-sans text-sm text-warm-cream/70 hover:text-gold transition-colors">Our Story</Link>
              <Link to="/journal" className="block font-sans text-sm text-warm-cream/70 hover:text-gold transition-colors">Journal</Link>
              <a href="#" className="block font-sans text-sm text-warm-cream/70 hover:text-gold transition-colors">Sustainability</a>
              <a href="#" className="block font-sans text-sm text-warm-cream/70 hover:text-gold transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-warm-cream/30">&copy; 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {/* Payment icons as text placeholders */}
            <span className="font-sans text-xs text-warm-cream/30 border border-warm-cream/20 px-2 py-1 rounded-sm">VISA</span>
            <span className="font-sans text-xs text-warm-cream/30 border border-warm-cream/20 px-2 py-1 rounded-sm">MC</span>
            <span className="font-sans text-xs text-warm-cream/30 border border-warm-cream/20 px-2 py-1 rounded-sm">AMEX</span>
            <span className="font-sans text-xs text-warm-cream/30 border border-warm-cream/20 px-2 py-1 rounded-sm">PAYPAL</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
