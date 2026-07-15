import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-xl font-semibold tracking-[0.18em] text-ink">
              VELMORA
            </Link>
            <p className="mt-3 text-sm text-ink-secondary leading-relaxed">
              Quiet luxury for everyday rituals. Demi-fine jewelry designed to be worn, gifted, and treasured.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-ink-secondary hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-ink-secondary hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-ink-secondary hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-ink">Shop</h4>
            <ul className="mt-4 space-y-2 text-sm text-ink-secondary">
              <li><Link to="/shop" className="hover:text-accent transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop" className="hover:text-accent transition-colors">Earrings</Link></li>
              <li><Link to="/shop" className="hover:text-accent transition-colors">Necklaces</Link></li>
              <li><Link to="/shop" className="hover:text-accent transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-accent transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-ink">Help</h4>
            <ul className="mt-4 space-y-2 text-sm text-ink-secondary">
              <li><a href="#" className="hover:text-accent transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Materials & Care</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-ink">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-ink-secondary">
              <li><a href="#" className="hover:text-accent transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Press</a></li>
            </ul>
          </div>
        </div>

        <div className="hairline mt-12 mb-8" />

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-ink-muted">© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-ink-muted">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
