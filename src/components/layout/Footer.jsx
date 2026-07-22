import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

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
      { label: 'Contact Us', href: '#' },
      { label: 'Shipping & Returns', href: '#' },
      { label: 'Size Guide', href: '#' },
      { label: 'Care Instructions', href: '#' },
      { label: 'FAQs', href: '#' },
    ],
    company: [
      { label: 'Our Story', href: '/about' },
      { label: 'Journal', href: '#' },
      { label: 'Sustainability', href: '#' },
      { label: 'Careers', href: '#' },
    ],
  };

  return (
    <footer className="bg-brand-bg-secondary border-t border-brand-border-subtle">
      <div className="container-main py-16 md:py-20">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-[0.15em] text-brand-text-primary hover:text-brand-gold transition-colors">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-brand-text-secondary leading-relaxed max-w-xs">
              Fine jewelry crafted for the modern woman. Timeless designs, premium quality, accessible luxury.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-brand-text-secondary hover:text-brand-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-brand-text-secondary hover:text-brand-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-brand-text-primary mb-4">
              Shop
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-brand-text-secondary hover:text-brand-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-brand-text-primary mb-4">
              Help
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.help.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-brand-text-secondary hover:text-brand-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-brand-text-primary mb-4">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-brand-text-secondary hover:text-brand-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-brand-border-subtle">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-xs text-brand-text-tertiary">
              © {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>

            {/* Payment Icons */}
            <div className="flex items-center gap-4">
              <div className="px-3 py-1.5 bg-brand-bg-elevated rounded text-xs text-brand-text-secondary font-medium">
                Visa
              </div>
              <div className="px-3 py-1.5 bg-brand-bg-elevated rounded text-xs text-brand-text-secondary font-medium">
                Mastercard
              </div>
              <div className="px-3 py-1.5 bg-brand-bg-elevated rounded text-xs text-brand-text-secondary font-medium">
                Amex
              </div>
              <div className="px-3 py-1.5 bg-brand-bg-elevated rounded text-xs text-brand-text-secondary font-medium">
                PayPal
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-xs text-brand-text-tertiary">
              <a href="#" className="hover:text-brand-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-brand-gold transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
