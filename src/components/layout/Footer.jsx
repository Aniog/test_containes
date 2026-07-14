import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    shop: [
      { name: 'All Jewelry', path: '/collections' },
      { name: 'Earrings', path: '/collections?category=earrings' },
      { name: 'Necklaces', path: '/collections?category=necklaces' },
      { name: 'Huggies', path: '/collections?category=huggies' },
    ],
    help: [
      { name: 'Contact Us', path: '/contact' },
      { name: 'Shipping & Returns', path: '/shipping' },
      { name: 'Care Guide', path: '/care' },
      { name: 'FAQs', path: '/faqs' },
    ],
    company: [
      { name: 'Our Story', path: '/about' },
      { name: 'Journal', path: '/journal' },
      { name: 'Sustainability', path: '/sustainability' },
      { name: 'Careers', path: '/careers' },
    ],
  };

  return (
    <footer className="bg-[var(--color-charcoal)] text-[var(--color-ivory)] pt-16 pb-8">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-[var(--color-muted)] leading-relaxed max-w-xs">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman who appreciates quiet luxury.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="p-2 border border-[var(--color-muted)] rounded-full hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors duration-200">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="p-2 border border-[var(--color-muted)] rounded-full hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors duration-200">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="p-2 border border-[var(--color-muted)] rounded-full hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors duration-200">
                <Twitter size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)] mb-4">
              Shop
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-[var(--color-ivory)] hover:text-[var(--color-gold)] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)] mb-4">
              Help
            </h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-[var(--color-ivory)] hover:text-[var(--color-gold)] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)] mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-[var(--color-ivory)] hover:text-[var(--color-gold)] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment Icons & Copyright */}
        <div className="pt-8 border-t border-[var(--color-warm-black)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[var(--color-muted)]">
              © 2024 Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              {['Visa', 'Mastercard', 'Amex', 'Apple Pay', 'PayPal'].map((method) => (
                <span
                  key={method}
                  className="px-2 py-1 text-xs text-[var(--color-muted)] border border-[var(--color-warm-black)]"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
