import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-velmora-base text-velmora-cream pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 pb-12">
          {/* Logo */}
          <div>
            <Link to="/" className="serif text-xl tracking-[0.2em]">VELMORA</Link>
          </div>

          {/* Shop */}
          <div>
            <h4 className="uppercase tracking-[0.15em] text-xs mb-4 text-velmora-gold-light">Shop</h4>
            <ul className="space-y-2 text-sm text-velmora-muted">
              <li><Link to="/shop" className="hover:text-velmora-cream">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-velmora-cream">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-velmora-cream">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-velmora-cream">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="uppercase tracking-[0.15em] text-xs mb-4 text-velmora-gold-light">Help</h4>
            <ul className="space-y-2 text-sm text-velmora-muted">
              <li><a href="#shipping" className="hover:text-velmora-cream">Shipping</a></li>
              <li><a href="#returns" className="hover:text-velmora-cream">Returns</a></li>
              <li><a href="#care" className="hover:text-velmora-cream">Jewelry Care</a></li>
              <li><a href="#contact" className="hover:text-velmora-cream">Contact</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="uppercase tracking-[0.15em] text-xs mb-4 text-velmora-gold-light">Company</h4>
            <ul className="space-y-2 text-sm text-velmora-muted">
              <li><Link to="/about" className="hover:text-velmora-cream">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-velmora-cream">Journal</Link></li>
              <li><a href="#sustainability" className="hover:text-velmora-cream">Sustainability</a></li>
              <li><a href="#press" className="hover:text-velmora-cream">Press</a></li>
            </ul>
          </div>
        </div>

        <div className="divider bg-white/10 my-8" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-velmora-muted">
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            <span>© {currentYear} Velmora Fine Jewelry</span>
            <a href="#privacy" className="hover:text-velmora-cream">Privacy</a>
            <a href="#terms" className="hover:text-velmora-cream">Terms</a>
          </div>

          {/* Payment Icons (text representation) */}
          <div className="flex gap-4 tracking-[0.1em]">
            VISA · MC · AMEX · APPLE PAY
          </div>

          {/* Social */}
          <div className="flex gap-4">
            <a href="#instagram" className="hover:text-velmora-cream">IG</a>
            <a href="#pinterest" className="hover:text-velmora-cream">PT</a>
            <a href="#tiktok" className="hover:text-velmora-cream">TT</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;