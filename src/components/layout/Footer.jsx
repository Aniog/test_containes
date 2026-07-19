import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-ink text-brand-bg/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-semibold tracking-wide text-brand-bg">
              VELMORA
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-brand-bg/70">
              Demi-fine jewelry designed to be worn, loved, and passed down.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-bg/90 mb-3">Shop</h4>
            <ul className="space-y-2 text-sm text-brand-bg/70">
              <li><Link to="/shop" className="hover:text-brand-warm transition-colors">All</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-brand-warm transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-brand-warm transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-brand-warm transition-colors">Huggies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-bg/90 mb-3">Help</h4>
            <ul className="space-y-2 text-sm text-brand-bg/70">
              <li><span className="hover:text-brand-warm transition-colors cursor-pointer">Shipping & Returns</span></li>
              <li><span className="hover:text-brand-warm transition-colors cursor-pointer">Care Guide</span></li>
              <li><span className="hover:text-brand-warm transition-colors cursor-pointer">FAQ</span></li>
              <li><span className="hover:text-brand-warm transition-colors cursor-pointer">Contact</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-bg/90 mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-brand-bg/70">
              <li><span className="hover:text-brand-warm transition-colors cursor-pointer">Our Story</span></li>
              <li><span className="hover:text-brand-warm transition-colors cursor-pointer">Sustainability</span></li>
              <li><span className="hover:text-brand-warm transition-colors cursor-pointer">Press</span></li>
              <li><span className="hover:text-brand-warm transition-colors cursor-pointer">Careers</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-brand-bg/10 pt-6">
          <p className="text-xs text-brand-bg/60">© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4 text-brand-bg/70">
            <Instagram className="h-4 w-4 hover:text-brand-warm cursor-pointer transition-colors" />
            <Facebook className="h-4 w-4 hover:text-brand-warm cursor-pointer transition-colors" />
            <Twitter className="h-4 w-4 hover:text-brand-warm cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
