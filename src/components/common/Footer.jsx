import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-onyx text-white py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 sm:gap-8">
        {/* Brand */}
        <div className="col-span-1 md:col-span-2 space-y-6">
          <Link to="/" className="font-serif text-3xl tracking-widest uppercase font-bold">
            Velmora
          </Link>
          <p className="text-neutral-400 max-w-sm leading-relaxed">
            Crafting demi-fine jewelry that captures the essence of quiet luxury. 
            Pieces designed to be treasured, worn, and loved every day.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-accent transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Twitter size={20} /></a>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-6">
          <h4 className="text-sm uppercase tracking-[0.2em] font-bold">Shop</h4>
          <ul className="space-y-4 text-neutral-400 text-sm">
            <li><Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link></li>
            <li><Link to="/shop?category=Earrings" className="hover:text-white transition-colors">Earrings</Link></li>
            <li><Link to="/shop?category=Necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
            <li><Link to="/shop?category=Huggies" className="hover:text-white transition-colors">Huggies</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div className="space-y-6">
          <h4 className="text-sm uppercase tracking-[0.2em] font-bold">Company</h4>
          <ul className="space-y-4 text-neutral-400 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-neutral-500 uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All Rights Reserved.</p>
        <div className="flex gap-4 grayscale opacity-50">
          {/* Payment icons placeholders */}
          <span>Visa</span>
          <span>Mastercard</span>
          <span>Amex</span>
          <span>PayPal</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
