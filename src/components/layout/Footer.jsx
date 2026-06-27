import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#FBF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              to="/"
              className="font-['Cormorant_Garamond'] text-2xl font-semibold tracking-[0.15em] text-[#FBF9F6]"
            >
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-[#A8A29E] leading-relaxed">
              Quiet luxury for the modern woman. Demi-fine jewelry crafted to be treasured.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-[#A8A29E] hover:text-[#B8860B] transition-colors duration-300" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#A8A29E] hover:text-[#B8860B] transition-colors duration-300" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#A8A29E] hover:text-[#B8860B] transition-colors duration-300" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B8860B] mb-4">
              Shop
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/shop?category=earrings" className="text-sm text-[#A8A29E] hover:text-[#FBF9F6] transition-colors duration-300">
                  Earrings
                </Link>
              </li>
              <li>
                <Link to="/shop?category=necklaces" className="text-sm text-[#A8A29E] hover:text-[#FBF9F6] transition-colors duration-300">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link to="/shop?category=huggies" className="text-sm text-[#A8A29E] hover:text-[#FBF9F6] transition-colors duration-300">
                  Huggies
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-sm text-[#A8A29E] hover:text-[#FBF9F6] transition-colors duration-300">
                  All Jewelry
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-sm text-[#A8A29E] hover:text-[#FBF9F6] transition-colors duration-300">
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B8860B] mb-4">
              Help
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-[#A8A29E] hover:text-[#FBF9F6] transition-colors duration-300">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#A8A29E] hover:text-[#FBF9F6] transition-colors duration-300">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#A8A29E] hover:text-[#FBF9F6] transition-colors duration-300">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#A8A29E] hover:text-[#FBF9F6] transition-colors duration-300">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#A8A29E] hover:text-[#FBF9F6] transition-colors duration-300">
                  Care Instructions
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B8860B] mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-[#A8A29E] hover:text-[#FBF9F6] transition-colors duration-300">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/journal" className="text-sm text-[#A8A29E] hover:text-[#FBF9F6] transition-colors duration-300">
                  Journal
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-[#A8A29E] hover:text-[#FBF9F6] transition-colors duration-300">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#A8A29E] hover:text-[#FBF9F6] transition-colors duration-300">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#A8A29E] hover:text-[#FBF9F6] transition-colors duration-300">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[#2A2A2A] flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-[#6B6B6B]">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-xs text-[#6B6B6B]">We accept:</span>
            <div className="flex space-x-3 text-[#A8A29E]">
              <span className="text-xs font-medium">VISA</span>
              <span className="text-xs font-medium">MC</span>
              <span className="text-xs font-medium">AMEX</span>
              <span className="text-xs font-medium">PayPal</span>
              <span className="text-xs font-medium">Apple Pay</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
