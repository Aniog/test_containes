import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-stone-muted pt-20 pb-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <Link to="/" className="text-2xl font-serif tracking-widest mb-6 block">VELMORA</Link>
            <p className="text-stone-500 text-sm leading-relaxed max-w-xs mb-8">
              Exquisite demi-fine jewelry designed for the modern woman. 
              Each piece is crafted with intention to tell your unique story.
            </p>
            <div className="flex gap-4">
              <Link to="#" className="text-obsidian hover:text-gold transition-colors"><Instagram className="w-5 h-5" /></Link>
              <Link to="#" className="text-obsidian hover:text-gold transition-colors"><Facebook className="w-5 h-5" /></Link>
              <Link to="#" className="text-obsidian hover:text-gold transition-colors"><Twitter className="w-5 h-5" /></Link>
            </div>
          </div>

          <div>
            <h4 className="font-medium tracking-widest uppercase text-xs mb-8 border-b border-stone-muted pb-2">Shop</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/shop" className="text-stone-600 hover:text-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop/earrings" className="text-stone-600 hover:text-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop/necklaces" className="text-stone-600 hover:text-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop/huggies" className="text-stone-600 hover:text-gold transition-colors">Huggies</Link></li>
              <li><Link to="/collections" className="text-stone-600 hover:text-gold transition-colors">Collections</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium tracking-widest uppercase text-xs mb-8 border-b border-stone-muted pb-2">Customer Care</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/help" className="text-stone-600 hover:text-gold transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="text-stone-600 hover:text-gold transition-colors">Materials & Care</Link></li>
              <li><Link to="/faq" className="text-stone-600 hover:text-gold transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-stone-600 hover:text-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium tracking-widest uppercase text-xs mb-8 border-b border-stone-muted pb-2">Newsletter</h4>
            <p className="text-stone-500 text-sm mb-6">Join our community for early access and editorial stories.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-parchment border-b border-stone-muted px-0 py-3 text-xs tracking-widest focus:outline-none focus:border-gold transition-colors"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] tracking-[0.2em] font-bold hover:text-gold transition-colors">JOIN</button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-muted gap-4">
          <p className="text-[10px] text-stone-400 tracking-widest uppercase">© 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6 grayscale opacity-40">
            {/* Payment Icons Placeholder */}
            <span className="text-[10px] tracking-widest uppercase">Visa</span>
            <span className="text-[10px] tracking-widest uppercase">Mastercard</span>
            <span className="text-[10px] tracking-widest uppercase">Amex</span>
            <span className="text-[10px] tracking-widest uppercase">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
