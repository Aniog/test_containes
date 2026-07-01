import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    shop: [
      { to: '/shop?category=earrings', label: 'Earrings' },
      { to: '/shop?category=necklaces', label: 'Necklaces' },
      { to: '/shop?category=huggies', label: 'Huggies' },
      { to: '/shop?category=sets', label: 'Sets' }
    ],
    help: [
      { to: '/shipping', label: 'Shipping & Returns' },
      { to: '/care', label: 'Jewelry Care' },
      { to: '/faq', label: 'FAQ' },
      { to: '/contact', label: 'Contact Us' }
    ],
    company: [
      { to: '/about', label: 'Our Story' },
      { to: '/journal', label: 'Journal' },
      { to: '/sustainability', label: 'Sustainability' }
    ]
  };

  return (
    <footer className="bg-richBlack text-stone-offWhite pt-16 pb-8">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest text-stone-offWhite">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-stone-warm leading-relaxed">
              Premium demi-fine jewelry crafted to be treasured. Every piece tells a story.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-stone-warm hover:text-gold-antique transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-stone-warm hover:text-gold-antique transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-stone-warm hover:text-gold-antique transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-gold-antique mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-stone-warm hover:text-stone-offWhite transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-gold-antique mb-4">Help</h4>
            <ul className="space-y-3">
              {footerLinks.help.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-stone-warm hover:text-stone-offWhite transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-gold-antique mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-stone-warm hover:text-stone-offWhite transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment & Copyright */}
        <div className="pt-8 border-t border-stone-warm/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-stone-warm">
              © 2024 Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              {['Visa', 'Mastercard', 'Amex', 'Apple Pay'].map(payment => (
                <span
                  key={payment}
                  className="px-2 py-1 text-xs text-stone-warm border border-stone-warm/30 rounded"
                >
                  {payment}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}