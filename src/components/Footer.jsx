import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1C1C1C] text-[#F8F5F0] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 pb-12 border-b border-[#3A3834]">
          {/* Logo & Tagline */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[3px] text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-[#9A958E] leading-relaxed">
              Timeless jewelry, crafted with intention.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[2px] text-[#B89778] mb-4">SHOP</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-[#B89778] transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-[#B89778] transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-[#B89778] transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-[#B89778] transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-[2px] text-[#B89778] mb-4">HELP</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#shipping" className="hover:text-[#B89778] transition-colors">Shipping</a></li>
              <li><a href="#returns" className="hover:text-[#B89778] transition-colors">Returns</a></li>
              <li><a href="#care" className="hover:text-[#B89778] transition-colors">Jewelry Care</a></li>
              <li><a href="#contact" className="hover:text-[#B89778] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[2px] text-[#B89778] mb-4">COMPANY</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-[#B89778] transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-[#B89778] transition-colors">Journal</Link></li>
              <li><a href="#sustainability" className="hover:text-[#B89778] transition-colors">Sustainability</a></li>
              <li><a href="#careers" className="hover:text-[#B89778] transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#9A958E]">
          <div className="flex items-center gap-6">
            <span>© {currentYear} Velmora Fine Jewelry</span>
            <a href="#privacy" className="hover:text-[#B89778] transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-[#B89778] transition-colors">Terms</a>
          </div>

          {/* Payment Icons */}
          <div className="flex items-center gap-3 text-[#6B665F]">
            <span className="text-[10px] tracking-widest">VISA</span>
            <span className="text-[10px] tracking-widest">MC</span>
            <span className="text-[10px] tracking-widest">AMEX</span>
            <span className="text-[10px] tracking-widest">PAYPAL</span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B89778] transition-colors" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B89778] transition-colors" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B89778] transition-colors" aria-label="Twitter">
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
