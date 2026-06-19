import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const shopLinks = [
    { to: '/shop', label: 'All Jewelry' },
    { to: '/shop?category=earrings', label: 'Earrings' },
    { to: '/shop?category=necklaces', label: 'Necklaces' },
    { to: '/shop?category=huggies', label: 'Huggies' },
    { to: '/shop?sort=bestseller', label: 'Bestsellers' },
  ];

  const helpLinks = [
    { to: '/shipping', label: 'Shipping Info' },
    { to: '/returns', label: 'Returns & Exchanges' },
    { to: '/faq', label: 'FAQ' },
    { to: '/contact', label: 'Contact Us' },
    { to: '/size-guide', label: 'Size Guide' },
  ];

  const companyLinks = [
    { to: '/about', label: 'Our Story' },
    { to: '/journal', label: 'Journal' },
    { to: '/sustainability', label: 'Sustainability' },
    { to: '/careers', label: 'Careers' },
  ];

  return (
    <footer className="bg-charcoal-400 text-cream-100">
      <div className="max-w-[1400px] mx-auto section-padding py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-5">
              <span className="font-serif text-2xl tracking-widest-2xl text-cream-50 font-semibold">
                VELMORA
              </span>
            </Link>
            <p className="text-sm text-cream-300/60 max-w-xs leading-relaxed mb-6">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman — 
              elegant, accessible, and made to last.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-cream-300/50 hover:text-gold-400 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream-300/50 hover:text-gold-400 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream-300/50 hover:text-gold-400 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-[11px] uppercase tracking-widest-xl text-cream-50 mb-5 font-sans font-medium">
              Shop
            </h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-cream-300/50 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-[11px] uppercase tracking-widest-xl text-cream-50 mb-5 font-sans font-medium">
              Help
            </h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-cream-300/50 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] uppercase tracking-widest-xl text-cream-50 mb-5 font-sans font-medium">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-cream-300/50 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-cream-300/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-cream-300/40">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map((name) => (
              <div
                key={name}
                className="h-7 px-2.5 bg-cream-300/5 border border-cream-300/10 flex items-center justify-center rounded-sm"
              >
                <span className="text-[9px] text-cream-300/40 font-medium uppercase">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
