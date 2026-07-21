import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, CreditCard, Truck, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Shop',
      links: [
        { name: 'Earrings', path: '/shop?category=earrings' },
        { name: 'Necklaces', path: '/shop?category=necklaces' },
        { name: 'Huggies', path: '/shop?category=huggies' },
        { name: 'New Arrivals', path: '/shop?sort=newest' },
        { name: 'Best Sellers', path: '/shop?sort=bestsellers' }
      ]
    },
    {
      title: 'Help',
      links: [
        { name: 'FAQ', path: '/faq' },
        { name: 'Shipping & Returns', path: '/shipping' },
        { name: 'Size Guide', path: '/size-guide' },
        { name: 'Care Instructions', path: '/care' },
        { name: 'Contact Us', path: '/contact' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Velmora', path: '/about' },
        { name: 'Our Materials', path: '/materials' },
        { name: 'Sustainability', path: '/sustainability' },
        { name: 'Press', path: '/press' },
        { name: 'Journal', path: '/journal' }
      ]
    }
  ];

  return (
    <footer className="bg-velmora-black text-velmora-white">
      {/* Trust Badges */}
      <div className="border-b border-velmora-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { icon: Truck, text: 'Free Worldwide Shipping' },
              { icon: ShieldCheck, text: '30-Day Returns' },
              { icon: CreditCard, text: 'Secure Payment' },
              { icon: ShieldCheck, text: 'Hypoallergenic' }
            ].map((badge, index) => (
              <div key={index} className="flex items-center justify-center space-x-2 text-sm">
                <badge.icon size={20} className="text-velmora-gold" />
                <span className="text-velmora-gray-light">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl tracking-widest text-velmora-white">
              VELMORA
            </h3>
            <p className="text-sm text-velmora-gray-light leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Each piece is designed with intention, 
              using 18K gold plating and the finest materials.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-velmora-gray-light hover:text-velmora-gold transition-colors"
                  aria-label={`Social media link ${index + 1}`}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerSections.map(section => (
            <div key={section.title}>
              <h4 className="font-serif text-lg mb-4 text-velmora-white">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map(link => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-velmora-gray-light hover:text-velmora-gold transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-velmora-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-velmora-gray-light">
              © {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-velmora-gray-light hover:text-velmora-gold">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-velmora-gray-light hover:text-velmora-gold">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
