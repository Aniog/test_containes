import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ink text-surface/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest text-surface">
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-surface/70">
              Demi-fine jewelry designed to be treasured. Crafted with care, worn with confidence.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase text-surface mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-surface/70">
              <li><Link to="/shop?category=Earrings" className="hover:text-accent transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-accent transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-accent transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-accent transition-colors">All</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase text-surface mb-4">Help</h4>
            <ul className="space-y-2 text-sm text-surface/70">
              <li><span className="hover:text-accent transition-colors cursor-pointer">Shipping & Returns</span></li>
              <li><span className="hover:text-accent transition-colors cursor-pointer">Care Guide</span></li>
              <li><span className="hover:text-accent transition-colors cursor-pointer">FAQ</span></li>
              <li><span className="hover:text-accent transition-colors cursor-pointer">Contact</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase text-surface mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-surface/70">
              <li><span className="hover:text-accent transition-colors cursor-pointer">Our Story</span></li>
              <li><span className="hover:text-accent transition-colors cursor-pointer">Journal</span></li>
              <li><span className="hover:text-accent transition-colors cursor-pointer">Sustainability</span></li>
              <li><span className="hover:text-accent transition-colors cursor-pointer">Stockists</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-surface/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-surface/60">© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-5 text-surface/70">
            <Instagram className="h-4 w-4 hover:text-accent transition-colors cursor-pointer" />
            <Facebook className="h-4 w-4 hover:text-accent transition-colors cursor-pointer" />
            <Twitter className="h-4 w-4 hover:text-accent transition-colors cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
