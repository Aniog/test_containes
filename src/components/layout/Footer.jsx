import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-velmora-surface text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="font-serif text-xl tracking-[0.2em] font-bold text-white"
            >
              VELMORA
            </Link>
            <p className="font-sans text-sm text-white/50 mt-4 leading-relaxed max-w-[220px]">
              Demi-fine jewelry crafted to be treasured. Designed for the modern woman who values
              quiet luxury.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs tracking-wider uppercase text-white/60 mb-4">
              Shop
            </h4>
            <div className="flex flex-col gap-2.5">
              {[
                { to: '/shop', label: 'All Jewelry' },
                { to: '/shop/earrings', label: 'Earrings' },
                { to: '/shop/necklaces', label: 'Necklaces' },
                { to: '/shop/huggies', label: 'Huggies' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="font-sans text-sm text-white/50 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs tracking-wider uppercase text-white/60 mb-4">
              Help
            </h4>
            <div className="flex flex-col gap-2.5">
              {['Shipping & Returns', 'Care Guide', 'Size Guide', 'Contact Us'].map((label) => (
                <a
                  key={label}
                  href="#"
                  className="font-sans text-sm text-white/50 hover:text-white transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs tracking-wider uppercase text-white/60 mb-4">
              Company
            </h4>
            <div className="flex flex-col gap-2.5 mb-8">
              {['Our Story', 'Sustainability', 'Journal', 'Careers'].map((label) => (
                <a
                  key={label}
                  href="#"
                  className="font-sans text-sm text-white/50 hover:text-white transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-white/40 hover:text-white transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="hairline-dark my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/40">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {['visa', 'mastercard', 'amex', 'paypal'].map((method) => (
              <span
                key={method}
                className="font-sans text-[10px] tracking-wider uppercase text-white/30 px-2 py-1 border border-white/15"
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
