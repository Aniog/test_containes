import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-ultra-wide font-light">
              VELMORA
            </Link>
            <p className="mt-4 text-warm-400 text-sm leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, and designed for everyday elegance.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-wide-2 uppercase font-semibold mb-5 text-gold">
              Shop
            </h4>
            <ul className="space-y-3">
              <li><Link to="/shop?category=earrings" className="text-sm text-warm-400 hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-warm-400 hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-warm-400 hover:text-white transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-warm-400 hover:text-white transition-colors">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-wide-2 uppercase font-semibold mb-5 text-gold">
              Help
            </h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-warm-400 hover:text-white transition-colors cursor-pointer">Shipping & Returns</span></li>
              <li><span className="text-sm text-warm-400 hover:text-white transition-colors cursor-pointer">FAQ</span></li>
              <li><span className="text-sm text-warm-400 hover:text-white transition-colors cursor-pointer">Size Guide</span></li>
              <li><span className="text-sm text-warm-400 hover:text-white transition-colors cursor-pointer">Contact Us</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-wide-2 uppercase font-semibold mb-5 text-gold">
              Company
            </h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-warm-400 hover:text-white transition-colors">Our Story</Link></li>
              <li><span className="text-sm text-warm-400 hover:text-white transition-colors cursor-pointer">Journal</span></li>
              <li><span className="text-sm text-warm-400 hover:text-white transition-colors cursor-pointer">Sustainability</span></li>
              <li><span className="text-sm text-warm-400 hover:text-white transition-colors cursor-pointer">Careers</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <a href="#" className="text-warm-400 hover:text-gold transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-warm-400 hover:text-gold transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-warm-400 hover:text-gold transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            <div className="px-2 py-1 border border-white/20 rounded text-[10px] text-warm-400 font-medium">VISA</div>
            <div className="px-2 py-1 border border-white/20 rounded text-[10px] text-warm-400 font-medium">MC</div>
            <div className="px-2 py-1 border border-white/20 rounded text-[10px] text-warm-400 font-medium">AMEX</div>
            <div className="px-2 py-1 border border-white/20 rounded text-[10px] text-warm-400 font-medium">PAYPAL</div>
          </div>

          <p className="text-xs text-warm-500">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
