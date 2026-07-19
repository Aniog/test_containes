import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const shopLinks = [
    { name: 'All Jewelry', path: '/collections' },
    { name: 'Earrings', path: '/collections?category=earrings' },
    { name: 'Necklaces', path: '/collections?category=necklaces' },
    { name: 'Huggies', path: '/collections?category=huggies' },
    { name: 'Gift Sets', path: '/collections?category=sets' }
  ];

  const helpLinks = [
    { name: 'Shipping & Returns', path: '/shipping' },
    { name: 'Care Instructions', path: '/care' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const companyLinks = [
    { name: 'Our Story', path: '/about' },
    { name: 'Journal', path: '/journal' },
    { name: 'Sustainability', path: '/sustainability' }
  ];

  return (
    <footer className="bg-[var(--color-primary)] text-[var(--color-secondary)] pt-16 pb-8">
      <div className="container-main">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="heading-serif text-2xl tracking-[0.1em] text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-[var(--color-muted-light)] leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Quality pieces designed for the modern woman.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 border border-[var(--color-muted)] rounded-full hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 border border-[var(--color-muted)] rounded-full hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="mailto:hello@velmora.com"
                className="p-2 border border-[var(--color-muted)] rounded-full hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm font-medium tracking-wider text-white mb-4">SHOP</h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-sm text-[var(--color-muted-light)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-sm font-medium tracking-wider text-white mb-4">HELP</h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-sm text-[var(--color-muted-light)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-medium tracking-wider text-white mb-4">COMPANY</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-sm text-[var(--color-muted-light)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment Icons & Copyright */}
        <div className="pt-8 border-t border-[var(--color-primary-light)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[var(--color-muted)]">
              &copy; {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-xs text-[var(--color-muted)]">We accept</span>
              <div className="flex gap-2">
                {['Visa', 'Mastercard', 'Amex', 'Apple Pay'].map((method) => (
                  <span 
                    key={method}
                    className="px-2 py-1 text-[10px] bg-[var(--color-primary-light)] rounded text-[var(--color-muted-light)]"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}