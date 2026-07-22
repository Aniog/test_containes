import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-ink text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-semibold tracking-widest">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Demi-fine jewelry designed to be treasured. Crafted with care, worn with confidence.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/shop?category=earrings" className="hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-white transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-4">Help</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><span className="cursor-default">Shipping & Returns</span></li>
              <li><span className="cursor-default">Contact</span></li>
              <li><span className="cursor-default">FAQ</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><span className="cursor-default">Our Story</span></li>
              <li><Link to="/journal" className="hover:text-white transition-colors">Journal</Link></li>
              <li><span className="cursor-default">Sustainability</span></li>
              <li><span className="cursor-default">Careers</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-white/50">© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Instagram className="h-4 w-4 text-white/70 hover:text-white cursor-pointer transition-colors" />
            <Facebook className="h-4 w-4 text-white/70 hover:text-white cursor-pointer transition-colors" />
            <Twitter className="h-4 w-4 text-white/70 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
