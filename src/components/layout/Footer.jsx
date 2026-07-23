import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    shop: [
      { name: 'All Jewelry', path: '/shop' },
      { name: 'Earrings', path: '/shop?category=earrings' },
      { name: 'Necklaces', path: '/shop?category=necklaces' },
      { name: 'Huggies', path: '/shop?category=huggies' },
      { name: 'Gift Sets', path: '/shop?category=sets' }
    ],
    help: [
      { name: 'Contact Us', path: '/contact' },
      { name: 'Shipping & Returns', path: '/shipping-returns' },
      { name: 'Care Instructions', path: '/care' },
      { name: 'FAQs', path: '/faqs' },
      { name: 'Size Guide', path: '/size-guide' }
    ],
    company: [
      { name: 'Our Story', path: '/about' },
      { name: 'Sustainability', path: '/sustainability' },
      { name: 'Press', path: '/press' },
      { name: 'Careers', path: '/careers' }
    ]
  };

  const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'Apple Pay', 'PayPal'];

  return (
    <footer className="bg-[var(--color-charcoal)] text-[var(--color-cream)] pt-20 pb-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] text-[var(--color-cream)]">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-[var(--color-taupe)] leading-relaxed max-w-sm">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman who appreciates understated elegance.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="p-2 border border-[var(--color-taupe)] rounded-full hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 border border-[var(--color-taupe)] rounded-full hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 border border-[var(--color-taupe)] rounded-full hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-[var(--color-cream)]">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-[var(--color-taupe)] hover:text-[var(--color-gold)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-[var(--color-cream)]">Help</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-[var(--color-taupe)] hover:text-[var(--color-gold)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-[var(--color-cream)]">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-[var(--color-taupe)] hover:text-[var(--color-gold)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment & Copyright */}
        <div className="pt-8 border-t border-[var(--color-charcoal-light)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[var(--color-taupe)]">
              © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              {paymentIcons.map((icon) => (
                <span
                  key={icon}
                  className="px-2 py-1 text-xs text-[var(--color-taupe)] border border-[var(--color-charcoal-light)]"
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