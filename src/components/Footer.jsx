import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="font-serif text-2xl tracking-wider uppercase mb-4">
              Velmora
            </h3>
            <p className="text-gray-400 text-sm">
              Demi-fine gold jewelry crafted for everyday elegance. 
              Each piece is designed to be treasured.
            </p>
          </div>

          <div>
            <h4 className="font-medium tracking-wider uppercase mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shop?category=Earrings" className="text-gray-400 hover:text-white text-sm">
                  Earrings
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Necklaces" className="text-gray-400 hover:text-white text-sm">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Huggies" className="text-gray-400 hover:text-white text-sm">
                  Huggies
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-white text-sm">
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium tracking-wider uppercase mb-4">Help</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shipping" className="text-gray-400 hover:text-white text-sm">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/care" className="text-gray-400 hover:text-white text-sm">
                  Jewelry Care
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium tracking-wider uppercase mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white text-sm">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/journal" className="text-gray-400 hover:text-white text-sm">
                  Journal
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-gray-400 hover:text-white text-sm">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Instagram size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Facebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
