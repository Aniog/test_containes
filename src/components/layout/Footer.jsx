import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[var(--color-bg-dark)] text-[var(--color-text-light)] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 mb-16">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <div className="serif text-2xl tracking-[0.2em] mb-4">VELMORA</div>
            <p className="text-sm text-[var(--color-gold-light)]">Fine Jewelry</p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-xs tracking-[0.1em] uppercase mb-4 text-[var(--color-gold)]">Shop</div>
            <div className="space-y-2 text-sm">
              <Link to="/shop" className="block hover:text-[var(--color-gold)] transition-colors">All Jewelry</Link>
              <Link to="/shop" className="block hover:text-[var(--color-gold)] transition-colors">Earrings</Link>
              <Link to="/shop" className="block hover:text-[var(--color-gold)] transition-colors">Necklaces</Link>
              <Link to="/shop" className="block hover:text-[var(--color-gold)] transition-colors">Huggies</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <div className="text-xs tracking-[0.1em] uppercase mb-4 text-[var(--color-gold)]">Help</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-[var(--color-gold)] transition-colors">Shipping</a>
              <a href="#" className="block hover:text-[var(--color-gold)] transition-colors">Returns</a>
              <a href="#" className="block hover:text-[var(--color-gold)] transition-colors">Care Guide</a>
              <a href="#" className="block hover:text-[var(--color-gold)] transition-colors">Contact</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs tracking-[0.1em] uppercase mb-4 text-[var(--color-gold)]">Company</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-[var(--color-gold)] transition-colors">Our Story</a>
              <a href="#" className="block hover:text-[var(--color-gold)] transition-colors">Journal</a>
              <a href="#" className="block hover:text-[var(--color-gold)] transition-colors">Sustainability</a>
              <a href="#" className="block hover:text-[var(--color-gold)] transition-colors">Careers</a>
            </div>
          </div>

          {/* Social */}
          <div>
            <div className="text-xs tracking-[0.1em] uppercase mb-4 text-[var(--color-gold)]">Follow Us</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-[var(--color-gold)] transition-colors">Instagram</a>
              <a href="#" className="block hover:text-[var(--color-gold)] transition-colors">Pinterest</a>
              <a href="#" className="block hover:text-[var(--color-gold)] transition-colors">TikTok</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[var(--color-border-dark)] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--color-gold-light)]">
          <div>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[var(--color-gold)] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[var(--color-gold)] transition-colors">Terms</a>
            <a href="#" className="hover:text-[var(--color-gold)] transition-colors">Accessibility</a>
          </div>
          <div className="flex gap-3 text-lg tracking-[0.3em]">VISA · MC · AMEX</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;