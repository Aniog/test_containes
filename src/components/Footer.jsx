import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, CreditCard, Truck, RefreshCw } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-ivory py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="font-serif text-2xl tracking-widest mb-4">VELMORA</h3>
            <p className="text-sm text-stone mb-6">
              Demi-fine gold jewelry crafted to be treasured. Each piece is designed with intention, 
              made to last, and meant to be worn every day.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-stone hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-stone hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-stone hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="font-medium text-sm tracking-wide uppercase mb-4">Shop</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/shop?category=Earrings" className="text-sm text-stone hover:text-gold transition-colors">
                  Earrings
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Necklaces" className="text-sm text-stone hover:text-gold transition-colors">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Huggies" className="text-sm text-stone hover:text-gold transition-colors">
                  Huggies
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Sets" className="text-sm text-stone hover:text-gold transition-colors">
                  Sets
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-sm text-stone hover:text-gold transition-colors">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h4 className="font-medium text-sm tracking-wide uppercase mb-4">Help</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/shipping" className="text-sm text-stone hover:text-gold transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-sm text-stone hover:text-gold transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/care" className="text-sm text-stone hover:text-gold transition-colors">
                  Jewelry Care
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-stone hover:text-gold transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-stone hover:text-gold transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-medium text-sm tracking-wide uppercase mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-stone hover:text-gold transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-sm text-stone hover:text-gold transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/press" className="text-sm text-stone hover:text-gold transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link to="/wholesale" className="text-sm text-stone hover:text-gold transition-colors">
                  Wholesale
                </Link>
              </li>
              <li>
                <Link to="/journal" className="text-sm text-stone hover:text-gold transition-colors">
                  Journal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-charcoal-light pt-8 pb-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <div className="flex items-center gap-2 text-sm text-stone">
              <Truck size={18} />
              <span>Free Worldwide Shipping</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-stone">
              <RefreshCw size={18} />
              <span>30-Day Returns</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-stone">
              <CreditCard size={18} />
              <span>Secure Payment</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-charcoal-light pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-stone">
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-stone hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-stone hover:text-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;