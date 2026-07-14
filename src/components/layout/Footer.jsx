import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer pt-12 pb-8">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 mb-12">
          {/* Logo */}
          <div>
            <div className="nav-logo text-[var(--velmora-gold)] mb-4">VELMORA</div>
            <p className="text-xs text-[var(--velmora-text-muted)] max-w-[180px]">
              Fine jewelry, crafted to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <div className="footer-title">Shop</div>
            <div className="space-y-2">
              <Link to="/shop">All Jewelry</Link>
              <Link to="/shop?category=Earrings">Earrings</Link>
              <Link to="/shop?category=Necklaces">Necklaces</Link>
              <Link to="/shop?category=Huggies">Huggies</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <div className="footer-title">Help</div>
            <div className="space-y-2">
              <a href="#shipping">Shipping</a>
              <a href="#returns">Returns</a>
              <a href="#care">Jewelry Care</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="footer-title">Company</div>
            <div className="space-y-2">
              <Link to="/about">Our Story</Link>
              <Link to="/journal">Journal</Link>
              <a href="#sustainability">Sustainability</a>
              <a href="#careers">Careers</a>
            </div>
          </div>
        </div>

        <div className="divider-dark mb-6" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-[var(--velmora-text-muted)]">
          <div>
            © {currentYear} Velmora Fine Jewelry. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#accessibility">Accessibility</a>
          </div>
          <div className="flex gap-4">
            <span>Instagram</span>
            <span>Pinterest</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;