import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { name: 'All Jewelry', href: '/shop' },
      { name: 'Earrings', href: '/shop?category=earrings' },
      { name: 'Necklaces', href: '/shop?category=necklaces' },
      { name: 'Huggies', href: '/shop?category=huggies' },
      { name: 'Gift Sets', href: '/shop?category=sets' },
    ],
    help: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Shipping & Returns', href: '/shipping' },
      { name: 'Size Guide', href: '/size-guide' },
      { name: 'Care Instructions', href: '/care' },
      { name: 'FAQs', href: '/faqs' },
    ],
    company: [
      { name: 'Our Story', href: '/about' },
      { name: 'Journal', href: '/journal' },
      { name: 'Sustainability', href: '/sustainability' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
    ],
  };

  return (
    <footer className="bg-charcoal-900 text-cream-100">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <span className="font-serif text-2xl font-semibold tracking-wide text-cream-50">
                VELMORA
              </span>
            </Link>
            <p className="mt-4 font-sans text-sm text-cream-100/70 max-w-sm leading-relaxed">
              Crafted to be treasured. Our demi-fine gold jewelry combines timeless elegance with modern sensibility, designed for the woman who appreciates quality and understated luxury.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-cream-100/70 hover:text-cream-50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-cream-100/70 hover:text-cream-50 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-cream-100/70 hover:text-cream-50 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-ultra-wide uppercase text-cream-50 mb-4">
              Shop
            </h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-sans text-sm text-cream-100/70 hover:text-cream-50 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-ultra-wide uppercase text-cream-50 mb-4">
              Help
            </h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-sans text-sm text-cream-100/70 hover:text-cream-50 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-ultra-wide uppercase text-cream-50 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-sans text-sm text-cream-100/70 hover:text-cream-50 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream-100/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-sans text-xs text-cream-100/50">
              © {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/privacy"
                className="font-sans text-xs text-cream-100/50 hover:text-cream-100 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="font-sans text-xs text-cream-100/50 hover:text-cream-100 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
            {/* Payment Icons */}
            <div className="flex items-center gap-3">
              <div className="px-2 py-1 bg-cream-100/10 rounded text-xs font-sans text-cream-100/70">
                Visa
              </div>
              <div className="px-2 py-1 bg-cream-100/10 rounded text-xs font-sans text-cream-100/70">
                Mastercard
              </div>
              <div className="px-2 py-1 bg-cream-100/10 rounded text-xs font-sans text-cream-100/70">
                Amex
              </div>
              <div className="px-2 py-1 bg-cream-100/10 rounded text-xs font-sans text-cream-100/70">
                PayPal
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
