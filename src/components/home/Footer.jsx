import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-brand-border bg-brand-cream">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-widest text-brand-charcoal">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-brand-muted leading-relaxed">
              Demi-fine jewelry designed for the modern woman. Quiet luxury, everyday elegance.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-brand-muted hover:text-brand-charcoal" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-brand-muted hover:text-brand-charcoal" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-brand-muted hover:text-brand-charcoal" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-brand-charcoal">Shop</h4>
            <ul className="mt-4 space-y-2">
              <li><Link to="/shop?category=earrings" className="text-sm text-brand-muted hover:text-brand-charcoal">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-brand-muted hover:text-brand-charcoal">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-brand-muted hover:text-brand-charcoal">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-brand-muted hover:text-brand-charcoal">All</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-brand-charcoal">Help</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm text-brand-muted hover:text-brand-charcoal">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-brand-muted hover:text-brand-charcoal">FAQ</a></li>
              <li><a href="#" className="text-sm text-brand-muted hover:text-brand-charcoal">Contact</a></li>
              <li><a href="#" className="text-sm text-brand-muted hover:text-brand-charcoal">Size Guide</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-brand-charcoal">Company</h4>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="text-sm text-brand-muted hover:text-brand-charcoal">Our Story</Link></li>
              <li><a href="#" className="text-sm text-brand-muted hover:text-brand-charcoal">Sustainability</a></li>
              <li><a href="#" className="text-sm text-brand-muted hover:text-brand-charcoal">Press</a></li>
              <li><a href="#" className="text-sm text-brand-muted hover:text-brand-charcoal">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-brand-border pt-8 md:flex-row">
          <p className="text-xs text-brand-muted">© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-brand-muted hover:text-brand-charcoal">Privacy Policy</a>
            <a href="#" className="text-xs text-brand-muted hover:text-brand-charcoal">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
