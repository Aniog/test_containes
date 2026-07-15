import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-text)] text-[var(--color-bg)] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-16">
          {/* Logo */}
          <div>
            <Link to="/" className="logo text-2xl tracking-[0.15em] text-[var(--color-bg)]">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-[var(--color-text-light)] max-w-[180px]">
              Fine jewelry, thoughtfully crafted.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-sm tracking-[0.1em] mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="footer-link">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="footer-link">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="footer-link">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="footer-link">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-serif text-sm tracking-[0.1em] mb-4">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#shipping" className="footer-link">Shipping</a></li>
              <li><a href="#returns" className="footer-link">Returns</a></li>
              <li><a href="#care" className="footer-link">Jewelry Care</a></li>
              <li><a href="#contact" className="footer-link">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-sm tracking-[0.1em] mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="footer-link">Our Story</Link></li>
              <li><Link to="/journal" className="footer-link">Journal</Link></li>
              <li><a href="#sustainability" className="footer-link">Sustainability</a></li>
              <li><a href="#careers" className="footer-link">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Payment & Social */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--color-text-light)]">
          <div className="flex items-center gap-4">
            <span>© {currentYear} Velmora</span>
            <span className="hidden md:inline">·</span>
            <a href="#privacy" className="footer-link">Privacy</a>
            <a href="#terms" className="footer-link">Terms</a>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-xs tracking-widest">WE ACCEPT</span>
            <div className="flex gap-3 text-xs">
              <span>VISA</span>
              <span>MC</span>
              <span>AMEX</span>
              <span>PP</span>
            </div>
          </div>

          <div className="flex gap-4 text-xs tracking-widest">
            <a href="#instagram" className="footer-link">IG</a>
            <a href="#pinterest" className="footer-link">PT</a>
            <a href="#tiktok" className="footer-link">TT</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
