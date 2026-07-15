import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-stone-500 leading-relaxed">
              Demi-fine jewelry designed for everyday luxury. Gold-plated, hypoallergenic, and made to last.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-stone-400 hover:text-velmora-dark transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-velmora-dark transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-velmora-dark transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-stone-500 mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-stone-600 hover:text-velmora-dark transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-stone-600 hover:text-velmora-dark transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-stone-600 hover:text-velmora-dark transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-stone-600 hover:text-velmora-dark transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-stone-600 hover:text-velmora-dark transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-stone-500 mb-4">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-stone-600 hover:text-velmora-dark transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-stone-600 hover:text-velmora-dark transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-stone-600 hover:text-velmora-dark transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-stone-600 hover:text-velmora-dark transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm text-stone-600 hover:text-velmora-dark transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-stone-500 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-stone-600 hover:text-velmora-dark transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-stone-600 hover:text-velmora-dark transition-colors">Journal</a></li>
              <li><a href="#" className="text-sm text-stone-600 hover:text-velmora-dark transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-stone-600 hover:text-velmora-dark transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-stone-600 hover:text-velmora-dark transition-colors">Press</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-400">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-stone-400">Visa</span>
            <span className="text-xs text-stone-400">Mastercard</span>
            <span className="text-xs text-stone-400">Amex</span>
            <span className="text-xs text-stone-400">PayPal</span>
            <span className="text-xs text-stone-400">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
