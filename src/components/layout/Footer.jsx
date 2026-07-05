import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t px-6 py-12 md:px-12 lg:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="text-2xl font-serif tracking-widest block mb-6">
            VELMORA
          </Link>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Demi-fine gold jewelry crafted for the modern woman. Quiet luxury for everyday treasures.
          </p>
          <div className="flex space-x-4 mt-8">
            <Instagram size={18} className="hover:opacity-50 cursor-pointer" />
            <Facebook size={18} className="hover:opacity-50 cursor-pointer" />
            <Twitter size={18} className="hover:opacity-50 cursor-pointer" />
          </div>
        </div>

        {/* Links Columns */}
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6 text-black">Shop</h4>
          <ul className="space-y-4">
            {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Collections'].map((item) => (
              <li key={item}>
                <Link to="/shop" className="text-[11px] uppercase tracking-widest text-muted-foreground hover:text-black transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6 text-black">Help</h4>
          <ul className="space-y-4">
            {['Shipping', 'Returns', 'Care Guide', 'FAQ', 'Contact'].map((item) => (
              <li key={item}>
                <button className="text-[11px] uppercase tracking-widest text-muted-foreground hover:text-black transition-colors">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6 text-black">Company</h4>
          <ul className="space-y-4">
            {['Our Story', 'Journal', 'Privacy Policy', 'Terms of Service'].map((item) => (
              <li key={item}>
                <button className="text-[11px] uppercase tracking-widest text-muted-foreground hover:text-black transition-colors">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
          © 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.
        </p>
        <div className="flex space-x-6 text-[10px] uppercase tracking-widest text-muted-foreground">
          <span>VISA</span>
          <span>MASTERCARD</span>
          <span>AMEX</span>
          <span>PAYPAL</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
