import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-vel-deep text-vel-bg pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 mb-16">
          {/* Logo */}
          <div>
            <div className="font-serif text-2xl tracking-[0.2em] mb-4">VELMORA</div>
            <p className="text-sm text-vel-muted">Fine jewelry, thoughtfully made.</p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-vel-gold">Shop</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-vel-gold">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-vel-gold">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-vel-gold">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-vel-gold">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-vel-gold">Help</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#shipping" className="hover:text-vel-gold">Shipping</a></li>
              <li><a href="#returns" className="hover:text-vel-gold">Returns</a></li>
              <li><a href="#care" className="hover:text-vel-gold">Jewelry Care</a></li>
              <li><a href="#contact" className="hover:text-vel-gold">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-vel-gold">Company</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-vel-gold">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-vel-gold">Journal</Link></li>
              <li><a href="#sustainability" className="hover:text-vel-gold">Sustainability</a></li>
              <li><a href="#careers" className="hover:text-vel-gold">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-vel-muted">
          <div>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#accessibility">Accessibility</a>
          </div>
          <div className="flex gap-4">
            <span>Instagram</span>
            <span>Pinterest</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer