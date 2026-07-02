import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-950 text-base-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 pb-12 border-b border-white/20">
          {/* Logo */}
          <div>
            <Link to="/" className="font-serif text-2xl tracking-[0.15em] text-white">
              VELMORA
            </Link>
            <p className="mt-3 text-sm text-white/60 max-w-[180px]">
              Quiet luxury, crafted to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-xs tracking-[0.1em] text-white/50 mb-4">SHOP</div>
            <div className="space-y-2 text-sm">
              <Link to="/shop" className="block hover:text-gold-400 transition-colors">All Jewelry</Link>
              <Link to="/shop?category=Earrings" className="block hover:text-gold-400 transition-colors">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="block hover:text-gold-400 transition-colors">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="block hover:text-gold-400 transition-colors">Huggies</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <div className="text-xs tracking-[0.1em] text-white/50 mb-4">HELP</div>
            <div className="space-y-2 text-sm">
              <a href="#shipping" className="block hover:text-gold-400 transition-colors">Shipping</a>
              <a href="#returns" className="block hover:text-gold-400 transition-colors">Returns</a>
              <a href="#care" className="block hover:text-gold-400 transition-colors">Jewelry Care</a>
              <a href="#contact" className="block hover:text-gold-400 transition-colors">Contact Us</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs tracking-[0.1em] text-white/50 mb-4">COMPANY</div>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="block hover:text-gold-400 transition-colors">Our Story</Link>
              <Link to="/journal" className="block hover:text-gold-400 transition-colors">Journal</Link>
              <a href="#sustainability" className="block hover:text-gold-400 transition-colors">Sustainability</a>
              <a href="#careers" className="block hover:text-gold-400 transition-colors">Careers</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-white/50">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <span>© {currentYear} Velmora Fine Jewelry</span>
            <span className="hidden md:inline">·</span>
            <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms</a>
          </div>

          {/* Payment icons (text representation) */}
          <div className="flex items-center gap-3 tracking-[0.1em]">
            <span>VISA</span>
            <span>MC</span>
            <span>AMEX</span>
            <span>APPLE PAY</span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">IG</a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">PT</a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">TT</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;