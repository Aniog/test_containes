import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-brand-divider bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl font-semibold tracking-wide text-brand-ink">
              VELMORA
            </Link>
            <p className="mt-3 text-sm text-brand-muted">Quiet luxury, worn close.</p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Shop</h4>
            <ul className="mt-4 space-y-2 text-sm text-brand-muted">
              <li><Link to="/shop" className="hover:text-brand-accent">All</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-brand-accent">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-brand-accent">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-brand-accent">Huggies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Help</h4>
            <ul className="mt-4 space-y-2 text-sm text-brand-muted">
              <li><span className="cursor-default">Shipping & Returns</span></li>
              <li><span className="cursor-default">Care Guide</span></li>
              <li><span className="cursor-default">Contact</span></li>
              <li><span className="cursor-default">FAQ</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-brand-muted">
              <li><Link to="/about" className="hover:text-brand-accent">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-brand-accent">Journal</Link></li>
              <li><span className="cursor-default">Sustainability</span></li>
              <li><span className="cursor-default">Press</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-brand-divider pt-6 md:flex-row">
          <p className="text-xs text-brand-muted">© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-5 text-brand-muted">
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
