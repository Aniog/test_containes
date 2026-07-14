import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 mb-16">
          {/* Logo */}
          <div>
            <div className="serif text-2xl tracking-[0.2em] mb-4">VELMORA</div>
            <p className="text-xs text-taupe">Fine Jewelry</p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-xs tracking-[0.1em] mb-4 text-gold">SHOP</div>
            <div className="space-y-2 text-sm text-cream/80">
              <Link to="/shop" className="block hover:text-gold">All Jewelry</Link>
              <Link to="/shop?category=Earrings" className="block hover:text-gold">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="block hover:text-gold">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="block hover:text-gold">Huggies</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <div className="text-xs tracking-[0.1em] mb-4 text-gold">HELP</div>
            <div className="space-y-2 text-sm text-cream/80">
              <a href="#" className="block hover:text-gold">Shipping</a>
              <a href="#" className="block hover:text-gold">Returns</a>
              <a href="#" className="block hover:text-gold">Care Guide</a>
              <a href="#" className="block hover:text-gold">Contact</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs tracking-[0.1em] mb-4 text-gold">COMPANY</div>
            <div className="space-y-2 text-sm text-cream/80">
              <Link to="/about" className="block hover:text-gold">Our Story</Link>
              <Link to="/journal" className="block hover:text-gold">Journal</Link>
              <a href="#" className="block hover:text-gold">Sustainability</a>
              <a href="#" className="block hover:text-gold">Careers</a>
            </div>
          </div>

          {/* Social */}
          <div>
            <div className="text-xs tracking-[0.1em] mb-4 text-gold">FOLLOW</div>
            <div className="space-y-2 text-sm text-cream/80">
              <a href="#" className="block hover:text-gold">Instagram</a>
              <a href="#" className="block hover:text-gold">Pinterest</a>
              <a href="#" className="block hover:text-gold">TikTok</a>
            </div>
          </div>
        </div>

        <div className="divider bg-white/10 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/60">
          <div>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">Privacy</a>
            <a href="#" className="hover:text-gold">Terms</a>
            <a href="#" className="hover:text-gold">Accessibility</a>
          </div>
          <div className="flex gap-3 text-[10px] tracking-[0.1em]">
            VISA · MASTERCARD · AMEX · PAYPAL
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;