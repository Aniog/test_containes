import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-bold tracking-wider text-amber-900">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Designed with intention, made to last.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-amber-900 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-900 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-900 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Shop</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/collection/earrings" className="text-sm text-gray-600 hover:text-amber-900 transition-colors">
                  Earrings
                </Link>
              </li>
              <li>
                <Link to="/collection/necklaces" className="text-sm text-gray-600 hover:text-amber-900 transition-colors">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link to="/collection/huggies" className="text-sm text-gray-600 hover:text-amber-900 transition-colors">
                  Huggies
                </Link>
              </li>
              <li>
                <Link to="/collection/sets" className="text-sm text-gray-600 hover:text-amber-900 transition-colors">
                  Sets
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-sm text-gray-600 hover:text-amber-900 transition-colors">
                  View All
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Help</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-amber-900 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-amber-900 transition-colors">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-amber-900 transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-amber-900 transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-amber-900 transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-amber-900 transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-amber-900 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-amber-900 transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {currentYear} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-xs text-gray-400">We accept:</span>
            <div className="flex space-x-2">
              {['Visa', 'MC', 'Amex', 'PayPal'].map((payment) => (
                <div
                  key={payment}
                  className="px-2 py-1 bg-white border border-gray-200 rounded text-xs text-gray-600"
                >
                  {payment}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;