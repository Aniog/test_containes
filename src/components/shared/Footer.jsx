import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="container-main py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Logo + tagline */}
          <div className="md:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl tracking-widest font-semibold"
            >
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-ivory/60 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted to be treasured. Designed in small
              batches for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-medium text-ivory/50 mb-4">
              Shop
            </h4>
            <ul className="space-y-3 text-sm text-ivory/80">
              <li>
                <Link to="/shop" className="hover:text-ivory transition-colors">
                  All Jewelry
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-ivory transition-colors">
                  Earrings
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-ivory transition-colors">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-ivory transition-colors">
                  Huggies
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-ivory transition-colors">
                  Gift Sets
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-medium text-ivory/50 mb-4">
              Help
            </h4>
            <ul className="space-y-3 text-sm text-ivory/80">
              <li>
                <Link to="/shipping" className="hover:text-ivory transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/care" className="hover:text-ivory transition-colors">
                  Jewelry Care
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-ivory transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-ivory transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-medium text-ivory/50 mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-ivory/80">
              <li>
                <Link to="/about" className="hover:text-ivory transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/journal" className="hover:text-ivory transition-colors">
                  Journal
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="hover:text-ivory transition-colors">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="hairline border-ivory/10 my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory/40">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-ivory/60 hover:text-ivory transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="text-ivory/60 hover:text-ivory transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="text-ivory/60 hover:text-ivory transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
          <div className="flex items-center gap-3">
            {/* Payment icons as text badges */}
            <span className="text-[10px] uppercase tracking-wider border border-ivory/20 px-2 py-1 text-ivory/50">
              Visa
            </span>
            <span className="text-[10px] uppercase tracking-wider border border-ivory/20 px-2 py-1 text-ivory/50">
              Mastercard
            </span>
            <span className="text-[10px] uppercase tracking-wider border border-ivory/20 px-2 py-1 text-ivory/50">
              Amex
            </span>
            <span className="text-[10px] uppercase tracking-wider border border-ivory/20 px-2 py-1 text-ivory/50">
              PayPal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
