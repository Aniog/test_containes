import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-editorial section-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl font-semibold tracking-[0.18em] text-ink">
              VELMORA
            </Link>
            <p className="mt-3 text-sm text-muted leading-relaxed">
              Quiet luxury demi-fine jewelry, crafted to be treasured.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-ink">Shop</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li><Link to="/shop" className="hover:text-ink">All</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-ink">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-ink">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-ink">Huggies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-ink">Help</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li><Link to="/about" className="hover:text-ink">Contact</Link></li>
              <li><Link to="/about" className="hover:text-ink">Shipping & Returns</Link></li>
              <li><Link to="/about" className="hover:text-ink">Care Guide</Link></li>
              <li><Link to="/about" className="hover:text-ink">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-ink">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li><Link to="/about" className="hover:text-ink">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-ink">Journal</Link></li>
              <li><Link to="/about" className="hover:text-ink">Sustainability</Link></li>
              <li><Link to="/about" className="hover:text-ink">Press</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border pt-8">
          <p className="text-xs text-muted">© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4 text-muted">
            <a href="#" aria-label="Instagram" className="hover:text-ink"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="Facebook" className="hover:text-ink"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-ink"><Twitter className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
