import React from 'react';
import { Link } from 'react-router-dom';

const paymentIcons = [
  { name: 'Visa', abbr: 'VISA' },
  { name: 'Mastercard', abbr: 'MC' },
  { name: 'Amex', abbr: 'AMEX' },
  { name: 'PayPal', abbr: 'PP' },
  { name: 'Apple Pay', abbr: 'AP' },
];

const socialLinks = [
  { name: 'Instagram', href: '#' },
  { name: 'Pinterest', href: '#' },
  { name: 'TikTok', href: '#' },
  { name: 'Facebook', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-warmGray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-3xl font-medium tracking-mega-wide text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-warmGray-400 max-w-xs leading-relaxed">
              Fine jewelry crafted for the modern woman. Demi-fine pieces that
              feel luxurious without the luxury price tag.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-warmGray-400 hover:text-gold-500 transition-colors text-xs tracking-wider uppercase"
                  aria-label={link.name}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs font-medium tracking-ultra-wide uppercase text-white mb-6">
              Shop
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/shop" className="text-sm text-warmGray-400 hover:text-gold-500 transition-colors">
                  All Jewelry
                </Link>
              </li>
              <li>
                <Link to="/shop?category=earrings" className="text-sm text-warmGray-400 hover:text-gold-500 transition-colors">
                  Earrings
                </Link>
              </li>
              <li>
                <Link to="/shop?category=necklaces" className="text-sm text-warmGray-400 hover:text-gold-500 transition-colors">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link to="/shop?category=huggies" className="text-sm text-warmGray-400 hover:text-gold-500 transition-colors">
                  Huggies
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-sm text-warmGray-400 hover:text-gold-500 transition-colors">
                  Gift Sets
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs font-medium tracking-ultra-wide uppercase text-white mb-6">
              Help
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-warmGray-400 hover:text-gold-500 transition-colors">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-warmGray-400 hover:text-gold-500 transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-warmGray-400 hover:text-gold-500 transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-warmGray-400 hover:text-gold-500 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-warmGray-400 hover:text-gold-500 transition-colors">
                  Track Order
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs font-medium tracking-ultra-wide uppercase text-white mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-warmGray-400 hover:text-gold-500 transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-warmGray-400 hover:text-gold-500 transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-warmGray-400 hover:text-gold-500 transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-warmGray-400 hover:text-gold-500 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-warmGray-400 hover:text-gold-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-warmGray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-xs text-warmGray-500">
              &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              {paymentIcons.map((icon) => (
                <div
                  key={icon.name}
                  className="bg-warmGray-800 text-warmGray-400 text-[10px] font-bold px-3 py-1.5 rounded"
                >
                  {icon.abbr}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
