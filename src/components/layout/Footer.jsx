import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, CreditCard } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-semibold tracking-wider">
              VELMORA
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Fine jewelry crafted to be treasured. Each piece is designed with intention, 
              made with care, and meant to last a lifetime.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Shop Column */}
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider mb-4">
              Shop
            </h4>
            <ul className="space-y-3">
              {['Earrings', 'Necklaces', 'Huggies', 'New Arrivals', 'Best Sellers'].map((item) => (
                <li key={item}>
                  <Link 
                    to="/shop" 
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Help Column */}
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider mb-4">
              Help
            </h4>
            <ul className="space-y-3">
              {['FAQ', 'Shipping & Returns', 'Size Guide', 'Care Instructions', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link 
                    to="/help" 
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company Column */}
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {['About Us', 'Our Story', 'Sustainability', 'Press', 'Wholesale'].map((item) => (
                <li key={item}>
                  <Link 
                    to="/company" 
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Payment Icons & Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Payment Icons */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm mr-2">Secure Payment:</span>
              <CreditCard size={24} className="text-gray-400" />
              {/* Add more payment icons as needed */}
            </div>
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Velmora Fine Jewelry. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
