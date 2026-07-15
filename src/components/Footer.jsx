import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8 mb-12">
          {/* Logo & Tagline */}
          <div className="col-span-2 md:col-span-1">
            <div className="logo text-white mb-3">VELMORA</div>
            <p className="text-sm text-white/60 leading-relaxed">
              Quiet luxury, crafted to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <div className="footer-title">Shop</div>
            <div className="flex flex-col gap-2">
              <Link to="/shop">All Jewelry</Link>
              <Link to="/shop?category=Earrings">Earrings</Link>
              <Link to="/shop?category=Necklaces">Necklaces</Link>
              <Link to="/shop?category=Huggies">Huggies</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <div className="footer-title">Help</div>
            <div className="flex flex-col gap-2">
              <Link to="/about">Shipping</Link>
              <Link to="/about">Returns</Link>
              <Link to="/about">Care Guide</Link>
              <Link to="/about">Contact</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="footer-title">Company</div>
            <div className="flex flex-col gap-2">
              <Link to="/about">Our Story</Link>
              <Link to="/journal">Journal</Link>
              <Link to="/about">Sustainability</Link>
              <Link to="/about">Press</Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © {currentYear} Velmora Fine Jewelry. All rights reserved.
          </div>

          {/* Payment Icons (text representation) */}
          <div className="flex items-center gap-4 tracking-[2px]">
            VISA · MC · AMEX · APPLE PAY
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={16} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
