import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer pt-16 pb-8 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 mb-16">
          {/* Logo */}
          <div>
            <div className="serif text-2xl tracking-[0.2em] text-white mb-4">VELMORA</div>
            <p className="text-sm text-[#8B8578]">Crafted with intention since 2019.</p>
          </div>

          {/* Shop */}
          <div>
            <div className="uppercase tracking-[0.1em] text-sm mb-4 text-[#B89778]">Shop</div>
            <div className="space-y-2 text-sm">
              <Link to="/shop" className="footer-link block">All Jewelry</Link>
              <Link to="/shop" className="footer-link block">Earrings</Link>
              <Link to="/shop" className="footer-link block">Necklaces</Link>
              <Link to="/shop" className="footer-link block">Huggies</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <div className="uppercase tracking-[0.1em] text-sm mb-4 text-[#B89778]">Help</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="footer-link block">Shipping</a>
              <a href="#" className="footer-link block">Returns</a>
              <a href="#" className="footer-link block">Care Guide</a>
              <a href="#" className="footer-link block">Contact</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="uppercase tracking-[0.1em] text-sm mb-4 text-[#B89778]">Company</div>
            <div className="space-y-2 text-sm">
              <a href="#about" className="footer-link block">Our Story</a>
              <a href="#journal" className="footer-link block">Journal</a>
              <a href="#" className="footer-link block">Sustainability</a>
              <a href="#" className="footer-link block">Stockists</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#4A4640] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#8B8578]">
          <div>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="footer-link">Instagram</a>
            <a href="#" className="footer-link">Pinterest</a>
            <a href="#" className="footer-link">TikTok</a>
          </div>
          <div>Visa · Mastercard · Amex · Apple Pay</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;