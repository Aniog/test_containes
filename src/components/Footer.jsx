import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const shopLinks = ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'];
const helpLinks = ['Shipping & Returns', 'Size Guide', 'Jewelry Care', 'Contact Us', 'FAQ'];
const companyLinks = ['Our Story', 'Sustainability', 'Journal', 'Careers', 'Stockists'];

export default function Footer() {
  return (
    <footer className="bg-velvet-950 text-velvet-200">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Logo */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-[0.25em] font-semibold text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-velvet-300 max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Premium materials, accessible prices, timeless design.
            </p>
            <div className="flex gap-4 mt-6">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-velvet-700 flex items-center justify-center text-velvet-400 hover:text-white hover:border-velvet-400 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-semibold text-velvet-400 mb-5">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link}>
                  <Link to="/shop" className="text-sm text-velvet-300 hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-semibold text-velvet-400 mb-5">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link}>
                  <Link to="/shop" className="text-sm text-velvet-300 hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-semibold text-velvet-400 mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <Link to="/shop" className="text-sm text-velvet-300 hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-velvet-800 flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velvet-500">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-velvet-500">
            <span>Visa</span>
            <span className="text-velvet-700">·</span>
            <span>Mastercard</span>
            <span className="text-velvet-700">·</span>
            <span>Amex</span>
            <span className="text-velvet-700">·</span>
            <span>PayPal</span>
            <span className="text-velvet-700">·</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
