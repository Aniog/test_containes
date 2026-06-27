import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-velmora-obsidian text-velmora-cream">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] uppercase font-light text-velmora-cream">
              Velmora
            </Link>
            <p className="font-sans text-sm text-velmora-mist mt-4 leading-relaxed max-w-xs">
              Crafted to be treasured. Demi-fine gold jewelry for the modern woman.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-velmora-mist hover:text-velmora-gold transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" className="text-velmora-mist hover:text-velmora-gold transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Twitter" className="text-velmora-mist hover:text-velmora-gold transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest font-semibold text-velmora-gold mb-5">Shop</h4>
            <ul className="space-y-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'].map(item => (
                <li key={item}>
                  <Link to="/shop" className="font-sans text-sm text-velmora-mist hover:text-velmora-cream transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest font-semibold text-velmora-gold mb-5">Help</h4>
            <ul className="space-y-3">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us', 'Track Order'].map(item => (
                <li key={item}>
                  <a href="#" className="font-sans text-sm text-velmora-mist hover:text-velmora-cream transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest font-semibold text-velmora-gold mb-5">Company</h4>
            <ul className="space-y-3">
              {['Our Story', 'Sustainability', 'Press', 'Careers', 'Wholesale', 'Affiliates'].map(item => (
                <li key={item}>
                  <a href="#" className="font-sans text-sm text-velmora-mist hover:text-velmora-cream transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-velmora-stone/40">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-velmora-mist">
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment Icons */}
          <div className="flex items-center gap-3">
            {['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE'].map(brand => (
              <div
                key={brand}
                className="px-2 py-1 border border-velmora-stone/40 rounded-sm"
              >
                <span className="font-sans text-[9px] text-velmora-mist font-medium tracking-wider">{brand}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="font-sans text-xs text-velmora-mist hover:text-velmora-cream transition-colors">Privacy</a>
            <a href="#" className="font-sans text-xs text-velmora-mist hover:text-velmora-cream transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
