import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-velmora-sand/30 pt-20 pb-10 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20">
        <div className="space-y-6">
          <Link to="/" className="text-2xl font-serif tracking-widest">
            VELMORA
          </Link>
          <p className="text-velmora-charcoal/60 text-sm max-w-xs leading-relaxed">
            Demi-fine jewelry for the modern woman. Crafted with intention, designed to be treasured for a lifetime.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-velmora-charcoal/40 hover:text-velmora-charcoal transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-velmora-charcoal/40 hover:text-velmora-charcoal transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-velmora-charcoal/40 hover:text-velmora-charcoal transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="uppercase tracking-widest text-xs font-bold">Shop</h3>
          <ul className="space-y-3">
            {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'New Arrivals', 'Bestsellers'].map((item) => (
              <li key={item}>
                <Link to="/shop" className="text-velmora-charcoal/60 hover:text-velmora-charcoal text-sm transition-colors uppercase tracking-widest text-[10px]">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="uppercase tracking-widest text-xs font-bold">Help</h3>
          <ul className="space-y-3">
            {['Shipping', 'Returns', 'Sizing Guide', 'Care Guide', 'FAQ', 'Contact'].map((item) => (
              <li key={item}>
                <a href="#" className="text-velmora-charcoal/60 hover:text-velmora-charcoal text-sm transition-colors uppercase tracking-widest text-[10px]">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="uppercase tracking-widest text-xs font-bold">Company</h3>
          <ul className="space-y-3">
            {['Our Story', 'Journal', 'Affiliates', 'Wholesale', 'Privacy Policy', 'Terms'].map((item) => (
              <li key={item}>
                <a href="#" className="text-velmora-charcoal/60 hover:text-velmora-charcoal text-sm transition-colors uppercase tracking-widest text-[10px]">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-velmora-sand/20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] text-velmora-charcoal/40 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-4 grayscale opacity-40">
           {/* Payment icons placeholder */}
           <div className="bg-velmora-sand w-8 h-5 rounded-sm" />
           <div className="bg-velmora-sand w-8 h-5 rounded-sm" />
           <div className="bg-velmora-sand w-8 h-5 rounded-sm" />
           <div className="bg-velmora-sand w-8 h-5 rounded-sm" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
