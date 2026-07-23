import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-ink text-white">
      <div className="container-editorial section-padding">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-semibold tracking-wide">
              VELMORA
            </Link>
            <p className="mt-3 text-sm text-white/70">
              Demi-fine jewelry crafted to be treasured. Designed in California, worn worldwide.
            </p>
            <div className="mt-5 flex gap-4">
              <a href="#" aria-label="Instagram" className="text-white/70 transition-colors hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-white/70 transition-colors hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-white/70 transition-colors hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg">Shop</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><Link to="/shop" className="hover:text-white">All Jewelry</Link></li>
              <li><Link to="/collections" className="hover:text-white">New Arrivals</Link></li>
              <li><Link to="/collections" className="hover:text-white">Bestsellers</Link></li>
              <li><Link to="/collections" className="hover:text-white">Gift Cards</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg">Help</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white">Jewelry Care</a></li>
              <li><a href="#" className="hover:text-white">Size Guide</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><Link to="/about" className="hover:text-white">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-white">Journal</Link></li>
              <li><a href="#" className="hover:text-white">Sustainability</a></li>
              <li><a href="#" className="hover:text-white">Press</a></li>
            </ul>
          </div>
        </div>

        <div className="hairline mt-12 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-white/60">© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
            <div className="flex items-center gap-6 text-xs text-white/60">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
