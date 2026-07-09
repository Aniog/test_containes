import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8 pb-12 border-b border-[#B8976A]/20">
          {/* Logo */}
          <div>
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] text-[#B8976A]">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-[#D4C4A8] leading-relaxed">
              Fine jewelry, crafted to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-[#B8976A] text-sm tracking-[0.15em] uppercase mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies">Huggies</Link></li>
              <li><Link to="/shop?category=Sets">Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-[#B8976A] text-sm tracking-[0.15em] uppercase mb-4">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#shipping">Shipping</a></li>
              <li><a href="#returns">Returns</a></li>
              <li><a href="#care">Care Guide</a></li>
              <li><a href="#sizing">Sizing</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#B8976A] text-sm tracking-[0.15em] uppercase mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about">Our Story</Link></li>
              <li><Link to="/journal">Journal</Link></li>
              <li><a href="#sustainability">Sustainability</a></li>
              <li><a href="#press">Press</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#D4C4A8]">
          <p>© {currentYear} Velmora Fine Jewelry. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#accessibility">Accessibility</a>
          </div>

          {/* Payment Icons (text representation) */}
          <div className="flex items-center gap-3 text-[#B8976A]">
            <span>VISA</span>
            <span>MC</span>
            <span>AMEX</span>
            <span>PP</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">PT</a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">TT</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;