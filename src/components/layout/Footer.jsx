import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-base-950 text-base-200">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-semibold tracking-wide text-base-50">
              VELMORA
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-base-400">
              Demi-fine jewelry crafted to be treasured. Designed in California, worn worldwide.
            </p>
            <div className="mt-5 flex gap-4">
              <a href="#" className="text-base-400 transition-colors duration-300 hover:text-accent" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-base-400 transition-colors duration-300 hover:text-accent" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-base-400 transition-colors duration-300 hover:text-accent" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-base-300">Shop</h4>
            <ul className="mt-4 space-y-2 text-sm text-base-400">
              <li><Link to="/shop?category=earrings" className="hover:text-accent transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-accent transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-accent transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-accent transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop" className="hover:text-accent transition-colors">Gift Cards</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-base-300">Help</h4>
            <ul className="mt-4 space-y-2 text-sm text-base-400">
              <li><a href="#" className="hover:text-accent transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Jewelry Care</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-base-300">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-base-400">
              <li><Link to="/about" className="hover:text-accent transition-colors">Our Story</Link></li>
              <li><a href="#" className="hover:text-accent transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-base-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-base-500">© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-base-500">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
