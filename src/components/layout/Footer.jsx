import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-warm-black text-text-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-ultra-wide text-text-light font-medium">
              VELMORA
            </Link>
            <p className="text-sm text-text-light/50 mt-4 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, and designed for everyday elegance.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-ultra-wide font-medium text-muted-gold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/shop?category=earrings" className="text-sm text-text-light/60 hover:text-muted-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-text-light/60 hover:text-muted-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-text-light/60 hover:text-muted-gold transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-text-light/60 hover:text-muted-gold transition-colors">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-ultra-wide font-medium text-muted-gold mb-4">Help</h4>
            <ul className="space-y-2">
              <li><span className="text-sm text-text-light/60 cursor-pointer hover:text-muted-gold transition-colors">Shipping & Returns</span></li>
              <li><span className="text-sm text-text-light/60 cursor-pointer hover:text-muted-gold transition-colors">Care Guide</span></li>
              <li><span className="text-sm text-text-light/60 cursor-pointer hover:text-muted-gold transition-colors">FAQ</span></li>
              <li><span className="text-sm text-text-light/60 cursor-pointer hover:text-muted-gold transition-colors">Contact Us</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-ultra-wide font-medium text-muted-gold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-text-light/60 hover:text-muted-gold transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-text-light/60 hover:text-muted-gold transition-colors">Journal</Link></li>
              <li><span className="text-sm text-text-light/60 cursor-pointer hover:text-muted-gold transition-colors">Sustainability</span></li>
              <li><span className="text-sm text-text-light/60 cursor-pointer hover:text-muted-gold transition-colors">Press</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-warm-charcoal/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-light/40">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['Visa', 'MC', 'Amex', 'PayPal'].map(name => (
              <span key={name} className="text-[10px] text-text-light/30 border border-warm-charcoal/20 px-2 py-0.5 rounded-sm">
                {name}
              </span>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-text-light/40 hover:text-muted-gold transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="text-text-light/40 hover:text-muted-gold transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="text-text-light/40 hover:text-muted-gold transition-colors"><Twitter className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
