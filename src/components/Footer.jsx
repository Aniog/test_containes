import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, PinIcon as Pinterest } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-velmora-accent/10 px-6 py-16 md:px-12 md:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="flex flex-col gap-6">
          <Link to="/" className="text-2xl font-serif tracking-[0.2em] font-medium">VELMORA</Link>
          <p className="text-sm text-velmora-muted leading-relaxed pr-8">
            Quiet luxury for the modern woman. Timeless demi-fine jewelry crafted with care and designed to be treasured for a lifetime.
          </p>
          <div className="flex gap-4">
            <Instagram size={20} className="text-velmora-dark hover:text-velmora-accent transition-colors" />
            <Facebook size={20} className="text-velmora-dark hover:text-velmora-accent transition-colors" />
            <Pinterest size={20} className="text-velmora-dark hover:text-velmora-accent transition-colors" />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold">Shop</h4>
          <div className="flex flex-col gap-3 text-sm text-velmora-muted">
            <Link to="/shop" className="hover:text-velmora-dark transition-colors">All Jewelry</Link>
            <Link to="/shop?category=Earrings" className="hover:text-velmora-dark transition-colors">Earrings</Link>
            <Link to="/shop?category=Necklaces" className="hover:text-velmora-dark transition-colors">Necklaces</Link>
            <Link to="/shop?category=Huggies" className="hover:text-velmora-dark transition-colors">Huggies</Link>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold">Help</h4>
          <div className="flex flex-col gap-3 text-sm text-velmora-muted">
            <Link to="/shipping" className="hover:text-velmora-dark transition-colors">Shipping & Returns</Link>
            <Link to="/care" className="hover:text-velmora-dark transition-colors">Jewelry Care</Link>
            <Link to="/faq" className="hover:text-velmora-dark transition-colors">FAQ</Link>
            <Link to="/contact" className="hover:text-velmora-dark transition-colors">Contact Us</Link>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold">Follow Us</h4>
          <p className="text-sm text-velmora-muted">Join our circle for priority access to new collections and exclusive offers.</p>
          <div className="flex items-center border-b border-velmora-dark pb-2">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="bg-transparent border-none text-xs w-full focus:outline-none tracking-widest uppercase"
            />
            <button className="text-[10px] uppercase font-bold tracking-widest ml-2">Join</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-velmora-accent/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] text-velmora-muted uppercase tracking-[0.2em]">© 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-6 opacity-30 grayscale contrast-125">
            <span className="text-[10px] font-bold tracking-widest">VISA</span>
            <span className="text-[10px] font-bold tracking-widest">MASTERCARD</span>
            <span className="text-[10px] font-bold tracking-widest">PAYPAL</span>
            <span className="text-[10px] font-bold tracking-widest">AMEX</span>
        </div>
      </div>
    </footer>
  );
}
