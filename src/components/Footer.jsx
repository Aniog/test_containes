import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest text-warm-white uppercase">
              Velmora
            </Link>
            <p className="mt-4 text-sm text-taupe leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Designed in small batches for the modern woman.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a href="#" className="text-taupe hover:text-warm-white transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-taupe hover:text-warm-white transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-taupe hover:text-warm-white transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-warm-white mb-4">
              Shop
            </h4>
            <ul className="space-y-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map((item) => (
                <li key={item}>
                  <Link
                    to="/shop"
                    className="text-sm text-taupe hover:text-warm-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-warm-white mb-4">
              Help
            </h4>
            <ul className="space-y-3">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-taupe hover:text-warm-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-warm-white mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {['Our Story', 'Sustainability', 'Careers', 'Press', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-taupe hover:text-warm-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-divider flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-taupe">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center space-x-3">
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map((method) => (
              <span
                key={method}
                className="text-[10px] font-sans font-medium uppercase tracking-wide text-taupe border border-divider px-2 py-1 rounded"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
