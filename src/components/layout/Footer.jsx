import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    shop: [
      { name: 'All Jewelry', path: '/shop' },
      { name: 'Earrings', path: '/shop?category=earrings' },
      { name: 'Necklaces', path: '/shop?category=necklaces' },
      { name: 'Huggies', path: '/shop?category=huggies' },
      { name: 'Sets', path: '/shop?category=sets' }
    ],
    help: [
      { name: 'Contact Us', path: '/contact' },
      { name: 'Shipping & Returns', path: '/shipping' },
      { name: 'Care Instructions', path: '/care' },
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-widest text-velmora-cream">
              VELMORA
            </Link>
            <p className="mt-4 text-velmora-cream/60 text-sm leading-relaxed max-w-xs">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman who appreciates quiet luxury.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="p-2 border border-velmora-cream/20 rounded-full hover:border-velmora-gold hover:text-velmora-gold transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 border border-velmora-cream/20 rounded-full hover:border-velmora-gold hover:text-velmora-gold transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 border border-velmora-cream/20 rounded-full hover:border-velmora-gold hover:text-velmora-gold transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-velmora-gold">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-velmora-cream/60 hover:text-velmora-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-velmora-gold">Help</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-velmora-cream/60 hover:text-velmora-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-velmora-gold">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-velmora-cream/60 hover:text-velmora-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment & Copyright */}
        <div className="pt-8 border-t border-velmora-cream/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {paymentIcons.map((icon) => (
                <span
                  key={icon}
                  className="px-3 py-1 text-xs text-velmora-cream/40 border border-velmora-cream/10"
                >
                  {icon}
                </span>
              ))}
            </div>
            <p className="text-sm text-velmora-cream/40">
              © 2024 Velmora Fine Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}