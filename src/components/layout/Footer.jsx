import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-white">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl font-semibold tracking-[0.18em] text-ink">
              VELMORA
            </Link>
            <p className="mt-3 text-sm text-ink-secondary leading-relaxed">
              Quiet luxury for everyday rituals. Demi-fine jewelry designed to be worn, gifted, and treasured.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-ink-muted hover:text-ink transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="Facebook" className="text-ink-muted hover:text-ink transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" aria-label="Twitter" className="text-ink-muted hover:text-ink transition-colors"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">Shop</h4>
            <ul className="mt-4 space-y-2 text-sm text-ink-secondary">
              <li><Link to="/shop" className="hover:text-ink transition-colors">All</Link></li>
              <li><Link to="/shop" className="hover:text-ink transition-colors">Earrings</Link></li>
              <li><Link to="/shop" className="hover:text-ink transition-colors">Necklaces</Link></li>
              <li><Link to="/shop" className="hover:text-ink transition-colors">Huggies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">Help</h4>
            <ul className="mt-4 space-y-2 text-sm text-ink-secondary">
              <li><a href="#" className="hover:text-ink transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-ink transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-ink transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-ink transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-ink-secondary">
              <li><a href="#" className="hover:text-ink transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-ink transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-ink transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-ink transition-colors">Stockists</a></li>
            </ul>
          </div>
        </div>

        <div className="hairline mt-10 mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ink-muted">
          <p>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="inline-flex h-6 w-10 rounded bg-ink/5" />
            <span className="inline-flex h-6 w-10 rounded bg-ink/5" />
            <span className="inline-flex h-6 w-10 rounded bg-ink/5" />
            <span className="inline-flex h-6 w-10 rounded bg-ink/5" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
