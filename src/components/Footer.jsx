import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0D0D0D] text-[#F5F2ED] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 mb-16">
          {/* Logo */}
          <div>
            <div className="logo text-[#F5F2ED] mb-4">VELMORA</div>
            <p className="text-xs text-[#8A8A8A] max-w-[180px]">
              Fine jewelry, thoughtfully crafted.
            </p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-xs tracking-[0.15em] mb-4 text-[#8A8A8A]">SHOP</div>
            <div className="space-y-2 text-sm">
              <Link to="/shop" className="block hover:text-[#B8865A]">All Jewelry</Link>
              <Link to="/shop?category=Earrings" className="block hover:text-[#B8865A]">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="block hover:text-[#B8865A]">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="block hover:text-[#B8865A]">Huggies</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <div className="text-xs tracking-[0.15em] mb-4 text-[#8A8A8A]">HELP</div>
            <div className="space-y-2 text-sm">
              <a href="#shipping" className="block hover:text-[#B8865A]">Shipping</a>
              <a href="#returns" className="block hover:text-[#B8865A]">Returns</a>
              <a href="#care" className="block hover:text-[#B8865A]">Jewelry Care</a>
              <a href="#contact" className="block hover:text-[#B8865A]">Contact Us</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs tracking-[0.15em] mb-4 text-[#8A8A8A]">COMPANY</div>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="block hover:text-[#B8865A]">Our Story</Link>
              <Link to="/journal" className="block hover:text-[#B8865A]">Journal</Link>
              <a href="#sustainability" className="block hover:text-[#B8865A]">Sustainability</a>
              <a href="#careers" className="block hover:text-[#B8865A]">Careers</a>
            </div>
          </div>
        </div>

        {/* Payment & Social */}
        <div className="pt-8 border-t border-[#2A2A2A] flex flex-col md:flex-row md:items-center justify-between gap-6 text-xs text-[#8A8A8A]">
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            <span>© {new Date().getFullYear()} Velmora Fine Jewelry</span>
            <a href="#privacy" className="hover:text-[#F5F2ED]">Privacy</a>
            <a href="#terms" className="hover:text-[#F5F2ED]">Terms</a>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="mr-2">We accept</span>
            <span>VISA</span>
            <span>MC</span>
            <span>AMEX</span>
            <span>APPLE PAY</span>
          </div>

          <div className="flex gap-4">
            <a href="#instagram" className="hover:text-[#F5F2ED]">Instagram</a>
            <a href="#pinterest" className="hover:text-[#F5F2ED]">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;