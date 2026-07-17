import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-3xl tracking-widest block mb-6 text-brand-50">
              VELMORA
            </Link>
            <p className="text-sm text-brand-300 leading-relaxed max-w-sm mb-6">
              Crafting accessible luxury. Everyday fine jewelry designed to be treasured, worn, and loved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-brand-300 hover:text-brand-50 transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-brand-300 hover:text-brand-50 transition-colors">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-brand-300 hover:text-brand-50 transition-colors">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6 text-brand-50">Shop</h4>
            <ul className="space-y-4 text-sm text-brand-300">
              <li><Link to="/shop" className="hover:text-brand-50 transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-brand-50 transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-brand-50 transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-brand-50 transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=sets" className="hover:text-brand-50 transition-colors">Gift Sets</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6 text-brand-50">Help</h4>
            <ul className="space-y-4 text-sm text-brand-300">
              <li><a href="#" className="hover:text-brand-50 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-brand-50 transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-brand-50 transition-colors">Jewelry Care</a></li>
              <li><a href="#" className="hover:text-brand-50 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-brand-50 transition-colors">Track Order</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6 text-brand-50">Company</h4>
            <ul className="space-y-4 text-sm text-brand-300">
              <li><Link to="/about" className="hover:text-brand-50 transition-colors">Our Story</Link></li>
              <li><a href="#" className="hover:text-brand-50 transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-brand-50 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-50 transition-colors">Wholesale</a></li>
              <li><a href="#" className="hover:text-brand-50 transition-colors">Custom Design</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-brand-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-brand-400">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-50 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-50 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}