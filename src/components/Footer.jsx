import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#2C2522] text-[#EDE9E3] pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 mb-16">
          <div>
            <div className="font-serif text-2xl tracking-[3px] mb-6">VELMORA</div>
          </div>

          <div>
            <div className="text-xs tracking-[2px] mb-4 text-[#8B7F6F]">SHOP</div>
            <div className="space-y-2 text-sm">
              <Link to="/shop" className="block hover:text-[#C5A26F] transition-colors">All Jewelry</Link>
              <Link to="/shop?category=Earrings" className="block hover:text-[#C5A26F] transition-colors">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="block hover:text-[#C5A26F] transition-colors">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="block hover:text-[#C5A26F] transition-colors">Huggies</Link>
            </div>
          </div>

          <div>
            <div className="text-xs tracking-[2px] mb-4 text-[#8B7F6F]">HELP</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-[#C5A26F] transition-colors">Shipping</a>
              <a href="#" className="block hover:text-[#C5A26F] transition-colors">Returns</a>
              <a href="#" className="block hover:text-[#C5A26F] transition-colors">Care Guide</a>
              <a href="#" className="block hover:text-[#C5A26F] transition-colors">Contact</a>
            </div>
          </div>

          <div>
            <div className="text-xs tracking-[2px] mb-4 text-[#8B7F6F]">COMPANY</div>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="block hover:text-[#C5A26F] transition-colors">Our Story</Link>
              <a href="#" className="block hover:text-[#C5A26F] transition-colors">Journal</a>
              <a href="#" className="block hover:text-[#C5A26F] transition-colors">Sustainability</a>
              <a href="#" className="block hover:text-[#C5A26F] transition-colors">Press</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#4A413B] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#8B7F6F]">
          <div>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</div>
          <div className="flex gap-6">
            <span>Instagram</span>
            <span>Pinterest</span>
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;