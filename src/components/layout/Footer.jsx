import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-brand-divider bg-brand-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-xl font-semibold tracking-wide text-brand-ink">
              VELMORA
            </Link>
            <p className="mt-3 text-sm text-brand-muted leading-relaxed">
              Quiet luxury demi-fine jewelry, crafted to be treasured.
            </p>
            <div className="mt-5 flex items-center gap-4 text-brand-muted">
              <Instagram className="h-5 w-5 hover:text-brand-ink transition-colors" />
              <Facebook className="h-5 w-5 hover:text-brand-ink transition-colors" />
              <Twitter className="h-5 w-5 hover:text-brand-ink transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Shop</h4>
            <ul className="mt-4 space-y-2 text-sm text-brand-muted">
              <li><Link to="/shop" className="hover:text-brand-ink transition-colors">All</Link></li>
              <li><Link to="/shop" className="hover:text-brand-ink transition-colors">Earrings</Link></li>
              <li><Link to="/shop" className="hover:text-brand-ink transition-colors">Necklaces</Link></li>
              <li><Link to="/shop" className="hover:text-brand-ink transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-brand-ink transition-colors">Gifts</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Help</h4>
            <ul className="mt-4 space-y-2 text-sm text-brand-muted">
              <li><Link to="/" className="hover:text-brand-ink transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/" className="hover:text-brand-ink transition-colors">Care Guide</Link></li>
              <li><Link to="/" className="hover:text-brand-ink transition-colors">Size Guide</Link></li>
              <li><Link to="/" className="hover:text-brand-ink transition-colors">Contact</Link></li>
              <li><Link to="/" className="hover:text-brand-ink transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-brand-muted">
              <li><Link to="/" className="hover:text-brand-ink transition-colors">Our Story</Link></li>
              <li><Link to="/" className="hover:text-brand-ink transition-colors">Journal</Link></li>
              <li><Link to="/" className="hover:text-brand-ink transition-colors">Sustainability</Link></li>
              <li><Link to="/" className="hover:text-brand-ink transition-colors">Press</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-brand-divider pt-8">
          <p className="text-xs text-brand-subtle">&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-3 text-xs text-brand-subtle">
            <span className="inline-flex items-center gap-1 border border-brand-divider rounded-full px-3 py-1">Visa</span>
            <span className="inline-flex items-center gap-1 border border-brand-divider rounded-full px-3 py-1">Mastercard</span>
            <span className="inline-flex items-center gap-1 border border-brand-divider rounded-full px-3 py-1">Amex</span>
            <span className="inline-flex items-center gap-1 border border-brand-divider rounded-full px-3 py-1">PayPal</span>
            <span className="inline-flex items-center gap-1 border border-brand-divider rounded-full px-3 py-1">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
