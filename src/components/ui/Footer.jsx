import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[var(--velmora-bg-alt)] border-t border-[var(--velmora-border)] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 mb-16">
          {/* Logo */}
          <div>
            <Link to="/" className="serif text-xl tracking-[0.15em]">VELMORA</Link>
            <p className="text-xs text-[var(--velmora-text-muted)] mt-3 max-w-[180px]">
              Fine jewelry, thoughtfully made.
            </p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-xs tracking-[0.1em] uppercase text-[var(--velmora-text-muted)] mb-4">Shop</div>
            <div className="space-y-2 text-sm">
              <Link to="/shop" className="footer-link block">All Jewelry</Link>
              <Link to="/shop?category=earrings" className="footer-link block">Earrings</Link>
              <Link to="/shop?category=necklaces" className="footer-link block">Necklaces</Link>
              <Link to="/shop?category=huggies" className="footer-link block">Huggies</Link>
              <Link to="/shop?category=sets" className="footer-link block">Sets</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <div className="text-xs tracking-[0.1em] uppercase text-[var(--velmora-text-muted)] mb-4">Help</div>
            <div className="space-y-2 text-sm">
              <a href="#shipping" className="footer-link block">Shipping</a>
              <a href="#returns" className="footer-link block">Returns</a>
              <a href="#care" className="footer-link block">Jewelry Care</a>
              <a href="#contact" className="footer-link block">Contact Us</a>
              <a href="#size" className="footer-link block">Size Guide</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs tracking-[0.1em] uppercase text-[var(--velmora-text-muted)] mb-4">Company</div>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="footer-link block">Our Story</Link>
              <Link to="/journal" className="footer-link block">Journal</Link>
              <a href="#sustainability" className="footer-link block">Sustainability</a>
              <a href="#press" className="footer-link block">Press</a>
              <a href="#careers" className="footer-link block">Careers</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--velmora-border)] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--velmora-text-muted)]">
          <div>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</div>
          
          <div className="flex items-center gap-6">
            <div className="flex gap-3 text-[var(--velmora-gold)]">
              <span>Visa</span>
              <span>MC</span>
              <span>Amex</span>
              <span>PayPal</span>
            </div>
            <div className="hidden md:block">·</div>
            <div className="flex gap-4">
              <a href="#instagram" className="hover:text-[var(--velmora-text)]">Instagram</a>
              <a href="#pinterest" className="hover:text-[var(--velmora-text)]">Pinterest</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
