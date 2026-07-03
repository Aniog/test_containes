import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="hairline bg-white">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl font-semibold tracking-ultra text-ink">
              VELMORA
            </Link>
            <p className="mt-3 text-sm text-ink-secondary leading-relaxed">
              Quiet luxury demi-fine jewelry, designed to be treasured.
            </p>
            <div className="mt-5 flex items-center gap-4 text-ink-secondary">
              <a href="#" aria-label="Instagram" className="hover:text-ink"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="Facebook" className="hover:text-ink"><Facebook className="h-5 w-5" /></a>
              <a href="#" aria-label="Twitter" className="hover:text-ink"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-ultra text-ink">Shop</h4>
            <ul className="mt-4 space-y-2 text-sm text-ink-secondary">
              <li><Link to="/shop?category=Earrings" className="hover:text-ink">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-ink">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-ink">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-ink">All</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-ultra text-ink">Help</h4>
            <ul className="mt-4 space-y-2 text-sm text-ink-secondary">
              <li><a href="#" className="hover:text-ink">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-ink">Care Guide</a></li>
              <li><a href="#" className="hover:text-ink">FAQ</a></li>
              <li><a href="#" className="hover:text-ink">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-ultra text-ink">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-ink-secondary">
              <li><Link to="/about" className="hover:text-ink">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-ink">Journal</Link></li>
              <li><a href="#" className="hover:text-ink">Sustainability</a></li>
              <li><a href="#" className="hover:text-ink">Press</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 hairline pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ink-muted">
          <p>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-[11px] font-medium text-ink-secondary">
              Visa
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-[11px] font-medium text-ink-secondary">
              Mastercard
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-[11px] font-medium text-ink-secondary">
              PayPal
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-[11px] font-medium text-ink-secondary">
              Apple Pay
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
