import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-brand-line bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl font-semibold tracking-wide text-brand-ink">
              VELMORA
            </Link>
            <p className="mt-3 text-sm text-brand-muted leading-relaxed">
              Demi-fine jewelry designed to be worn, loved, and passed down.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-brand-muted hover:text-brand-ink transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-brand-muted hover:text-brand-ink transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-brand-muted hover:text-brand-ink transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-brand-ink font-semibold">Shop</h4>
            <ul className="mt-4 space-y-2 text-sm text-brand-muted">
              <li><Link to="/shop?category=earrings" className="hover:text-brand-ink transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-brand-ink transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-brand-ink transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-brand-ink transition-colors">All</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-brand-ink font-semibold">Help</h4>
            <ul className="mt-4 space-y-2 text-sm text-brand-muted">
              <li><a href="#" className="hover:text-brand-ink transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-brand-ink transition-colors">Care Guide</a></li>
              <li><a href="#" className="hover:text-brand-ink transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-brand-ink transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-brand-ink font-semibold">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-brand-muted">
              <li><Link to="/about" className="hover:text-brand-ink transition-colors">Our Story</Link></li>
              <li><a href="#" className="hover:text-brand-ink transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-brand-ink transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-brand-ink transition-colors">Stockists</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-brand-line pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-subtle">&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-brand-subtle">
            <a href="#" className="hover:text-brand-ink transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-ink transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;