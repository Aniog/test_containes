import { Link } from 'react-router-dom';
import { Instagram, Facebook, Globe } from 'lucide-react';

const footerLinks = {
  shop: ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'],
  help: ['Shipping & Returns', 'Size Guide', 'Jewelry Care', 'FAQs', 'Contact Us'],
  company: ['Our Story', 'Sustainability', 'Journal', 'Stockists', 'Careers'],
};

export default function Footer() {
  return (
    <footer className="bg-warm-dark text-white/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-[0.2em] text-white">
              VELMORA
            </Link>
            <p className="text-sm text-white/50 mt-4 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for everyday elegance. 18K gold-plated, ethically made, designed to be treasured.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-white/50 hover:text-gold transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="text-white/50 hover:text-gold transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="text-white/50 hover:text-gold transition-colors"><Globe className="w-4 h-4" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-serif text-white text-sm tracking-widest uppercase mb-4">Shop</h4>
            <ul className="space-y-2.5">
              {footerLinks.shop.map(link => (
                <li key={link}><Link to="/shop" className="text-sm text-white/50 hover:text-gold transition-colors">{link}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-white text-sm tracking-widest uppercase mb-4">Help</h4>
            <ul className="space-y-2.5">
              {footerLinks.help.map(link => (
                <li key={link}><a href="#" className="text-sm text-white/50 hover:text-gold transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-white text-sm tracking-widest uppercase mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map(link => (
                <li key={link}><a href="#" className="text-sm text-white/50 hover:text-gold transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-white/40">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
