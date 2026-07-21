import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-brand-line bg-brand-surface">
      <div className="container-editorial py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-semibold tracking-wide text-brand-ink">
              VELMORA
            </Link>
            <p className="mt-3 text-sm text-brand-muted leading-relaxed">
              Demi-fine jewelry designed to be treasured. Crafted with care, worn with confidence.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-brand-muted transition-colors hover:text-brand-ink">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-brand-muted transition-colors hover:text-brand-ink">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-brand-muted transition-colors hover:text-brand-ink">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Shop</h4>
            <ul className="mt-4 space-y-2.5">
              <li><Link to="/shop?category=earrings" className="text-sm text-brand-muted hover:text-brand-ink">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-brand-muted hover:text-brand-ink">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-brand-muted hover:text-brand-ink">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-brand-muted hover:text-brand-ink">All</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Help</h4>
            <ul className="mt-4 space-y-2.5">
              <li><span className="text-sm text-brand-muted">Shipping & Returns</span></li>
              <li><span className="text-sm text-brand-muted">Size Guide</span></li>
              <li><span className="text-sm text-brand-muted">Contact Us</span></li>
              <li><span className="text-sm text-brand-muted">FAQ</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Company</h4>
            <ul className="mt-4 space-y-2.5">
              <li><Link to="/about" className="text-sm text-brand-muted hover:text-brand-ink">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-brand-muted hover:text-brand-ink">Journal</Link></li>
              <li><span className="text-sm text-brand-muted">Sustainability</span></li>
              <li><span className="text-sm text-brand-muted">Press</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-brand-line pt-8">
          <p className="text-xs text-brand-subtle">&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-3 text-xs text-brand-subtle">
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
