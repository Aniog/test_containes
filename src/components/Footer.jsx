import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F0E0C] text-[#E5E0D8] pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-6">
          {/* Logo */}
          <div className="col-span-2 md:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-[3px] text-[#C5A46E]">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-[#9A8F7E] max-w-[220px]">
              Demi-fine jewelry, crafted to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <div className="font-serif text-sm tracking-[1.5px] mb-4 text-[#C5A46E]">SHOP</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-[#C5A46E] transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-[#C5A46E] transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-[#C5A46E] transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-[#C5A46E] transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <div className="font-serif text-sm tracking-[1.5px] mb-4 text-[#C5A46E]">HELP</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#shipping" className="hover:text-[#C5A46E] transition-colors">Shipping</a></li>
              <li><a href="#returns" className="hover:text-[#C5A46E] transition-colors">Returns</a></li>
              <li><a href="#care" className="hover:text-[#C5A46E] transition-colors">Jewelry Care</a></li>
              <li><a href="#contact" className="hover:text-[#C5A46E] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="font-serif text-sm tracking-[1.5px] mb-4 text-[#C5A46E]">COMPANY</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-[#C5A46E] transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-[#C5A46E] transition-colors">Journal</Link></li>
              <li><a href="#sustainability" className="hover:text-[#C5A46E] transition-colors">Sustainability</a></li>
              <li><a href="#careers" className="hover:text-[#C5A46E] transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#9A8F7E]">
          <div>© {currentYear} Velmora Fine Jewelry. All rights reserved.</div>
          
          <div className="flex items-center gap-6">
            {/* Payment Icons (text representation) */}
            <div className="flex items-center gap-3 tracking-[1px]">
              <span>VISA</span>
              <span>MC</span>
              <span>AMEX</span>
              <span>PP</span>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A46E] transition-colors">IG</a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A46E] transition-colors">PT</a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A46E] transition-colors">TT</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
