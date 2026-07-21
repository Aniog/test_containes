import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-white py-16">
      <div className="container-luxury">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div>
            <h3 className="font-serif text-2xl tracking-widest mb-4">VELMORA</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Each piece is designed with intention,
              made to be worn and loved every day.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-wider mb-4">Shop</h4>
            <ul className="space-y-2">
              {['Earrings', 'Necklaces', 'Huggies', 'New Arrivals', 'Best Sellers'].map(
                item => (
                  <li key={item}>
                    <Link
                      to="/shop"
                      className="text-sm text-gray-400 hover:text-white transition"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-wider mb-4">Help</h4>
            <ul className="space-y-2">
              {['FAQ', 'Shipping & Returns', 'Size Guide', 'Care Instructions', 'Contact Us'].map(
                item => (
                  <li key={item}>
                    <Link
                      to="/help"
                      className="text-sm text-gray-400 hover:text-white transition"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              {['Our Story', 'Sustainability', 'Press', 'Careers', 'Wholesale'].map(item => (
                <li key={item}>
                  <Link
                    to="/company"
                    className="text-sm text-gray-400 hover:text-white transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <Facebook size={20} className="text-gray-400 hover:text-white cursor-pointer transition" />
            <Instagram size={20} className="text-gray-400 hover:text-white cursor-pointer transition" />
            <Twitter size={20} className="text-gray-400 hover:text-white cursor-pointer transition" />
          </div>

          <div className="flex gap-2">
            {['Visa', 'Mastercard', 'Amex', 'PayPal'].map(payment => (
              <div
                key={payment}
                className="bg-gray-700 text-gray-400 text-xs px-2 py-1 rounded"
              >
                {payment}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
