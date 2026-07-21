import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-velmora-charcoal text-velmora-cream">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-16 md:py-20">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl font-medium tracking-ultra-wide text-velmora-cream"
            >
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-velmora-stone-light leading-relaxed max-w-xs">
              Demi-fine jewelry crafted to be treasured. Designed for the modern woman who appreciates quiet luxury.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" className="text-velmora-stone-light hover:text-velmora-gold transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-velmora-stone-light hover:text-velmora-gold transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-velmora-stone-light hover:text-velmora-gold transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-velmora-cream mb-5">
              Shop
            </h4>
            <ul className="flex flex-col gap-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'].map((item) => (
                <li key={item}>
                  <Link
                    to="/shop"
                    className="text-sm text-velmora-stone-light hover:text-velmora-gold transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-velmora-cream mb-5">
              Help
            </h4>
            <ul className="flex flex-col gap-3">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-velmora-stone-light hover:text-velmora-gold transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-velmora-cream mb-5">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {['Our Story', 'Sustainability', 'Journal', 'Careers', 'Press'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-velmora-stone-light hover:text-velmora-gold transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-velmora-charcoal-soft py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velmora-stone-light">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map((method) => (
              <span
                key={method}
                className="px-2 py-1 bg-velmora-charcoal-soft rounded text-[10px] text-velmora-stone-light uppercase tracking-wide"
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
