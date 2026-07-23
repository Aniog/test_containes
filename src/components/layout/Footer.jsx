import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-velmora-espresso text-velmora-cream">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo column */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-semibold tracking-wider text-velmora-gold">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-velmora-warm/80 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, and made for everyday elegance.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-velmora-warm/60 hover:text-velmora-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-velmora-warm/60 hover:text-velmora-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-velmora-warm/60 hover:text-velmora-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop column */}
          <div>
            <h4 className="font-sans text-sm tracking-wide uppercase font-medium text-velmora-gold mb-4">
              Shop
            </h4>
            <ul className="space-y-3">
              <li><Link to="/shop?category=earrings" className="text-sm text-velmora-warm/70 hover:text-velmora-cream transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-velmora-warm/70 hover:text-velmora-cream transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-velmora-warm/70 hover:text-velmora-cream transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-velmora-warm/70 hover:text-velmora-cream transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?view=collections" className="text-sm text-velmora-warm/70 hover:text-velmora-cream transition-colors">Collections</Link></li>
            </ul>
          </div>

          {/* Help column */}
          <div>
            <h4 className="font-sans text-sm tracking-wide uppercase font-medium text-velmora-gold mb-4">
              Help
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-velmora-warm/70 hover:text-velmora-cream transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-velmora-warm/70 hover:text-velmora-cream transition-colors">Care Guide</a></li>
              <li><a href="#" className="text-sm text-velmora-warm/70 hover:text-velmora-cream transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm text-velmora-warm/70 hover:text-velmora-cream transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="font-sans text-sm tracking-wide uppercase font-medium text-velmora-gold mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-velmora-warm/70 hover:text-velmora-cream transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-velmora-warm/70 hover:text-velmora-cream transition-colors">Journal</Link></li>
              <li><a href="#" className="text-sm text-velmora-warm/70 hover:text-velmora-cream transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-velmora-warm/70 hover:text-velmora-cream transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Payment icons & copyright */}
      <div className="border-t border-velmora-charcoal-light/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velmora-warm/50">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-velmora-warm/50">Visa</span>
            <span className="text-xs text-velmora-warm/50">Mastercard</span>
            <span className="text-xs text-velmora-warm/50">Amex</span>
            <span className="text-xs text-velmora-warm/50">Apple Pay</span>
            <span className="text-xs text-velmora-warm/50">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
