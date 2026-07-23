import React from 'react';
import { Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <h2 className="font-serif text-2xl tracking-[0.2em] uppercase mb-6 text-background">Velmora</h2>
            <p className="text-muted/80 font-serif italic text-lg mb-6 max-w-xs">
              Quiet luxury crafted for everyday wear. Demi-fine jewelry meant to be treasured.
            </p>
            <div className="flex space-x-4 text-background/70">
              <a href="#" className="hover:text-accent transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-accent transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-accent transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="font-sans font-medium uppercase tracking-widest text-xs mb-6 text-background/50">Shop</h3>
            <ul className="space-y-4 text-sm text-foreground-muted">
              <li><Link to="/collections" className="hover:text-accent transition-colors">All Jewelry</Link></li>
              <li><Link to="/collections?category=Earrings" className="hover:text-accent transition-colors">Earrings</Link></li>
              <li><Link to="/collections?category=Necklaces" className="hover:text-accent transition-colors">Necklaces</Link></li>
              <li><Link to="/collections?category=Huggies" className="hover:text-accent transition-colors">Huggies</Link></li>
              <li><Link to="/collections?category=Sets" className="hover:text-accent transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans font-medium uppercase tracking-widest text-xs mb-6 text-background/50">Help</h3>
            <ul className="space-y-4 text-sm text-foreground-muted">
              <li><a href="#" className="hover:text-accent transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Jewelry Care</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans font-medium uppercase tracking-widest text-xs mb-6 text-background/50">Stay Connected</h3>
            <p className="text-sm mb-4 text-muted/80">Join our newsletter for 10% off your first order and exclusive access to new launches.</p>
            <form className="flex border-b border-background/20 pb-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent border-none outline-none w-full text-sm text-background placeholder:text-background/40 focus:ring-0 px-0"
              />
              <button type="submit" className="text-background hover:text-accent transition-colors ml-2">
                <ArrowRight size={18} />
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center text-xs text-background/40">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}