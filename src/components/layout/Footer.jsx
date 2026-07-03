import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-[0.18em] text-ink">
              VELMORA
            </Link>
            <p className="mt-3 text-sm text-muted leading-relaxed">
              Demi-fine jewelry designed to be worn, loved, and passed down.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-ink/70 hover:text-accent"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="Facebook" className="text-ink/70 hover:text-accent"><Facebook className="h-5 w-5" /></a>
              <a href="#" aria-label="Twitter" className="text-ink/70 hover:text-accent"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">Shop</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li><Link to="/shop" className="hover:text-ink">Earrings</Link></li>
              <li><Link to="/shop" className="hover:text-ink">Necklaces</Link></li>
              <li><Link to="/shop" className="hover:text-ink">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-ink">Gifts</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">Help</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li><a href="#" className="hover:text-ink">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-ink">Materials & Care</a></li>
              <li><a href="#" className="hover:text-ink">Size Guide</a></li>
              <li><a href="#" className="hover:text-ink">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">Company</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li><a href="#" className="hover:text-ink">Our Story</a></li>
              <li><a href="#" className="hover:text-ink">Journal</a></li>
              <li><a href="#" className="hover:text-ink">Sustainability</a></li>
              <li><a href="#" className="hover:text-ink">Press</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 md:flex-row">
          <p className="text-xs text-muted">© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-muted">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
