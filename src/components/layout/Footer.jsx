import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal-800 text-cream-100">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-2xl text-cream-50 tracking-wide">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-charcoal-300 leading-relaxed">
              Demi-fine jewelry crafted for the modern woman. 
              Timeless pieces designed to be treasured.
            </p>
            <div className="flex gap-4 mt-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 border border-charcoal-600 hover:border-gold-400 hover:text-gold-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 border border-charcoal-600 hover:border-gold-400 hover:text-gold-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-serif text-sm tracking-extra-wide text-cream-50 mb-6">SHOP</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/collection?category=earrings" className="text-sm text-charcoal-300 hover:text-cream-100 transition-colors">
                  Earrings
                </Link>
              </li>
              <li>
                <Link to="/collection?category=necklaces" className="text-sm text-charcoal-300 hover:text-cream-100 transition-colors">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link to="/collection?category=huggies" className="text-sm text-charcoal-300 hover:text-cream-100 transition-colors">
                  Huggies
                </Link>
              </li>
              <li>
                <Link to="/collection?category=sets" className="text-sm text-charcoal-300 hover:text-cream-100 transition-colors">
                  Gift Sets
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-serif text-sm tracking-extra-wide text-cream-50 mb-6">HELP</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/shipping" className="text-sm text-charcoal-300 hover:text-cream-100 transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/care" className="text-sm text-charcoal-300 hover:text-cream-100 transition-colors">
                  Jewelry Care
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-charcoal-300 hover:text-cream-100 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-charcoal-300 hover:text-cream-100 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-serif text-sm tracking-extra-wide text-cream-50 mb-6">COMPANY</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-charcoal-300 hover:text-cream-100 transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/journal" className="text-sm text-charcoal-300 hover:text-cream-100 transition-colors">
                  Journal
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-sm text-charcoal-300 hover:text-cream-100 transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-charcoal-300 hover:text-cream-100 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-charcoal-400">
              2026 Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-charcoal-400">We accept</span>
              <div className="flex gap-2">
                <div className="px-2 py-1 bg-charcoal-700 rounded text-xs text-charcoal-300">Visa</div>
                <div className="px-2 py-1 bg-charcoal-700 rounded text-xs text-charcoal-300">Mastercard</div>
                <div className="px-2 py-1 bg-charcoal-700 rounded text-xs text-charcoal-300">Amex</div>
                <div className="px-2 py-1 bg-charcoal-700 rounded text-xs text-charcoal-300">PayPal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
