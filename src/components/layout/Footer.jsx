import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-bronze-950 text-bronze-300">
      <div className="section-padding py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.3em] text-bronze-200 no-underline">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-bronze-400 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the modern woman. Gold-plated pieces designed to be treasured.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" className="text-bronze-400 hover:text-bronze-200 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-bronze-400 hover:text-bronze-200 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-bronze-200 mb-4">Shop</h4>
            <div className="flex flex-col gap-2">
              <Link to="/shop" className="text-sm text-bronze-400 hover:text-bronze-200 transition-colors no-underline">All Jewelry</Link>
              <Link to="/shop?category=earrings" className="text-sm text-bronze-400 hover:text-bronze-200 transition-colors no-underline">Earrings</Link>
              <Link to="/shop?category=necklaces" className="text-sm text-bronze-400 hover:text-bronze-200 transition-colors no-underline">Necklaces</Link>
              <Link to="/shop?category=huggies" className="text-sm text-bronze-400 hover:text-bronze-200 transition-colors no-underline">Huggies</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-bronze-200 mb-4">Help</h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-sm text-bronze-400 hover:text-bronze-200 transition-colors no-underline">Shipping & Returns</a>
              <a href="#" className="text-sm text-bronze-400 hover:text-bronze-200 transition-colors no-underline">Jewelry Care</a>
              <a href="#" className="text-sm text-bronze-400 hover:text-bronze-200 transition-colors no-underline">Size Guide</a>
              <a href="#" className="text-sm text-bronze-400 hover:text-bronze-200 transition-colors no-underline">FAQ</a>
              <a href="#" className="text-sm text-bronze-400 hover:text-bronze-200 transition-colors no-underline">Contact</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-bronze-200 mb-4">Company</h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-sm text-bronze-400 hover:text-bronze-200 transition-colors no-underline">Our Story</a>
              <a href="#" className="text-sm text-bronze-400 hover:text-bronze-200 transition-colors no-underline">Sustainability</a>
              <a href="#" className="text-sm text-bronze-400 hover:text-bronze-200 transition-colors no-underline">Journal</a>
              <a href="#" className="text-sm text-bronze-400 hover:text-bronze-200 transition-colors no-underline">Privacy Policy</a>
              <a href="#" className="text-sm text-bronze-400 hover:text-bronze-200 transition-colors no-underline">Terms of Service</a>
            </div>
          </div>
        </div>

        <div className="hairline-divider !border-bronze-800 my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-bronze-500">
          <p>&copy; 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="text-bronze-500">Visa</span>
            <span className="text-bronze-500">Mastercard</span>
            <span className="text-bronze-500">Amex</span>
            <span className="text-bronze-500">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
