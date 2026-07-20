import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-800 text-ivory-200">
      {/* Newsletter Section */}
      <div className="border-b border-charcoal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="font-serif text-3xl md:text-4xl text-white mb-3">
              Join for 10% Off
            </h3>
            <p className="text-charcoal-300 mb-8">
              Subscribe to receive exclusive offers, early access to new
              collections, and styling inspiration.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-charcoal-700 border border-charcoal-600 text-white placeholder:text-charcoal-400 focus:outline-none focus:border-gold-500 transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-gold-500 text-white font-sans text-sm tracking-wider uppercase hover:bg-gold-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="font-serif text-3xl tracking-widest-xl text-white hover:text-gold-500 transition-colors"
            >
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-charcoal-300 leading-relaxed">
              Crafted to be treasured. Demi-fine gold jewelry for the modern
              woman who appreciates quiet luxury and timeless elegance.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-charcoal-400 hover:text-gold-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-charcoal-400 hover:text-gold-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-charcoal-400 hover:text-gold-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-sm tracking-wider uppercase text-white mb-6">
              Shop
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/shop?category=earrings"
                  className="text-sm text-charcoal-300 hover:text-gold-500 transition-colors"
                >
                  Earrings
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?category=necklaces"
                  className="text-sm text-charcoal-300 hover:text-gold-500 transition-colors"
                >
                  Necklaces
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?category=huggies"
                  className="text-sm text-charcoal-300 hover:text-gold-500 transition-colors"
                >
                  Huggies
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?category=sets"
                  className="text-sm text-charcoal-300 hover:text-gold-500 transition-colors"
                >
                  Gift Sets
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-sm text-charcoal-300 hover:text-gold-500 transition-colors"
                >
                  Shop All
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-sm tracking-wider uppercase text-white mb-6">
              Help
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-charcoal-300 hover:text-gold-500 transition-colors"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-charcoal-300 hover:text-gold-500 transition-colors"
                >
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-charcoal-300 hover:text-gold-500 transition-colors"
                >
                  Size Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-charcoal-300 hover:text-gold-500 transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-charcoal-300 hover:text-gold-500 transition-colors"
                >
                  Track Order
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-sm tracking-wider uppercase text-white mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-charcoal-300 hover:text-gold-500 transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-charcoal-300 hover:text-gold-500 transition-colors"
                >
                  Sustainability
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-charcoal-300 hover:text-gold-500 transition-colors"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-charcoal-300 hover:text-gold-500 transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-charcoal-300 hover:text-gold-500 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-charcoal-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-charcoal-400">
            &copy; {currentYear} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-xs text-charcoal-400">
              Visa
            </span>
            <span className="text-xs text-charcoal-400">
              Mastercard
            </span>
            <span className="text-xs text-charcoal-400">
              Amex
            </span>
            <span className="text-xs text-charcoal-400">
              PayPal
            </span>
            <span className="text-xs text-charcoal-400">
              Apple Pay
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
