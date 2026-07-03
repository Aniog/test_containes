import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-warm-black text-white">
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.15em] font-light">
              VELMORA
            </Link>
            <p className="text-warm-sand text-sm mt-4 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, and designed for everyday elegance.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase font-medium mb-4 text-gold">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop?category=earrings" className="text-sm text-warm-sand hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-warm-sand hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-warm-sand hover:text-white transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-warm-sand hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop" className="text-sm text-warm-sand hover:text-white transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase font-medium mb-4 text-gold">Help</h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-warm-sand cursor-pointer hover:text-white transition-colors">Shipping & Returns</span></li>
              <li><span className="text-sm text-warm-sand cursor-pointer hover:text-white transition-colors">FAQ</span></li>
              <li><span className="text-sm text-warm-sand cursor-pointer hover:text-white transition-colors">Size Guide</span></li>
              <li><span className="text-sm text-warm-sand cursor-pointer hover:text-white transition-colors">Contact Us</span></li>
              <li><span className="text-sm text-warm-sand cursor-pointer hover:text-white transition-colors">Care Instructions</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase font-medium mb-4 text-gold">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-warm-sand hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-warm-sand hover:text-white transition-colors">Journal</Link></li>
              <li><span className="text-sm text-warm-sand cursor-pointer hover:text-white transition-colors">Sustainability</span></li>
              <li><span className="text-sm text-warm-sand cursor-pointer hover:text-white transition-colors">Press</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="hairline mt-12 pt-8 border-warm-brown/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-warm-sand">&copy; 2026 Velmora Fine Jewelry. All rights reserved.</p>
          
          {/* Payment icons */}
          <div className="flex items-center gap-3">
            <div className="px-2 py-1 bg-warm-charcoal rounded text-[10px] text-warm-sand font-medium">VISA</div>
            <div className="px-2 py-1 bg-warm-charcoal rounded text-[10px] text-warm-sand font-medium">MC</div>
            <div className="px-2 py-1 bg-warm-charcoal rounded text-[10px] text-warm-sand font-medium">AMEX</div>
            <div className="px-2 py-1 bg-warm-charcoal rounded text-[10px] text-warm-sand font-medium">PAYPAL</div>
            <div className="px-2 py-1 bg-warm-charcoal rounded text-[10px] text-warm-sand font-medium">APPLE PAY</div>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-warm-sand hover:text-gold transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="text-warm-sand hover:text-gold transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="text-warm-sand hover:text-gold transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
