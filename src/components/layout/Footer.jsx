import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { name: 'All Jewelry', path: '/collection' },
      { name: 'Earrings', path: '/collection?category=earrings' },
      { name: 'Necklaces', path: '/collection?category=necklaces' },
      { name: 'Huggies', path: '/collection?category=huggies' },
      { name: 'Gift Sets', path: '/collection?category=sets' },
    ],
    help: [
      { name: 'Contact Us', path: '/contact' },
      { name: 'Shipping & Returns', path: '/shipping' },
      { name: 'Size Guide', path: '/size-guide' },
      { name: 'Care Instructions', path: '/care' },
      { name: 'FAQs', path: '/faq' },
    ],
    company: [
      { name: 'Our Story', path: '/about' },
      { name: 'Journal', path: '/journal' },
      { name: 'Sustainability', path: '/sustainability' },
      { name: 'Careers', path: '/careers' },
    ],
  };

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, path: 'https://instagram.com' },
    { name: 'Facebook', icon: Facebook, path: 'https://facebook.com' },
    { name: 'Twitter', icon: Twitter, path: 'https://twitter.com' },
  ];

  const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'];

  return (
    <footer className="bg-velmora-espresso text-velmora-sand">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-ultrawide text-velmora-cream">
              VELMORA
            </Link>
            <p className="mt-4 text-velmora-taupe text-sm leading-relaxed max-w-md">
              Crafted to be treasured. Our demi-fine jewelry combines timeless design 
              with modern sensibility, creating pieces that become cherished parts of 
              your personal story.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-velmora-taupe hover:text-velmora-gold transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-serif text-lg text-velmora-cream mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-velmora-taupe hover:text-velmora-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-serif text-lg text-velmora-cream mb-4">Help</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-velmora-taupe hover:text-velmora-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-serif text-lg text-velmora-cream mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-velmora-taupe hover:text-velmora-gold transition-colors"
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
      <div className="border-t border-velmora-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-velmora-taupe">
              © {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>

            {/* Payment Icons */}
            <div className="flex items-center space-x-4">
              {paymentIcons.map((icon) => (
                <div
                  key={icon}
                  className="px-3 py-1 bg-velmora-charcoal rounded text-xs text-velmora-taupe"
                >
                  {icon}
                </div>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-4 text-sm text-velmora-taupe">
              <Link to="/privacy" className="hover:text-velmora-gold transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="hover:text-velmora-gold transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
