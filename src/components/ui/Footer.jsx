import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const shopLinks = [
    { name: 'All Jewelry', href: '/shop' },
    { name: 'Earrings', href: '/shop?category=earrings' },
    { name: 'Necklaces', href: '/shop?category=necklaces' },
    { name: 'Huggies', href: '/shop?category=huggies' },
    { name: 'Gift Sets', href: '/shop?category=sets' },
  ];

  const helpLinks = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Shipping & Returns', href: '/shipping' },
    { name: 'Size Guide', href: '/size-guide' },
    { name: 'Care Instructions', href: '/care' },
    { name: 'FAQs', href: '/faq' },
  ];

  const companyLinks = [
    { name: 'Our Story', href: '/about' },
    { name: 'Journal', href: '/journal' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'Careers', href: '/careers' },
  ];

  return (
    <footer className="bg-charcoal text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-extra-wide text-cream">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-cream/70 font-sans leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Every piece is designed to bring joy to your everyday moments.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/70 hover:text-cream transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/70 hover:text-cream transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/70 hover:text-cream transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-ultra-wide text-cream/50 uppercase mb-4">
              Shop
            </h3>
            <ul className="space-y-3">
              {shopLinks.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm font-sans text-cream/70 hover:text-cream transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-ultra-wide text-cream/50 uppercase mb-4">
              Help
            </h3>
            <ul className="space-y-3">
              {helpLinks.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm font-sans text-cream/70 hover:text-cream transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-ultra-wide text-cream/50 uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm font-sans text-cream/70 hover:text-cream transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-cream/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs font-sans text-cream/50">
              © {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>

            {/* Payment Icons */}
            <div className="flex items-center gap-4">
              <div className="px-3 py-1.5 bg-cream/10 rounded text-xs font-sans text-cream/70">
                Visa
              </div>
              <div className="px-3 py-1.5 bg-cream/10 rounded text-xs font-sans text-cream/70">
                Mastercard
              </div>
              <div className="px-3 py-1.5 bg-cream/10 rounded text-xs font-sans text-cream/70">
                Amex
              </div>
              <div className="px-3 py-1.5 bg-cream/10 rounded text-xs font-sans text-cream/70">
                Apple Pay
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
