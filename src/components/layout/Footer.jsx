import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-secondary pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="text-3xl font-serif tracking-widest">
              VELMORA
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed opacity-80">
              Capturing the essence of quiet luxury through demi-fine gold jewelry. 
              Designed for the modern woman who values timeless elegance.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-accent transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-accent transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-accent transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="font-serif uppercase tracking-widest text-lg mb-8">Shop</h4>
            <ul className="space-y-4 text-sm opacity-80 uppercase tracking-wider">
              <li><Link to="/shop?category=earrings" className="hover:text-accent transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-accent transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-accent transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-accent transition-colors">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h4 className="font-serif uppercase tracking-widest text-lg mb-8">Help</h4>
            <ul className="space-y-4 text-sm opacity-80 uppercase tracking-wider">
              <li><a href="#" className="hover:text-accent transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Care Guide</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-serif uppercase tracking-widest text-lg mb-8">Company</h4>
            <ul className="space-y-4 text-sm opacity-80 uppercase tracking-wider">
              <li><Link to="/about" className="hover:text-accent transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-accent transition-colors">Journal</Link></li>
              <li><a href="#" className="hover:text-accent transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Stockists</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p className="text-[10px] uppercase tracking-widest opacity-50">
            &copy; {currentYear} Velmora Fine Jewelry. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
            <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="h-6" />
            <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" className="h-6" />
            <img src="https://img.icons8.com/color/48/amex.png" alt="Amex" className="h-6" />
            <img src="https://img.icons8.com/color/48/paypal.png" alt="Paypal" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
