import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-brand-sand/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-semibold tracking-widest text-brand-cream">
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-brand-sand/70 max-w-xs">
              Demi-fine jewelry designed to be treasured. Crafted with care, worn with confidence.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="hover:text-brand-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-brand-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-brand-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-brand-cream mb-4">Shop</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/shop?category=earrings" className="hover:text-brand-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-brand-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-brand-gold transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-brand-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop" className="hover:text-brand-gold transition-colors">Gift Cards</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-brand-cream mb-4">Help</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Jewelry Care</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-brand-cream mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-brand-gold transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-brand-gold transition-colors">Journal</Link></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-sand/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-sand/50">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-brand-sand/50">
            <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
