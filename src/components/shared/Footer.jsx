import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-brand-ink text-white">
      <div className="section-padding py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-ultra-wide font-light">
              VELMORA
            </Link>
            <p className="text-sm text-white/60 mt-3 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, made for everyday elegance.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-wide uppercase font-semibold mb-5 text-brand-gold">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop?category=earrings" className="text-sm text-white/70 hover:text-brand-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-white/70 hover:text-brand-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-white/70 hover:text-brand-gold transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-white/70 hover:text-brand-gold transition-colors">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-wide uppercase font-semibold mb-5 text-brand-gold">Help</h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-white/70 cursor-pointer hover:text-brand-gold transition-colors">Shipping & Returns</span></li>
              <li><span className="text-sm text-white/70 cursor-pointer hover:text-brand-gold transition-colors">FAQ</span></li>
              <li><span className="text-sm text-white/70 cursor-pointer hover:text-brand-gold transition-colors">Contact Us</span></li>
              <li><span className="text-sm text-white/70 cursor-pointer hover:text-brand-gold transition-colors">Size Guide</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-wide uppercase font-semibold mb-5 text-brand-gold">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-white/70 hover:text-brand-gold transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-white/70 hover:text-brand-gold transition-colors">Journal</Link></li>
              <li><span className="text-sm text-white/70 cursor-pointer hover:text-brand-gold transition-colors">Sustainability</span></li>
              <li><span className="text-sm text-white/70 cursor-pointer hover:text-brand-gold transition-colors">Careers</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">&copy; 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <span className="text-xs text-white/40">Visa</span>
            <span className="text-xs text-white/40">Mastercard</span>
            <span className="text-xs text-white/40">Amex</span>
            <span className="text-xs text-white/40">PayPal</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/50 hover:text-brand-gold transition-colors" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="#" className="text-white/50 hover:text-brand-gold transition-colors" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="#" className="text-white/50 hover:text-brand-gold transition-colors" aria-label="Twitter"><Twitter size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
