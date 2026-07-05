import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2C2522] text-[#F8F5F1] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 pb-12 border-b border-[#4A4139]">
          {/* Logo & Tagline */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] text-[#F8F5F1]">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-[#A89C8F] leading-relaxed">
              Quiet luxury, crafted to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-[#C5A46E]">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-[#C5A46E] transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-[#C5A46E] transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-[#C5A46E] transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-[#C5A46E] transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-[#C5A46E]">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#shipping" className="hover:text-[#C5A46E] transition-colors">Shipping</a></li>
              <li><a href="#returns" className="hover:text-[#C5A46E] transition-colors">Returns</a></li>
              <li><a href="#care" className="hover:text-[#C5A46E] transition-colors">Jewelry Care</a></li>
              <li><a href="#contact" className="hover:text-[#C5A46E] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-[#C5A46E]">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-[#C5A46E] transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-[#C5A46E] transition-colors">Journal</Link></li>
              <li><a href="#sustainability" className="hover:text-[#C5A46E] transition-colors">Sustainability</a></li>
              <li><a href="#careers" className="hover:text-[#C5A46E] transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#A89C8F]">
          <div className="flex items-center gap-6">
            <span>© {currentYear} Velmora Fine Jewelry</span>
            <a href="#privacy" className="hover:text-[#C5A46E] transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-[#C5A46E] transition-colors">Terms</a>
          </div>

          {/* Payment Icons (text representation) */}
          <div className="flex items-center gap-4 tracking-[0.1em]">
            VISA · MC · AMEX · APPLE PAY
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
