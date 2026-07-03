import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-base text-surface/80 border-t border-base/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest-xl text-surface">
              VELMORA
            </Link>
            <p className="mt-3 text-sm text-surface/60 leading-relaxed">
              Demi-fine jewelry designed to be worn, gifted, and treasured.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-widest-xl uppercase text-gold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-surface/70">
              <li><Link to="/shop?category=earrings" className="hover:text-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-gold transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-gold transition-colors">All</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-widest-xl uppercase text-gold mb-4">Help</h4>
            <ul className="space-y-2 text-sm text-surface/70">
              <li><span className="hover:text-gold transition-colors cursor-pointer">Shipping & Returns</span></li>
              <li><span className="hover:text-gold transition-colors cursor-pointer">Materials & Care</span></li>
              <li><span className="hover:text-gold transition-colors cursor-pointer">Contact</span></li>
              <li><span className="hover:text-gold transition-colors cursor-pointer">FAQ</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-widest-xl uppercase text-gold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-surface/70">
              <li><Link to="/about" className="hover:text-gold transition-colors">Our Story</Link></li>
              <li><span className="hover:text-gold transition-colors cursor-pointer">Journal</span></li>
              <li><span className="hover:text-gold transition-colors cursor-pointer">Sustainability</span></li>
              <li><span className="hover:text-gold transition-colors cursor-pointer">Press</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-surface/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-surface/50">© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4 text-surface/70">
            <Instagram className="w-4 h-4 hover:text-gold transition-colors cursor-pointer" />
            <Facebook className="w-4 h-4 hover:text-gold transition-colors cursor-pointer" />
            <Twitter className="w-4 h-4 hover:text-gold transition-colors cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
