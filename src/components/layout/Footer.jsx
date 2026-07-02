import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t-[0.5px] border-slate-200 px-6 py-16 md:px-12 md:py-24">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* Brand & Social */}
        <div className="space-y-8">
          <Link
            to="/"
            className="font-serif text-3xl tracking-[0.1em] font-medium"
          >
            VELMORA
          </Link>
          <p className="text-slate-500 font-sans text-sm max-w-xs leading-relaxed">
            Quiet luxury demi-fine jewelry crafted for the modern woman. 18K Gold Plated. Hypoallergenic.
          </p>
          <div className="flex gap-6">
            <Instagram className="w-5 h-5 text-slate-400 hover:text-[#C5A059] cursor-pointer transition-colors" />
            <Facebook className="w-5 h-5 text-slate-400 hover:text-[#C5A059] cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 text-slate-400 hover:text-[#C5A059] cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Shop Links */}
        <div className="space-y-6">
          <h4 className="font-sans text-xs uppercase tracking-[0.2em] font-medium text-slate-800">Shop</h4>
          <ul className="space-y-4">
            {['All Jewelry', 'Earrings', 'Necklaces', 'New Arrivals', 'Bestsellers'].map((item) => (
              <li key={item}>
                <Link to="/shop" className="text-slate-500 hover:text-[#C5A059] text-sm font-sans transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Help Links */}
        <div className="space-y-6">
          <h4 className="font-sans text-xs uppercase tracking-[0.2em] font-medium text-slate-800">Help</h4>
          <ul className="space-y-4">
            {['Shipping & Delivery', 'Returns & Exchanges', 'Care Guide', 'FAQ', 'Contact Us'].map((item) => (
              <li key={item}>
                <Link to="#" className="text-slate-500 hover:text-[#C5A059] text-sm font-sans transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Links */}
        <div className="space-y-6">
          <h4 className="font-sans text-xs uppercase tracking-[0.2em] font-medium text-slate-800">Company</h4>
          <ul className="space-y-4">
            {['About Us', 'Journal', 'Wholesale', 'Privacy Policy', 'Terms of Service'].map((item) => (
              <li key={item}>
                <Link to="#" className="text-slate-500 hover:text-[#C5A059] text-sm font-sans transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto mt-20 pt-8 border-t-[0.5px] border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-400 text-xs font-sans">
          © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
        </p>
        <div className="flex gap-4 grayscale opacity-40">
          <div className="w-8 h-4 bg-slate-200 rounded-sm" title="Visa" />
          <div className="w-8 h-4 bg-slate-200 rounded-sm" title="Mastercard" />
          <div className="w-8 h-4 bg-slate-200 rounded-sm" title="PayPal" />
          <div className="w-8 h-4 bg-slate-200 rounded-sm" title="Amex" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
