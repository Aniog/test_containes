import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-espresso text-ivory/80">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-ultra-wide text-ivory mb-4 block">
              VELMORA
            </Link>
            <p className="font-sans text-sm text-ivory/60 leading-relaxed mb-6">
              Demi-fine jewelry crafted with intention. Each piece is designed to be treasured, worn, and loved for years to come.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ivory/60 hover:text-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ivory/60 hover:text-gold transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ivory/60 hover:text-gold transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop column */}
          <div>
            <h3 className="font-serif text-lg text-ivory mb-4">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/shop?category=earrings" className="font-sans text-sm text-ivory/60 hover:text-gold transition-colors duration-300">
                  Earrings
                </Link>
              </li>
              <li>
                <Link to="/shop?category=necklaces" className="font-sans text-sm text-ivory/60 hover:text-gold transition-colors duration-300">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link to="/shop?category=huggies" className="font-sans text-sm text-ivory/60 hover:text-gold transition-colors duration-300">
                  Huggies
                </Link>
              </li>
              <li>
                <Link to="/shop" className="font-sans text-sm text-ivory/60 hover:text-gold transition-colors duration-300">
                  All Jewelry
                </Link>
              </li>
              <li>
                <Link to="/shop?category=sets" className="font-sans text-sm text-ivory/60 hover:text-gold transition-colors duration-300">
                  Gift Sets
                </Link>
              </li>
            </ul>
          </div>

          {/* Help column */}
          <div>
            <h3 className="font-serif text-lg text-ivory mb-4">Help</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/shipping" className="font-sans text-sm text-ivory/60 hover:text-gold transition-colors duration-300">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/faq" className="font-sans text-sm text-ivory/60 hover:text-gold transition-colors duration-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="font-sans text-sm text-ivory/60 hover:text-gold transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="font-sans text-sm text-ivory/60 hover:text-gold transition-colors duration-300">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link to="/care-guide" className="font-sans text-sm text-ivory/60 hover:text-gold transition-colors duration-300">
                  Jewelry Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="font-serif text-lg text-ivory mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="font-sans text-sm text-ivory/60 hover:text-gold transition-colors duration-300">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/journal" className="font-sans text-sm text-ivory/60 hover:text-gold transition-colors duration-300">
                  Journal
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="font-sans text-sm text-ivory/60 hover:text-gold transition-colors duration-300">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/careers" className="font-sans text-sm text-ivory/60 hover:text-gold transition-colors duration-300">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ivory/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-sans text-xs text-ivory/40">
              © {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>

            {/* Payment icons */}
            <div className="flex items-center gap-3">
              <div className="px-3 py-1.5 bg-ivory/10 rounded text-xs font-sans text-ivory/60">
                Visa
              </div>
              <div className="px-3 py-1.5 bg-ivory/10 rounded text-xs font-sans text-ivory/60">
                Mastercard
              </div>
              <div className="px-3 py-1.5 bg-ivory/10 rounded text-xs font-sans text-ivory/60">
                Amex
              </div>
              <div className="px-3 py-1.5 bg-ivory/10 rounded text-xs font-sans text-ivory/60">
                PayPal
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
