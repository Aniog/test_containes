import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2C2522] text-[#F8F5F1] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 pb-12 border-b border-white/20">
          {/* Logo */}
          <div>
            <Link to="/" className="logo text-[#F8F5F1] text-xl tracking-[0.25em]">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Fine jewelry, thoughtfully made.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-white/60">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-[#B89778]">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-[#B89778]">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-[#B89778]">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-[#B89778]">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-white/60">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#shipping" className="hover:text-[#B89778]">Shipping</a></li>
              <li><a href="#returns" className="hover:text-[#B89778]">Returns</a></li>
              <li><a href="#care" className="hover:text-[#B89778]">Jewelry Care</a></li>
              <li><a href="#contact" className="hover:text-[#B89778]">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-white/60">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-[#B89778]">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-[#B89778]">Journal</Link></li>
              <li><a href="#sustainability" className="hover:text-[#B89778]">Sustainability</a></li>
              <li><a href="#press" className="hover:text-[#B89778]">Press</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-white/50">
          <p>© {currentYear} Velmora Fine Jewelry. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white/80">Privacy</a>
            <a href="#terms" className="hover:text-white/80">Terms</a>
            <a href="#accessibility" className="hover:text-white/80">Accessibility</a>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <span className="text-white/40">We accept</span>
            <span>Visa</span>
            <span>MC</span>
            <span>Amex</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
