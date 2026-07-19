import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, CreditCard } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[var(--velmora-dark)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Newsletter */}
        <div className="text-center mb-12 pb-12 border-b border-white/10">
          <h3 className="velmora-serif text-2xl sm:text-3xl mb-3">Join the Velmora World</h3>
          <p className="text-white/60 text-sm mb-6">Subscribe for 10% off your first order and exclusive access to new collections.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[var(--velmora-accent)]"
            />
            <button className="velmora-btn-accent whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="velmora-serif text-2xl tracking-widest">
              VELMORA
            </Link>
            <p className="text-white/50 text-sm mt-4 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Everyday luxury, accessible to all.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4 text-white/80">Shop</h4>
            <ul className="space-y-3">
              {['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-white/50 hover:text-[var(--velmora-accent)] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4 text-white/80">Help</h4>
            <ul className="space-y-3">
              {['Shipping Info', 'Returns & Exchanges', 'Size Guide', 'Care Instructions', 'FAQ'].map((item) => (
                <li key={item}>
                  <Link to="/help" className="text-sm text-white/50 hover:text-[var(--velmora-accent)] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4 text-white/80">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'Our Story', path: '/about' },
                { label: 'Sustainability', path: '/about' },
                { label: 'Journal', path: '/journal' },
                { label: 'Careers', path: '/about' },
                { label: 'Contact', path: '/help' },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="text-sm text-white/50 hover:text-[var(--velmora-accent)] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Instagram className="w-5 h-5 text-white/50 hover:text-[var(--velmora-accent)] cursor-pointer transition-colors" />
            <Facebook className="w-5 h-5 text-white/50 hover:text-[var(--velmora-accent)] cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 text-white/50 hover:text-[var(--velmora-accent)] cursor-pointer transition-colors" />
          </div>
          <div className="flex items-center gap-3 text-white/40">
            <CreditCard className="w-8 h-4" />
            <span className="text-xs">Visa</span>
            <span className="text-xs">Mastercard</span>
            <span className="text-xs">Amex</span>
            <span className="text-xs">PayPal</span>
          </div>
          <p className="text-white/40 text-xs">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
