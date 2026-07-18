import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-vel-deep text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 pb-12 border-b border-white/20">
          {/* Logo & Tagline */}
          <div className="col-span-2 md:col-span-1">
            <div className="heading-serif text-2xl tracking-[0.15em] mb-3">VELMORA</div>
            <p className="text-sm text-white/60 leading-relaxed">
              Fine jewelry, thoughtfully made.
            </p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-xs tracking-[0.1em] uppercase mb-4 text-white/50">Shop</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-vel-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-vel-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-vel-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-vel-gold transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <div className="text-xs tracking-[0.1em] uppercase mb-4 text-white/50">Help</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#shipping" className="hover:text-vel-gold transition-colors">Shipping</a></li>
              <li><a href="#returns" className="hover:text-vel-gold transition-colors">Returns</a></li>
              <li><a href="#care" className="hover:text-vel-gold transition-colors">Jewelry Care</a></li>
              <li><a href="#contact" className="hover:text-vel-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs tracking-[0.1em] uppercase mb-4 text-white/50">Company</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-vel-gold transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-vel-gold transition-colors">Journal</Link></li>
              <li><a href="#sustainability" className="hover:text-vel-gold transition-colors">Sustainability</a></li>
              <li><a href="#careers" className="hover:text-vel-gold transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>© {currentYear} Velmora Fine Jewelry. All rights reserved.</div>
          
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms</a>
            <a href="#accessibility" className="hover:text-white transition-colors">Accessibility</a>
          </div>

          {/* Payment Icons */}
          <div className="flex items-center gap-3 text-white/40">
            <span className="text-[10px] tracking-widest">VISA</span>
            <span className="text-[10px] tracking-widest">MC</span>
            <span className="text-[10px] tracking-widest">AMEX</span>
            <span className="text-[10px] tracking-widest">PP</span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4 text-white/60">
            <a href="#instagram" className="hover:text-white transition-colors" aria-label="Instagram">IG</a>
            <a href="#pinterest" className="hover:text-white transition-colors" aria-label="Pinterest">PT</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
