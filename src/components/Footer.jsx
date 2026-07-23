import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-2xl mb-6">VELMORA</h3>
            <p className="text-[#9A8F87] text-sm leading-relaxed">
              Demi-fine gold jewelry crafted to be treasured. 
              Each piece tells a story of elegance and meaning.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-sm uppercase tracking-wider mb-6">Shop</h4>
            <ul className="space-y-3">
              {['Earrings', 'Necklaces', 'Huggies', 'New Arrivals', 'Bestsellers'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-[#9A8F87] hover:text-[#C9A96E] transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm uppercase tracking-wider mb-6">Help</h4>
            <ul className="space-y-3">
              {['Shipping & Returns', 'FAQ', 'Size Guide', 'Care Instructions', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link to="/help" className="text-[#9A8F87] hover:text-[#C9A96E] transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm uppercase tracking-wider mb-6">Company</h4>
            <ul className="space-y-3">
              {['Our Story', 'Sustainability', 'Press', 'Careers', 'Wholesale'].map((item) => (
                <li key={item}>
                  <Link to="/company" className="text-[#9A8F87] hover:text-[#C9A96E] transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2C2C2C] pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#9A8F87] text-sm">
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {['Instagram', 'Facebook', 'Pinterest'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-[#9A8F87] hover:text-[#C9A96E] transition-colors text-sm"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
