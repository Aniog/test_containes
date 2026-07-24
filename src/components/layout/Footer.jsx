import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-[0.18em] text-ink">
              VELMORA
            </Link>
            <p className="mt-3 text-sm text-ink-secondary leading-relaxed">
              Demi-fine jewelry designed to be worn, layered, and treasured.
            </p>
            <div className="mt-5 flex items-center gap-4 text-ink-secondary">
              <a href="#" aria-label="Instagram" className="hover:text-ink transition-colors"><Instagram className="h-4 w-4" /></a>
              <a href="#" aria-label="Facebook" className="hover:text-ink transition-colors"><Facebook className="h-4 w-4" /></a>
              <a href="#" aria-label="Twitter" className="hover:text-ink transition-colors"><Twitter className="h-4 w-4" /></a>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-3">Shop</p>
            <ul className="space-y-2 text-sm text-ink-secondary">
              <li><Link to="/shop" className="hover:text-ink transition-colors">All</Link></li>
              <li><Link to="/shop" className="hover:text-ink transition-colors">Earrings</Link></li>
              <li><Link to="/shop" className="hover:text-ink transition-colors">Necklaces</Link></li>
              <li><Link to="/shop" className="hover:text-ink transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-ink transition-colors">Gifts</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-3">Help</p>
            <ul className="space-y-2 text-sm text-ink-secondary">
              <li><a href="#" className="hover:text-ink transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-ink transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-ink transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-ink transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-3">Company</p>
            <ul className="space-y-2 text-sm text-ink-secondary">
              <li><a href="#" className="hover:text-ink transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-ink transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-ink transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-ink transition-colors">Stockists</a></li>
            </ul>
          </div>
        </div>

        <div className="divider my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ink-tertiary">
          <p>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-ink transition-colors">Privacy</a>
            <a href="#" className="hover:text-ink transition-colors">Terms</a>
            <a href="#" className="hover:text-ink transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
