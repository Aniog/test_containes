import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2C2522] text-[#F8F5F1] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 pb-12 border-b border-white/20">
          {/* Logo */}
          <div>
            <Link to="/" className="font-serif-custom text-2xl tracking-[0.2em] text-[#F8F5F1]">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-[#F8F5F1]/60 leading-relaxed">
              Timeless demi-fine jewelry, crafted with intention.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] mb-4 text-[#F8F5F1]/60">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-[#B8865C] transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-[#B8865C] transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-[#B8865C] transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-[#B8865C] transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] mb-4 text-[#F8F5F1]/60">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#shipping" className="hover:text-[#B8865C] transition-colors">Shipping</a></li>
              <li><a href="#returns" className="hover:text-[#B8865C] transition-colors">Returns</a></li>
              <li><a href="#care" className="hover:text-[#B8865C] transition-colors">Jewelry Care</a></li>
              <li><a href="#contact" className="hover:text-[#B8865C] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] mb-4 text-[#F8F5F1]/60">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-[#B8865C] transition-colors">Our Story</Link></li>
              <li><Link to="/" className="hover:text-[#B8865C] transition-colors">Journal</Link></li>
              <li><Link to="/" className="hover:text-[#B8865C] transition-colors">Sustainability</Link></li>
              <li><Link to="/" className="hover:text-[#B8865C] transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#F8F5F1]/60">
          <p>© {currentYear} Velmora Fine Jewelry. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            {/* Payment Icons (text representation) */}
            <div className="flex items-center gap-3 text-xs tracking-widest">
              <span>VISA</span>
              <span>MC</span>
              <span>AMEX</span>
              <span>PP</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B8865C] transition-colors" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B8865C] transition-colors" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B8865C] transition-colors" aria-label="Twitter">
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
