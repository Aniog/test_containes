import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, CreditCard, Truck, Shield } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Shop',
      links: [
        { name: 'Earrings', path: '/shop?category=Earrings' },
        { name: 'Necklaces', path: '/shop?category=Necklaces' },
        { name: 'Huggies', path: '/shop?category=Huggies' },
        { name: 'New Arrivals', path: '/shop?sort=newest' },
        { name: 'Bestsellers', path: '/shop?sort=bestsellers' },
      ],
    },
    {
      title: 'Help',
      links: [
        { name: 'Shipping & Returns', path: '/shipping' },
        { name: 'Size Guide', path: '/size-guide' },
        { name: 'Care Instructions', path: '/care' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Contact Us', path: '/contact' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Velmora', path: '/about' },
        { name: 'Our Materials', path: '/materials' },
        { name: 'Sustainability', path: '/sustainability' },
        { name: 'Press', path: '/press' },
        { name: 'Journal', path: '/journal' },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Instagram size={20} />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <Facebook size={20} />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <Twitter size={20} />, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <footer className="bg-velmora-black text-white pt-16 pb-8">
      <div className="container-luxury">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <Link to="/" className="font-serif text-3xl tracking-widest block mb-6">
              VELMORA
            </Link>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Each piece is designed with intention,
              made with care, and meant to be worn every day.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-velmora-gold transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-serif text-lg mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-400 hover:text-velmora-gold transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-800 pt-8 pb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Truck size={24} />, text: 'Free Shipping' },
              { icon: <Shield size={24} />, text: '30-Day Returns' },
              { icon: <CreditCard size={24} />, text: 'Secure Payment' },
              { icon: <Shield size={24} />, text: 'Hypoallergenic' },
            ].map((badge) => (
              <div key={badge.text} className="flex items-center justify-center space-x-2 text-gray-400">
                {badge.icon}
                <span className="text-xs uppercase tracking-wide">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400">
            © {currentYear} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-sm text-gray-400 hover:text-velmora-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-gray-400 hover:text-velmora-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
