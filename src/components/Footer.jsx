import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[var(--color-base)] text-[var(--color-white)] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 pb-12 border-b border-white/20">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <div className="serif text-2xl tracking-[0.2em] mb-4">VELMORA</div>
            <p className="text-sm text-white/60">Fine Jewelry</p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-xs tracking-[0.1em] uppercase mb-4 text-white/60">Shop</div>
            <div className="space-y-2 text-sm">
              <Link to="/shop" className="block hover:text-[var(--color-gold)]">All Jewelry</Link>
              <Link to="/shop?category=Earrings" className="block hover:text-[var(--color-gold)]">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="block hover:text-[var(--color-gold)]">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="block hover:text-[var(--color-gold)]">Huggies</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <div className="text-xs tracking-[0.1em] uppercase mb-4 text-white/60">Help</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-[var(--color-gold)]">Shipping</a>
              <a href="#" className="block hover:text-[var(--color-gold)]">Returns</a>
              <a href="#" className="block hover:text-[var(--color-gold)]">Care Guide</a>
              <a href="#" className="block hover:text-[var(--color-gold)]">Contact</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs tracking-[0.1em] uppercase mb-4 text-white/60">Company</div>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="block hover:text-[var(--color-gold)]">Our Story</Link>
              <Link to="/journal" className="block hover:text-[var(--color-gold)]">Journal</Link>
              <a href="#" className="block hover:text-[var(--color-gold)]">Sustainability</a>
              <a href="#" className="block hover:text-[var(--color-gold)]">Careers</a>
            </div>
          </div>

          {/* Social */}
          <div>
            <div className="text-xs tracking-[0.1em] uppercase mb-4 text-white/60">Follow Us</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-[var(--color-gold)]">Instagram</a>
              <a href="#" className="block hover:text-[var(--color-gold)]">Pinterest</a>
              <a href="#" className="block hover:text-[var(--color-gold)]">TikTok</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Accessibility</a>
          </div>
          <div className="flex gap-3 text-sm">
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