import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-stone-400 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Designed in California, worn worldwide.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-stone-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-sm tracking-widest uppercase mb-4">Shop</h3>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop" className="text-sm hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop" className="text-sm hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop" className="text-sm hover:text-white transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm hover:text-white transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm tracking-widest uppercase mb-4">Help</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-white transition-colors">Customer Service</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm tracking-widest uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-stone-500">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-xs text-stone-500 hover:text-stone-300">Privacy Policy</a>
            <a href="#" className="text-xs text-stone-500 hover:text-stone-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
