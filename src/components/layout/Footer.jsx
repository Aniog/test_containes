import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-display text-2xl font-semibold tracking-wide text-[var(--color-ink)]">
              VELMORA
            </Link>
            <p className="mt-3 text-sm text-[var(--color-ink-secondary)] leading-relaxed">
              Demi-fine jewelry crafted for the modern woman. Quiet luxury, everyday elegance.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a href="#" className="text-[var(--color-ink-secondary)] hover:text-[var(--color-accent)]" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-[var(--color-ink-secondary)] hover:text-[var(--color-accent)]" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-[var(--color-ink-secondary)] hover:text-[var(--color-accent)]" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--color-ink)]">Shop</h4>
            <ul className="mt-4 space-y-2.5">
              <li><Link to="/shop?category=earrings" className="text-sm text-[var(--color-ink-secondary)] hover:text-[var(--color-accent)]">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-[var(--color-ink-secondary)] hover:text-[var(--color-accent)]">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-[var(--color-ink-secondary)] hover:text-[var(--color-accent)]">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-[var(--color-ink-secondary)] hover:text-[var(--color-accent)]">Gift Sets</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--color-ink)]">Help</h4>
            <ul className="mt-4 space-y-2.5">
              <li><a href="#" className="text-sm text-[var(--color-ink-secondary)] hover:text-[var(--color-accent)]">Contact Us</a></li>
              <li><a href="#" className="text-sm text-[var(--color-ink-secondary)] hover:text-[var(--color-accent)]">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-[var(--color-ink-secondary)] hover:text-[var(--color-accent)]">Size Guide</a></li>
              <li><a href="#" className="text-sm text-[var(--color-ink-secondary)] hover:text-[var(--color-accent)]">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--color-ink)]">Company</h4>
            <ul className="mt-4 space-y-2.5">
              <li><a href="#" className="text-sm text-[var(--color-ink-secondary)] hover:text-[var(--color-accent)]">Our Story</a></li>
              <li><a href="#" className="text-sm text-[var(--color-ink-secondary)] hover:text-[var(--color-accent)]">Journal</a></li>
              <li><a href="#" className="text-sm text-[var(--color-ink-secondary)] hover:text-[var(--color-accent)]">Sustainability</a></li>
              <li><a href="#" className="text-sm text-[var(--color-ink-secondary)] hover:text-[var(--color-accent)]">Stockists</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-[var(--color-border)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-ink-tertiary)]">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-[var(--color-ink-tertiary)] hover:text-[var(--color-accent)]">Privacy Policy</a>
            <a href="#" className="text-xs text-[var(--color-ink-tertiary)] hover:text-[var(--color-accent)]">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
