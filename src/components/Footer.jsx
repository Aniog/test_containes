import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-velmora-dark text-velmora-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo */}
          <div>
            <Link
              to="/"
              className="font-serif text-2xl tracking-widest text-velmora-light"
            >
              VELMORA
            </Link>
            <p className="text-sm text-velmora-muted mt-3 max-w-xs">
              Demi-fine jewelry crafted to be treasured. Each piece is designed
              for the modern woman who values quality, beauty, and timeless
              elegance.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-velmora-gold mb-4">
              Shop
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/collection"
                  className="text-sm text-velmora-light/70 hover:text-velmora-gold transition-colors"
                >
                  All Jewelry
                </Link>
              </li>
              <li>
                <Link
                  to="/collection"
                  className="text-sm text-velmora-light/70 hover:text-velmora-gold transition-colors"
                >
                  Earrings
                </Link>
              </li>
              <li>
                <Link
                  to="/collection"
                  className="text-sm text-velmora-light/70 hover:text-velmora-gold transition-colors"
                >
                  Necklaces
                </Link>
              </li>
              <li>
                <Link
                  to="/collection"
                  className="text-sm text-velmora-light/70 hover:text-velmora-gold transition-colors"
                >
                  Sets
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm text-velmora-light/70 hover:text-velmora-gold transition-colors"
                >
                  Bestsellers
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-velmora-gold mb-4">
              Help
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/"
                  className="text-sm text-velmora-light/70 hover:text-velmora-gold transition-colors"
                >
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm text-velmora-light/70 hover:text-velmora-gold transition-colors"
                >
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm text-velmora-light/70 hover:text-velmora-gold transition-colors"
                >
                  Jewelry Care
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm text-velmora-light/70 hover:text-velmora-gold transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm text-velmora-light/70 hover:text-velmora-gold transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-velmora-gold mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/"
                  className="text-sm text-velmora-light/70 hover:text-velmora-gold transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm text-velmora-light/70 hover:text-velmora-gold transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm text-velmora-light/70 hover:text-velmora-gold transition-colors"
                >
                  Journal
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm text-velmora-light/70 hover:text-velmora-gold transition-colors"
                >
                  Sustainability
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm text-velmora-light/70 hover:text-velmora-gold transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="hairline border-velmora-muted/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-xs text-velmora-muted">
              &copy; 2026 Velmora Fine Jewelry. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-4">
            {/* Payment icons */}
            <div className="flex items-center gap-3 text-velmora-muted/60">
              <span className="text-xs tracking-wider uppercase">Visa</span>
              <span className="text-xs tracking-wider uppercase">MC</span>
              <span className="text-xs tracking-wider uppercase">Amex</span>
              <span className="text-xs tracking-wider uppercase">PayPal</span>
              <span className="text-xs tracking-wider uppercase">AF</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-velmora-muted hover:text-velmora-gold transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="text-velmora-muted hover:text-velmora-gold transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="text-velmora-muted hover:text-velmora-gold transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="text-velmora-muted hover:text-velmora-gold transition-colors"
              aria-label="Pinterest"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}