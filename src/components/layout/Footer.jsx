import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const shopLinks = [
    { name: 'All Jewelry', path: '/shop' },
    { name: 'Earrings', path: '/shop?category=earrings' },
    { name: 'Necklaces', path: '/shop?category=necklaces' },
    { name: 'Huggies', path: '/shop?category=huggies' },
    { name: 'Gift Sets', path: '/shop?category=sets' }
  ];

  const helpLinks = [
    { name: 'Contact Us', path: '/contact' },
    { name: 'Shipping & Returns', path: '/shipping' },
    { name: 'Care Instructions', path: '/care' },
    { name: 'FAQs', path: '/faqs' }
  ];

  const companyLinks = [
    { name: 'Our Story', path: '/about' },
    { name: 'Journal', path: '/journal' },
    { name: 'Sustainability', path: '/sustainability' }
  ];

  return (
    <footer className="bg-velmora-charcoal text-velmora-cream pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-3xl tracking-[0.15em] text-velmora-cream">
                VELMORA
              </span>
            </Link>
            <p className="text-velmora-warm-gray text-sm leading-relaxed mb-6 max-w-xs">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman who appreciates quiet luxury.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-velmora-warm-gray hover:text-velmora-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-velmora-warm-gray hover:text-velmora-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="mailto:hello@velmora.com"
                className="text-velmora-warm-gray hover:text-velmora-gold transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-serif text-lg mb-4 tracking-wide">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-velmora-warm-gray hover:text-velmora-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-serif text-lg mb-4 tracking-wide">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-velmora-warm-gray hover:text-velmora-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-serif text-lg mb-4 tracking-wide">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-velmora-warm-gray hover:text-velmora-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-velmora-warm-gray/20 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-velmora-warm-gray">
            &copy; {currentYear} Velmora Fine Jewelry. All rights reserved.
          </p>
          
          {/* Payment Icons */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-velmora-warm-gray">We accept</span>
            <div className="flex gap-2">
              {['Visa', 'MC', 'Amex', 'PayPal'].map((card) => (
                <div
                  key={card}
                  className="px-2 py-1 bg-velmora-warm-gray/10 text-velmora-warm-gray text-xs rounded"
                >
                  {card}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;