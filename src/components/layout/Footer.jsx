import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-brand-espresso text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-semibold tracking-ultra-wide text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/50 font-sans leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, and made for everyday elegance.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-sans font-medium tracking-extra-wide uppercase text-white/80 mb-5">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-white/50 hover:text-brand-gold transition-colors font-sans">All Jewelry</Link></li>
              <li><Link to="/shop" className="text-sm text-white/50 hover:text-brand-gold transition-colors font-sans">Earrings</Link></li>
              <li><Link to="/shop" className="text-sm text-white/50 hover:text-brand-gold transition-colors font-sans">Necklaces</Link></li>
              <li><Link to="/shop" className="text-sm text-white/50 hover:text-brand-gold transition-colors font-sans">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-white/50 hover:text-brand-gold transition-colors font-sans">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs font-sans font-medium tracking-extra-wide uppercase text-white/80 mb-5">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-white/50 hover:text-brand-gold transition-colors font-sans">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-brand-gold transition-colors font-sans">Care Guide</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-brand-gold transition-colors font-sans">FAQ</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-brand-gold transition-colors font-sans">Contact Us</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-brand-gold transition-colors font-sans">Size Guide</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-sans font-medium tracking-extra-wide uppercase text-white/80 mb-5">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-white/50 hover:text-brand-gold transition-colors font-sans">Our Story</Link></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-brand-gold transition-colors font-sans">Journal</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-brand-gold transition-colors font-sans">Sustainability</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-brand-gold transition-colors font-sans">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-brand-gold transition-colors font-sans">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <a href="#" className="text-white/40 hover:text-brand-gold transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/40 hover:text-brand-gold transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/40 hover:text-brand-gold transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['Visa', 'MC', 'Amex', 'PayPal'].map((name) => (
              <div
                key={name}
                className="px-2 py-1 border border-white/20 rounded text-[10px] text-white/40 font-sans font-medium"
              >
                {name}
              </div>
            ))}
          </div>

          <p className="text-xs text-white/30 font-sans">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
