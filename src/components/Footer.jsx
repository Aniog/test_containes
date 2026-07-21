import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-velmora-charcoal text-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wide-product">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-velmora-cream/60 font-sans leading-relaxed">
              Demi-fine jewelry crafted for the modern woman. Elegant, accessible, made to be treasured.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-velmora-cream/60 hover:text-velmora-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-velmora-cream/60 hover:text-velmora-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-velmora-cream/60 hover:text-velmora-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs tracking-wider uppercase mb-5 text-velmora-cream/80">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop?category=Earrings" className="text-sm text-velmora-cream/60 hover:text-velmora-gold transition-colors font-sans">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="text-sm text-velmora-cream/60 hover:text-velmora-gold transition-colors font-sans">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="text-sm text-velmora-cream/60 hover:text-velmora-gold transition-colors font-sans">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-velmora-cream/60 hover:text-velmora-gold transition-colors font-sans">All Jewelry</Link></li>
              <li><Link to="/shop?category=Sets" className="text-sm text-velmora-cream/60 hover:text-velmora-gold transition-colors font-sans">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs tracking-wider uppercase mb-5 text-velmora-cream/80">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-velmora-cream/60 hover:text-velmora-gold transition-colors font-sans">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-velmora-cream/60 hover:text-velmora-gold transition-colors font-sans">Jewelry Care</a></li>
              <li><a href="#" className="text-sm text-velmora-cream/60 hover:text-velmora-gold transition-colors font-sans">FAQ</a></li>
              <li><a href="#" className="text-sm text-velmora-cream/60 hover:text-velmora-gold transition-colors font-sans">Contact Us</a></li>
              <li><a href="#" className="text-sm text-velmora-cream/60 hover:text-velmora-gold transition-colors font-sans">Size Guide</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs tracking-wider uppercase mb-5 text-velmora-cream/80">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-velmora-cream/60 hover:text-velmora-gold transition-colors font-sans">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-velmora-cream/60 hover:text-velmora-gold transition-colors font-sans">Journal</Link></li>
              <li><a href="#" className="text-sm text-velmora-cream/60 hover:text-velmora-gold transition-colors font-sans">Sustainability</a></li>
              <li><a href="#" className="text-sm text-velmora-cream/60 hover:text-velmora-gold transition-colors font-sans">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-velmora-cream/60 hover:text-velmora-gold transition-colors font-sans">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-velmora-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velmora-cream/40 font-sans">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-velmora-cream/40 font-sans">We accept</span>
            <div className="flex items-center gap-2">
              <div className="px-2 py-1 border border-velmora-cream/20 rounded text-[10px] text-velmora-cream/50 font-sans">VISA</div>
              <div className="px-2 py-1 border border-velmora-cream/20 rounded text-[10px] text-velmora-cream/50 font-sans">MC</div>
              <div className="px-2 py-1 border border-velmora-cream/20 rounded text-[10px] text-velmora-cream/50 font-sans">AMEX</div>
              <div className="px-2 py-1 border border-velmora-cream/20 rounded text-[10px] text-velmora-cream/50 font-sans">PAYPAL</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
