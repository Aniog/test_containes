import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-brand-charcoal/5 pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="text-2xl font-serif tracking-[0.2em] text-brand-charcoal">
            VELMORA
          </Link>
          <p className="mt-6 text-sm text-brand-espresso/60 leading-relaxed font-sans max-w-xs">
            Curated demi-fine jewelry designed for the modern woman. Quiet luxury, crafted to be treasured for a lifetime.
          </p>
          <div className="flex space-x-5 mt-8">
            <a href="#" className="text-brand-espresso/60 hover:text-brand-gold transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-brand-espresso/60 hover:text-brand-gold transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-brand-espresso/60 hover:text-brand-gold transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-brand-charcoal mb-6">Shop</h4>
          <ul className="space-y-4">
            <li><Link to="/shop?category=Earrings" className="text-sm text-brand-espresso/60 hover:text-brand-gold transition-colors">Earrings</Link></li>
            <li><Link to="/shop?category=Necklaces" className="text-sm text-brand-espresso/60 hover:text-brand-gold transition-colors">Necklaces</Link></li>
            <li><Link to="/shop?category=Huggies" className="text-sm text-brand-espresso/60 hover:text-brand-gold transition-colors">Huggies</Link></li>
            <li><Link to="/shop" className="text-sm text-brand-espresso/60 hover:text-brand-gold transition-colors">New Arrivals</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-brand-charcoal mb-6">Help</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-sm text-brand-espresso/60 hover:text-brand-gold transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="text-sm text-brand-espresso/60 hover:text-brand-gold transition-colors">Jewelry Care</a></li>
            <li><a href="#" className="text-sm text-brand-espresso/60 hover:text-brand-gold transition-colors">FAQs</a></li>
            <li><a href="#" className="text-sm text-brand-espresso/60 hover:text-brand-gold transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-brand-charcoal mb-6">Company</h4>
          <ul className="space-y-4">
            <li><Link to="/about" className="text-sm text-brand-espresso/60 hover:text-brand-gold transition-colors">Our Story</Link></li>
            <li><Link to="/journal" className="text-sm text-brand-espresso/60 hover:text-brand-gold transition-colors">Journal</Link></li>
            <li><a href="#" className="text-sm text-brand-espresso/60 hover:text-brand-gold transition-colors">Sustainability</a></li>
            <li><a href="#" className="text-sm text-brand-espresso/60 hover:text-brand-gold transition-colors">Careers</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-brand-charcoal/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-[10px] text-brand-espresso/40 uppercase tracking-widest">
          © {currentYear} Velmora Fine Jewelry. All rights reserved.
        </p>
        <div className="flex items-center space-x-6">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 opacity-40" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6 opacity-40" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4 opacity-40" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" alt="Amex" className="h-6 opacity-40" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
