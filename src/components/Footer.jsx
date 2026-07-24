import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[var(--color-text)] text-[var(--color-bg)] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="serif text-2xl tracking-[0.2em] mb-4">VELMORA</div>
            <p className="text-sm text-[var(--color-text-muted)]">Crafted to be treasured.</p>
          </div>

          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[var(--color-gold)]">Shop</div>
            <div className="space-y-2 text-sm">
              <Link to="/shop" className="block hover:text-[var(--color-gold)]">All Jewelry</Link>
              <Link to="/shop?category=Earrings" className="block hover:text-[var(--color-gold)]">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="block hover:text-[var(--color-gold)]">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="block hover:text-[var(--color-gold)]">Huggies</Link>
            </div>
          </div>

          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[var(--color-gold)]">Help</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-[var(--color-gold)]">Shipping</a>
              <a href="#" className="block hover:text-[var(--color-gold)]">Returns</a>
              <a href="#" className="block hover:text-[var(--color-gold)]">Care Guide</a>
              <a href="#" className="block hover:text-[var(--color-gold)]">Size Guide</a>
            </div>
          </div>

          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[var(--color-gold)]">Company</div>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="block hover:text-[var(--color-gold)]">Our Story</Link>
              <Link to="/journal" className="block hover:text-[var(--color-gold)]">Journal</Link>
              <a href="#" className="block hover:text-[var(--color-gold)]">Sustainability</a>
              <a href="#" className="block hover:text-[var(--color-gold)]">Contact</a>
            </div>
          </div>

          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[var(--color-gold)]">Follow</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-[var(--color-gold)]">Instagram</a>
              <a href="#" className="block hover:text-[var(--color-gold)]">Pinterest</a>
              <a href="#" className="block hover:text-[var(--color-gold)]">TikTok</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--color-text-muted)]">
          <div>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Accessibility</a>
          </div>
          <div className="flex gap-3 text-lg tracking-[3px]">VISA · MC · AMEX · APPLE PAY</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;