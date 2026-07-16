import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-50 border-t border-stone-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
        <div className="space-y-6">
          <Link to="/" className="text-2xl font-serif tracking-widest text-stone-900">
            VELMORA
          </Link>
          <p className="text-stone-500 text-sm leading-relaxed max-w-xs">
            Timeless jewelry for the modern woman. Ethically sourced, thoughtfully designed, and crafted to last.
          </p>
          <div className="flex space-x-6 text-stone-400">
            <a href="#" className="hover:text-stone-900 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-stone-900 transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-stone-900 transition-colors"><Twitter size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="serif-caps text-sm mb-6">Shop</h4>
          <ul className="space-y-4 text-sm text-stone-500 font-sans">
            <li><Link to="/shop" className="hover:text-stone-900 transition-colors">All Jewelry</Link></li>
            <li><Link to="/shop?category=Necklaces" className="hover:text-stone-900 transition-colors">Necklaces</Link></li>
            <li><Link to="/shop?category=Earrings" className="hover:text-stone-900 transition-colors">Earrings</Link></li>
            <li><Link to="/shop?category=Huggies" className="hover:text-stone-900 transition-colors">Huggies</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="serif-caps text-sm mb-6">Help</h4>
          <ul className="space-y-4 text-sm text-stone-500 font-sans">
            <li><a href="#" className="hover:text-stone-900 transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-stone-900 transition-colors">Jewelry Care</a></li>
            <li><a href="#" className="hover:text-stone-900 transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-stone-900 transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="serif-caps text-sm mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-stone-500 font-sans">
            <li><Link to="/about" className="hover:text-stone-900 transition-colors">Our Story</Link></li>
            <li><Link to="/journal" className="hover:text-stone-900 transition-colors">Journal</Link></li>
            <li><a href="#" className="hover:text-stone-900 transition-colors">Sustainability</a></li>
            <li><a href="#" className="hover:text-stone-900 transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center pt-10 border-t border-stone-100">
        <p className="text-[10px] text-stone-400 uppercase tracking-widest mb-4 md:mb-0">
          © {new Date().getFullYear()} VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.
        </p>
        <div className="flex space-x-6 grayscale opacity-50">
           {/* Placeholder for payment icons */}
           <span className="text-[10px] text-stone-400">VISA</span>
           <span className="text-[10px] text-stone-400">MASTERCARD</span>
           <span className="text-[10px] text-stone-400">AMEX</span>
           <span className="text-[10px] text-stone-400">PAYPAL</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
