import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-onyx text-pearl pt-20 pb-10 px-6 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="space-y-6">
          <Link to="/" className="serif-uppercase text-2xl font-semibold tracking-[0.3em]">VELMORA</Link>
          <p className="text-stone-400 text-sm max-w-xs leading-relaxed">
            Elevating the everyday with thoughtfully crafted demi-fine jewelry. 
            Designed for the modern woman who treasures quiet luxury.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gold transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-gold transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-gold transition-colors"><Twitter size={20} /></a>
          </div>
        </div>

        <div>
           <h4 className="serif-uppercase text-xs tracking-widest mb-6 border-b border-stone-800 pb-2 inline-block">Shop</h4>
           <ul className="space-y-4 text-sm text-stone-400">
             <li><Link to="/shop" className="hover:text-gold">All Jewelry</Link></li>
             <li><Link to="/shop?cat=earrings" className="hover:text-gold">Earrings</Link></li>
             <li><Link to="/shop?cat=necklaces" className="hover:text-gold">Necklaces</Link></li>
             <li><Link to="/shop?cat=huggies" className="hover:text-gold">Huggies</Link></li>
           </ul>
        </div>

        <div>
           <h4 className="serif-uppercase text-xs tracking-widest mb-6 border-b border-stone-800 pb-2 inline-block">Help</h4>
           <ul className="space-y-4 text-sm text-stone-400">
             <li><a href="#" className="hover:text-gold">Shipping</a></li>
             <li><a href="#" className="hover:text-gold">Returns</a></li>
             <li><a href="#" className="hover:text-gold">Care Guide</a></li>
             <li><a href="#" className="hover:text-gold">FAQ</a></li>
           </ul>
        </div>

        <div>
           <h4 className="serif-uppercase text-xs tracking-widest mb-6 border-b border-stone-800 pb-2 inline-block">Company</h4>
           <ul className="space-y-4 text-sm text-stone-400">
             <li><Link to="/about" className="hover:text-gold">Our Story</Link></li>
             <li><Link to="/journal" className="hover:text-gold">Journal</Link></li>
             <li><a href="#" className="hover:text-gold">Contact</a></li>
           </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] serif-uppercase tracking-widest text-stone-500">
          © 2026 VELMORA FINE JEWELRY.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
