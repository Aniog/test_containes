import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-brand-line bg-brand-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-widest text-brand-ink">
              VELMORA
            </Link>
            <p className="mt-3 text-sm text-brand-muted leading-relaxed">
              Quiet luxury demi-fine jewelry, designed to be treasured.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-brand-ink">Shop</h4>
            <ul className="mt-4 space-y-2 text-sm text-brand-muted">
              <li><Link to="/shop?category=earrings" className="hover:text-brand-accent transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-brand-accent transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-brand-accent transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-brand-accent transition-colors">All</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-brand-ink">Help</h4>
            <ul className="mt-4 space-y-2 text-sm text-brand-muted">
              <li><span className="hover:text-brand-accent transition-colors cursor-pointer">Shipping & Returns</span></li>
              <li><span className="hover:text-brand-accent transition-colors cursor-pointer">Materials & Care</span></li>
              <li><span className="hover:text-brand-accent transition-colors cursor-pointer">Contact</span></li>
              <li><span className="hover:text-brand-accent transition-colors cursor-pointer">FAQ</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-brand-ink">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-brand-muted">
              <li><Link to="/about" className="hover:text-brand-accent transition-colors">Our Story</Link></li>
              <li><span className="hover:text-brand-accent transition-colors cursor-pointer">Journal</span></li>
              <li><span className="hover:text-brand-accent transition-colors cursor-pointer">Sustainability</span></li>
              <li><span className="hover:text-brand-accent transition-colors cursor-pointer">Press</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-brand-subtle">© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-5 text-brand-muted">
            <Instagram className="h-4 w-4 hover:text-brand-accent transition-colors cursor-pointer" />
            <Facebook className="h-4 w-4 hover:text-brand-accent transition-colors cursor-pointer" />
            <Twitter className="h-4 w-4 hover:text-brand-accent transition-colors cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
