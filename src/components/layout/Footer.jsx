import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-white">
      <div className="container-editorial section-padding">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-[0.25em] text-ink">
              VELMORA
            </Link>
            <p className="mt-3 text-sm text-ink-secondary leading-relaxed">
              Demi-fine jewelry designed to be worn, layered, and treasured.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-ink-secondary hover:text-ink transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-ink-secondary hover:text-ink transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-ink-secondary hover:text-ink transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="eyebrow mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-ink-secondary">
              <li><Link to="/shop?category=Earrings" className="hover:text-ink transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-ink transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-ink transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-ink transition-colors">All</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-4">Help</h4>
            <ul className="space-y-2 text-sm text-ink-secondary">
              <li><a href="#" className="hover:text-ink transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-ink transition-colors">Materials & Care</a></li>
              <li><a href="#" className="hover:text-ink transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-ink transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-ink-secondary">
              <li><Link to="/about" className="hover:text-ink transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-ink transition-colors">Journal</Link></li>
              <li><a href="#" className="hover:text-ink transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-ink transition-colors">Press</a></li>
            </ul>
          </div>
        </div>

        <div className="divider mt-10 mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ink-muted">
          <p>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-ink transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-ink transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
