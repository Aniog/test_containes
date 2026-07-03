import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, CreditCard, Truck, Shield } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerColumns = [
    {
      title: 'Shop',
      links: [
        { name: 'All Products', path: '/shop' },
        { name: 'Earrings', path: '/shop?category=Earrings' },
        { name: 'Necklaces', path: '/shop?category=Necklaces' },
        { name: 'Huggies', path: '/shop?category=Huggies' },
        { name: 'New Arrivals', path: '/shop?sort=newest' },
      ],
    },
    {
      title: 'Help',
      links: [
        { name: 'FAQ', path: '/faq' },
        { name: 'Shipping & Returns', path: '/shipping' },
        { name: 'Size Guide', path: '/size-guide' },
        { name: 'Care Instructions', path: '/care' },
        { name: 'Contact Us', path: '/contact' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Our Story', path: '/our-story' },
        { name: 'Sustainability', path: '/sustainability' },
        { name: 'Press', path: '/press' },
        { name: 'Journal', path: '/journal' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Instagram, path: 'https://instagram.com' },
    { icon: Facebook, path: 'https://facebook.com' },
    { icon: Twitter, path: 'https://twitter.com' },
  ];

  return (
    <footer className="bg-velmora-deep text-white/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.3em] uppercase text-white mb-6 inline-block"
            >
              Velmora
            </Link>
            <p className="font-sans text-sm leading-relaxed mb-6">
              Timeless demi-fine jewelry crafted for the modern woman.
              Quiet luxury, exceptional quality, accessible prices.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-velmora-gold hover:text-velmora-gold transition-colors duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="font-serif text-sm tracking-[0.2em] uppercase text-white mb-6">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm hover:text-velmora-gold transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Payment & Shipping Info */}
        <div className="border-t border-white/10 pt-8 pb-4">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-6">
            <div className="flex items-center space-x-2 text-sm">
              <Truck size={16} />
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Shield size={16} />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <CreditCard size={16} />
              <span>30-Day Returns</span>
            </div>
          </div>

          {/* Payment Icons */}
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-8 bg-white/10 rounded flex items-center justify-center text-xs">
              VISA
            </div>
            <div className="w-12 h-8 bg-white/10 rounded flex items-center justify-center text-xs">
              MC
            </div>
            <div className="w-12 h-8 bg-white/10 rounded flex items-center justify-center text-xs">
              AMEX
            </div>
            <div className="w-12 h-8 bg-white/10 rounded flex items-center justify-center text-xs">
              PayPal
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm">
            <p>&copy; {currentYear} Velmora Fine Jewelry. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
