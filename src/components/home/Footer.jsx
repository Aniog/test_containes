import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200/70 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-[0.25em] uppercase">
              Velmora
            </Link>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Quiet luxury demi-fine jewelry, designed to be worn and treasured.
            </p>
            <div className="mt-5 flex items-center gap-4 text-gray-700">
              <a href="#" aria-label="Instagram" className="hover:text-gold-700 transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="Facebook" className="hover:text-gold-700 transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" aria-label="Twitter" className="hover:text-gold-700 transition-colors"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gray-900">Shop</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li><Link to="/shop?category=earrings" className="hover:text-gold-700">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-gold-700">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-gold-700">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-gold-700">All</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gray-900">Help</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gold-700">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-gold-700">Materials & Care</a></li>
              <li><a href="#" className="hover:text-gold-700">FAQ</a></li>
              <li><a href="#" className="hover:text-gold-700">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gray-900">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li><Link to="/about" className="hover:text-gold-700">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-gold-700">Journal</Link></li>
              <li><a href="#" className="hover:text-gold-700">Sustainability</a></li>
              <li><a href="#" className="hover:text-gold-700">Press</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-gray-200/70 pt-8">
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1">Visa</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1">Mastercard</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1">Amex</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
