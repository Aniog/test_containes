import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-velmora-bg text-velmora-cream pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 mb-16">
          {/* Logo */}
          <div>
            <Link to="/" className="logo text-velmora-cream text-xl tracking-[0.15em]">
              VELMORA
            </Link>
            <p className="text-xs text-velmora-stone mt-3 max-w-[180px]">
              Fine jewelry, thoughtfully crafted.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[0.1em] uppercase mb-4 text-velmora-stone">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-velmora-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-velmora-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-velmora-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-velmora-gold transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-[0.1em] uppercase mb-4 text-velmora-stone">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#shipping" className="hover:text-velmora-gold transition-colors">Shipping</a></li>
              <li><a href="#returns" className="hover:text-velmora-gold transition-colors">Returns</a></li>
              <li><a href="#care" className="hover:text-velmora-gold transition-colors">Jewelry Care</a></li>
              <li><a href="#contact" className="hover:text-velmora-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[0.1em] uppercase mb-4 text-velmora-stone">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-velmora-gold transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-velmora-gold transition-colors">Journal</Link></li>
              <li><a href="#sustainability" className="hover:text-velmora-gold transition-colors">Sustainability</a></li>
              <li><a href="#careers" className="hover:text-velmora-gold transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Payment & Social */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6 text-xs text-velmora-stone">
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} Velmora Fine Jewelry</span>
            <span className="hidden md:inline">·</span>
            <a href="#privacy" className="hover:text-velmora-gold transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-velmora-gold transition-colors">Terms</a>
          </div>

          <div className="flex items-center gap-6">
            {/* Payment icons (text representation) */}
            <div className="flex items-center gap-3 text-[10px] tracking-widest">
              <span>VISA</span>
              <span>MC</span>
              <span>AMEX</span>
              <span>PP</span>
            </div>
            
            {/* Social */}
            <div className="flex items-center gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-velmora-gold transition-colors">IG</a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-velmora-gold transition-colors">PT</a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-velmora-gold transition-colors">TT</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;