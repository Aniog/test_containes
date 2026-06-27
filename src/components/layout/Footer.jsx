import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1C1B18] text-[#D4C9B8] pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 pb-12 border-b border-[#3A3833]">
          {/* Logo */}
          <div className="col-span-2 md:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-[3px] text-[#F8F5F0]">
              VELMORA
            </Link>
            <p className="text-xs tracking-[1px] mt-3 text-[#8A8175] max-w-[200px]">
              Fine demi-gold jewelry, crafted to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-[#F8F5F0] text-xs tracking-[2px] mb-4">SHOP</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-[#F8F5F0] transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-[#F8F5F0] transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-[#F8F5F0] transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-[#F8F5F0] transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=sets" className="hover:text-[#F8F5F0] transition-colors">Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-[#F8F5F0] text-xs tracking-[2px] mb-4">HELP</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#shipping" className="hover:text-[#F8F5F0] transition-colors">Shipping</a></li>
              <li><a href="#returns" className="hover:text-[#F8F5F0] transition-colors">Returns</a></li>
              <li><a href="#care" className="hover:text-[#F8F5F0] transition-colors">Jewelry Care</a></li>
              <li><a href="#contact" className="hover:text-[#F8F5F0] transition-colors">Contact Us</a></li>
              <li><a href="#faq" className="hover:text-[#F8F5F0] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#F8F5F0] text-xs tracking-[2px] mb-4">COMPANY</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-[#F8F5F0] transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-[#F8F5F0] transition-colors">Journal</Link></li>
              <li><a href="#sustainability" className="hover:text-[#F8F5F0] transition-colors">Sustainability</a></li>
              <li><a href="#press" className="hover:text-[#F8F5F0] transition-colors">Press</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs tracking-[1px] text-[#8A8175]">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <span>© {currentYear} Velmora Fine Jewelry</span>
            <span className="hidden md:inline">·</span>
            <a href="#privacy" className="hover:text-[#F8F5F0]">Privacy</a>
            <a href="#terms" className="hover:text-[#F8F5F0]">Terms</a>
          </div>

          {/* Payment Icons (text representation) */}
          <div className="flex items-center gap-3 text-[10px] tracking-[2px]">
            <span>VISA</span>
            <span>MC</span>
            <span>AMEX</span>
            <span>APPLE PAY</span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F8F5F0]">IG</a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F8F5F0]">PT</a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F8F5F0]">TT</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
