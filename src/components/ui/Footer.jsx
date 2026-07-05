import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-velmora-bg text-velmora-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 mb-16">
          {/* Logo */}
          <div>
            <Link to="/" className="logo text-velmora-white block mb-4">
              VELMORA
            </Link>
            <p className="text-sm text-velmora-taupe max-w-[180px]">
              Fine jewelry, thoughtfully crafted.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-velmora-gold">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="footer-link">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="footer-link">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="footer-link">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="footer-link">Huggies</Link></li>
              <li><Link to="/shop?category=Sets" className="footer-link">Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-velmora-gold">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="footer-link">Shipping</Link></li>
              <li><Link to="/shop" className="footer-link">Returns</Link></li>
              <li><Link to="/about" className="footer-link">Jewelry Care</Link></li>
              <li><Link to="/about" className="footer-link">Contact Us</Link></li>
              <li><Link to="/shop" className="footer-link">Size Guide</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-velmora-gold">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="footer-link">Our Story</Link></li>
              <li><Link to="/journal" className="footer-link">Journal</Link></li>
              <li><Link to="/about" className="footer-link">Sustainability</Link></li>
              <li><Link to="/journal" className="footer-link">Press</Link></li>
              <li><Link to="/about" className="footer-link">Careers</Link></li>
            </ul>
          </div>
        </div>

        {/* Payment & Social */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-velmora-taupe">
          <div className="flex items-center gap-4">
            <span>© {currentYear} Velmora Fine Jewelry</span>
            <span className="hidden md:inline">·</span>
            <Link to="/about" className="hover:text-velmora-gold transition-colors">Privacy</Link>
            <Link to="/about" className="hover:text-velmora-gold transition-colors">Terms</Link>
          </div>

          {/* Payment Icons (text representation) */}
          <div className="flex items-center gap-3 tracking-[0.1em]">
            VISA · MASTERCARD · AMEX · PAYPAL
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-velmora-gold transition-colors">IG</a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-velmora-gold transition-colors">PT</a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-velmora-gold transition-colors">TT</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;