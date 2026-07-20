import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-bg-alt)] pt-16 pb-8 border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 pb-12">
          {/* Logo */}
          <div className="col-span-2 md:col-span-2">
            <Link to="/" className="heading-serif text-2xl tracking-[0.15em] text-[var(--color-text)]">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-[var(--color-text-muted)] max-w-xs">
              Fine jewelry crafted with intention. Timeless pieces for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold text-sm tracking-[0.08em] uppercase mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="footer-link">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="footer-link">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="footer-link">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="footer-link">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-semibold text-sm tracking-[0.08em] uppercase mb-4">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#shipping" className="footer-link">Shipping</a></li>
              <li><a href="#returns" className="footer-link">Returns</a></li>
              <li><a href="#care" className="footer-link">Jewelry Care</a></li>
              <li><a href="#contact" className="footer-link">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm tracking-[0.08em] uppercase mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="footer-link">Our Story</Link></li>
              <li><Link to="/journal" className="footer-link">Journal</Link></li>
              <li><a href="#sustainability" className="footer-link">Sustainability</a></li>
              <li><a href="#careers" className="footer-link">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[var(--color-text-muted)]">
          <div className="flex items-center gap-4">
            <span>© {currentYear} Velmora Fine Jewelry</span>
            <span className="hidden md:inline">·</span>
            <a href="#privacy" className="footer-link">Privacy</a>
            <a href="#terms" className="footer-link">Terms</a>
          </div>

          {/* Payment icons (text representation) */}
          <div className="flex items-center gap-3 tracking-[0.1em] text-[10px]">
            VISA · MASTERCARD · AMEX · PAYPAL
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="#instagram" className="footer-link" aria-label="Instagram">IG</a>
            <a href="#pinterest" className="footer-link" aria-label="Pinterest">PT</a>
            <a href="#tiktok" className="footer-link" aria-label="TikTok">TT</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
