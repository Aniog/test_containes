import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-base text-cream/80">
      <div className="max-w-content mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-section font-semibold text-cream">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-cream/60 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, and designed for everyday elegance.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-section uppercase font-semibold text-cream mb-5">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop?category=earrings" className="text-sm text-cream/60 hover:text-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-cream/60 hover:text-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-cream/60 hover:text-gold transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-cream/60 hover:text-gold transition-colors">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-section uppercase font-semibold text-cream mb-5">Help</h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-cream/60 hover:text-gold transition-colors cursor-pointer">Shipping & Returns</span></li>
              <li><span className="text-sm text-cream/60 hover:text-gold transition-colors cursor-pointer">Care Guide</span></li>
              <li><span className="text-sm text-cream/60 hover:text-gold transition-colors cursor-pointer">FAQ</span></li>
              <li><span className="text-sm text-cream/60 hover:text-gold transition-colors cursor-pointer">Contact Us</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-section uppercase font-semibold text-cream mb-5">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-cream/60 hover:text-gold transition-colors">Our Story</Link></li>
              <li><span className="text-sm text-cream/60 hover:text-gold transition-colors cursor-pointer">Journal</span></li>
              <li><span className="text-sm text-cream/60 hover:text-gold transition-colors cursor-pointer">Sustainability</span></li>
              <li><span className="text-sm text-cream/60 hover:text-gold transition-colors cursor-pointer">Press</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-cream/40">&copy; 2026 Velmora Fine Jewelry. All rights reserved.</p>
          
          {/* Payment icons */}
          <div className="flex items-center gap-3">
            <div className="px-2 py-1 border border-cream/20 rounded text-[10px] text-cream/50 font-medium">VISA</div>
            <div className="px-2 py-1 border border-cream/20 rounded text-[10px] text-cream/50 font-medium">MC</div>
            <div className="px-2 py-1 border border-cream/20 rounded text-[10px] text-cream/50 font-medium">AMEX</div>
            <div className="px-2 py-1 border border-cream/20 rounded text-[10px] text-cream/50 font-medium">PAYPAL</div>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-cream/40 hover:text-gold transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="text-cream/40 hover:text-gold transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="text-cream/40 hover:text-gold transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
