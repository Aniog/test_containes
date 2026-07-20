import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-16 border-t border-foreground/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          <div className="md:col-span-1 border-b border-white/20 pb-8 md:border-b-0 md:pb-0">
            <Link to="/" className="font-serif text-3xl tracking-widest uppercase block mb-6">
              Velmora
            </Link>
            <p className="text-white/80 text-sm max-w-sm mb-6 leading-relaxed">
              Fine jewelry designed to be treasured everyday. Crafted with sustainable materials for the modern individual.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors text-white/80"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary transition-colors text-white/80"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary transition-colors text-white/80"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg tracking-wider mb-6">Shop</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li><Link to="/shop" className="hover:text-primary transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-primary transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-primary transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-primary transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=Rings" className="hover:text-primary transition-colors">Rings</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg tracking-wider mb-6">Help</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Jewelry Care</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Ring Sizing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
             <h4 className="font-serif text-lg tracking-wider mb-6">Newsletter</h4>
             <p className="text-sm text-white/80 mb-4">Subscribe to receive 10% off your first order.</p>
             <form className="flex border-b border-white/30 pb-2">
               <input 
                 type="email" 
                 placeholder="Your email address" 
                 className="bg-transparent border-none outline-none text-sm placeholder:text-white/50 flex-grow text-white"
                 required
               />
               <button type="submit" className="text-sm tracking-wider uppercase hover:text-primary transition-colors">
                 Join
               </button>
             </form>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center text-xs text-white/60">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}