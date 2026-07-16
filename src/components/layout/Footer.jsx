import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-velmora-dark text-white/70 pt-16 pb-8">
      <div className="velmora-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest text-white">
              VELMORA
            </Link>
            <p className="mt-3 text-sm text-white/40 leading-relaxed">
              Demi-fine jewelry crafted for everyday elegance. 18K gold-plated pieces designed to be treasured.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-white/60 mb-4">Shop</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/shop" className="hover:text-velmora-gold transition-colors">All Jewelry</Link>
              <Link to="/shop?category=earrings" className="hover:text-velmora-gold transition-colors">Earrings</Link>
              <Link to="/shop?category=necklaces" className="hover:text-velmora-gold transition-colors">Necklaces</Link>
              <Link to="/shop?category=huggies" className="hover:text-velmora-gold transition-colors">Huggies</Link>
              <Link to="/shop" className="hover:text-velmora-gold transition-colors">Gift Sets</Link>
            </div>
          </div>

          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-white/60 mb-4">Help</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a href="#" className="hover:text-velmora-gold transition-colors">Shipping & Returns</a>
              <a href="#" className="hover:text-velmora-gold transition-colors">Materials & Care</a>
              <a href="#" className="hover:text-velmora-gold transition-colors">Size Guide</a>
              <a href="#" className="hover:text-velmora-gold transition-colors">FAQ</a>
              <a href="#" className="hover:text-velmora-gold transition-colors">Contact Us</a>
            </div>
          </div>

          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-white/60 mb-4">Company</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a href="#" className="hover:text-velmora-gold transition-colors">Our Story</a>
              <a href="#" className="hover:text-velmora-gold transition-colors">Sustainability</a>
              <a href="#" className="hover:text-velmora-gold transition-colors">Journal</a>
              <a href="#" className="hover:text-velmora-gold transition-colors">Stockists</a>
            </div>
          </div>
        </div>

        <div className="velmora-divider border-white/10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8 text-sm text-white/30">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-velmora-gold transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="hover:text-velmora-gold transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="hover:text-velmora-gold transition-colors"><Globe className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
