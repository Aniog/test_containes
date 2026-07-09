import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-deep-charcoal text-white">
      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.15em] text-white hover:text-gold transition-colors">
              VELMORA
            </Link>
            <p className="text-taupe text-sm mt-4 leading-relaxed max-w-[220px]">
              Demi-fine jewelry crafted for the modern woman. Designed to be treasured.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-taupe hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-taupe hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-taupe hover:text-gold transition-colors" aria-label="Youtube">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[0.12em] uppercase text-gold mb-4 font-sans font-medium">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-taupe hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-taupe hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-taupe hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-taupe hover:text-white transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-taupe hover:text-white transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-[0.12em] uppercase text-gold mb-4 font-sans font-medium">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-taupe hover:text-white transition-colors">Shipping & Delivery</a></li>
              <li><a href="#" className="text-sm text-taupe hover:text-white transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-sm text-taupe hover:text-white transition-colors">Care Guide</a></li>
              <li><a href="#" className="text-sm text-taupe hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm text-taupe hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[0.12em] uppercase text-gold mb-4 font-sans font-medium">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-taupe hover:text-white transition-colors">Our Story</Link></li>
              <li><a href="#" className="text-sm text-taupe hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-taupe hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-taupe hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="hairline border-taupe/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-taupe/60 text-xs">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-taupe/60">
            <span className="text-xs">Visa</span>
            <span className="text-xs">Mastercard</span>
            <span className="text-xs">Amex</span>
            <span className="text-xs">PayPal</span>
            <span className="text-xs">Afterpay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
