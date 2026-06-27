import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

const footerLinks = {
  shop: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'],
  help: ['Shipping & Returns', 'Care Guide', 'FAQ', 'Contact Us', 'Track Order'],
  company: ['Our Story', 'Sustainability', 'Press', 'Careers', 'Wholesale'],
};

const Footer = () => {
  return (
    <footer className="bg-velmora-charcoal text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-3xl tracking-[0.15em] uppercase">
              Velmora
            </Link>
            <p className="mt-4 text-white/60 text-sm max-w-sm leading-relaxed">
              Demi-fine jewelry designed for modern heirloom moments. Crafted to be treasured, worn, and loved.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 border border-white/20 hover:border-velmora-gold hover:text-velmora-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 border border-white/20 hover:border-velmora-gold hover:text-velmora-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-5 text-white/80">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-white/50 hover:text-velmora-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-5 text-white/80">Help</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((item) => (
                <li key={item}>
                  <Link to="/" className="text-sm text-white/50 hover:text-velmora-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-5 text-white/80">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((item) => (
                <li key={item}>
                  <Link to="/" className="text-sm text-white/50 hover:text-velmora-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-white/40">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
