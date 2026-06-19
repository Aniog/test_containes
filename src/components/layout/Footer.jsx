import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    shop: [
      { href: '/collections/all', label: 'All Jewelry' },
      { href: '/collections/all?category=earrings', label: 'Earrings' },
      { href: '/collections/all?category=necklaces', label: 'Necklaces' },
      { href: '/collections/all?category=huggies', label: 'Huggies' },
      { href: '/collections/all?category=sets', label: 'Gift Sets' },
    ],
    help: [
      { href: '#', label: 'Contact Us' },
      { href: '#', label: 'Shipping & Returns' },
      { href: '#', label: 'Size Guide' },
      { href: '#', label: 'Care Instructions' },
      { href: '#', label: 'FAQs' },
    ],
    company: [
      { href: '/about', label: 'Our Story' },
      { href: '#', label: 'Journal' },
      { href: '#', label: 'Sustainability' },
      { href: '#', label: 'Press' },
      { href: '#', label: 'Careers' },
    ],
  };

  const paymentIcons = [
    { name: 'Visa', icon: 'VISA' },
    { name: 'Mastercard', icon: 'MC' },
    { name: 'Amex', icon: 'AMEX' },
    { name: 'PayPal', icon: 'PayPal' },
    { name: 'Apple Pay', icon: 'Apple' },
  ];

  return (
    <footer className="bg-charcoal-800 text-cream-100">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-2xl tracking-extra-wide text-cream-50">
                VELMORA
              </span>
            </Link>
            <p className="text-charcoal-300 text-sm leading-relaxed mb-6 max-w-sm">
              Demi-fine jewelry crafted for the modern woman. Each piece is
              designed to be treasured, worn, and loved. Quality that feels
              luxurious without the luxury price tag.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 border border-charcoal-600 rounded-full hover:border-gold-500 hover:text-gold-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 border border-charcoal-600 rounded-full hover:border-gold-500 hover:text-gold-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 border border-charcoal-600 rounded-full hover:border-gold-500 hover:text-gold-500 transition-colors"
                aria-label="Pinterest"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-xs tracking-ultra-wide uppercase mb-6 text-cream-200">
              Shop
            </h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-charcoal-300 hover:text-cream-50 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-xs tracking-ultra-wide uppercase mb-6 text-cream-200">
              Help
            </h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-charcoal-300 hover:text-cream-50 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xs tracking-ultra-wide uppercase mb-6 text-cream-200">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-charcoal-300 hover:text-cream-50 transition-colors"
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
      <div className="border-t border-charcoal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-xs text-charcoal-400">
              © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>

            {/* Payment Icons */}
            <div className="flex items-center gap-4">
              {paymentIcons.map((icon) => (
                <div
                  key={icon.name}
                  className="px-3 py-1.5 bg-charcoal-700 rounded text-xs font-medium text-charcoal-300"
                  title={icon.name}
                >
                  {icon.icon}
                </div>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex gap-4 text-xs text-charcoal-400">
              <a href="#" className="hover:text-cream-100 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-cream-100 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}