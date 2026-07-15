import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    shop: [
      { name: 'All Jewelry', path: '/shop' },
      { name: 'Earrings', path: '/shop?category=earrings' },
      { name: 'Necklaces', path: '/shop?category=necklaces' },
      { name: 'Huggies', path: '/shop?category=huggies' },
      { name: 'Gift Sets', path: '/shop?category=sets' }
    ],
    help: [
      { name: 'Contact Us', path: '/contact' },
      { name: 'Shipping & Returns', path: '/shipping' },
      { name: 'Care Guide', path: '/care' },
      { name: 'FAQs', path: '/faqs' },
      { name: 'Size Guide', path: '/sizing' }
    ],
    company: [
      { name: 'Our Story', path: '/about' },
      { name: 'Journal', path: '/journal' },
      { name: 'Sustainability', path: '/sustainability' },
      { name: 'Careers', path: '/careers' },
      { name: 'Press', path: '/press' }
    ]
  };

  const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'Apple Pay', 'PayPal'];

  return (
    <footer className="bg-velmora-charcoal text-velmora-cream pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.15em]">
              VELMORA
            </Link>
            <p className="mt-4 text-velmora-sand text-sm leading-relaxed">
              Crafted to be treasured. Premium demi-fine jewelry for the modern woman.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="p-2 border border-velmora-sand/30 hover:border-velmora-gold transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 border border-velmora-sand/30 hover:border-velmora-gold transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 border border-velmora-sand/30 hover:border-velmora-gold transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-serif text-lg tracking-wide mb-6">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-sm text-velmora-sand hover:text-velmora-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-serif text-lg tracking-wide mb-6">Help</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-sm text-velmora-sand hover:text-velmora-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-serif text-lg tracking-wide mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-sm text-velmora-sand hover:text-velmora-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="hairline border-velmora-sand/20 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-velmora-sand/60">
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>
          
          {/* Payment Icons */}
          <div className="flex items-center gap-3">
            {paymentIcons.map((icon) => (
              <span 
                key={icon}
                className="px-2 py-1 text-xs text-velmora-sand/60 border border-velmora-sand/20"
              >
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;