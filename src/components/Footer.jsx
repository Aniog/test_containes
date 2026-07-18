import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2C2825] text-[#E8E4DE] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 mb-16">
          {/* Logo */}
          <div>
            <Link to="/" className="font-serif text-2xl tracking-[3px] text-white">
              VELMORA
            </Link>
            <p className="text-xs tracking-[1px] mt-3 text-[#8B857D]">
              Fine jewelry for everyday.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[2px] mb-4 text-white">SHOP</h4>
            <ul className="space-y-2 text-sm text-[#B8B3AB]">
              <li><Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-white transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-[2px] mb-4 text-white">HELP</h4>
            <ul className="space-y-2 text-sm text-[#B8B3AB]">
              <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Care Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[2px] mb-4 text-white">COMPANY</h4>
            <ul className="space-y-2 text-sm text-[#B8B3AB]">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-white transition-colors">Journal</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-[1px] text-[#8B857D]">
          <p>© {currentYear} Velmora Fine Jewelry. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <span>WE ACCEPT</span>
            <div className="flex gap-3 text-[10px]">
              <span>VISA</span>
              <span>MC</span>
              <span>AMEX</span>
              <span>PP</span>
            </div>
          </div>

          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">IG</a>
            <a href="#" className="hover:text-white transition-colors">PIN</a>
            <a href="#" className="hover:text-white transition-colors">TT</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
