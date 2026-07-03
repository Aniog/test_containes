import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

const PinterestIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-velmora-charcoal text-white">
      {/* Main Footer */}
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-serif text-2xl tracking-ultra-wide mb-6 block"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
            >
              VELMORA
            </Link>
            <p className="text-velmora-warm-gray text-sm leading-relaxed mb-6 max-w-xs">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman who deserves a little luxury.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-velmora-warm-gray hover:text-velmora-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-velmora-warm-gray hover:text-velmora-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-velmora-warm-gray hover:text-velmora-gold transition-colors"
                aria-label="Pinterest"
              >
                <PinterestIcon />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="text-sm font-medium tracking-wide mb-4 text-velmora-gold-light">
              SHOP
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/collection"
                  className="text-sm text-velmora-warm-gray hover:text-white transition-colors"
                >
                  All Jewelry
                </Link>
              </li>
              <li>
                <Link
                  to="/collection?category=earrings"
                  className="text-sm text-velmora-warm-gray hover:text-white transition-colors"
                >
                  Earrings
                </Link>
              </li>
              <li>
                <Link
                  to="/collection?category=necklaces"
                  className="text-sm text-velmora-warm-gray hover:text-white transition-colors"
                >
                  Necklaces
                </Link>
              </li>
              <li>
                <Link
                  to="/collection?category=huggies"
                  className="text-sm text-velmora-warm-gray hover:text-white transition-colors"
                >
                  Huggies
                </Link>
              </li>
              <li>
                <Link
                  to="/collection?category=sets"
                  className="text-sm text-velmora-warm-gray hover:text-white transition-colors"
                >
                  Gift Sets
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h4 className="text-sm font-medium tracking-wide mb-4 text-velmora-gold-light">
              HELP
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#shipping"
                  className="text-sm text-velmora-warm-gray hover:text-white transition-colors"
                >
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-sm text-velmora-warm-gray hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#care"
                  className="text-sm text-velmora-warm-gray hover:text-white transition-colors"
                >
                  Jewelry Care
                </a>
              </li>
              <li>
                <a
                  href="#size"
                  className="text-sm text-velmora-warm-gray hover:text-white transition-colors"
                >
                  Size Guide
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-velmora-warm-gray hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-sm font-medium tracking-wide mb-4 text-velmora-gold-light">
              COMPANY
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-sm text-velmora-warm-gray hover:text-white transition-colors"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#journal"
                  className="text-sm text-velmora-warm-gray hover:text-white transition-colors"
                >
                  Journal
                </a>
              </li>
              <li>
                <a
                  href="#sustainability"
                  className="text-sm text-velmora-warm-gray hover:text-white transition-colors"
                >
                  Sustainability
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="text-sm text-velmora-warm-gray hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-velmora-warm-gray/20">
        <div className="max-w-[1280px] mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-velmora-warm-gray">
              © {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>

            {/* Payment Icons */}
            <div className="flex items-center gap-3">
              <div className="px-3 py-1.5 bg-white/10 rounded text-xs font-medium">
                VISA
              </div>
              <div className="px-3 py-1.5 bg-white/10 rounded text-xs font-medium">
                Mastercard
              </div>
              <div className="px-3 py-1.5 bg-white/10 rounded text-xs font-medium">
                Amex
              </div>
              <div className="px-3 py-1.5 bg-white/10 rounded text-xs font-medium">
                PayPal
              </div>
            </div>

            <div className="flex gap-4 text-xs text-velmora-warm-gray">
              <a href="#privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
