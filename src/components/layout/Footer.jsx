import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-deep-navy text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-steel-blue rounded-lg flex items-center justify-center font-bold text-xl text-white">
                AM
              </div>
              <div>
                <h3 className="text-xl font-bold">ARTITECT</h3>
                <p className="text-sm text-gray-300 font-semibold tracking-wider">MACHINERY</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Precision sheet metal folding solutions for professionals worldwide. 
              Engineered for excellence, built to last.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-steel-blue rounded-lg flex items-center justify-center hover:bg-copper transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-steel-blue rounded-lg flex items-center justify-center hover:bg-copper transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-steel-blue rounded-lg flex items-center justify-center hover:bg-copper transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-steel-blue rounded-lg flex items-center justify-center hover:bg-copper transition-colors duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Products', 'Features', 'About Us', 'Contact', 'Request Quote'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-gray-300 hover:text-copper transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Products</h4>
            <ul className="space-y-3">
              {[
                'Double Folding Machine',
                'Double Folder',
                'Sheet Metal Folder',
                'Sheet Metal Folding Machine',
                'Metal Folder',
                'View All Products',
              ].map((product) => (
                <li key={product}>
                  <a href="#products" className="text-gray-300 hover:text-copper transition-colors duration-300">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-copper flex-shrink-0 mt-1" />
                <p className="text-gray-300">
                  123 Industrial Parkway<br />
                  Suite 100<br />
                  Detroit, MI 48201
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-copper flex-shrink-0" />
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-copper flex-shrink-0" />
                <p className="text-gray-300">sales@architectmachinery.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2026 ARTITECT MACHINERY. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-copper text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-copper text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-copper text-sm transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
