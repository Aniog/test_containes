import { Link } from 'react-router-dom';
import { Instagram, Facebook, Globe } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { label: 'All Jewelry', href: '/collection' },
      { label: 'Earrings', href: '/collection?category=earrings' },
      { label: 'Necklaces', href: '/collection?category=necklaces' },
      { label: 'Huggies', href: '/collection?category=huggies' },
      { label: 'Gift Sets', href: '/collection?category=sets' },
    ],
    help: [
      { label: 'Shipping & Returns', href: '/shipping' },
      { label: 'Size Guide', href: '/size-guide' },
      { label: 'Care Instructions', href: '/care' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact Us', href: '/contact' },
    ],
    company: [
      { label: 'Our Story', href: '/about' },
      { label: 'Sustainability', href: '/sustainability' },
      { label: 'Press', href: '/press' },
      { label: 'Careers', href: '/careers' },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Globe, href: 'https://pinterest.com', label: 'Pinterest' },
  ];

  const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'];

  return (
    <footer className="bg-[var(--color-espresso)] text-[var(--color-parchment)]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.2em] text-[var(--color-ivory)] hover:text-[var(--color-gold-light)] transition-colors"
            >
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-[var(--color-sand)] leading-relaxed max-w-sm">
              Crafted with intention. Our demi-fine jewelry celebrates the beauty of everyday luxury, designed to be treasured for years to come.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-sand)] hover:text-[var(--color-gold-light)] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-serif text-sm tracking-[0.1em] text-[var(--color-ivory)] mb-4">
              SHOP
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map(link => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-[var(--color-sand)] hover:text-[var(--color-gold-light)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-serif text-sm tracking-[0.1em] text-[var(--color-ivory)] mb-4">
              HELP
            </h4>
            <ul className="space-y-3">
              {footerLinks.help.map(link => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-[var(--color-sand)] hover:text-[var(--color-gold-light)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-serif text-sm tracking-[0.1em] text-[var(--color-ivory)] mb-4">
              COMPANY
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map(link => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-[var(--color-sand)] hover:text-[var(--color-gold-light)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--color-bark)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-xs text-[var(--color-stone)]">
              &copy; {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>

            {/* Payment Icons */}
            <div className="flex items-center gap-3">
              {paymentIcons.map(icon => (
                <span
                  key={icon}
                  className="px-2 py-1 text-xs bg-[var(--color-bark)] text-[var(--color-sand)] rounded"
                >
                  {icon}
                </span>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-xs text-[var(--color-stone)]">
              <Link to="/privacy" className="hover:text-[var(--color-gold-light)] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-[var(--color-gold-light)] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
