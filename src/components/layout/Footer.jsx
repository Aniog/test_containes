import { Link } from 'react-router-dom';
import { Instagram, Facebook, Heart } from 'lucide-react';

const Footer = () => {
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
      { name: 'Shipping & Returns', path: '/shipping' },
      { name: 'Size Guide', path: '/size-guide' },
      { name: 'Care Instructions', path: '/care' },
      { name: 'FAQs', path: '/faq' },
      { name: 'Contact Us', path: '/contact' },
    ],
    company: [
      { name: 'Our Story', path: '/about' },
      { name: 'Journal', path: '/journal' },
      { name: 'Sustainability', path: '/sustainability' },
      { name: 'Press', path: '/press' },
      { name: 'Careers', path: '/careers' },
    ],
  };

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, path: 'https://instagram.com' },
    { name: 'Facebook', icon: Facebook, path: 'https://facebook.com' },
    { name: 'Pinterest', icon: Heart, path: 'https://pinterest.com' },
  ];

  return (
    <footer className="bg-charcoal-800 text-cream-100">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-3xl text-cream-50 tracking-wide">
                VELMORA
              </span>
            </Link>
            <p className="font-sans text-sm text-charcoal-300 leading-relaxed max-w-sm mb-6">
              Demi-fine gold jewelry crafted with intention. Each piece is designed 
              to be treasured, worn every day, and passed down for generations.
            </p>
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-charcoal-300 hover:text-cream-50 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon size={20} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-sans text-xs font-medium tracking-extra-wide uppercase text-cream-50 mb-6">
              Shop
            </h3>
            <ul className="space-y-3">
              {footerLinks.shop.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-sans text-sm text-charcoal-300 hover:text-cream-50 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="font-sans text-xs font-medium tracking-extra-wide uppercase text-cream-50 mb-6">
              Help
            </h3>
            <ul className="space-y-3">
              {footerLinks.help.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-sans text-sm text-charcoal-300 hover:text-cream-50 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-sans text-xs font-medium tracking-extra-wide uppercase text-cream-50 mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-sans text-sm text-charcoal-300 hover:text-cream-50 transition-colors duration-200"
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
      <div className="border-t border-charcoal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="font-sans text-xs text-charcoal-400">
              © {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>

            {/* Payment Icons */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 px-3 py-1.5 bg-charcoal-700 rounded">
                <span className="text-xs text-charcoal-300 font-medium">VISA</span>
              </div>
              <div className="flex items-center space-x-2 px-3 py-1.5 bg-charcoal-700 rounded">
                <span className="text-xs text-charcoal-300 font-medium">MC</span>
              </div>
              <div className="flex items-center space-x-2 px-3 py-1.5 bg-charcoal-700 rounded">
                <span className="text-xs text-charcoal-300 font-medium">AMEX</span>
              </div>
              <div className="flex items-center space-x-2 px-3 py-1.5 bg-charcoal-700 rounded">
                <span className="text-xs text-charcoal-300 font-medium">PayPal</span>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6">
              <Link
                to="/privacy"
                className="font-sans text-xs text-charcoal-400 hover:text-cream-50 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="font-sans text-xs text-charcoal-400 hover:text-cream-50 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
