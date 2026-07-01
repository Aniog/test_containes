import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-vel-bg-alt border-t border-vel-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 mb-16">
          {/* Logo */}
          <div>
            <Link to="/" className="logo text-xl tracking-[0.08em] text-vel-text">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-vel-muted max-w-[180px]">
              Quiet luxury, crafted to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-xs tracking-[0.08em] uppercase text-vel-muted mb-4">Shop</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-vel-gold-dark">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-vel-gold-dark">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-vel-gold-dark">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-vel-gold-dark">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <div className="text-xs tracking-[0.08em] uppercase text-vel-muted mb-4">Help</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-vel-gold-dark">Shipping</Link></li>
              <li><Link to="/about" className="hover:text-vel-gold-dark">Returns</Link></li>
              <li><Link to="/about" className="hover:text-vel-gold-dark">Care Guide</Link></li>
              <li><a href="mailto:hello@velmora.com" className="hover:text-vel-gold-dark">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs tracking-[0.08em] uppercase text-vel-muted mb-4">Company</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-vel-gold-dark">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-vel-gold-dark">Journal</Link></li>
              <li><Link to="/about" className="hover:text-vel-gold-dark">Sustainability</Link></li>
              <li><Link to="/journal" className="hover:text-vel-gold-dark">Press</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-vel-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-vel-muted">
          <div>© {currentYear} Velmora Fine Jewelry. All rights reserved.</div>
          
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-vel-gold-dark">Privacy</a>
            <a href="#terms" className="hover:text-vel-gold-dark">Terms</a>
            <a href="#accessibility" className="hover:text-vel-gold-dark">Accessibility</a>
          </div>

          {/* Payment Icons (text representation) */}
          <div className="flex items-center gap-3 text-[10px] tracking-widest">
            VISA · MC · AMEX · APPLE PAY
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
