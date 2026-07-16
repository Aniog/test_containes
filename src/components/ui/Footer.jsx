import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Pinterest } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-wider text-cream">
              VELMORA
            </Link>
            <p className="text-xs text-cream/50 mt-4 leading-relaxed max-w-[200px]">
              Demi-fine jewelry crafted to be treasured. 18K gold-plated pieces for everyday elegance.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs tracking-wider uppercase text-cream mb-4">Shop</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/shop" className="text-xs text-cream/60 hover:text-gold transition-colors">All Jewelry</Link>
              <Link to="/shop?category=earrings" className="text-xs text-cream/60 hover:text-gold transition-colors">Earrings</Link>
              <Link to="/shop?category=necklaces" className="text-xs text-cream/60 hover:text-gold transition-colors">Necklaces</Link>
              <Link to="/shop?category=huggies" className="text-xs text-cream/60 hover:text-gold transition-colors">Huggies</Link>
              <Link to="/shop?category=sets" className="text-xs text-cream/60 hover:text-gold transition-colors">Gift Sets</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs tracking-wider uppercase text-cream mb-4">Help</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/faq" className="text-xs text-cream/60 hover:text-gold transition-colors">FAQ</Link>
              <Link to="/shipping" className="text-xs text-cream/60 hover:text-gold transition-colors">Shipping & Returns</Link>
              <Link to="/care" className="text-xs text-cream/60 hover:text-gold transition-colors">Jewelry Care</Link>
              <Link to="/contact" className="text-xs text-cream/60 hover:text-gold transition-colors">Contact Us</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs tracking-wider uppercase text-cream mb-4">Company</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/about" className="text-xs text-cream/60 hover:text-gold transition-colors">Our Story</Link>
              <Link to="/journal" className="text-xs text-cream/60 hover:text-gold transition-colors">Journal</Link>
              <Link to="/sustainability" className="text-xs text-cream/60 hover:text-gold transition-colors">Sustainability</Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <a href="#" className="text-cream/40 hover:text-cream/70 transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="text-cream/40 hover:text-cream/70 transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="text-cream/40 hover:text-cream/70 transition-colors" aria-label="Pinterest">
              <Pinterest className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center gap-2 text-[10px] text-cream/30">
            <span>Visa</span>
            <span className="opacity-40">·</span>
            <span>Mastercard</span>
            <span className="opacity-40">·</span>
            <span>Amex</span>
            <span className="opacity-40">·</span>
            <span>Apple Pay</span>
          </div>

          <p className="text-[10px] text-cream/30">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}