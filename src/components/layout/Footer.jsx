import { Link } from "react-router-dom";
import { Instagram, Pinterest, Twitter } from "lucide-react";

const socialLinks = [
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "Pinterest", icon: Pinterest, href: "#" },
  { label: "Twitter", icon: Twitter, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-clay-900 text-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="font-serif text-xl tracking-wide-2xl text-cream-50"
            >
              VELMORA
            </Link>
            <p className="mt-3 text-sm text-cream-400 leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the woman who values quiet
              luxury and timeless design.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-cream-50 mb-4">
              Shop
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/shop"
                  className="text-sm text-cream-400 hover:text-cream-50 transition-colors"
                >
                  All Jewelry
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-sm text-cream-400 hover:text-cream-50 transition-colors"
                >
                  Earrings
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-sm text-cream-400 hover:text-cream-50 transition-colors"
                >
                  Necklaces
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-sm text-cream-400 hover:text-cream-50 transition-colors"
                >
                  Sets
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-cream-50 mb-4">
              Help
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#"
                  className="text-sm text-cream-400 hover:text-cream-50 transition-colors"
                >
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-cream-400 hover:text-cream-50 transition-colors"
                >
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-cream-400 hover:text-cream-50 transition-colors"
                >
                  Size Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-cream-400 hover:text-cream-50 transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-cream-50 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#"
                  className="text-sm text-cream-400 hover:text-cream-50 transition-colors"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-cream-400 hover:text-cream-50 transition-colors"
                >
                  Journal
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-cream-400 hover:text-cream-50 transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-cream-400 hover:text-cream-50 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-clay-700/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-xs text-cream-500">
              &copy; 2026 Velmora Fine Jewelry. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Payment icons */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-wider text-cream-500">
                Visa
              </span>
              <span className="text-[10px] uppercase tracking-wider text-cream-500">
                MC
              </span>
              <span className="text-[10px] uppercase tracking-wider text-cream-500">
                Amex
              </span>
              <span className="text-[10px] uppercase tracking-wider text-cream-500">
                PayPal
              </span>
              <span className="text-[10px] uppercase tracking-wider text-cream-500">
                Klarna
              </span>
            </div>
            <span className="text-cream-600">|</span>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="text-cream-400 hover:text-cream-50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-cream-400 hover:text-cream-50 transition-colors"
                aria-label="Pinterest"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-cream-400 hover:text-cream-50 transition-colors"
                aria-label="Twitter"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}