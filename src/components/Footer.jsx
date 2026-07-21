import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted pt-20 pb-10 border-t border-border mt-32">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1">
            <Link to="/" className="text-2xl font-serif tracking-[0.2em] uppercase mb-6 block">
              VELMORA
            </Link>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the modern woman. Quiet luxury for everyday treasures.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold mb-6">Shop</h4>
            <ul className="flex flex-col gap-4 italic font-serif">
              {['Necklaces', 'Earrings', 'Huggies', 'New Arrivals'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold mb-6">Help</h4>
            <ul className="flex flex-col gap-4">
              {['Shipping & Returns', 'Jewelry Care', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold mb-6">Company</h4>
            <ul className="flex flex-col gap-4">
              {['Our Story', 'Journal', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50 gap-6">
          <div className="flex gap-6">
            <Instagram className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
            <Facebook className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
            <Twitter className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
          </div>
          
          <p className="text-[9px] text-muted-foreground uppercase tracking-[0.3em]">
            © 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.
          </p>

          <div className="flex gap-4 opacity-50 grayscale flex-wrap justify-center">
            <img src="https://img.icons8.com/color/48/visa.png" className="h-4" alt="Visa" />
            <img src="https://img.icons8.com/color/48/mastercard.png" className="h-4" alt="Mastercard" />
            <img src="https://img.icons8.com/color/48/amex.png" className="h-4" alt="Amex" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
