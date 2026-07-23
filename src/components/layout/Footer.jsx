import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-semibold tracking-wide text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Demi-fine jewelry designed to be treasured. Crafted with care, worn with confidence.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/90">Shop</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li><Link to="/shop?category=Earrings" className="hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-white transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/90">Help</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Materials & Care</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/90">Company</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-white transition-colors">Journal</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
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
