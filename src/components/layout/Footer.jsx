import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, CreditCard } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-velmora-base text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <h2 className="font-serif text-2xl tracking-super-wide font-light mb-4">
              VELMORA
            </h2>
            <p className="text-velmora-stone text-sm leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Sustainable, hypoallergenic, and designed for everyday luxury.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-xs tracking-ultra-wide uppercase mb-6 text-velmora-gold">Shop</h3>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-velmora-stone-light hover:text-white text-sm transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-velmora-stone-light hover:text-white text-sm transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-velmora-stone-light hover:text-white text-sm transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-velmora-stone-light hover:text-white text-sm transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-velmora-stone-light hover:text-white text-sm transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-xs tracking-ultra-wide uppercase mb-6 text-velmora-gold">Help</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-velmora-stone-light hover:text-white text-sm transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-velmora-stone-light hover:text-white text-sm transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-velmora-stone-light hover:text-white text-sm transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-velmora-stone-light hover:text-white text-sm transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-velmora-stone-light hover:text-white text-sm transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs tracking-ultra-wide uppercase mb-6 text-velmora-gold">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-velmora-stone-light hover:text-white text-sm transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-velmora-stone-light hover:text-white text-sm transition-colors">Journal</Link></li>
              <li><a href="#" className="text-velmora-stone-light hover:text-white text-sm transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-velmora-stone-light hover:text-white text-sm transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-velmora-charcoal">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Payment icons */}
            <div className="flex items-center gap-4 text-velmora-stone">
              <CreditCard size={24} />
              <span className="text-xs">Visa · Mastercard · Amex · PayPal</span>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-6">
              <a href="#" className="text-velmora-stone-light hover:text-velmora-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-velmora-stone-light hover:text-velmora-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-velmora-stone-light hover:text-velmora-gold transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-velmora-stone text-xs">
              © 2026 Velmora Fine Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
