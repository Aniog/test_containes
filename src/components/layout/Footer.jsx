import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const shopLinks = [
    { name: 'Earrings', path: '/collections/earrings' },
    { name: 'Necklaces', path: '/collections/necklaces' },
    { name: 'Huggies', path: '/collections/huggies' },
    { name: 'Gift Sets', path: '/collections/sets' }
  ];
  
  const helpLinks = [
    { name: 'Shipping & Returns', path: '/' },
    { name: 'Size Guide', path: '/' },
    { name: 'Care Instructions', path: '/' },
    { name: 'FAQ', path: '/' }
  ];
  
  const companyLinks = [
    { name: 'Our Story', path: '/' },
    { name: 'Journal', path: '/' },
    { name: 'Press', path: '/' },
    { name: 'Contact', path: '/' }
  ];
  
  return (
    <footer className="bg-espresso-900 text-cream-100">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and description */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <h2 className="font-serif text-3xl tracking-wider text-cream-50 uppercase">
                VELMORA
              </h2>
            </Link>
            <p className="text-cream-300 text-sm leading-relaxed mb-6">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cream-300 hover:text-cream-50 transition-colors duration-200" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream-300 hover:text-cream-50 transition-colors duration-200" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream-300 hover:text-cream-50 transition-colors duration-200" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Shop links */}
          <div>
            <h3 className="font-serif text-lg tracking-wider text-cream-50 uppercase mb-6">
              Shop
            </h3>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-cream-300 hover:text-cream-50 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Help links */}
          <div>
            <h3 className="font-serif text-lg tracking-wider text-cream-50 uppercase mb-6">
              Help
            </h3>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-cream-300 hover:text-cream-50 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company links */}
          <div>
            <h3 className="font-serif text-lg tracking-wider text-cream-50 uppercase mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-cream-300 hover:text-cream-50 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Payment methods and copyright */}
        <div className="mt-16 pt-8 border-t border-espresso-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <span className="text-cream-400 text-sm">We accept</span>
              <div className="flex space-x-4">
                <span className="text-cream-300 text-sm font-medium">Visa</span>
                <span className="text-cream-300 text-sm font-medium">Mastercard</span>
                <span className="text-cream-300 text-sm font-medium">Amex</span>
                <span className="text-cream-300 text-sm font-medium">PayPal</span>
              </div>
            </div>
            <p className="text-cream-400 text-sm">
              © 2024 Velmora Fine Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
