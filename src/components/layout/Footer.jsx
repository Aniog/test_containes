import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-velmora-charcoal text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.25em] text-white font-semibold">
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60 max-w-xs">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-white/50 hover:text-velmora-gold transition-colors">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-white/50 hover:text-velmora-gold transition-colors">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Twitter" className="text-white/50 hover:text-velmora-gold transition-colors">
                <Twitter size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase font-semibold text-white mb-5">Shop</h4>
            <ul className="space-y-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map(item => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-white/60 hover:text-velmora-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase font-semibold text-white mb-5">Help</h4>
            <ul className="space-y-3">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/60 hover:text-velmora-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase font-semibold text-white mb-5">Company</h4>
            <ul className="space-y-3">
              {['Our Story', 'Sustainability', 'Journal', 'Press', 'Careers'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/60 hover:text-velmora-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {['Visa', 'Mastercard', 'Amex', 'PayPal'].map(icon => (
              <span
                key={icon}
                className="text-[10px] tracking-wider uppercase font-medium text-white/40 bg-white/10 px-2.5 py-1 rounded"
              >
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
