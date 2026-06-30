import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-ultra uppercase font-medium">
              Velmora
            </Link>
            <p className="mt-4 text-sm text-stone-light leading-relaxed">
              Demi-fine jewelry crafted for the modern woman. Designed in New York, worn worldwide.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="hover:text-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-gold transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-gold transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-medium mb-5">Shop</h4>
            <ul className="space-y-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map((item) => (
                <li key={item}>
                  <Link
                    to="/collection"
                    className="text-sm text-stone-light hover:text-gold transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-medium mb-5">Help</h4>
            <ul className="space-y-3">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-stone-light hover:text-gold transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-medium mb-5">Company</h4>
            <ul className="space-y-3">
              {['Our Story', 'Sustainability', 'Press', 'Careers', 'Affiliates'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-stone-light hover:text-gold transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-divider-dark flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-light">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map((method) => (
              <span
                key={method}
                className="text-[10px] tracking-wider uppercase px-2 py-1 border border-divider-dark rounded text-stone-light"
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
