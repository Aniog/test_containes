import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="text-3xl font-serif tracking-widest mb-6 block uppercase">VELMORA</Link>
            <p className="text-muted-foreground text-sm max-w-sm mb-6">
              Finely crafted jewelry designed for the modern woman. Timeless pieces that tell your story.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="p-2 bg-white rounded-full hover:bg-black hover:text-white transition-all"><Instagram className="w-4 h-4" /></Link>
              <Link to="#" className="p-2 bg-white rounded-full hover:bg-black hover:text-white transition-all"><Facebook className="w-4 h-4" /></Link>
              <Link to="#" className="p-2 bg-white rounded-full hover:bg-black hover:text-white transition-all"><Twitter className="w-4 h-4" /></Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif uppercase tracking-widest text-sm mb-6">Shop</h4>
            <ul className="space-y-4 text-sm font-sans text-muted-foreground">
              <li><Link to="/shop" className="hover:text-black">All Jewelry</Link></li>
              <li><Link to="/shop" className="hover:text-black">New Arrivals</Link></li>
              <li><Link to="/shop" className="hover:text-black">Bestsellers</Link></li>
              <li><Link to="/shop" className="hover:text-black">Gift Sets</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif uppercase tracking-widest text-sm mb-6">Support</h4>
            <ul className="space-y-4 text-sm font-sans text-muted-foreground">
              <li><Link to="#" className="hover:text-black">Shipping & Returns</Link></li>
              <li><Link to="#" className="hover:text-black">Care Guide</Link></li>
              <li><Link to="#" className="hover:text-black">FAQ</Link></li>
              <li><Link to="#" className="hover:text-black">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif uppercase tracking-widest text-sm mb-6">Brand</h4>
            <ul className="space-y-4 text-sm font-sans text-muted-foreground">
              <li><Link to="#" className="hover:text-black">Our Story</Link></li>
              <li><Link to="#" className="hover:text-black">Ethical Sourcing</Link></li>
              <li><Link to="#" className="hover:text-black">Journal</Link></li>
              <li><Link to="#" className="hover:text-black">Terms & Privacy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted/30 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          <p>© 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center space-x-6">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>AMEX</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
