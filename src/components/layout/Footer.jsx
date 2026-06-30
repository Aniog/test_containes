import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-muted pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 mb-20">
          <div className="space-y-8">
            <h2 className="text-2xl font-serif tracking-[0.3em] font-medium">VELMORA</h2>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed font-light">
              Elevating the everyday with demi-fine jewelry that captures the essence of quiet luxury. Crafted to be treasured, worn, and lived in.
            </p>
            <div className="flex gap-6">
              <Instagram size={18} strokeWidth={1.5} className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
              <Facebook size={18} strokeWidth={1.5} className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
              <Twitter size={18} strokeWidth={1.5} className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-8">Shop</h3>
            <ul className="space-y-4 text-sm font-light text-muted-foreground">
              <li><Link to="/shop" className="hover:text-foreground transition-colors">All Jewelry</Link></li>
              <li><Link to="/collections/earrings" className="hover:text-foreground transition-colors">Earrings</Link></li>
              <li><Link to="/collections/necklaces" className="hover:text-foreground transition-colors">Necklaces</Link></li>
              <li><Link to="/collections/rings" className="hover:text-foreground transition-colors">Rings & Huggies</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-8">Help</h3>
            <ul className="space-y-4 text-sm font-light text-muted-foreground">
              <li><Link to="/shipping" className="hover:text-foreground transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="hover:text-foreground transition-colors">Materials & Care</Link></li>
              <li><Link to="/faq" className="hover:text-foreground transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-8">Newsletter</h3>
            <p className="text-sm font-light text-muted-foreground mb-6 leading-relaxed">
              Join the Velmora circle for exclusive previews and 15% off your first order.
            </p>
            <form className="flex border-b border-muted-foreground/30 pb-2 focus-within:border-foreground transition-colors group">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent border-none outline-none text-sm w-full font-light placeholder:text-muted-foreground/50 transition-all"
              />
              <button className="text-[10px] font-bold uppercase tracking-widest ml-2 group-hover:translate-x-1 transition-transform">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-muted flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground opacity-60">
            © {new Date().getFullYear()} VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 grayscale opacity-40">
             <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-3" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-5" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-3" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Debit_logo.svg" alt="Visa Debit" className="h-3 md:block hidden" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
