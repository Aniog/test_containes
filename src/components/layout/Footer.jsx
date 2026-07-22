import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    shop: [
      { name: 'All Products', path: '/collections' },
      { name: 'Earrings', path: '/collections?category=earrings' },
      { name: 'Necklaces', path: '/collections?category=necklaces' },
      { name: 'Huggies', path: '/collections?category=huggies' },
    ],
    help: [
      { name: 'Contact Us', path: '/contact' },
      { name: 'Shipping & Returns', path: '/shipping' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Care Guide', path: '/care' },
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Journal', path: '/journal' },
      { name: 'Sustainability', path: '/sustainability' },
    ],
  };

  const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal'];

  return (
    <footer className="bg-velmora-dark border-t border-velmora-border">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-wider text-velmora-text">
              VELMORA
            </Link>
            <p className="mt-4 text-velmora-muted text-sm leading-relaxed max-w-sm">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman who appreciates quiet luxury.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-velmora-muted hover:text-velmora-gold transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-velmora-muted hover:text-velmora-gold transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-velmora-muted hover:text-velmora-gold transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-velmora-text mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-velmora-muted text-sm hover:text-velmora-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-velmora-text mb-4">Help</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-velmora-muted text-sm hover:text-velmora-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-velmora-text mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-velmora-muted text-sm hover:text-velmora-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-velmora-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-velmora-muted text-xs">
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>
          
          {/* Payment Icons */}
          <div className="flex items-center gap-3">
            {paymentIcons.map((icon) => (
              <span 
                key={icon}
                className="px-2 py-1 bg-velmora-card text-velmora-muted text-xs"
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