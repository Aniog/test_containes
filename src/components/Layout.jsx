import React from 'react';
import Navbar from './Navbar';
import CartDrawer from './CartDrawer';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <CartDrawer />
      
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="bg-foreground text-white pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1 border-b md:border-b-0 border-white/10 pb-8 md:pb-0">
              <Link to="/" className="font-serif text-3xl tracking-widest uppercase inline-block mb-6">
                VELMORA
              </Link>
              <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
                Crafted to be treasured. Direct-to-consumer demi-fine jewelry designed for the modern editorial wardrobe.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-white/60 hover:text-white transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-white/60 hover:text-white transition-colors"><Facebook size={20} /></a>
                <a href="#" className="text-white/60 hover:text-white transition-colors"><Twitter size={20} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium uppercase tracking-widest text-sm mb-6">Shop</h4>
              <ul className="space-y-4 text-sm text-white/60">
                <li><Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link></li>
                <li><Link to="/shop?category=earrings" className="hover:text-white transition-colors">Earrings</Link></li>
                <li><Link to="/shop?category=necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
                <li><Link to="/shop?category=huggies" className="hover:text-white transition-colors">Huggies & Hoops</Link></li>
                <li><Link to="/shop?category=new" className="hover:text-white transition-colors">New Arrivals</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium uppercase tracking-widest text-sm mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Materials & Care</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Journal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium uppercase tracking-widest text-sm mb-6">Help</h4>
              <ul className="space-y-4 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ring Sizer</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 gap-4">
            <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;