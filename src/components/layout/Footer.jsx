import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
      { name: 'Shipping Info', path: '/shipping' },
      { name: 'Returns & Exchanges', path: '/returns' },
      { name: 'Size Guide', path: '/size-guide' },
      { name: 'Care Instructions', path: '/care' },
    ],
    company: [
      { name: 'Our Story', path: '/about' },
      { name: 'Journal', path: '/journal' },
      { name: 'Sustainability', path: '/sustainability' },
      { name: 'Careers', path: '/careers' },
      { name: 'Press', path: '/press' },
    ],
  };

  return (
    <footer className="bg-[var(--color-charcoal)] text-[var(--color-cream)]">
      <div className="container py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.2em] text-[var(--color-cream)] mb-6 inline-block"
            >
              VELMORA
            </Link>
            <p className="text-[var(--color-taupe)] text-sm leading-relaxed mb-6 max-w-xs">
              Fine jewelry crafted with intention. Each piece is designed to become a cherished part of your everyday story.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[var(--color-warm-gray)] rounded-full flex items-center justify-center hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[var(--color-warm-gray)] rounded-full flex items-center justify-center hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[var(--color-warm-gray)] rounded-full flex items-center justify-center hover:border-[var(--color-gold)] transition-colors"
                aria-label="Pinterest"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-sans text-xs tracking-[0.15em] uppercase text-[var(--color-taupe)] mb-4">
              Shop
            </h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-[var(--color-cream)] hover:text-[var(--color-gold)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="font-sans text-xs tracking-[0.15em] uppercase text-[var(--color-taupe)] mb-4">
              Help
            </h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-[var(--color-cream)] hover:text-[var(--color-gold)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-sans text-xs tracking-[0.15em] uppercase text-[var(--color-taupe)] mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-[var(--color-cream)] hover:text-[var(--color-gold)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[var(--color-warm-gray)] opacity-30 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-xs text-[var(--color-taupe)]">
            &copy; {currentYear} Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment Icons */}
          <div className="flex items-center gap-4">
            <span className="text-[10px] tracking-wider uppercase text-[var(--color-taupe)]">
              We accept
            </span>
            <div className="flex gap-2">
              {/* Visa */}
              <div className="w-10 h-6 bg-[var(--color-cream)] rounded flex items-center justify-center">
                <span className="text-[8px] font-bold text-[var(--color-charcoal)]">VISA</span>
              </div>
              {/* Mastercard */}
              <div className="w-10 h-6 bg-[var(--color-cream)] rounded flex items-center justify-center">
                <span className="text-[8px] font-bold text-[var(--color-charcoal)]">MC</span>
              </div>
              {/* Amex */}
              <div className="w-10 h-6 bg-[var(--color-cream)] rounded flex items-center justify-center">
                <span className="text-[8px] font-bold text-[var(--color-charcoal)]">AMEX</span>
              </div>
              {/* PayPal */}
              <div className="w-10 h-6 bg-[var(--color-cream)] rounded flex items-center justify-center">
                <span className="text-[7px] font-bold text-[var(--color-charcoal)]">PayPal</span>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex gap-6 text-xs text-[var(--color-taupe)]">
            <Link to="/privacy" className="hover:text-[var(--color-gold)] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-[var(--color-gold)] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
