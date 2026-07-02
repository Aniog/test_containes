import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-900 text-base-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 pb-12 border-b border-white/10">
          {/* Logo */}
          <div>
            <Link to="/" className="font-serif text-2xl tracking-[0.15em]">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-base-300 max-w-[180px]">
              Fine jewelry, crafted to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-xs tracking-[0.1em] text-gold-400 mb-4">SHOP</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-gold-400 transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-gold-400 transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-gold-400 transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-gold-400 transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <div className="text-xs tracking-[0.1em] text-gold-400 mb-4">HELP</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#shipping" className="hover:text-gold-400 transition-colors">Shipping</a></li>
              <li><a href="#returns" className="hover:text-gold-400 transition-colors">Returns</a></li>
              <li><a href="#care" className="hover:text-gold-400 transition-colors">Jewelry Care</a></li>
              <li><a href="#contact" className="hover:text-gold-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs tracking-[0.1em] text-gold-400 mb-4">COMPANY</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-gold-400 transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-gold-400 transition-colors">Journal</Link></li>
              <li><a href="#sustainability" className="hover:text-gold-400 transition-colors">Sustainability</a></li>
              <li><a href="#careers" className="hover:text-gold-400 transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-base-300">
          <div>
            © {currentYear} Velmora Fine Jewelry. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            {/* Payment Icons (text representation) */}
            <div className="flex items-center gap-3 tracking-[0.1em]">
              VISA · MC · AMEX · PAYPAL
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">IG</a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">PT</a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">TT</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
