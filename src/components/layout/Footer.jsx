import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, CreditCard } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-velmora-charcoal text-velmora-cream py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl font-medium tracking-wider mb-4">
              VELMORA
            </h3>
            <p className="text-sm text-velmora-warmGray leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Each piece is designed with intention, 
              made with 18k gold plated materials that are hypoallergenic and built to last.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-serif text-lg mb-4 uppercase tracking-wider">
              Shop
            </h4>
            <ul className="space-y-2">
              {['Earrings', 'Necklaces', 'Huggies', 'New Arrivals', 'Best Sellers'].map((item) => (
                <li key={item}>
                  <Link 
                    to="/shop" 
                    className="text-sm text-velmora-warmGray hover:text-velmora-gold transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-serif text-lg mb-4 uppercase tracking-wider">
              Help
            </h4>
            <ul className="space-y-2">
              {['FAQ', 'Shipping & Returns', 'Size Guide', 'Care Instructions', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link 
                    to="/help" 
                    className="text-sm text-velmora-warmGray hover:text-velmora-gold transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-serif text-lg mb-4 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2">
              {['About Us', 'Our Story', 'Sustainability', 'Press', 'Wholesale'].map((item) => (
                <li key={item}>
                  <Link 
                    to="/about" 
                    className="text-sm text-velmora-warmGray hover:text-velmora-gold transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Hairline Divider */}
        <div className="border-t border-velmora-warmGray/20 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Payment Icons */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-velmora-warmGray mr-2">Secure Payment:</span>
            <div className="flex space-x-2">
              <div className="w-10 h-6 bg-velmora-warmGray/20 rounded flex items-center justify-center">
                <span className="text-xs text-velmora-warmGray">VISA</span>
              </div>
              <div className="w-10 h-6 bg-velmora-warmGray/20 rounded flex items-center justify-center">
                <span className="text-xs text-velmora-warmGray">MC</span>
              </div>
              <div className="w-10 h-6 bg-velmora-warmGray/20 rounded flex items-center justify-center">
                <span className="text-xs text-velmora-warmGray">AMEX</span>
              </div>
              <div className="w-10 h-6 bg-velmora-warmGray/20 rounded flex items-center justify-center">
                <span className="text-xs text-velmora-warmGray">PP</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-velmora-warmGray mr-2">Follow Us:</span>
            <a href="#" className="text-velmora-warmGray hover:text-velmora-gold transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-velmora-warmGray hover:text-velmora-gold transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-velmora-warmGray hover:text-velmora-gold transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-8 border-t border-velmora-warmGray/20">
          <p className="text-sm text-velmora-warmGray">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
