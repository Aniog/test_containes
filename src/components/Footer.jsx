import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2D2926] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo Column */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-serif text-2xl tracking-wider mb-4">VELMORA</h3>
            <p className="text-sm text-[#8B7E74] mb-6">
              Demi-fine jewelry crafted for the modern woman. 
              Timeless designs at accessible prices.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8B7E74] hover:text-[#C9A962] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8B7E74] hover:text-[#C9A962] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} strokeWidth={1.5} />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8B7E74] hover:text-[#C9A962] transition-colors"
                aria-label="Pinterest"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4 text-[#C9A962]">Shop</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/shop" className="text-sm text-[#8B7E74] hover:text-white transition-colors">
                  All Jewelry
                </Link>
              </li>
              <li>
                <Link to="/shop?category=earrings" className="text-sm text-[#8B7E74] hover:text-white transition-colors">
                  Earrings
                </Link>
              </li>
              <li>
                <Link to="/shop?category=necklaces" className="text-sm text-[#8B7E74] hover:text-white transition-colors">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link to="/shop?category=huggies" className="text-sm text-[#8B7E74] hover:text-white transition-colors">
                  Huggies
                </Link>
              </li>
              <li>
                <Link to="/shop?category=sets" className="text-sm text-[#8B7E74] hover:text-white transition-colors">
                  Gift Sets
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4 text-[#C9A962]">Help</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-sm text-[#8B7E74] hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-sm text-[#8B7E74] hover:text-white transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-[#8B7E74] hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/care-guide" className="text-sm text-[#8B7E74] hover:text-white transition-colors">
                  Jewelry Care
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="text-sm text-[#8B7E74] hover:text-white transition-colors">
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4 text-[#C9A962]">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-[#8B7E74] hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/journal" className="text-sm text-[#8B7E74] hover:text-white transition-colors">
                  Journal
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-sm text-[#8B7E74] hover:text-white transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-[#8B7E74] hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#3D3936]"></div>

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#8B7E74]">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment Icons */}
          <div className="flex items-center gap-4">
            <span className="text-xs text-[#8B7E74]">We accept:</span>
            <div className="flex gap-2">
              <div className="w-10 h-6 bg-white rounded flex items-center justify-center">
                <span className="text-[#2D2926] text-xs font-bold">VISA</span>
              </div>
              <div className="w-10 h-6 bg-white rounded flex items-center justify-center">
                <span className="text-[#2D2926] text-xs font-bold">MC</span>
              </div>
              <div className="w-10 h-6 bg-white rounded flex items-center justify-center">
                <span className="text-[#2D2926] text-xs font-bold">AMEX</span>
              </div>
              <div className="w-10 h-6 bg-white rounded flex items-center justify-center">
                <span className="text-[#2D2926] text-xs font-bold">PP</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 text-xs text-[#8B7E74]">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
