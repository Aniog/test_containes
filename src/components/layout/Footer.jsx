import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-soft-black text-brand-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link to="/" className="inline-block">
                <span className="font-serif text-2xl font-semibold tracking-widest text-brand-cream">
                  VELMORA
                </span>
              </Link>
              <p className="mt-4 text-sm leading-relaxed text-brand-cream/70">
                Demi-fine jewelry crafted to be treasured. Designed in California, worn worldwide.
              </p>
              <div className="mt-6 flex space-x-4">
                <a
                  href="#"
                  className="text-brand-cream/60 transition-colors hover:text-brand-gold"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="text-brand-cream/60 transition-colors hover:text-brand-gold"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="text-brand-cream/60 transition-colors hover:text-brand-gold"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            {/* Shop */}
            <div>
              <h3 className="font-serif text-sm font-semibold uppercase tracking-widest text-brand-cream">
                Shop
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link to="/shop?category=earrings" className="text-sm text-brand-cream/70 transition-colors hover:text-brand-gold">
                    Earrings
                  </Link>
                </li>
                <li>
                  <Link to="/shop?category=necklaces" className="text-sm text-brand-cream/70 transition-colors hover:text-brand-gold">
                    Necklaces
                  </Link>
                </li>
                <li>
                  <Link to="/shop?category=huggies" className="text-sm text-brand-cream/70 transition-colors hover:text-brand-gold">
                    Huggies
                  </Link>
                </li>
                <li>
                  <Link to="/shop?category=sets" className="text-sm text-brand-cream/70 transition-colors hover:text-brand-gold">
                    Gift Sets
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="text-sm text-brand-cream/70 transition-colors hover:text-brand-gold">
                    All Jewelry
                  </Link>
                </li>
              </ul>
            </div>

            {/* Help */}
            <div>
              <h3 className="font-serif text-sm font-semibold uppercase tracking-widest text-brand-cream">
                Help
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="#" className="text-sm text-brand-cream/70 transition-colors hover:text-brand-gold">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-brand-cream/70 transition-colors hover:text-brand-gold">
                    Shipping & Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-brand-cream/70 transition-colors hover:text-brand-gold">
                    Size Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-brand-cream/70 transition-colors hover:text-brand-gold">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-brand-cream/70 transition-colors hover:text-brand-gold">
                    Track Order
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-serif text-sm font-semibold uppercase tracking-widest text-brand-cream">
                Company
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link to="/about" className="text-sm text-brand-cream/70 transition-colors hover:text-brand-gold">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link to="/journal" className="text-sm text-brand-cream/70 transition-colors hover:text-brand-gold">
                    Journal
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-sm text-brand-cream/70 transition-colors hover:text-brand-gold">
                    Sustainability
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-brand-cream/70 transition-colors hover:text-brand-gold">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-brand-cream/70 transition-colors hover:text-brand-gold">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 border-t border-brand-cream/10 pt-8">
            <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
              <p className="text-xs text-brand-cream/50">
                © 2024 Velmora Fine Jewelry. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-xs text-brand-cream/50 transition-colors hover:text-brand-cream">
                  Privacy Policy
                </a>
                <a href="#" className="text-xs text-brand-cream/50 transition-colors hover:text-brand-cream">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
