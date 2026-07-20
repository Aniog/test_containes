import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ink-950 text-ink-200">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="font-display text-2xl font-semibold tracking-wide text-white">
              VELMORA
            </Link>
            <p className="mt-3 text-sm text-ink-300 leading-relaxed">
              Demi-fine jewelry designed to be treasured. Crafted with care, worn with confidence.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop?category=earrings" className="hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-white transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=sets" className="hover:text-white transition-colors">Sets</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">All</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white mb-4">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-ink-300">Shipping & Returns</span></li>
              <li><span className="text-ink-300">Materials & Care</span></li>
              <li><span className="text-ink-300">Size Guide</span></li>
              <li><span className="text-ink-300">Contact Us</span></li>
              <li><span className="text-ink-300">FAQ</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><span className="text-ink-300">Sustainability</span></li>
              <li><span className="text-ink-300">Press</span></li>
              <li><span className="text-ink-300">Careers</span></li>
            </ul>
          </div>
        </div>

        <div className="hairline my-10 bg-ink-800" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-400">© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Instagram className="h-4 w-4 text-ink-300 hover:text-white cursor-pointer" />
            <Facebook className="h-4 w-4 text-ink-300 hover:text-white cursor-pointer" />
            <Twitter className="h-4 w-4 text-ink-300 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
