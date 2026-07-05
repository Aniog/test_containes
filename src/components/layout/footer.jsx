import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-ink text-brand-warm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest text-white">VELMORA</Link>
            <p className="mt-3 text-sm text-brand-subtle">Quiet luxury, crafted to be treasured.</p>
          </div>

          <div>
            <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-white mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-brand-subtle">
              <li><Link to="/shop?category=earrings" className="hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-white transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">All</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-white mb-4">Help</h4>
            <ul className="space-y-2 text-sm text-brand-subtle">
              <li><span className="cursor-default">Shipping & Returns</span></li>
              <li><span className="cursor-default">Materials & Care</span></li>
              <li><span className="cursor-default">Contact</span></li>
              <li><span className="cursor-default">FAQ</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-brand-subtle">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-white transition-colors">Journal</Link></li>
              <li><span className="cursor-default">Sustainability</span></li>
              <li><span className="cursor-default">Press</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-subtle">© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-5 text-brand-subtle">
            <Instagram className="h-4 w-4 hover:text-white transition-colors cursor-pointer" />
            <Facebook className="h-4 w-4 hover:text-white transition-colors cursor-pointer" />
            <Twitter className="h-4 w-4 hover:text-white transition-colors cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
