import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-velmora-surface border-t border-velmora-border pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8 mb-16">
          {/* Logo */}
          <div>
            <Link to="/" className="serif text-xl tracking-[0.2em] text-velmora-text">
              VELMORA
            </Link>
            <p className="text-xs text-velmora-text-muted mt-3 leading-relaxed">
              Fine jewelry, thoughtfully crafted.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[0.1em] text-velmora-text-muted mb-4">SHOP</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-velmora-accent">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-velmora-accent">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-velmora-accent">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-velmora-accent">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-[0.1em] text-velmora-text-muted mb-4">HELP</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#shipping" className="hover:text-velmora-accent">Shipping</a></li>
              <li><a href="#returns" className="hover:text-velmora-accent">Returns</a></li>
              <li><a href="#care" className="hover:text-velmora-accent">Jewelry Care</a></li>
              <li><a href="#contact" className="hover:text-velmora-accent">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[0.1em] text-velmora-text-muted mb-4">COMPANY</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-velmora-accent">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-velmora-accent">Journal</Link></li>
              <li><a href="#sustainability" className="hover:text-velmora-accent">Sustainability</a></li>
              <li><a href="#careers" className="hover:text-velmora-accent">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-velmora-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-velmora-text-muted">
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} Velmora Fine Jewelry</span>
            <span className="hidden md:inline">·</span>
            <a href="#privacy" className="hover:text-velmora-text">Privacy</a>
            <a href="#terms" className="hover:text-velmora-text">Terms</a>
          </div>

          {/* Payment Icons (text representation) */}
          <div className="flex items-center gap-3 tracking-[0.1em]">
            VISA · MC · AMEX · APPLE PAY
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="#instagram" className="hover:text-velmora-text">IG</a>
            <a href="#pinterest" className="hover:text-velmora-text">PT</a>
            <a href="#tiktok" className="hover:text-velmora-text">TT</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
