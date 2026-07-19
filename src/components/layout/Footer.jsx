import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1f1a15] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Demi-fine jewelry designed to be treasured. Crafted with care, worn with confidence.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-white/70 hover:text-[#b08d57] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-white/70 hover:text-[#b08d57] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-white/70 hover:text-[#b08d57] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm tracking-widest uppercase text-white/90 mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/shop" className="hover:text-[#b08d57] transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-[#b08d57] transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-[#b08d57] transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-[#b08d57] transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=sets" className="hover:text-[#b08d57] transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-widest uppercase text-white/90 mb-4">Help</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-[#b08d57] transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-[#b08d57] transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-[#b08d57] transition-colors">Materials & Care</a></li>
              <li><a href="#" className="hover:text-[#b08d57] transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#b08d57] transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-widest uppercase text-white/90 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/about" className="hover:text-[#b08d57] transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-[#b08d57] transition-colors">Journal</Link></li>
              <li><a href="#" className="hover:text-[#b08d57] transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-[#b08d57] transition-colors">Press</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/50">© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-white/50">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
