import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <Link to="/" className="text-2xl font-serif tracking-tighter">VELMORA</Link>
          <p className="text-sm text-black/60 leading-relaxed font-light">
            Crafting demi-fine jewelry for the modern woman. Quiet luxury, timeless designs, and ethical craftsmanship.
          </p>
          <div className="flex space-x-4">
            <Instagram size={20} className="hover:text-brand-gold cursor-pointer transition-colors" />
            <Facebook size={20} className="hover:text-brand-gold cursor-pointer transition-colors" />
            <Twitter size={20} className="hover:text-brand-gold cursor-pointer transition-colors" />
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest font-semibold mb-6">Shop</h4>
          <ul className="space-y-4 text-sm text-black/60 font-light">
            <li><Link to="/shop?category=earrings" className="hover:text-black transition-colors">Earrings</Link></li>
            <li><Link to="/shop?category=necklaces" className="hover:text-black transition-colors">Necklaces</Link></li>
            <li><Link to="/shop?category=huggies" className="hover:text-black transition-colors">Huggies</Link></li>
            <li><Link to="/collections" className="hover:text-black transition-colors">New Arrivals</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest font-semibold mb-6">Help</h4>
          <ul className="space-y-4 text-sm text-black/60 font-light">
            <li><Link to="/" className="hover:text-black transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/" className="hover:text-black transition-colors">Care Guide</Link></li>
            <li><Link to="/" className="hover:text-black transition-colors">FAQ</Link></li>
            <li><Link to="/" className="hover:text-black transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest font-semibold mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-black/60 font-light">
            <li><Link to="/about" className="hover:text-black transition-colors">Our Story</Link></li>
            <li><Link to="/journal" className="hover:text-black transition-colors">Journal</Link></li>
            <li><Link to="/" className="hover:text-black transition-colors">Sustainability</Link></li>
            <li><Link to="/" className="hover:text-black transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-black/40 text-center gap-4">
        <p>© 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-6">
          <span>Visa</span>
          <span>Mastercard</span>
          <span>Amex</span>
          <span>Apple Pay</span>
          <span>PayPal</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
