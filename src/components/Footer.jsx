import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          <div className="md:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl tracking-widest-xl font-medium text-cream"
            >
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-cream/60 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted to be treasured. Designed for the modern woman who values quiet luxury.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-medium mb-5 text-cream/80">
              Shop
            </h4>
            <ul className="flex flex-col gap-3">
              {['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="/shop"
                      className="text-sm text-cream/60 hover:text-cream transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-medium mb-5 text-cream/80">
              Help
            </h4>
            <ul className="flex flex-col gap-3">
              {['Shipping & Returns', 'Care Guide', 'Size Guide', 'FAQs', 'Contact Us'].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="/"
                      className="text-sm text-cream/60 hover:text-cream transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-medium mb-5 text-cream/80">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {['Our Story', 'Sustainability', 'Careers', 'Press'].map((item) => (
                <li key={item}>
                  <Link
                    to="/"
                    className="text-sm text-cream/60 hover:text-cream transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="text-[10px] uppercase tracking-widest text-cream/40">
              We accept
            </span>
            <div className="flex gap-2">
              {['Visa', 'MC', 'Amex', 'PayPal'].map((p) => (
                <div
                  key={p}
                  className="px-2 py-1 border border-cream/20 rounded text-[10px] text-cream/60"
                >
                  {p}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-5">
            <a href="#" aria-label="Instagram" className="text-cream/60 hover:text-cream transition-colors">
              <Instagram className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Facebook" className="text-cream/60 hover:text-cream transition-colors">
              <Facebook className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Twitter" className="text-cream/60 hover:text-cream transition-colors">
              <Twitter className="w-4 h-4" strokeWidth={1.5} />
            </a>
          </div>

          <p className="text-[11px] text-cream/40">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
