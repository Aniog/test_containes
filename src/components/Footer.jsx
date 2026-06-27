import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, CreditCard } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    Shop: ['Earrings', 'Necklaces', 'Huggies', 'New Arrivals', 'Best Sellers'],
    Help: ['FAQ', 'Shipping & Returns', 'Size Guide', 'Care Instructions', 'Contact Us'],
    Company: ['Our Story', 'Journal', 'Sustainability', 'Press', 'Wholesale'],
  };

  return (
    <footer className="bg-velmora-black text-white py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-3xl tracking-widest font-light block mb-4">
              VELMORA
            </Link>
            <p className="text-sm text-gray-400 mb-6">
              Fine jewelry crafted to be treasured. Each piece is designed with intention and made to last.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-velmora-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-velmora-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-velmora-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-serif text-sm uppercase tracking-wider mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to="#"
                      className="text-sm text-gray-400 hover:text-velmora-gold transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Payment Icons & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <CreditCard size={24} className="text-gray-400" />
            <span className="text-sm text-gray-400">Secure Payment</span>
          </div>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
