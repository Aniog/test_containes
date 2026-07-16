import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1C1917] text-[#F8F5F1] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 pb-12 border-b border-[#3D332B]">
          {/* Logo */}
          <div>
            <Link to="/" className="font-serif text-2xl tracking-[0.2em]">VELMORA</Link>
            <p className="text-xs text-[#8C7660] mt-3 tracking-wider">EST. 2019</p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[0.15em] mb-4 text-[#B89778]">SHOP</h4>
            <ul className="space-y-2 text-sm text-[#D4C9B8]">
              <li><Link to="/shop" className="hover:text-[#F8F5F1]">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-[#F8F5F1]">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-[#F8F5F1]">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-[#F8F5F1]">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-[0.15em] mb-4 text-[#B89778]">HELP</h4>
            <ul className="space-y-2 text-sm text-[#D4C9B8]">
              <li><a href="#shipping" className="hover:text-[#F8F5F1]">Shipping</a></li>
              <li><a href="#returns" className="hover:text-[#F8F5F1]">Returns</a></li>
              <li><a href="#care" className="hover:text-[#F8F5F1]">Jewelry Care</a></li>
              <li><a href="#contact" className="hover:text-[#F8F5F1]">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[0.15em] mb-4 text-[#B89778]">COMPANY</h4>
            <ul className="space-y-2 text-sm text-[#D4C9B8]">
              <li><Link to="/about" className="hover:text-[#F8F5F1]">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-[#F8F5F1]">Journal</Link></li>
              <li><a href="#sustainability" className="hover:text-[#F8F5F1]">Sustainability</a></li>
              <li><a href="#careers" className="hover:text-[#F8F5F1]">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#8C7660]">
          <div className="flex items-center gap-6">
            <span>© {new Date().getFullYear()} Velmora Fine Jewelry</span>
            <a href="#privacy" className="hover:text-[#F8F5F1]">Privacy</a>
            <a href="#terms" className="hover:text-[#F8F5F1]">Terms</a>
          </div>
          
          {/* Payment Icons (text representation) */}
          <div className="flex items-center gap-4 tracking-[0.1em]">
            VISA · MC · AMEX · APPLE PAY
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="#instagram" className="hover:text-[#F8F5F1]">IG</a>
            <a href="#pinterest" className="hover:text-[#F8F5F1]">PT</a>
            <a href="#tiktok" className="hover:text-[#F8F5F1]">TT</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
