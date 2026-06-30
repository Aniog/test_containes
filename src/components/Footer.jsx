import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-velmora-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <Link to="/" className="font-serif text-2xl tracking-widest block mb-4">
              VELMORA
            </Link>
            <p className="text-sm text-gray-400 mb-6">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, and designed for everyday luxury.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-velmora-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-velmora-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-velmora-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/collection" className="text-sm text-gray-400 hover:text-velmora-gold transition-colors">
                  Earrings
                </Link>
              </li>
              <li>
                <Link to="/collection" className="text-sm text-gray-400 hover:text-velmora-gold transition-colors">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link to="/collection" className="text-sm text-gray-400 hover:text-velmora-gold transition-colors">
                  Huggies
                </Link>
              </li>
              <li>
                <Link to="/collection" className="text-sm text-gray-400 hover:text-velmora-gold transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/collection" className="text-sm text-gray-400 hover:text-velmora-gold transition-colors">
                  Bestsellers
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">Help</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-velmora-gold transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-velmora-gold transition-colors">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-velmora-gold transition-colors">
                  Care Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-velmora-gold transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-velmora-gold transition-colors">
                  About Velmora
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-velmora-gold transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-velmora-gold transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-velmora-gold transition-colors">
                  Journal
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Icons & Copyright */}
        <div className="border-t border-velmora-charcoal pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">Secure Payment:</span>
              <div className="flex space-x-2">
                <div className="w-10 h-6 bg-gray-700 rounded"></div>
                <div className="w-10 h-6 bg-gray-700 rounded"></div>
                <div className="w-10 h-6 bg-gray-700 rounded"></div>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
