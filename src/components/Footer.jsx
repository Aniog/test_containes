import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-velmora-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div>
            <Link to="/" className="font-serif text-2xl tracking-[0.25em] text-white">
              VELMORA
            </Link>
            <p className="font-sans text-xs text-velmora-warmGrayLight mt-4 leading-relaxed">
              Demi-fine jewelry designed for the modern woman. Crafted with care, made to be treasured.
            </p>
          </div>
          <div>
            <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase text-velmora-gold mb-6">Shop</h4>
            <ul className="space-y-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map(item => (
                <li key={item}>
                  <Link to="/shop" className="font-sans text-xs text-velmora-warmGrayLight hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase text-velmora-gold mb-6">Help</h4>
            <ul className="space-y-3">
              {['Shipping & Returns', 'Care Guide', 'Size Guide', 'Contact Us', 'FAQ'].map(item => (
                <li key={item}>
                  <Link to="/" className="font-sans text-xs text-velmora-warmGrayLight hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase text-velmora-gold mb-6">Company</h4>
            <ul className="space-y-3">
              {['Our Story', 'Sustainability', 'Press', 'Careers', 'Terms'].map(item => (
                <li key={item}>
                  <Link to="/" className="font-sans text-xs text-velmora-warmGrayLight hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-sans text-[10px] text-velmora-warmGrayLight tracking-wide">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-velmora-warmGrayLight hover:text-white transition-colors"><Instagram size={18} /></a>
            <a href="#" className="text-velmora-warmGrayLight hover:text-white transition-colors"><Facebook size={18} /></a>
            <a href="#" className="text-velmora-warmGrayLight hover:text-white transition-colors"><Twitter size={18} /></a>
          </div>
          <div className="flex items-center gap-3">
            {['Visa', 'Mastercard', 'Amex', 'PayPal'].map(payment => (
              <span key={payment} className="font-sans text-[9px] text-velmora-warmGrayLight border border-white/10 px-2 py-1 rounded">
                {payment}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
