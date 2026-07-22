import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    shop: [
      { to: '/shop?category=earrings', label: 'Earrings' },
      { to: '/shop?category=necklaces', label: 'Necklaces' },
      { to: '/shop?category=huggies', label: 'Huggies' },
      { to: '/shop?category=sets', label: 'Sets' },
    ],
    help: [
      { to: '/shipping', label: 'Shipping & Returns' },
      { to: '/care', label: 'Jewelry Care' },
      { to: '/faq', label: 'FAQ' },
      { to: '/contact', label: 'Contact Us' },
    ],
    company: [
      { to: '/about', label: 'Our Story' },
      { to: '/journal', label: 'Journal' },
      { to: '/sustainability', label: 'Sustainability' },
      { to: '/careers', label: 'Careers' },
    ],
  };

  const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'Apple Pay', 'PayPal'];

  return (
    <footer className="bg-charcoal text-cream pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-widest uppercase">
              Velmora
            </Link>
            <p className="mt-4 text-cream/60 text-sm leading-relaxed">
              Crafted to be treasured. Premium demi-fine jewelry for the modern woman.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-cream/20 rounded-full hover:border-gold hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-cream/20 rounded-full hover:border-gold hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-cream/20 rounded-full hover:border-gold hover:text-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-sm tracking-widest uppercase mb-4 text-gold">
              Shop
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-cream/60 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-serif text-sm tracking-widest uppercase mb-4 text-gold">
              Help
            </h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-cream/60 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-sm tracking-widest uppercase mb-4 text-gold">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-cream/60 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment & Copyright */}
        <div className="pt-8 border-t border-cream/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-cream/40">
              © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              {paymentIcons.map((icon) => (
                <span
                  key={icon}
                  className="px-2 py-1 text-[10px] uppercase tracking-wider border border-cream/20 text-cream/60"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}