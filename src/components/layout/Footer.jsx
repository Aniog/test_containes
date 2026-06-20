import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-brand-border bg-brand-cream">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest text-brand-black">
              VELMORA
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted">
              Demi-fine jewelry designed to be treasured. Crafted with care, worn with confidence.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-black">Shop</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/shop?category=earrings" className="text-sm text-brand-muted hover:text-brand-gold">
                  Earrings
                </Link>
              </li>
              <li>
                <Link to="/shop?category=necklaces" className="text-sm text-brand-muted hover:text-brand-gold">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link to="/shop?category=huggies" className="text-sm text-brand-muted hover:text-brand-gold">
                  Huggies
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-sm text-brand-muted hover:text-brand-gold">
                  All Jewelry
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-black">Help</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/shipping" className="text-sm text-brand-muted hover:text-brand-gold">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/care" className="text-sm text-brand-muted hover:text-brand-gold">
                  Jewelry Care
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-brand-muted hover:text-brand-gold">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-brand-muted hover:text-brand-gold">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-black">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-sm text-brand-muted hover:text-brand-gold">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/journal" className="text-sm text-brand-muted hover:text-brand-gold">
                  Journal
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-sm text-brand-muted hover:text-brand-gold">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-brand-border pt-8 md:flex-row">
          <p className="text-xs text-brand-muted">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button type="button" className="text-brand-muted hover:text-brand-gold" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </button>
            <button type="button" className="text-brand-muted hover:text-brand-gold" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </button>
            <button type="button" className="text-brand-muted hover:text-brand-gold" aria-label="Twitter">
              <Twitter className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
