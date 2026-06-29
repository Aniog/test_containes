import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.15em] font-semibold text-cream">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-cream/60 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, and designed for everyday elegance.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-cream mb-4">Shop</h4>
            <ul className="space-y-2.5">
              <li><Link to="/shop?category=earrings" className="text-sm text-cream/60 hover:text-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-cream/60 hover:text-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-cream/60 hover:text-gold transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-cream/60 hover:text-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop" className="text-sm text-cream/60 hover:text-gold transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-cream mb-4">Help</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-sm text-cream/60 hover:text-gold transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-cream/60 hover:text-gold transition-colors">Care Guide</a></li>
              <li><a href="#" className="text-sm text-cream/60 hover:text-gold transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm text-cream/60 hover:text-gold transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-sm text-cream/60 hover:text-gold transition-colors">Size Guide</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-cream mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="text-sm text-cream/60 hover:text-gold transition-colors">Our Story</Link></li>
              <li><a href="#" className="text-sm text-cream/60 hover:text-gold transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-cream/60 hover:text-gold transition-colors">Journal</a></li>
              <li><a href="#" className="text-sm text-cream/60 hover:text-gold transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-cream/40 hover:text-gold transition-colors" aria-label="Instagram">
              <Instagram className="w-4.5 h-4.5" />
            </a>
            <a href="#" className="text-cream/40 hover:text-gold transition-colors" aria-label="Facebook">
              <Facebook className="w-4.5 h-4.5" />
            </a>
            <a href="#" className="text-cream/40 hover:text-gold transition-colors" aria-label="Twitter">
              <Twitter className="w-4.5 h-4.5" />
            </a>
          </div>
          <div className="flex items-center gap-3 text-cream/30 text-xs">
            <span>Visa</span>
            <span>&middot;</span>
            <span>Mastercard</span>
            <span>&middot;</span>
            <span>Amex</span>
            <span>&middot;</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
