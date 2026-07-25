import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-velmora-ink text-background pt-20 pb-10 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
        
        {/* Brand */}
        <div className="col-span-1 lg:col-span-2 pr-0 lg:pr-12">
          <Link to="/" className="font-serif text-3xl tracking-widest block mb-6">
            VELMORA
          </Link>
          <p className="text-velmora-sand/80 max-w-sm font-light mb-8">
            Crafted for the modern muse. Demi-fine jewelry designed to be loved, layered, and lived in.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-velmora-sand hover:text-velmora-gold transition-colors" aria-label="Instagram">
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a href="#" className="text-velmora-sand hover:text-velmora-gold transition-colors" aria-label="Facebook">
              <Facebook size={20} strokeWidth={1.5} />
            </a>
            <a href="#" className="text-velmora-sand hover:text-velmora-gold transition-colors" aria-label="Twitter">
              <Twitter size={20} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h4 className="font-serif text-lg tracking-wider mb-6 text-velmora-gold">Shop</h4>
          <ul className="space-y-4 text-sm tracking-wide text-velmora-sand/80">
            <li><Link to="/shop" className="hover:text-velmora-sand transition-colors">All Jewelry</Link></li>
            <li><Link to="/shop" className="hover:text-velmora-sand transition-colors">Earrings</Link></li>
            <li><Link to="/shop" className="hover:text-velmora-sand transition-colors">Necklaces</Link></li>
            <li><Link to="/shop" className="hover:text-velmora-sand transition-colors">Huggies</Link></li>
            <li><Link to="/shop" className="hover:text-velmora-sand transition-colors">Best Sellers</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="font-serif text-lg tracking-wider mb-6 text-velmora-gold">Help</h4>
          <ul className="space-y-4 text-sm tracking-wide text-velmora-sand/80">
            <li><a href="#" className="hover:text-velmora-sand transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-velmora-sand transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-velmora-sand transition-colors">Jewelry Care</a></li>
            <li><a href="#" className="hover:text-velmora-sand transition-colors">Contact Us</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-velmora-sand/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-velmora-sand/50 tracking-wider">
        <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-velmora-sand transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-velmora-sand transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
