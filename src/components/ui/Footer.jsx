import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1816] text-[#F8F5F1] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-16">
          {/* Logo */}
          <div>
            <Link to="/" className="font-serif-custom text-2xl tracking-[0.15em]">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-[#C4B5A5] leading-relaxed">
              Fine jewelry crafted with intention.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm tracking-[0.1em] mb-4 text-[#C4B5A5]">SHOP</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-[#C5A46E] transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-[#C5A46E] transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-[#C5A46E] transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-[#C5A46E] transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=Sets" className="hover:text-[#C5A46E] transition-colors">Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-sm tracking-[0.1em] mb-4 text-[#C4B5A5]">HELP</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#shipping" className="hover:text-[#C5A46E] transition-colors">Shipping</a></li>
              <li><a href="#returns" className="hover:text-[#C5A46E] transition-colors">Returns</a></li>
              <li><a href="#care" className="hover:text-[#C5A46E] transition-colors">Jewelry Care</a></li>
              <li><a href="#contact" className="hover:text-[#C5A46E] transition-colors">Contact Us</a></li>
              <li><a href="#size" className="hover:text-[#C5A46E] transition-colors">Size Guide</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm tracking-[0.1em] mb-4 text-[#C4B5A5]">COMPANY</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-[#C5A46E] transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-[#C5A46E] transition-colors">Journal</Link></li>
              <li><a href="#sustainability" className="hover:text-[#C5A46E] transition-colors">Sustainability</a></li>
              <li><a href="#press" className="hover:text-[#C5A46E] transition-colors">Press</a></li>
              <li><a href="#careers" className="hover:text-[#C5A46E] transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Payment & Social */}
        <div className="pt-8 border-t border-[#3A3632] flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-[#C4B5A5]">
          <div className="flex items-center gap-4">
            <span>© {currentYear} Velmora Fine Jewelry</span>
          </div>

          {/* Payment Icons (text representation) */}
          <div className="flex items-center gap-4 text-xs tracking-[0.1em]">
            <span>VISA</span>
            <span>MASTERCARD</span>
            <span>AMEX</span>
            <span>PAYPAL</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A46E] transition-colors">IG</a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A46E] transition-colors">PT</a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A46E] transition-colors">TT</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
