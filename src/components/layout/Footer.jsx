import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-base border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl uppercase tracking-widest text-brand-cream">
              Velmora
            </Link>
            <p className="mt-4 text-sm text-brand-muted leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Designed for the modern woman who values timeless elegance.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-brand-muted hover:text-brand-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="text-brand-muted hover:text-brand-gold transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="text-brand-muted hover:text-brand-gold transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-brand-cream font-medium mb-6">
              Shop
            </h4>
            <ul className="space-y-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-brand-muted hover:text-brand-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-brand-cream font-medium mb-6">
              Help
            </h4>
            <ul className="space-y-3">
              {['Shipping & Returns', 'FAQ', 'Care Guide', 'Size Guide', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-brand-muted hover:text-brand-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-brand-cream font-medium mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {['Our Story', 'Sustainability', 'Press', 'Careers', 'Terms & Privacy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-brand-muted hover:text-brand-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-muted">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-wider text-brand-muted border border-white/10 px-2 py-1 rounded">Visa</span>
            <span className="text-[10px] uppercase tracking-wider text-brand-muted border border-white/10 px-2 py-1 rounded">Mastercard</span>
            <span className="text-[10px] uppercase tracking-wider text-brand-muted border border-white/10 px-2 py-1 rounded">Amex</span>
            <span className="text-[10px] uppercase tracking-wider text-brand-muted border border-white/10 px-2 py-1 rounded">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}