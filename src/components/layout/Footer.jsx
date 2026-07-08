import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const shopLinks = [
    { name: 'Earrings', path: '/shop?category=Earrings' },
    { name: 'Necklaces', path: '/shop?category=Necklaces' },
    { name: 'Huggies', path: '/shop?category=Huggies' },
    { name: 'New Arrivals', path: '/shop' },
    { name: 'Bestsellers', path: '/shop' },
  ];

  const helpLinks = [
    { name: 'FAQ', path: '/faq' },
    { name: 'Shipping & Returns', path: '/shipping' },
    { name: 'Care Guide', path: '/care' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const companyLinks = [
    { name: 'Our Story', path: '/about' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Press', path: '/press' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <footer className="bg-velmora-charcoal text-velmora-cream py-16 mt-20">
      <div className="container-velmora">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <Link to="/" className="font-serif text-2xl tracking-wider block mb-6">
              VELMORA
            </Link>
            <p className="text-sm text-velmora-sand mb-6 leading-relaxed">
              Demi-fine gold jewelry crafted to be treasured. Each piece is designed with intention, 
              made to be worn and loved every day.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-velmora-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-velmora-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-velmora-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="font-serif text-lg mb-6">Shop</h3>
            <ul className="space-y-3">
              {shopLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-velmora-sand hover:text-velmora-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h3 className="font-serif text-lg mb-6">Help</h3>
            <ul className="space-y-3">
              {helpLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-velmora-sand hover:text-velmora-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-serif text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-velmora-sand hover:text-velmora-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="hairline mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-velmora-sand">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-xs text-velmora-sand">Secure payments:</span>
            <div className="flex space-x-2 text-xs text-velmora-sand">
              <span>VISA</span>
              <span>MC</span>
              <span>AMEX</span>
              <span>PP</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
