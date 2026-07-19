import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-velmora-surface border-t border-velmora-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 mb-16">
          {/* Logo */}
          <div>
            <Link to="/" className="serif text-xl tracking-[0.2em] font-medium">
              VELMORA
            </Link>
            <p className="text-xs text-velmora-text-light mt-3 max-w-[180px]">
              Demi-fine jewelry, crafted with intention.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-velmora-text-light">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-velmora-accent">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-velmora-accent">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-velmora-accent">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-velmora-accent">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-velmora-text-light">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#shipping" className="hover:text-velmora-accent">Shipping</a></li>
              <li><a href="#returns" className="hover:text-velmora-accent">Returns</a></li>
              <li><a href="#care" className="hover:text-velmora-accent">Jewelry Care</a></li>
              <li><a href="#contact" className="hover:text-velmora-accent">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-velmora-text-light">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-velmora-accent">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-velmora-accent">Journal</Link></li>
              <li><a href="#sustainability" className="hover:text-velmora-accent">Sustainability</a></li>
              <li><a href="#careers" className="hover:text-velmora-accent">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Payment & Social */}
        <div className="pt-8 border-t border-velmora-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-velmora-text-light">
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} Velmora Fine Jewelry</span>
            <span className="hidden md:inline">·</span>
            <a href="#privacy" className="hover:text-velmora-accent">Privacy</a>
            <a href="#terms" className="hover:text-velmora-accent">Terms</a>
          </div>

          <div className="flex items-center gap-6">
            {/* Payment Icons (text representation) */}
            <div className="flex items-center gap-3 text-[10px] tracking-widest">
              <span>VISA</span>
              <span>MC</span>
              <span>AMEX</span>
              <span>PP</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-velmora-accent">IG</a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-velmora-accent">PT</a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-velmora-accent">TT</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;