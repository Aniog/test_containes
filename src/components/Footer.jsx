import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-velmora-stone border-t border-velmora-dark/5 pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        {/* Column 1: Brand */}
        <div className="space-y-6">
          <Link to="/">
            <h2 className="font-serif text-2xl tracking-wider text-velmora-dark">VELMORA</h2>
          </Link>
          <p className="text-velmora-muted text-sm leading-relaxed max-w-xs">
            Refined gold jewelry designed for the modern woman. Timeless pieces to be treasured for a lifetime.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-velmora-dark hover:text-velmora-gold transition-colors">
              <Instagram size={18} strokeWidth={1.5} />
            </a>
            <a href="#" className="text-velmora-dark hover:text-velmora-gold transition-colors">
              <Facebook size={18} strokeWidth={1.5} />
            </a>
            <a href="#" className="text-velmora-dark hover:text-velmora-gold transition-colors">
              <Twitter size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Column 2: Shop */}
        <div className="space-y-6">
          <h3 className="uppercase tracking-widest text-[11px] font-sans font-semibold text-velmora-dark">Shop</h3>
          <ul className="space-y-3">
            {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Collections'].map((item) => (
              <li key={item}>
                <Link to="/shop" className="text-velmora-muted hover:text-velmora-gold text-sm transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Help */}
        <div className="space-y-6">
          <h3 className="uppercase tracking-widest text-[11px] font-sans font-semibold text-velmora-dark">Help</h3>
          <ul className="space-y-3">
            {['Shipping', 'Returns', 'Size Guide', 'Jewelry Care', 'Contact Us'].map((item) => (
              <li key={item}>
                <a href="#" className="text-velmora-muted hover:text-velmora-gold text-sm transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="space-y-6">
          <h3 className="uppercase tracking-widest text-[11px] font-sans font-semibold text-velmora-dark">Contact</h3>
          <div className="space-y-3">
            <p className="text-velmora-muted text-sm flex items-center gap-2">
              <Mail size={14} /> concierge@velmora.com
            </p>
            <p className="text-velmora-muted text-sm">
              Monday — Friday<br />
              9:00am — 5:00pm EST
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-velmora-dark/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] uppercase tracking-widest text-velmora-muted">
        <p>&copy; {currentYear} Velmora Fine Jewelry. All Rights Reserved.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-velmora-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-velmora-gold transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
