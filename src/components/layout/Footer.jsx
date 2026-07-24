import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="section-container py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="font-display text-xl font-semibold tracking-display text-ink">
              VELMORA
            </Link>
            <p className="mt-3 font-body text-sm text-ink-secondary leading-relaxed">
              Quiet luxury for everyday rituals. Demi-fine jewelry designed to be worn, gifted, and
              treasured.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-ink-muted transition-colors hover:text-ink">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-ink-muted transition-colors hover:text-ink">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-ink-muted transition-colors hover:text-ink">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow">Shop</p>
            <ul className="mt-4 space-y-2">
              {['Earrings', 'Necklaces', 'Huggies', 'New Arrivals', 'Bestsellers', 'Gift Cards'].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="/shop"
                      className="font-ui text-sm text-ink-secondary transition-colors hover:text-ink"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Help</p>
            <ul className="mt-4 space-y-2">
              {['Contact', 'Shipping & Returns', 'Size Guide', 'Care Guide', 'FAQ', 'Track Order'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-ui text-sm text-ink-secondary transition-colors hover:text-ink"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Company</p>
            <ul className="mt-4 space-y-2">
              {['Our Story', 'Sustainability', 'Press', 'Careers', 'Privacy Policy', 'Terms'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-ui text-sm text-ink-secondary transition-colors hover:text-ink"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="divider-soft mt-10" />
        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="font-ui text-xs text-ink-muted">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-ink-muted">
            <span className="font-ui text-xs">We accept</span>
            <span className="rounded border border-border-soft px-2 py-1 text-xs">Visa</span>
            <span className="rounded border border-border-soft px-2 py-1 text-xs">MC</span>
            <span className="rounded border border-border-soft px-2 py-1 text-xs">Amex</span>
            <span className="rounded border border-border-soft px-2 py-1 text-xs">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
