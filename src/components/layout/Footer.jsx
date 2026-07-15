import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-espresso text-white/80">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-ultra-wide uppercase text-white">
              Velmora
            </Link>
            <p className="font-sans text-sm text-white/40 mt-4 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted to be treasured. Everyday elegance, accessible luxury.
            </p>
            <div className="flex items-center gap-5 mt-6">
              <a href="#" className="text-white/30 hover:text-brand-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-[18px] h-[18px]" />
              </a>
              <a href="#" className="text-white/30 hover:text-brand-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-[18px] h-[18px]" />
              </a>
              <a href="#" className="text-white/30 hover:text-brand-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-[11px] tracking-super-wide uppercase text-white/60 mb-5">Shop</h4>
            <ul className="space-y-3">
              {['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="font-sans text-sm text-white/35 hover:text-brand-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-[11px] tracking-super-wide uppercase text-white/60 mb-5">Help</h4>
            <ul className="space-y-3">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="font-sans text-sm text-white/35 hover:text-brand-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-[11px] tracking-super-wide uppercase text-white/60 mb-5">Company</h4>
            <ul className="space-y-3">
              {['Our Story', 'Journal', 'Sustainability', 'Press', 'Careers'].map((item) => (
                <li key={item}>
                  <a href="#" className="font-sans text-sm text-white/35 hover:text-brand-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/25">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map((name) => (
              <span
                key={name}
                className="font-sans text-[10px] tracking-wider uppercase text-white/20 border border-white/10 px-2.5 py-1"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
