import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-stone pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Info */}
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-serif tracking-[0.2em] font-medium">VELMORA</Link>
            <p className="text-sm text-muted leading-relaxed max-w-xs font-light">
              Elevated jewelry designed for the modern woman. Crafted from premium materials to be treasured for a lifetime.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-6">Shop</h4>
            <ul className="space-y-4">
              <li><Link to="/shop" className="text-sm text-muted hover:text-accent transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Necklaces" className="text-sm text-muted hover:text-accent transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Earrings" className="text-sm text-muted hover:text-accent transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Huggies" className="text-sm text-muted hover:text-accent transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-sm text-muted hover:text-accent transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-muted hover:text-accent transition-colors">Journal</Link></li>
              <li><Link to="/sustainability" className="text-sm text-muted hover:text-accent transition-colors">Sustainability</Link></li>
              <li><Link to="/contact" className="text-sm text-muted hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-6">Help</h4>
            <ul className="space-y-4">
              <li><Link to="/shipping" className="text-sm text-muted hover:text-accent transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/faq" className="text-sm text-muted hover:text-accent transition-colors">FAQs</Link></li>
              <li><Link to="/care" className="text-sm text-muted hover:text-accent transition-colors">Care Guide</Link></li>
              <li><Link to="/privacy" className="text-sm text-muted hover:text-accent transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-stone flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[10px] text-muted uppercase tracking-widest">
            © 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-6 text-[10px] uppercase tracking-widest text-muted">
            <a href="#" className="hover:text-accent transition-colors">Instagram</a>
            <a href="#" className="hover:text-accent transition-colors">Pinterest</a>
            <a href="#" className="hover:text-accent transition-colors">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
