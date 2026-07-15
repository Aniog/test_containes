import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10 px-6 md:px-12 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="md:col-span-1">
          <Link to="/" className="text-2xl font-serif tracking-[0.2em] mb-6 block">
            VELMORA
          </Link>
          <p className="text-gray-500 font-sans text-sm leading-relaxed mb-6 max-w-xs">
            Timeless, demi-fine jewelry designed for the modern woman. Crafted with care, made to be treasured.
          </p>
          <div className="flex gap-4">
            <Instagram size={20} className="hover:opacity-60 cursor-pointer transition-opacity" />
            <Facebook size={20} className="hover:opacity-60 cursor-pointer transition-opacity" />
            <Twitter size={20} className="hover:opacity-60 cursor-pointer transition-opacity" />
          </div>
        </div>

        <div>
          <h4 className="font-serif uppercase tracking-widest text-sm mb-6">Shop</h4>
          <ul className="flex flex-col gap-3">
            {['All Jewelry', 'Earrings', 'Necklaces', 'New Arrivals', 'Collections'].map((item) => (
              <li key={item}>
                <Link to="/shop" className="text-sm text-gray-500 hover:text-black transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif uppercase tracking-widest text-sm mb-6">Help</h4>
          <ul className="flex flex-col gap-3">
            {['Shipping & Returns', 'FAQ', 'Size Guide', 'Contact Us', 'Care Guide'].map((item) => (
              <li key={item}>
                <Link to="/" className="text-sm text-gray-500 hover:text-black transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif uppercase tracking-widest text-sm mb-6">Company</h4>
          <ul className="flex flex-col gap-3">
            {['Our Story', 'Journal', 'Sustainability', 'Careers', 'Privacy Policy'].map((item) => (
              <li key={item}>
                <Link to="/" className="text-sm text-gray-500 hover:text-black transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs text-gray-400 font-sans">
          &copy; {currentYear} VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-6 opacity-30 grayscale">
          {/* Payment Icons Placeholder */}
          <div className="text-xs font-sans tracking-widest">VISA</div>
          <div className="text-xs font-sans tracking-widest">MASTERCARD</div>
          <div className="text-xs font-sans tracking-widest">AMEX</div>
          <div className="text-xs font-sans tracking-widest">PAYPAL</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
