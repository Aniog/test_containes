import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0F0E0C] text-[#F5F2ED] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 pb-12 border-b border-white/10">
          {/* Logo */}
          <div>
            <div className="font-serif text-2xl tracking-[0.15em] mb-4">VELMORA</div>
            <p className="text-sm text-white/60 max-w-[180px]">
              Demi-fine jewelry, crafted to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-xs tracking-[0.15em] mb-4 text-white/50">SHOP</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-[#B8976A] transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-[#B8976A] transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-[#B8976A] transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-[#B8976A] transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <div className="text-xs tracking-[0.15em] mb-4 text-white/50">HELP</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#shipping" className="hover:text-[#B8976A] transition-colors">Shipping</a></li>
              <li><a href="#returns" className="hover:text-[#B8976A] transition-colors">Returns</a></li>
              <li><a href="#care" className="hover:text-[#B8976A] transition-colors">Jewelry Care</a></li>
              <li><a href="#contact" className="hover:text-[#B8976A] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs tracking-[0.15em] mb-4 text-white/50">COMPANY</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-[#B8976A] transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-[#B8976A] transition-colors">Journal</Link></li>
              <li><a href="#sustainability" className="hover:text-[#B8976A] transition-colors">Sustainability</a></li>
              <li><a href="#careers" className="hover:text-[#B8976A] transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Pinterest</a>
            <a href="#" className="hover:text-white transition-colors">TikTok</a>
          </div>

          <div className="flex items-center gap-4 text-[10px] tracking-widest">
            <span>VISA</span>
            <span>MASTERCARD</span>
            <span>AMEX</span>
            <span>PAYPAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
