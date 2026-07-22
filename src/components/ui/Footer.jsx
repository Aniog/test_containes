import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--velmora-deep)] text-[var(--velmora-bg)] pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 mb-16">
          {/* Logo */}
          <div>
            <Link to="/" className="font-serif text-2xl tracking-[0.15em] text-[var(--velmora-bg)]">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-[var(--velmora-text-light)] max-w-[180px]">
              Demi-fine jewelry, crafted to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-xs tracking-[0.1em] uppercase mb-4 text-[var(--velmora-gold-light)]">Shop</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-[var(--velmora-gold-light)]">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-[var(--velmora-gold-light)]">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-[var(--velmora-gold-light)]">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-[var(--velmora-gold-light)]">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <div className="text-xs tracking-[0.1em] uppercase mb-4 text-[var(--velmora-gold-light)]">Help</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#shipping" className="hover:text-[var(--velmora-gold-light)]">Shipping</a></li>
              <li><a href="#returns" className="hover:text-[var(--velmora-gold-light)]">Returns</a></li>
              <li><a href="#care" className="hover:text-[var(--velmora-gold-light)]">Jewelry Care</a></li>
              <li><a href="#contact" className="hover:text-[var(--velmora-gold-light)]">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs tracking-[0.1em] uppercase mb-4 text-[var(--velmora-gold-light)]">Company</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-[var(--velmora-gold-light)]">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-[var(--velmora-gold-light)]">Journal</Link></li>
              <li><a href="#sustainability" className="hover:text-[var(--velmora-gold-light)]">Sustainability</a></li>
              <li><a href="#careers" className="hover:text-[var(--velmora-gold-light)]">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Payment & Social */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-y-6 text-xs tracking-[0.08em] text-[var(--velmora-text-light)]">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span>© {currentYear} Velmora Fine Jewelry</span>
            <a href="#privacy" className="hover:text-[var(--velmora-gold-light)]">Privacy</a>
            <a href="#terms" className="hover:text-[var(--velmora-gold-light)]">Terms</a>
          </div>

          <div className="flex items-center gap-x-6">
            <span className="hidden md:inline">We accept</span>
            <div className="flex gap-x-4 text-[10px]">
              <span>VISA</span>
              <span>MC</span>
              <span>AMEX</span>
              <span>PP</span>
            </div>
          </div>

          <div className="flex gap-x-5">
            <a href="#instagram" className="hover:text-[var(--velmora-gold-light)]">IG</a>
            <a href="#pinterest" className="hover:text-[var(--velmora-gold-light)]">PT</a>
            <a href="#tiktok" className="hover:text-[var(--velmora-gold-light)]">TT</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
