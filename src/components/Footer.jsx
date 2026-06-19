import React from 'react';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer className="bg-[var(--cream)] border-t border-[var(--divider)]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-widest text-[var(--ink)]">
              VELMORA
            </Link>
            <p className="text-xs text-[var(--stone)] mt-4 leading-relaxed font-light max-w-xs">
              Demi-fine gold jewelry designed for the modern woman. Crafted to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif-upper text-xs tracking-widest-xl text-[var(--ink)] mb-4">Shop</h4>
            <ul className="space-y-2.5">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-xs text-[var(--stone)] hover:text-[var(--ink)] transition-colors font-light">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-serif-upper text-xs tracking-widest-xl text-[var(--ink)] mb-4">Help</h4>
            <ul className="space-y-2.5">
              {['Shipping & Returns', 'Care Guide', 'Size Guide', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-xs text-[var(--stone)] hover:text-[var(--ink)] transition-colors font-light">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif-upper text-xs tracking-widest-xl text-[var(--ink)] mb-4">Company</h4>
            <ul className="space-y-2.5">
              {['Our Story', 'Sustainability', 'Journal', 'Press'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-xs text-[var(--stone)] hover:text-[var(--ink)] transition-colors font-light">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[var(--divider)] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-[10px] text-[var(--warm-gray)] tracking-wide">Visa</span>
            <span className="text-[10px] text-[var(--warm-gray)] tracking-wide">Mastercard</span>
            <span className="text-[10px] text-[var(--warm-gray)] tracking-wide">Amex</span>
            <span className="text-[10px] text-[var(--warm-gray)] tracking-wide">PayPal</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-[var(--stone)] hover:text-[var(--ink)] transition-colors text-[10px] uppercase tracking-wider" aria-label="Instagram">
              IG
            </a>
            <a href="#" className="text-[var(--stone)] hover:text-[var(--ink)] transition-colors text-[10px] uppercase tracking-wider" aria-label="Facebook">
              FB
            </a>
          </div>
          <p className="text-[10px] text-[var(--warm-gray)]">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
