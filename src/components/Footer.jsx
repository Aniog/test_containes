import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, CreditCard, Truck, RotateCcw, Shield } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const shopLinks = [
    { name: 'All Jewelry', path: '/shop' },
    { name: 'Earrings', path: '/shop?category=earrings' },
    { name: 'Necklaces', path: '/shop?category=necklaces' },
    { name: 'Huggies', path: '/shop?category=huggies' },
    { name: 'Sets', path: '/shop?category=sets' },
  ];

  const helpLinks = [
    { name: 'Contact Us', path: '#' },
    { name: 'FAQs', path: '#' },
    { name: 'Shipping & Returns', path: '#' },
    { name: 'Size Guide', path: '#' },
    { name: 'Track Order', path: '#' },
  ];

  const companyLinks = [
    { name: 'Our Story', path: '#about' },
    { name: 'Journal', path: '#journal' },
    { name: 'Sustainability', path: '#' },
    { name: 'Careers', path: '#' },
    { name: 'Press', path: '#' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, path: '#' },
    { name: 'Facebook', icon: Facebook, path: '#' },
    { name: 'Twitter', icon: Twitter, path: '#' },
  ];

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      {/* Trust Bar */}
      <div className="border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center justify-center space-x-3">
              <Truck className="w-5 h-5 text-brand-400" />
              <span className="text-sm font-medium">Free Worldwide Shipping</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <RotateCcw className="w-5 h-5 text-brand-400" />
              <span className="text-sm font-medium">30-Day Returns</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Shield className="w-5 h-5 text-brand-400" />
              <span className="text-sm font-medium">18K Gold Plated</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CreditCard className="w-5 h-5 text-brand-400" />
              <span className="text-sm font-medium">Hypoallergenic</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <h2 className="text-2xl font-serif font-semibold text-white tracking-wider">
                VELMORA
              </h2>
            </Link>
            <p className="text-neutral-400 mb-6 max-w-sm">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.path}
                  className="text-neutral-400 hover:text-brand-400 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Shop
            </h3>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Help
            </h3>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment Icons */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span className="text-neutral-500 text-sm">We accept:</span>
              <div className="flex space-x-3">
                {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map((method) => (
                  <div
                    key={method}
                    className="bg-neutral-800 text-neutral-400 px-3 py-1 rounded text-xs font-medium"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>
            <p className="text-neutral-500 text-sm">
              © {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}