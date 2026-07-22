import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-velmora-900 text-velmora-100 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:pr-8">
            <Link to="/" className="font-serif text-3xl tracking-[0.15em] uppercase block mb-6 text-white inline-block">
              Velmora
            </Link>
            <p className="text-velmora-300 text-sm leading-relaxed mb-6 font-light">
              Crafted to be treasured. Meticulously designed demi-fine jewelry that brings quiet luxury to your every day.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-velmora-700 flex items-center justify-center hover:bg-velmora-800 hover:border-gold transition-colors text-velmora-300 hover:text-white" aria-label="Instagram">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-velmora-700 flex items-center justify-center hover:bg-velmora-800 hover:border-gold transition-colors text-velmora-300 hover:text-white" aria-label="Facebook">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-velmora-700 flex items-center justify-center hover:bg-velmora-800 hover:border-gold transition-colors text-velmora-300 hover:text-white" aria-label="Twitter">
                <Twitter size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg text-white mb-6 uppercase tracking-wider">Shop</h4>
            <ul className="space-y-4 text-sm font-light text-velmora-300 flex flex-col">
              <li><Link to="/shop" className="hover:text-gold transition-colors inline-block w-fit">All Jewelry</Link></li>
              <li><Link to="/category/earrings" className="hover:text-gold transition-colors inline-block w-fit">Earrings</Link></li>
              <li><Link to="/category/necklaces" className="hover:text-gold transition-colors inline-block w-fit">Necklaces</Link></li>
              <li><Link to="/category/huggies" className="hover:text-gold transition-colors inline-block w-fit">Huggies</Link></li>
              <li><Link to="/collections/bestsellers" className="hover:text-gold transition-colors inline-block w-fit">Bestsellers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-white mb-6 uppercase tracking-wider">Help</h4>
            <ul className="space-y-4 text-sm font-light text-velmora-300 flex flex-col">
              <li><Link to="/faq" className="hover:text-gold transition-colors inline-block w-fit">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-gold transition-colors inline-block w-fit">Shipping & Returns</Link></li>
              <li><Link to="/jewelry-care" className="hover:text-gold transition-colors inline-block w-fit">Jewelry Care</Link></li>
              <li><Link to="/track-order" className="hover:text-gold transition-colors inline-block w-fit">Track Order</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors inline-block w-fit">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-white mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-4 text-sm font-light text-velmora-300 flex flex-col">
              <li><Link to="/about" className="hover:text-gold transition-colors inline-block w-fit">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-gold transition-colors inline-block w-fit">Journal</Link></li>
              <li><Link to="/sustainability" className="hover:text-gold transition-colors inline-block w-fit">Sustainability</Link></li>
              <li><Link to="/careers" className="hover:text-gold transition-colors inline-block w-fit">Careers</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-velmora-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-velmora-400 font-light">
          <p>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}