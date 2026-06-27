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
      { name: 'Shipping & Returns', path: '/shipping' },
      { name: 'Care Instructions', path: '/care' },
      { name: 'FAQs', path: '/faqs' }
    ],
    company: [
      { name: 'Our Story', path: '/about' },
      { name: 'Journal', path: '/journal' },
      { name: 'Sustainability', path: '/sustainability' },
      { name: 'Careers', path: '/careers' }
    ]
  };

  const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'Apple Pay', 'PayPal'];

  return (
    <footer
      className="pt-16 pb-8"
      style={{ backgroundColor: 'var(--color-charcoal)', color: 'var(--color-ivory)' }}
    >
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="font-serif text-xl tracking-[0.2em] font-semibold inline-block mb-4"
            >
              VELMORA
            </Link>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: 'var(--color-stone-light)' }}
            >
              Premium demi-fine jewelry crafted to be treasured. Every piece tells a story of elegance and timeless beauty.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3
              className="font-serif text-sm tracking-wider mb-4"
              style={{ color: 'var(--color-ivory)' }}
            >
              SHOP
            </h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm hover:opacity-70 transition-opacity"
                    style={{ color: 'var(--color-stone-light)' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3
              className="font-serif text-sm tracking-wider mb-4"
              style={{ color: 'var(--color-ivory)' }}
            >
              HELP
            </h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm hover:opacity-70 transition-opacity"
                    style={{ color: 'var(--color-stone-light)' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3
              className="font-serif text-sm tracking-wider mb-4"
              style={{ color: 'var(--color-ivory)' }}
            >
              COMPANY
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm hover:opacity-70 transition-opacity"
                    style={{ color: 'var(--color-stone-light)' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[var(--color-stone)]/30 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-xs"
            style={{ color: 'var(--color-stone-light)' }}
          >
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment Icons */}
          <div className="flex items-center gap-3">
            {paymentIcons.map((icon) => (
              <span
                key={icon}
                className="text-xs px-2 py-1 rounded border"
                style={{
                  borderColor: 'var(--color-stone)',
                  color: 'var(--color-stone-light)'
                }}
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