import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-ivory/80">
      {/* Main footer */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.15em] font-semibold text-brand-ivory block mb-4">
              VELMORA
            </Link>
            <p className="text-sm text-brand-ivory/50 leading-relaxed max-w-[280px]">
              Crafted to be treasured. Premium demi-fine jewelry for the modern woman who values quality, elegance, and everyday luxury.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-brand-ivory/40 hover:text-brand-gold transition-colors">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-brand-ivory/40 hover:text-brand-gold transition-colors">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Twitter" className="text-brand-ivory/40 hover:text-brand-gold transition-colors">
                <Twitter size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-brand-ivory/40 font-sans font-semibold mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'Bestsellers', 'New Arrivals'].map((item) => (
                <li key={item}>
                  <Link
                    to="/shop"
                    className="text-sm text-brand-ivory/60 hover:text-brand-gold transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-brand-ivory/40 font-sans font-semibold mb-5">
              Help
            </h4>
            <ul className="space-y-3">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-brand-ivory/60 hover:text-brand-gold transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-brand-ivory/40 font-sans font-semibold mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {['Our Story', 'Journal', 'Sustainability', 'Press', 'Careers'].map((item) => (
                <li key={item}>
                  <Link
                    to="/about"
                    className="text-sm text-brand-ivory/60 hover:text-brand-gold transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-ivory/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-brand-ivory/30">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {/* Payment icons */}
            <div className="flex items-center gap-3 text-brand-ivory/20 text-[11px] font-sans tracking-wider">
              <span className="border border-brand-ivory/15 px-2 py-0.5">VISA</span>
              <span className="border border-brand-ivory/15 px-2 py-0.5">MC</span>
              <span className="border border-brand-ivory/15 px-2 py-0.5">AMEX</span>
              <span className="border border-brand-ivory/15 px-2 py-0.5">PAYPAL</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
