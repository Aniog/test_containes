import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-950 text-brand-50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-3xl tracking-widest uppercase block mb-6">
              VELMORA
            </Link>
            <p className="text-sm text-brand-200/80 leading-relaxed mb-6 max-w-xs">
              Crafting timeless, demi-fine jewelry designed for the modern romantic. Everyday luxury, meant to be treasured.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-brand-200 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-brand-200 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-brand-200 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-6 tracking-wider">Shop</h3>
            <ul className="space-y-4 text-sm text-brand-200/80">
              <li><Link to="/collections/all" className="hover:text-white transition-colors">All Collections</Link></li>
              <li><Link to="/collections/all" className="hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/collections/all" className="hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/collections/all" className="hover:text-white transition-colors">Huggies</Link></li>
              <li><Link to="/collections/all" className="hover:text-white transition-colors">Sets & Gifts</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-6 tracking-wider">Company</h3>
            <ul className="space-y-4 text-sm text-brand-200/80">
              <li><Link to="#" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Journal</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-6 tracking-wider">Help</h3>
            <ul className="space-y-4 text-sm text-brand-200/80">
              <li><Link to="#" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Jewelry Care</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-brand-800/50 flex flex-col md:flex-row justify-between items-center text-xs text-brand-200/60 uppercase tracking-widest gap-4">
          <p>© {new Date().getFullYear()} Velmora Fine Jewelry</p>
          <div className="flex space-x-6">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
