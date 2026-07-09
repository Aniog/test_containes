import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 pb-12 border-b border-white/10">
          {/* Logo */}
          <div className="col-span-2 md:col-span-2">
            <Link to="/" className="serif text-2xl tracking-[0.15em] text-white">
              VELMORA
            </Link>
            <p className="text-xs mt-3 max-w-[220px] leading-relaxed">
              Timeless demi-fine jewelry, crafted with intention.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-white text-xs tracking-[0.1em] mb-4">SHOP</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-white text-xs tracking-[0.1em] mb-4">HELP</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#shipping">Shipping</a></li>
              <li><a href="#returns">Returns</a></li>
              <li><a href="#care">Jewelry Care</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-xs tracking-[0.1em] mb-4">COMPANY</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about">Our Story</Link></li>
              <li><Link to="/journal">Journal</Link></li>
              <li><a href="#sustainability">Sustainability</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            <span>© {currentYear} Velmora. All rights reserved.</span>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>

          {/* Payment Icons (text representation) */}
          <div className="flex items-center gap-3 text-[10px] tracking-[0.15em] text-white/50">
            <span>VISA</span>
            <span>MASTERCARD</span>
            <span>AMEX</span>
            <span>PAYPAL</span>
          </div>

          {/* Social */}
          <div className="flex gap-4 text-xs">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">PINTEREST</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;