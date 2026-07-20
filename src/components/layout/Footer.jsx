import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-[0.18em] text-ink">
              VELMORA
            </Link>
            <p className="mt-3 text-sm text-ink-secondary leading-relaxed">
              Quiet luxury for everyday rituals. Demi-fine jewelry designed to be worn, loved, and passed down.
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
            <p className="eyebrow mb-4">Shop</p>
            <ul className="space-y-2 text-sm text-ink-secondary">
              <li><Link to="/shop?category=earrings" className="hover:text-ink">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-ink">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-ink">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-ink">All</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Help</p>
            <ul className="space-y-2 text-sm text-ink-secondary">
              <li><a href="#" className="hover:text-ink">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-ink">Materials & Care</a></li>
              <li><a href="#" className="hover:text-ink">Size Guide</a></li>
              <li><a href="#" className="hover:text-ink">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Company</p>
            <ul className="space-y-2 text-sm text-ink-secondary">
              <li><Link to="/about" className="hover:text-ink">Our Story</Link></li>
              <li><a href="#" className="hover:text-ink">Journal</a></li>
              <li><a href="#" className="hover:text-ink">Sustainability</a></li>
              <li><a href="#" className="hover:text-ink">Stockists</a></li>
            </ul>
          </div>
        </div>

        <div className="divider my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-muted">© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-ink-muted">
            <a href="#" className="hover:text-ink">Privacy</a>
            <a href="#" className="hover:text-ink">Terms</a>
            <a href="#" className="hover:text-ink">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
