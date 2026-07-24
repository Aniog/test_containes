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
      { name: 'Care Instructions', path: '/care' },
      { name: 'FAQ', path: '/faq' }
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Story', path: '/story' },
      { name: 'Journal', path: '/journal' },
      { name: 'Sustainability', path: '/sustainability' }
    ]
  };

  const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'Apple Pay', 'PayPal'];

  return (
    <footer className="bg-velmora-charcoal text-velmora-cream pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-3xl tracking-wider mb-4">VELMORA</h2>
            <p className="text-velmora-cream/70 text-sm leading-relaxed mb-6 max-w-sm">
              Crafted to be treasured. We create timeless demi-fine jewelry designed to be worn, loved, and lived in.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 border border-velmora-cream/30 rounded-full hover:border-velmora-gold hover:text-velmora-gold transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 border border-velmora-cream/30 rounded-full hover:border-velmora-gold hover:text-velmora-gold transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 border border-velmora-cream/30 rounded-full hover:border-velmora-gold hover:text-velmora-gold transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-velmora-gold mb-4">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-velmora-cream/70 hover:text-velmora-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-velmora-gold mb-4">Help</h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-velmora-cream/70 hover:text-velmora-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-velmora-gold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-velmora-cream/70 hover:text-velmora-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="hairline bg-velmora-cream/20 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-velmora-cream/50">
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>
          
          {/* Payment Icons */}
          <div className="flex items-center gap-3">
            {paymentIcons.map((icon) => (
              <span 
                key={icon} 
                className="text-xs text-velmora-cream/50 border border-velmora-cream/20 px-2 py-1"
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