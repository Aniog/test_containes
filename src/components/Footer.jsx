import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2C2522] text-[#F8F5F1] pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 mb-16">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em]">
              VELMORA
            </Link>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-lg mb-4 tracking-[0.05em]">Shop</h4>
            <ul className="space-y-2 text-sm text-[#C5B8A8]">
              <li><Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-white transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-serif text-lg mb-4 tracking-[0.05em]">Help</h4>
            <ul className="space-y-2 text-sm text-[#C5B8A8]">
              <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Care Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-lg mb-4 tracking-[0.05em]">Company</h4>
            <ul className="space-y-2 text-sm text-[#C5B8A8]">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-white transition-colors">Journal</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif text-lg mb-4 tracking-[0.05em]">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-[#C5B8A8] hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-[#C5B8A8] hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-[#C5B8A8] hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Payment & Copyright */}
        <div className="pt-8 border-t border-[#4A413C]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-[#C5B8A8]">
            <div className="flex gap-4 text-xs">
              <span>VISA</span>
              <span>MASTERCARD</span>
              <span>AMEX</span>
              <span>PAYPAL</span>
            </div>
            <p className="text-xs">© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;