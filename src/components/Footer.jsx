import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="section-padding py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest uppercase">
              Velmora
            </Link>
            <p className="font-sans text-sm text-stone-light mt-4 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted to be treasured. Designed in small batches for the modern woman.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-stone-light mb-5">Shop</h4>
            <ul className="flex flex-col gap-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map((item) => (
                <li key={item}>
                  <Link
                    to="/shop"
                    className="font-sans text-sm text-stone-light hover:text-cream transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-stone-light mb-5">Help</h4>
            <ul className="flex flex-col gap-3">
              {['Shipping & Returns', 'Care Guide', 'FAQ', 'Contact Us', 'Size Guide'].map((item) => (
                <li key={item}>
                  <span className="font-sans text-sm text-stone-light hover:text-cream transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-stone-light mb-5">Company</h4>
            <ul className="flex flex-col gap-3">
              {['Our Story', 'Journal', 'Sustainability', 'Careers'].map((item) => (
                <li key={item}>
                  <span className="font-sans text-sm text-stone-light hover:text-cream transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-stone-light">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="text-stone-light hover:text-cream transition-colors">
              <Instagram className="w-5 h-5" strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Facebook" className="text-stone-light hover:text-cream transition-colors">
              <Facebook className="w-5 h-5" strokeWidth={1.5} />
            </a>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-5 bg-white/10 rounded-sm" title="Visa" />
            <div className="w-8 h-5 bg-white/10 rounded-sm" title="Mastercard" />
            <div className="w-8 h-5 bg-white/10 rounded-sm" title="Amex" />
            <div className="w-8 h-5 bg-white/10 rounded-sm" title="PayPal" />
          </div>
        </div>
      </div>
    </footer>
  );
}
