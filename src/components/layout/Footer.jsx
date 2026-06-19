import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    shop: [
      { name: 'All Jewelry', path: '/shop' },
      { name: 'Earrings', path: '/shop?category=earrings' },
      { name: 'Necklaces', path: '/shop?category=necklaces' },
      { name: 'Huggies', path: '/shop?category=huggies' },
      { name: 'Gift Sets', path: '/shop?category=sets' },
    ],
    help: [
      { name: 'Contact Us', path: '/contact' },
      { name: 'Shipping & Returns', path: '/shipping' },
      { name: 'Care Instructions', path: '/care' },
      { name: 'FAQs', path: '/faqs' },
      { name: 'Size Guide', path: '/size-guide' },
    ],
    company: [
      { name: 'Our Story', path: '/about' },
      { name: 'Journal', path: '/journal' },
      { name: 'Sustainability', path: '/sustainability' },
      { name: 'Press', path: '/press' },
    ],
  };

  const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'];

  return (
    <footer className="bg-[var(--color-ivory)] pt-20 pb-10">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.2em] font-semibold inline-block mb-6"
              style={{ color: 'var(--color-warm-black)' }}
            >
              VELMORA
            </Link>
            <p className="font-sans text-sm leading-relaxed mb-6 max-w-sm" style={{ color: 'var(--color-muted)' }}>
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman who appreciates quiet luxury and timeless elegance.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-[var(--color-border)] hover:border-[var(--color-gold)] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" style={{ color: 'var(--color-warm-black)' }} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-[var(--color-border)] hover:border-[var(--color-gold)] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" style={{ color: 'var(--color-warm-black)' }} />
              </a>
              <a
                href="mailto:hello@velmora.com"
                className="p-2 border border-[var(--color-border)] hover:border-[var(--color-gold)] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" style={{ color: 'var(--color-warm-black)' }} />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: 'var(--color-warm-black)' }}>
              Shop
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-sans text-sm hover:opacity-70 transition-opacity"
                    style={{ color: 'var(--color-muted)' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: 'var(--color-warm-black)' }}>
              Help
            </h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-sans text-sm hover:opacity-70 transition-opacity"
                    style={{ color: 'var(--color-muted)' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: 'var(--color-warm-black)' }}>
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-sans text-sm hover:opacity-70 transition-opacity"
                    style={{ color: 'var(--color-muted)' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Hairline Divider */}
        <div className="hairline mb-10" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-sans text-xs" style={{ color: 'var(--color-muted)' }}>
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment Icons */}
          <div className="flex items-center gap-3">
            {paymentIcons.map((icon) => (
              <span
                key={icon}
                className="px-3 py-1.5 text-xs font-sans border border-[var(--color-border)]"
                style={{ color: 'var(--color-muted)' }}
              >
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}