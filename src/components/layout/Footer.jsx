import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, ShieldCheck, Truck, RefreshCcw } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 py-16 px-4 md:px-12 border-t border-stone-800">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="text-white font-serif text-2xl tracking-[0.2em]">VELMORA</Link>
          <p className="text-sm leading-relaxed max-w-xs">
            Demis-fine jewelry crafted for the modern woman. Quiet luxury for everyday moments.
          </p>
          <div className="flex gap-4">
            <Instagram className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
            <Facebook className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Shop */}
        <div className="space-y-6">
          <h4 className="text-white font-sans text-xs uppercase tracking-super-wide font-semibold">Shop</h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li><Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link></li>
            <li><Link to="/shop?category=Earrings" className="hover:text-white transition-colors">Earrings</Link></li>
            <li><Link to="/shop?category=Necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
            <li><Link to="/shop?category=Huggies" className="hover:text-white transition-colors">Huggies</Link></li>
            <li><Link to="/shop?category=Collections" className="hover:text-white transition-colors">Gift Sets</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div className="space-y-6">
          <h4 className="text-white font-sans text-xs uppercase tracking-super-wide font-semibold">Company</h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
            <li><Link to="/journal" className="hover:text-white transition-colors">Journal</Link></li>
            <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div className="space-y-6">
          <h4 className="text-white font-sans text-xs uppercase tracking-super-wide font-semibold">Support</h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/care" className="hover:text-white transition-colors">Jewelry Care</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] uppercase tracking-widest font-sans">© 2026 VELMORA FINE JEWELRY. All Rights Reserved.</p>
        <div className="flex items-center gap-4 grayscale opacity-50">
          <Truck className="w-5 h-5" />
          <RefreshCcw className="w-5 h-5" />
          <ShieldCheck className="w-5 h-5" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
