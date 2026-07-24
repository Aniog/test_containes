import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl tracking-widest font-medium"
            >
              VELMORA
            </Link>
            <p className="text-sm text-taupe mt-4 leading-relaxed">
              Demi-fine jewelry crafted for the modern woman. Designed in small
              batches, made to be treasured.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="hover:text-champagne transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-champagne transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-medium mb-4 text-taupe">
              Shop
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link to="/shop" className="hover:text-champagne transition-colors">
                  All Jewelry
                </Link>
              </li>
              <li>
                <Link to="/shop?category=earrings" className="hover:text-champagne transition-colors">
                  Earrings
                </Link>
              </li>
              <li>
                <Link to="/shop?category=necklaces" className="hover:text-champagne transition-colors">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link to="/shop?category=huggies" className="hover:text-champagne transition-colors">
                  Huggies
                </Link>
              </li>
              <li>
                <Link to="/shop?category=sets" className="hover:text-champagne transition-colors">
                  Gift Sets
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-medium mb-4 text-taupe">
              Help
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <a href="#" className="hover:text-champagne transition-colors">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-champagne transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-champagne transition-colors">
                  Care Instructions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-champagne transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-champagne transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-medium mb-4 text-taupe">
              Company
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <a href="#" className="hover:text-champagne transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-champagne transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-champagne transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-champagne transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-champagne transition-colors">
                  Wholesale
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-taupe">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-taupe">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
