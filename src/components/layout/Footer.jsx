import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-velmora-charcoal text-velmora-cream pt-20 pb-10 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div>
          <span className="font-serif text-3xl tracking-widest-xl block mb-6">VELMORA</span>
          <p className="text-sm opacity-60 leading-relaxed font-sans">
            Crafted for those who treasure the timeless. Velmora Fine Jewelry brings luxury to your everyday.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6 tracking-widest-lg uppercase">Shop</h4>
          <div className="flex flex-col gap-4 text-sm opacity-60 font-sans">
            <Link to="/shop?category=earrings" className="hover:opacity-100 transition-opacity">Earrings</Link>
            <Link to="/shop?category=necklaces" className="hover:opacity-100 transition-opacity">Necklaces</Link>
            <Link to="/shop?category=huggies" className="hover:opacity-100 transition-opacity">Huggies</Link>
            <Link to="/collections" className="hover:opacity-100 transition-opacity">All Collections</Link>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6 tracking-widest-lg uppercase">Help</h4>
          <div className="flex flex-col gap-4 text-sm opacity-60 font-sans">
            <Link to="/shipping" className="hover:opacity-100 transition-opacity">Shipping & Returns</Link>
            <Link to="/care" className="hover:opacity-100 transition-opacity">Materials & Care</Link>
            <Link to="/faq" className="hover:opacity-100 transition-opacity">FAQ</Link>
            <Link to="/contact" className="hover:opacity-100 transition-opacity">Contact Us</Link>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6 tracking-widest-lg uppercase">Company</h4>
          <div className="flex flex-col gap-4 text-sm opacity-60 font-sans">
            <Link to="/about" className="hover:opacity-100 transition-opacity">Our Story</Link>
            <Link to="/journal" className="hover:opacity-100 transition-opacity">Journal</Link>
            <Link to="/terms" className="hover:opacity-100 transition-opacity">Terms & Privacy</Link>
            <div className="flex gap-4 mt-4">
              <Instagram className="w-5 h-5 cursor-pointer hover:text-velmora-gold" />
              <Facebook className="w-5 h-5 cursor-pointer hover:text-velmora-gold" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-velmora-gold" />
            </div>
          </div>
        </div>
      </div>

      <div className="hairline-divider bg-white opacity-10 mb-8" />

      <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest-lg opacity-40 font-sans">
        <p>© 2026 Velmora Fine Jewelry. All Rights Reserved.</p>
        <div className="flex gap-6">
          <span>Visa</span>
          <span>Mastercard</span>
          <span>Apple Pay</span>
          <span>Amex</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
