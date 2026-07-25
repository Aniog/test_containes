import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const FOOTER_LINKS = {
  shop: [
    { to: '/shop', label: 'All Jewelry' },
    { to: '/collections/earrings', label: 'Earrings' },
    { to: '/collections/necklaces', label: 'Necklaces' },
    { to: '/collections/huggies', label: 'Huggies' },
  ],
  help: [
    { to: '/help/shipping', label: 'Shipping & Returns' },
    { to: '/help/care', label: 'Jewelry Care' },
    { to: '/help/faq', label: 'FAQ' },
    { to: '/help/contact', label: 'Contact' },
  ],
  company: [
    { to: '/about', label: 'Our Story' },
    { to: '/journal', label: 'Journal' },
    { to: '/sustainability', label: 'Sustainability' },
    { to: '/stockists', label: 'Stockists' },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container-editorial py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Demi-fine jewelry designed to be worn, loved, and passed down.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-white/70 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-white/70 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-white/70 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/50 mb-4">Shop</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.shop.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-white/80 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/50 mb-4">Help</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.help.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-white/80 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/50 mb-4">Company</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-white/80 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/50">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
