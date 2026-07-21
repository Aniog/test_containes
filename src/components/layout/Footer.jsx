import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-semibold tracking-wide">
              VELMORA
            </Link>
            <p className="mt-3 text-sm text-white/70">
              Demi-fine jewelry designed to be worn, loved, and passed down.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Shop</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><Link to="/shop" className="hover:text-white">All</Link></li>
              <li><Link to="/shop" className="hover:text-white">Earrings</Link></li>
              <li><Link to="/shop" className="hover:text-white">Necklaces</Link></li>
              <li><Link to="/shop" className="hover:text-white">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-white">Gifts</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Help</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><Link to="/" className="hover:text-white">Shipping & Returns</Link></li>
              <li><Link to="/" className="hover:text-white">Materials & Care</Link></li>
              <li><Link to="/" className="hover:text-white">Size Guide</Link></li>
              <li><Link to="/" className="hover:text-white">Contact</Link></li>
              <li><Link to="/" className="hover:text-white">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><Link to="/" className="hover:text-white">Our Story</Link></li>
              <li><Link to="/" className="hover:text-white">Journal</Link></li>
              <li><Link to="/" className="hover:text-white">Sustainability</Link></li>
              <li><Link to="/" className="hover:text-white">Press</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/60">© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="text-white/70 hover:text-white"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="Facebook" className="text-white/70 hover:text-white"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitter" className="text-white/70 hover:text-white"><Twitter className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
