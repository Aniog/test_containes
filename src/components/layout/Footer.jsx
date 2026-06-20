import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-light border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl font-semibold tracking-widest text-cream hover:text-gold transition-colors"
            >
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-ink-muted leading-relaxed">
              Demi-fine jewelry crafted for the modern woman. Quiet luxury, warm and timeless.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-ink-muted hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-ink-muted hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-ink-muted hover:text-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-serif text-lg font-medium text-cream mb-4">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/shop?category=earrings" className="text-sm text-ink-muted hover:text-gold transition-colors">
                  Earrings
                </Link>
              </li>
              <li>
                <Link to="/shop?category=necklaces" className="text-sm text-ink-muted hover:text-gold transition-colors">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link to="/shop?category=huggies" className="text-sm text-ink-muted hover:text-gold transition-colors">
                  Huggies
                </Link>
              </li>
              <li>
                <Link to="/shop?category=sets" className="text-sm text-ink-muted hover:text-gold transition-colors">
                  Gift Sets
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-sm text-ink-muted hover:text-gold transition-colors">
                  All Jewelry
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-serif text-lg font-medium text-cream mb-4">Help</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-ink-muted hover:text-gold transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-ink-muted hover:text-gold transition-colors">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-ink-muted hover:text-gold transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-ink-muted hover:text-gold transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-ink-muted hover:text-gold transition-colors">
                  Care Instructions
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-serif text-lg font-medium text-cream mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-ink-muted hover:text-gold transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/journal" className="text-sm text-ink-muted hover:text-gold transition-colors">
                  Journal
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-ink-muted hover:text-gold transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-ink-muted hover:text-gold transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-ink-muted hover:text-gold transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-ink-muted">
            © {currentYear} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-ink-muted hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-ink-muted hover:text-gold transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
