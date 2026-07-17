import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-brand-divider bg-brand-surface">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest text-brand-ink">
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-brand-muted">
              Quiet luxury for everyday rituals. Demi-fine jewelry designed to be worn, loved, and passed down.
            </p>
            <div className="mt-6 flex gap-4 text-brand-ink">
              <a href="#" aria-label="Instagram" className="hover:text-brand-accent transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="Facebook" className="hover:text-brand-accent transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" aria-label="Twitter" className="hover:text-brand-accent transition-colors"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Shop</h4>
            <ul className="mt-4 space-y-3 text-sm text-brand-muted">
              <li><Link to="/shop" className="hover:text-brand-accent transition-colors">All</Link></li>
              <li><Link to="/shop" className="hover:text-brand-accent transition-colors">Earrings</Link></li>
              <li><Link to="/shop" className="hover:text-brand-accent transition-colors">Necklaces</Link></li>
              <li><Link to="/shop" className="hover:text-brand-accent transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-brand-accent transition-colors">Gifts</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Help</h4>
            <ul className="mt-4 space-y-3 text-sm text-brand-muted">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Materials & Care</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Company</h4>
            <ul className="mt-4 space-y-3 text-sm text-brand-muted">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Press</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-brand-divider pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-brand-subtle">© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-brand-subtle">
            <a href="#" className="hover:text-brand-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Terms</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
