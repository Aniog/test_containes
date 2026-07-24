import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-primary text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="inline-block font-serif text-2xl tracking-wide mb-4"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
            >
              VELMORA
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the modern woman. Quality that lasts, prices that delight.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4">Shop</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/shop" className="text-white/70 hover:text-white transition-colors text-sm">
                  All Jewelry
                </Link>
              </li>
              <li>
                <Link to="/shop?category=earrings" className="text-white/70 hover:text-white transition-colors text-sm">
                  Earrings
                </Link>
              </li>
              <li>
                <Link to="/shop?category=necklaces" className="text-white/70 hover:text-white transition-colors text-sm">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link to="/shop?category=huggies" className="text-white/70 hover:text-white transition-colors text-sm">
                  Huggies
                </Link>
              </li>
              <li>
                <Link to="/shop?category=sets" className="text-white/70 hover:text-white transition-colors text-sm">
                  Gift Sets
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4">Help</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-white/70 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-white/70 hover:text-white transition-colors text-sm">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-white/70 hover:text-white transition-colors text-sm">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-white/70 hover:text-white transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/care" className="text-white/70 hover:text-white transition-colors text-sm">
                  Jewelry Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-white/70 hover:text-white transition-colors text-sm">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/journal" className="text-white/70 hover:text-white transition-colors text-sm">
                  Journal
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-white/70 hover:text-white transition-colors text-sm">
                  Sustainability
                </Link>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-xs">
              © {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>

            {/* Payment Icons */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center">
                <span className="text-xs font-bold">VISA</span>
              </div>
              <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center">
                <span className="text-xs font-bold">MC</span>
              </div>
              <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center">
                <span className="text-xs font-bold">AMEX</span>
              </div>
              <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center">
                <span className="text-[10px] font-bold">PAYPAL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
