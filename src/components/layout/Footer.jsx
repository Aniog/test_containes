import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="section-container py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-xl font-semibold tracking-wide text-ink">
              VELMORA
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
              Demi-fine jewelry designed to be worn, loved, and passed down.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-ink">Shop</h4>
            <ul className="mt-4 space-y-2 text-sm text-ink-secondary">
              <li><Link to="/shop?category=earrings" className="transition-colors hover:text-ink">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="transition-colors hover:text-ink">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="transition-colors hover:text-ink">Huggies</Link></li>
              <li><Link to="/shop" className="transition-colors hover:text-ink">All</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-ink">Help</h4>
            <ul className="mt-4 space-y-2 text-sm text-ink-secondary">
              <li><span className="cursor-default">Shipping & Returns</span></li>
              <li><span className="cursor-default">Care Guide</span></li>
              <li><span className="cursor-default">FAQ</span></li>
              <li><span className="cursor-default">Contact</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-ink">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-ink-secondary">
              <li><Link to="/about" className="transition-colors hover:text-ink">Our Story</Link></li>
              <li><span className="cursor-default">Sustainability</span></li>
              <li><span className="cursor-default">Press</span></li>
              <li><span className="cursor-default">Careers</span></li>
            </ul>
          </div>
        </div>

        <div className="hairline mt-10" />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-ink-tertiary">© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-5 text-ink-secondary">
            <Instagram size={18} />
            <Facebook size={18} />
            <Twitter size={18} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
