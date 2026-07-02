import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-zinc-100 pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="text-2xl font-serif tracking-super-wide text-primary">
            VELMORA
          </Link>
          <p className="mt-6 text-muted text-sm leading-relaxed max-w-xs">
            Timeless fine jewelry designed for the modern woman. Each piece is crafted with intention and a commitment to enduring quality.
          </p>
          <div className="mt-8 flex gap-5">
            <Instagram size={18} className="text-zinc-400 hover:text-primary transition-colors cursor-pointer" />
            <Facebook size={18} className="text-zinc-400 hover:text-primary transition-colors cursor-pointer" />
            <Twitter size={18} className="text-zinc-400 hover:text-primary transition-colors cursor-pointer" />
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest font-semibold mb-6">Shop</h4>
          <ul className="flex flex-col gap-4">
            {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Collections'].map((item) => (
              <li key={item}>
                <Link to="/shop" className="text-sm text-zinc-500 hover:text-primary transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest font-semibold mb-6">Help</h4>
          <ul className="flex flex-col gap-4">
            {['Shipping', 'Returns', 'Sizing', 'Care Guide', 'Contact'].map((item) => (
              <li key={item}>
                <Link to="#" className="text-sm text-zinc-500 hover:text-primary transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest font-semibold mb-6">Company</h4>
          <ul className="flex flex-col gap-4">
            {['Our Story', 'Sustainability', 'Stockists', 'Careers', 'Privacy'].map((item) => (
              <li key={item}>
                <Link to="/about" className="text-sm text-zinc-500 hover:text-primary transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] text-zinc-400 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All Rights Reserved.
        </p>
        <div className="flex gap-6 grayscale opacity-50">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Apple_Pay_logo.svg" alt="Apple Pay" className="h-4" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
