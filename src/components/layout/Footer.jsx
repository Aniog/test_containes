import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border pt-20 pb-12 px-6 md:px-12 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="flex flex-col gap-6">
          <Link to="/" className="text-2xl font-serif tracking-[0.3em] uppercase">
            Velmora
          </Link>
          <p className="text-sm text-muted max-w-xs leading-relaxed">
            Crafting timeless, demi-fine gold jewelry for the modern woman. Designed to be treasured every day.
          </p>
          <div className="flex gap-4 mt-2">
            <Instagram className="w-5 h-5 text-muted hover:text-primary transition-colors cursor-pointer" />
            <Facebook className="w-5 h-5 text-muted hover:text-primary transition-colors cursor-pointer" />
            <Twitter className="w-5 h-5 text-muted hover:text-primary transition-colors cursor-pointer" />
          </div>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-widest font-bold mb-6">Shop</h4>
          <ul className="flex flex-col gap-3">
            {['Earrings', 'Necklaces', 'Huggies', 'Collections', 'Gift Sets'].map((item) => (
              <li key={item}>
                <Link to="/shop" className="text-xs text-muted hover:text-primary transition-colors uppercase tracking-widest">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-widest font-bold mb-6">Help</h4>
          <ul className="flex flex-col gap-3">
            {['Shipping', 'Returns', 'Sizing', 'Care Guide', 'Contact Us'].map((item) => (
              <li key={item}>
                <Link to="/" className="text-xs text-muted hover:text-primary transition-colors uppercase tracking-widest">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-widest font-bold mb-6">Company</h4>
          <ul className="flex flex-col gap-3">
            {['Our Story', 'Sustainability', 'Journal', 'Press', 'Careers'].map((item) => (
              <li key={item}>
                <Link to="/" className="text-xs text-muted hover:text-primary transition-colors uppercase tracking-widest">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-border mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] uppercase tracking-widest text-muted">
          © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
        </p>
        <div className="flex gap-4 grayscale opacity-30 text-[10px] uppercase tracking-widest text-muted font-bold">
          <span>Visa</span>
          <span>Mastercard</span>
          <span>Paypal</span>
          <span>Apple Pay</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
