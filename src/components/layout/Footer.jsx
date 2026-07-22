import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2C2825] text-[#F8F5F1] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-16">
          {/* Logo */}
          <div>
            <Link to="/" className="font-serif text-xl tracking-[0.2em] text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-[#8A8178] max-w-[200px]">
              Fine jewelry, crafted to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-[#B89778]">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-[#B89778] transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-[#B89778] transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-[#B89778] transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-[#B89778] transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-[#B89778]">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#shipping" className="hover:text-[#B89778] transition-colors">Shipping</a></li>
              <li><a href="#returns" className="hover:text-[#B89778] transition-colors">Returns</a></li>
              <li><a href="#care" className="hover:text-[#B89778] transition-colors">Jewelry Care</a></li>
              <li><a href="#contact" className="hover:text-[#B89778] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-[#B89778]">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-[#B89778] transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-[#B89778] transition-colors">Journal</Link></li>
              <li><a href="#sustainability" className="hover:text-[#B89778] transition-colors">Sustainability</a></li>
              <li><a href="#careers" className="hover:text-[#B89778] transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#4A4642] mb-8" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 text-sm text-[#8A8178]">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <p>© {currentYear} Velmora Fine Jewelry. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#privacy" className="hover:text-[#B89778] transition-colors">Privacy</a>
              <a href="#terms" className="hover:text-[#B89778] transition-colors">Terms</a>
            </div>
          </div>

          {/* Payment Icons & Social */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 text-xs tracking-widest">
              <span>VISA</span>
              <span>MC</span>
              <span>AMEX</span>
              <span>PP</span>
            </div>
            <div className="flex items-center gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B89778] transition-colors" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B89778] transition-colors" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B89778] transition-colors" aria-label="Twitter">
                <Twitter size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
