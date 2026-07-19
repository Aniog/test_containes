import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-velmora-charcoal text-velmora-cream pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 pb-12 border-b border-white/20">
          {/* Logo */}
          <div>
            <Link to="/" className="font-serif-custom text-2xl tracking-[0.15em]">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Fine jewelry, thoughtfully crafted.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm tracking-[0.1em] uppercase mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/shop" className="hover:text-velmora-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-velmora-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-velmora-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-velmora-gold transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-sm tracking-[0.1em] uppercase mb-4">Help</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#shipping" className="hover:text-velmora-gold transition-colors">Shipping</a></li>
              <li><a href="#returns" className="hover:text-velmora-gold transition-colors">Returns</a></li>
              <li><a href="#care" className="hover:text-velmora-gold transition-colors">Jewelry Care</a></li>
              <li><a href="#contact" className="hover:text-velmora-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm tracking-[0.1em] uppercase mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/about" className="hover:text-velmora-gold transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-velmora-gold transition-colors">Journal</Link></li>
              <li><a href="#sustainability" className="hover:text-velmora-gold transition-colors">Sustainability</a></li>
              <li><a href="#careers" className="hover:text-velmora-gold transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            <span>© {currentYear} Velmora Fine Jewelry</span>
            <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms</a>
          </div>
          
          {/* Payment Icons (text representation) */}
          <div className="flex gap-4 tracking-[0.1em]">
            VISA · MC · AMEX · PAYPAL
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a href="#instagram" className="hover:text-white transition-colors">IG</a>
            <a href="#pinterest" className="hover:text-white transition-colors">PT</a>
            <a href="#tiktok" className="hover:text-white transition-colors">TT</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
