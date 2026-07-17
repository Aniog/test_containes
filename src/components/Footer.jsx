import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-bg-dark text-text-inverse pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 mb-16">
          {/* Logo */}
          <div>
            <div className="serif text-2xl tracking-[0.2em] mb-4">VELMORA</div>
            <p className="text-sm text-text-inverse/60">Fine Jewelry</p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-sm tracking-[0.15em] uppercase mb-4">Shop</div>
            <div className="space-y-2 text-sm text-text-inverse/70">
              <div><Link to="/shop">All Jewelry</Link></div>
              <div><Link to="/shop?category=Earrings">Earrings</Link></div>
              <div><Link to="/shop?category=Necklaces">Necklaces</Link></div>
              <div><Link to="/shop?category=Huggies">Huggies</Link></div>
            </div>
          </div>

          {/* Help */}
          <div>
            <div className="text-sm tracking-[0.15em] uppercase mb-4">Help</div>
            <div className="space-y-2 text-sm text-text-inverse/70">
              <div>Shipping</div>
              <div>Returns</div>
              <div>Care Guide</div>
              <div>Contact</div>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="text-sm tracking-[0.15em] uppercase mb-4">Company</div>
            <div className="space-y-2 text-sm text-text-inverse/70">
              <div><Link to="/about">Our Story</Link></div>
              <div><Link to="/journal">Journal</Link></div>
              <div>Sustainability</div>
              <div>Press</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border-dark flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-inverse/50">
          <div>© {new Date().getFullYear()} Velmora. All rights reserved.</div>
          <div className="flex gap-6">
            <div>Instagram</div>
            <div>Pinterest</div>
            <div>Facebook</div>
          </div>
          <div className="flex gap-4 text-xs">
            <span>VISA</span>
            <span>MC</span>
            <span>AMEX</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;