import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-velmora-deep text-velmora-bg pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 pb-12 border-b border-white/20">
          {/* Logo */}
          <div className="col-span-2 md:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/60 max-w-xs">
              Timeless demi-fine jewelry, crafted with intention and worn with love.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.1em] uppercase mb-4 text-white/60">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="text-white/80 hover:text-white">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="text-white/80 hover:text-white">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="text-white/80 hover:text-white">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="text-white/80 hover:text-white">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.1em] uppercase mb-4 text-white/60">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#shipping" className="text-white/80 hover:text-white">Shipping</a></li>
              <li><a href="#returns" className="text-white/80 hover:text-white">Returns</a></li>
              <li><a href="#care" className="text-white/80 hover:text-white">Jewelry Care</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.1em] uppercase mb-4 text-white/60">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-white/80 hover:text-white">Our Story</Link></li>
              <li><Link to="/journal" className="text-white/80 hover:text-white">Journal</Link></li>
              <li><a href="#sustainability" className="text-white/80 hover:text-white">Sustainability</a></li>
              <li><a href="#careers" className="text-white/80 hover:text-white">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            <span>© {currentYear} Velmora Fine Jewelry</span>
            <a href="#privacy" className="hover:text-white/70">Privacy</a>
            <a href="#terms" className="hover:text-white/70">Terms</a>
          </div>

          {/* Payment Icons (text representation) */}
          <div className="flex items-center gap-4 tracking-[0.15em] text-[10px]">
            <span>VISA</span>
            <span>MASTERCARD</span>
            <span>AMEX</span>
            <span>PAYPAL</span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-5 text-sm">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/70">IG</a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/70">PT</a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/70">TT</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
