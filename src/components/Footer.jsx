import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[var(--color-bg-dark)] text-[var(--color-surface)] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 mb-16">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <div className="logo text-2xl tracking-[0.2em] mb-4">VELMORA</div>
            <p className="text-sm text-[var(--color-text-muted)] max-w-[200px]">
              Fine jewelry, thoughtfully crafted.
            </p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[var(--color-gold)]">Shop</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-[var(--color-gold)] transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-[var(--color-gold)] transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-[var(--color-gold)] transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-[var(--color-gold)] transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[var(--color-gold)]">Help</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[var(--color-gold)] transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-[var(--color-gold)] transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-[var(--color-gold)] transition-colors">Care Guide</a></li>
              <li><a href="#" className="hover:text-[var(--color-gold)] transition-colors">Size Guide</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[var(--color-gold)]">Company</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-[var(--color-gold)] transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-[var(--color-gold)] transition-colors">Journal</Link></li>
              <li><a href="#" className="hover:text-[var(--color-gold)] transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-[var(--color-gold)] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[var(--color-gold)]">Follow Us</div>
            <div className="flex gap-4 text-sm">
              <a href="#" className="hover:text-[var(--color-gold)] transition-colors">Instagram</a>
              <a href="#" className="hover:text-[var(--color-gold)] transition-colors">Pinterest</a>
            </div>
          </div>
        </div>

        <div className="divider bg-[var(--color-border-dark)] mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--color-text-muted)] tracking-[0.05em]">
          <div>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[var(--color-surface)] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[var(--color-surface)] transition-colors">Terms</a>
            <a href="#" className="hover:text-[var(--color-surface)] transition-colors">Accessibility</a>
          </div>
          <div className="flex gap-3">
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