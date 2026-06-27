import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { label: 'All Jewelry', to: '/collection' },
      { label: 'Earrings', to: '/collection?category=earrings' },
      { label: 'Necklaces', to: '/collection?category=necklaces' },
      { label: 'Huggies', to: '/collection?category=huggies' },
      { label: 'Gift Sets', to: '/collection?category=sets' },
    ],
    help: [
      { label: 'Contact Us', to: '/contact' },
      { label: 'Shipping & Returns', to: '/shipping' },
      { label: 'Size Guide', to: '/size-guide' },
      { label: 'Care Instructions', to: '/care' },
      { label: 'FAQs', to: '/faq' },
    ],
    company: [
      { label: 'Our Story', to: '/about' },
      { label: 'Journal', to: '/journal' },
      { label: 'Sustainability', to: '/sustainability' },
      { label: 'Careers', to: '/careers' },
    ],
  };

  return (
    <footer className="bg-charcoal text-white">
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.2em] text-white hover:text-gold transition-colors"
            >
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
              Fine jewelry crafted for the modern woman. Each piece is designed to be treasured, worn, and loved.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-white/40 mb-4">
              Shop
            </h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-white/40 mb-4">
              Help
            </h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-white/40 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-hairline bg-white/10 mt-12 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {currentYear} Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment Icons */}
          <div className="flex items-center gap-3">
            <div className="px-3 py-1.5 bg-white/10 rounded text-xs font-medium">
              Visa
            </div>
            <div className="px-3 py-1.5 bg-white/10 rounded text-xs font-medium">
              Mastercard
            </div>
            <div className="px-3 py-1.5 bg-white/10 rounded text-xs font-medium">
              Amex
            </div>
            <div className="px-3 py-1.5 bg-white/10 rounded text-xs font-medium">
              PayPal
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
