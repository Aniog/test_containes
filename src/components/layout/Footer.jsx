import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    shop: [
      { name: 'All Jewelry', path: '/shop' },
      { name: 'Earrings', path: '/shop?category=earrings' },
      { name: 'Necklaces', path: '/shop?category=necklaces' },
      { name: 'Huggies', path: '/shop?category=huggies' }
    ],
    help: [
      { name: 'Contact Us', path: '/contact' },
      { name: 'Shipping & Returns', path: '/shipping' },
      { name: 'Care Guide', path: '/care' },
      { name: 'FAQ', path: '/faq' }
    ],
    company: [
      { name: 'Our Story', path: '/about' },
      { name: 'Journal', path: '/journal' },
      { name: 'Sustainability', path: '/sustainability' },
      { name: 'Careers', path: '/careers' }
    ]
  };

  const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'Apple Pay', 'PayPal'];

  return (
    <footer className="bg-velmora-charcoal text-velmora-cream pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-semibold tracking-wider">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-gray-400 font-sans leading-relaxed">
              Crafted to be treasured. Premium demi-fine jewelry for the modern woman.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-velmora-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-velmora-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-velmora-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-lg mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-velmora-gold transition-colors font-sans"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-serif text-lg mb-4">Help</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-velmora-gold transition-colors font-sans"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-velmora-gold transition-colors font-sans"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment Icons */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-3 flex-wrap">
              {paymentIcons.map((icon) => (
                <span
                  key={icon}
                  className="px-3 py-1 bg-gray-800 text-xs text-gray-400 rounded font-sans"
                >
                  {icon}
                </span>
              ))}
            </div>
            <p className="text-xs text-gray-500 font-sans">
              © 2024 Velmora Fine Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;