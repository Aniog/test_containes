import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-velmora-espresso text-velmora-sand">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest text-velmora-ivory block mb-4">
              VELMORA
            </Link>
            <p className="text-sm text-velmora-stone leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Designed for the modern woman who values quiet luxury.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-medium text-velmora-ivory mb-5">Shop</h4>
            <ul className="flex flex-col gap-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map(item => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-velmora-stone hover:text-velmora-ivory transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-medium text-velmora-ivory mb-5">Help</h4>
            <ul className="flex flex-col gap-3">
              {['Shipping & Returns', 'Care Guide', 'Size Guide', 'FAQs', 'Contact Us'].map(item => (
                <li key={item}>
                  <Link to="#" className="text-sm text-velmora-stone hover:text-velmora-ivory transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-medium text-velmora-ivory mb-5">Company</h4>
            <ul className="flex flex-col gap-3">
              {['Our Story', 'Sustainability', 'Journal', 'Careers', 'Press'].map(item => (
                <li key={item}>
                  <Link to="#" className="text-sm text-velmora-stone hover:text-velmora-ivory transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-velmora-mocha/50 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="text-xs text-velmora-stone">© 2025 Velmora Fine Jewelry</span>
            <span className="text-xs text-velmora-stone hidden md:inline">·</span>
            <Link to="#" className="text-xs text-velmora-stone hover:text-velmora-ivory transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-xs text-velmora-stone hover:text-velmora-ivory transition-colors">Terms of Service</Link>
          </div>

          <div className="flex items-center gap-5">
            <a href="#" aria-label="Instagram" className="text-velmora-stone hover:text-velmora-ivory transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Facebook" className="text-velmora-stone hover:text-velmora-ivory transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter" className="text-velmora-stone hover:text-velmora-ivory transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          {/* Payment icons placeholder */}
          <div className="flex items-center gap-2">
            {['Visa', 'MC', 'Amex', 'PayPal'].map(p => (
              <div key={p} className="w-9 h-5 bg-velmora-mocha/40 rounded-[2px] flex items-center justify-center">
                <span className="text-[8px] text-velmora-stone font-medium">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
