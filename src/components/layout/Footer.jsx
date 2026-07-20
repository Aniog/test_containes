import { Link } from 'react-router-dom';
import { Instagram, Facebook, Share2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8 pb-12 border-b border-white/10">
          {/* Logo + tagline */}
          <div className="col-span-2 md:col-span-2">
            <Link to="/" className="font-serif text-2xl font-light tracking-[0.2em] uppercase text-ivory">
              Velmora
            </Link>
            <p className="font-sans text-sm text-white/50 mt-3 leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Wear it every day. Treasure it forever.
            </p>
            <div className="flex gap-4 mt-6">
              {[
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Share2, label: 'Pinterest' },
              ].map(({ Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="text-white/40 hover:text-gold transition-colors duration-300"
                >
                  <Icon size={18} strokeWidth={1.5} />
                </button>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.15em] text-white/40 mb-5">Shop</h4>
            <ul className="space-y-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="font-sans text-sm text-white/70 hover:text-ivory transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.15em] text-white/40 mb-5">Help</h4>
            <ul className="space-y-3">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="font-sans text-sm text-white/70 hover:text-ivory transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.15em] text-white/40 mb-5">Company</h4>
            <ul className="space-y-3">
              {['Our Story', 'Journal', 'Sustainability', 'Press', 'Careers'].map((item) => (
                <li key={item}>
                  <a href="#" className="font-sans text-sm text-white/70 hover:text-ivory transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="font-sans text-xs text-white/30">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map((p) => (
              <span
                key={p}
                className="font-sans text-[9px] uppercase tracking-wide text-white/30 border border-white/10 px-2 py-1 rounded-sm"
              >
                {p}
              </span>
            ))}
          </div>

          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <a key={item} href="#" className="font-sans text-xs text-white/30 hover:text-white/60 transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
