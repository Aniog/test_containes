import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-deep-950 text-cream-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="font-serif text-xl tracking-widest text-cream-50"
              style={{ letterSpacing: '0.2em' }}
            >
              VELMORA
            </Link>
            <p className="text-cream-500 text-sm mt-4 leading-relaxed">
              Demi-fine jewelry crafted for the modern woman. Premium materials, timeless design.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-cream-400 hover:text-gold-400 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream-400 hover:text-gold-400 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream-400 hover:text-gold-400 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs tracking-widest text-cream-100 font-medium mb-5" style={{ letterSpacing: '0.12em' }}>
              SHOP
            </h4>
            <ul className="space-y-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map((label) => (
                <li key={label}>
                  <Link
                    to="/shop"
                    className="text-cream-400 text-sm hover:text-gold-400 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs tracking-widest text-cream-100 font-medium mb-5" style={{ letterSpacing: '0.12em' }}>
              HELP
            </h4>
            <ul className="space-y-3">
              {['Shipping & Returns', 'Size Guide', 'Care Guide', 'FAQs', 'Contact'].map((label) => (
                <li key={label}>
                  <a href="#" className="text-cream-400 text-sm hover:text-gold-400 transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs tracking-widest text-cream-100 font-medium mb-5" style={{ letterSpacing: '0.12em' }}>
              COMPANY
            </h4>
            <ul className="space-y-3">
              {['Our Story', 'Journal', 'Sustainability', 'Stockists', 'Affiliates'].map((label) => (
                <li key={label}>
                  <a href="#" className="text-cream-400 text-sm hover:text-gold-400 transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-deep-800 my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-cream-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
