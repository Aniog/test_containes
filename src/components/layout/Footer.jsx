import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-beige py-20 px-6 mt-auto">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-3xl tracking-[0.2em] uppercase font-semibold inline-block mb-6">
              Velmora
            </Link>
            <p className="text-sm text-brand-taupe leading-relaxed max-w-sm">
              Demi-fine jewelry crafted for the modern individual. Quiet luxury designed to be treasured every day.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg tracking-widest uppercase mb-6">Shop</h4>
            <ul className="space-y-4 text-sm text-brand-taupe flex flex-col">
              <li><Link to="/shop" className="hover:text-brand-beige transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-brand-beige transition-colors">Earrings & Huggies</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-brand-beige transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=rings" className="hover:text-brand-beige transition-colors">Rings</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg tracking-widest uppercase mb-6">Help</h4>
            <ul className="space-y-4 text-sm text-brand-taupe flex flex-col">
              <li><Link to="#" className="hover:text-brand-beige transition-colors">FAQ</Link></li>
              <li><Link to="#" className="hover:text-brand-beige transition-colors">Shipping & Returns</Link></li>
              <li><Link to="#" className="hover:text-brand-beige transition-colors">Jewelry Care</Link></li>
              <li><Link to="#" className="hover:text-brand-beige transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg tracking-widest uppercase mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-brand-taupe flex flex-col">
              <li><Link to="#" className="hover:text-brand-beige transition-colors">Our Story</Link></li>
              <li><Link to="#" className="hover:text-brand-beige transition-colors">Sustainability</Link></li>
              <li><Link to="#" className="hover:text-brand-beige transition-colors">Journal</Link></li>
              <li><Link to="#" className="hover:text-brand-beige transition-colors">Press</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-brand-taupe/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-brand-taupe text-center md:text-left">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-brand-taupe hover:text-brand-beige transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-brand-taupe hover:text-brand-beige transition-colors" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-brand-taupe hover:text-brand-beige transition-colors" aria-label="Twitter">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}