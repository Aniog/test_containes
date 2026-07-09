import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-velmora-dark text-velmora-base pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-3xl tracking-widest uppercase block mb-6">
              Velmora
            </Link>
            <p className="text-velmora-muted text-sm leading-relaxed max-w-sm mb-6">
              Crafted to be treasured. Fine gold demi-jewelry for the modern romantic. Elevate your everyday.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-velmora-base hover:text-velmora-gold transition-colors">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-velmora-base hover:text-velmora-gold transition-colors">
                <Facebook size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-velmora-base hover:text-velmora-gold transition-colors">
                <Twitter size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg tracking-wider uppercase mb-6">Shop</h3>
            <ul className="space-y-4 text-sm text-velmora-muted">
              <li><Link to="/shop" className="hover:text-velmora-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-velmora-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-velmora-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-velmora-gold transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=sets" className="hover:text-velmora-gold transition-colors">Sets & Gifts</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg tracking-wider uppercase mb-6">Help</h3>
            <ul className="space-y-4 text-sm text-velmora-muted">
              <li><a href="#" className="hover:text-velmora-gold transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-velmora-gold transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-velmora-gold transition-colors">Jewelry Care</a></li>
              <li><a href="#" className="hover:text-velmora-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg tracking-wider uppercase mb-6">Stay Connected</h3>
            <p className="text-sm text-velmora-muted mb-4">Subscribe for 10% off your first order.</p>
            <form className="relative border-b border-velmora-muted flex">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-transparent py-3 pr-10 outline-none text-sm placeholder-velmora-muted/50"
                required
              />
              <button type="submit" className="absolute right-0 top-0 bottom-0 text-velmora-base hover:text-velmora-gold transition-colors flex items-center">
                <ArrowRight size={20} strokeWidth={1.5} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-velmora-muted/30 flex flex-col md:flex-row justify-between items-center text-xs text-velmora-muted">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-velmora-base transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-velmora-base transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;