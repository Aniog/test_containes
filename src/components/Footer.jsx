import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

const footerLinks = {
  Shop: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'],
  Help: ['Shipping & Returns', 'Care Guide', 'Size Guide', 'FAQ', 'Contact Us'],
  Company: ['Our Story', 'Sustainability', 'Press', 'Careers', 'Affiliates'],
};

const Footer = () => (
  <footer className="bg-stone-900 text-stone-300">
    <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
        <div className="md:col-span-1">
          <Link to="/" className="font-serif text-2xl uppercase tracking-widest text-white">
            Velmora
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-stone-400">
            Demi-fine jewelry crafted for everyday elegance and moments worth remembering.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" className="hover:text-gold-400 transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-gold-400 transition-colors" aria-label="Facebook">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-sans text-xs uppercase tracking-widest text-white mb-5">{title}</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link}>
                  <Link
                    to="/shop"
                    className="text-sm text-stone-400 hover:text-white transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-14 pt-8 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-stone-500">
          © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          {['Visa', 'Mastercard', 'Amex', 'PayPal'].map((icon) => (
            <span
              key={icon}
              className="px-2 py-1 border border-stone-700 rounded text-[10px] text-stone-400 uppercase tracking-wide"
            >
              {icon}
            </span>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
