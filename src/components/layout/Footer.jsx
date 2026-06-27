import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F0E0C] text-[#E8E4DC] pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 pb-12 border-b border-white/10">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[4px] text-white">
              VELMORA
            </Link>
            <p className="text-xs text-[#A8A29C] mt-3 tracking-wide">Fine Jewelry</p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[2px] mb-4 text-[#C5A46E]">SHOP</h4>
            <ul className="space-y-2 text-sm text-[#A8A29C]">
              <li><Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-white transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-[2px] mb-4 text-[#C5A46E]">HELP</h4>
            <ul className="space-y-2 text-sm text-[#A8A29C]">
              <li><a href="#shipping" className="hover:text-white transition-colors">Shipping</a></li>
              <li><a href="#returns" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="#care" className="hover:text-white transition-colors">Jewelry Care</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[2px] mb-4 text-[#C5A46E]">COMPANY</h4>
            <ul className="space-y-2 text-sm text-[#A8A29C]">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-white transition-colors">Journal</Link></li>
              <li><a href="#sustainability" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#press" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-xs tracking-[2px] mb-4 text-[#C5A46E]">CONNECT</h4>
            <div className="flex gap-4 mb-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#A8A29C] hover:text-white transition-colors">IG</a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-[#A8A29C] hover:text-white transition-colors">PT</a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-[#A8A29C] hover:text-white transition-colors">TT</a>
            </div>
            <a href="mailto:hello@velmora.com" className="text-sm text-[#A8A29C] hover:text-white transition-colors">hello@velmora.com</a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#A8A29C]">
          <p>© {currentYear} Velmora Fine Jewelry. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <span>Payment methods</span>
            <div className="flex gap-3 text-[10px] tracking-widest">
              <span>VISA</span>
              <span>MC</span>
              <span>AMEX</span>
              <span>PP</span>
            </div>
          </div>

          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;