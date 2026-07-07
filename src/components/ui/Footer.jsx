import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 pb-12 border-b border-[#4A4642]">
          {/* Logo */}
          <div className="col-span-2 md:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-[0.15em] text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-[#A89E92] max-w-[240px]">
              Timeless demi-fine jewelry, crafted to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-xs tracking-[0.1em] uppercase mb-4 text-[#A89E92]">Shop</div>
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
            <div className="text-xs tracking-[0.1em] uppercase mb-4 text-[#A89E92]">Help</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#shipping">Shipping</a></li>
              <li><a href="#returns">Returns</a></li>
              <li><a href="#care">Care Guide</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#size">Size Guide</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs tracking-[0.1em] uppercase mb-4 text-[#A89E92]">Company</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about">Our Story</Link></li>
              <li><Link to="/journal">Journal</Link></li>
              <li><a href="#sustainability">Sustainability</a></li>
              <li><a href="#press">Press</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-y-4 text-xs text-[#A89E92]">
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            <span>© {currentYear} Velmora Fine Jewelry</span>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>

          {/* Payment icons (text representation) */}
          <div className="flex items-center gap-x-4 tracking-[0.1em] uppercase">
            <span>VISA</span>
            <span>MC</span>
            <span>AMEX</span>
            <span>APPLE PAY</span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-x-5">
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
