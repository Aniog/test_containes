import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2C2522] text-[#F5F2ED] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 pb-12 border-b border-white/20">
          {/* Logo */}
          <div className="col-span-2 md:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-[3px] text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-[#9A8F82] max-w-[220px]">
              Quietly crafted demi-fine jewelry for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[2px] mb-4 text-[#B89778]">SHOP</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-[#B89778]">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-[#B89778]">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-[#B89778]">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-[#B89778]">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-[2px] mb-4 text-[#B89778]">HELP</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#shipping" className="hover:text-[#B89778]">Shipping</a></li>
              <li><a href="#returns" className="hover:text-[#B89778]">Returns</a></li>
              <li><a href="#care" className="hover:text-[#B89778]">Jewelry Care</a></li>
              <li><a href="#contact" className="hover:text-[#B89778]">Contact</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[2px] mb-4 text-[#B89778]">COMPANY</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-[#B89778]">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-[#B89778]">Journal</Link></li>
              <li><a href="#sustainability" className="hover:text-[#B89778]">Sustainability</a></li>
              <li><a href="#careers" className="hover:text-[#B89778]">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#9A8F82]">
          <div className="flex items-center gap-6">
            <span>© {currentYear} Velmora Fine Jewelry</span>
            <a href="#privacy" className="hover:text-[#B89778]">Privacy</a>
            <a href="#terms" className="hover:text-[#B89778]">Terms</a>
          </div>

          {/* Payment icons (text representation) */}
          <div className="flex items-center gap-3 tracking-[2px]">
            VISA · MC · AMEX · APPLE PAY
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B89778]">IG</a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B89778]">PT</a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B89778]">TT</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
