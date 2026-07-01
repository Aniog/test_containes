import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-velmora-charcoal text-velmora-bg pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 pb-12 border-b border-white/20">
          {/* Logo */}
          <div>
            <Link to="/" className="font-serif text-2xl tracking-[0.15em]">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Quiet luxury, crafted to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-xs tracking-[0.1em] uppercase mb-4 text-white/60">Shop</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-velmora-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-velmora-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-velmora-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-velmora-gold transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <div className="text-xs tracking-[0.1em] uppercase mb-4 text-white/60">Help</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#shipping" className="hover:text-velmora-gold transition-colors">Shipping</a></li>
              <li><a href="#returns" className="hover:text-velmora-gold transition-colors">Returns</a></li>
              <li><a href="#care" className="hover:text-velmora-gold transition-colors">Care Guide</a></li>
              <li><a href="#contact" className="hover:text-velmora-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs tracking-[0.1em] uppercase mb-4 text-white/60">Company</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-velmora-gold transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-velmora-gold transition-colors">Journal</Link></li>
              <li><a href="#sustainability" className="hover:text-velmora-gold transition-colors">Sustainability</a></li>
              <li><a href="#careers" className="hover:text-velmora-gold transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>© {currentYear} Velmora Fine Jewelry. All rights reserved.</div>
          
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms</a>
            <a href="#accessibility" className="hover:text-white transition-colors">Accessibility</a>
          </div>

          {/* Payment icons (text representation) */}
          <div className="flex items-center gap-3 text-[10px] tracking-[0.1em]">
            VISA · MC · AMEX · APPLE PAY
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;