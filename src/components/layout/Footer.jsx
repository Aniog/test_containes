import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-warm-black text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.3em] font-light">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-stone leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, and designed for everyday elegance.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-4 text-gold">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop?category=Earrings" className="text-sm text-stone hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="text-sm text-stone hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="text-sm text-stone hover:text-white transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-stone hover:text-white transition-colors">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-4 text-gold">Help</h4>
            <ul className="space-y-3">
              <li><Link to="/shipping" className="text-sm text-stone hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/faq" className="text-sm text-stone hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/care" className="text-sm text-stone hover:text-white transition-colors">Jewelry Care</Link></li>
              <li><Link to="/contact" className="text-sm text-stone hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-4 text-gold">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-stone hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-stone hover:text-white transition-colors">Journal</Link></li>
              <li><Link to="/sustainability" className="text-sm text-stone hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link to="/privacy" className="text-sm text-stone hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone">&copy; 2026 Velmora Fine Jewelry. All rights reserved.</p>
          
          {/* Payment icons */}
          <div className="flex items-center gap-3">
            <div className="px-2 py-1 bg-white/10 rounded text-[10px] text-stone font-medium">VISA</div>
            <div className="px-2 py-1 bg-white/10 rounded text-[10px] text-stone font-medium">MC</div>
            <div className="px-2 py-1 bg-white/10 rounded text-[10px] text-stone font-medium">AMEX</div>
            <div className="px-2 py-1 bg-white/10 rounded text-[10px] text-stone font-medium">PAYPAL</div>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-stone hover:text-gold transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-stone hover:text-gold transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-stone hover:text-gold transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
