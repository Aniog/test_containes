import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1816] text-[#F8F5F1] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 pb-12 border-b border-[#3A3632]">
          {/* Logo */}
          <div>
            <Link to="/" className="serif text-2xl tracking-[0.15em]">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-[#B89778] tracking-[0.04em]">
              Fine Jewelry
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[0.08em] uppercase mb-4 text-[#B89778]">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-[#B89778]">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-[#B89778]">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-[#B89778]">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-[#B89778]">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-[0.08em] uppercase mb-4 text-[#B89778]">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#shipping" className="hover:text-[#B89778]">Shipping</a></li>
              <li><a href="#returns" className="hover:text-[#B89778]">Returns</a></li>
              <li><a href="#care" className="hover:text-[#B89778]">Jewelry Care</a></li>
              <li><a href="#contact" className="hover:text-[#B89778]">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[0.08em] uppercase mb-4 text-[#B89778]">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-[#B89778]">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-[#B89778]">Journal</Link></li>
              <li><a href="#sustainability" className="hover:text-[#B89778]">Sustainability</a></li>
              <li><a href="#press" className="hover:text-[#B89778]">Press</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#6B6359]">
          <p>© {currentYear} Velmora Fine Jewelry. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-[#B89778]">Privacy</a>
            <a href="#terms" className="hover:text-[#B89778]">Terms</a>
            <a href="#accessibility" className="hover:text-[#B89778]">Accessibility</a>
          </div>

          {/* Payment Icons (text placeholders) */}
          <div className="flex items-center gap-3 text-[10px] tracking-[0.1em]">
            VISA · MC · AMEX · PAYPAL
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={16} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
