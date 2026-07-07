import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-sand">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo + tagline */}
          <div className="md:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl tracking-ultra uppercase font-semibold text-white inline-block mb-4"
            >
              Velmora
            </Link>
            <p className="text-sm text-velmora-warm leading-relaxed max-w-xs">
              Demi-fine jewelry crafted to be treasured. Designed in small batches for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white mb-5">
              Shop
            </h4>
            <ul className="space-y-3 text-sm text-velmora-warm">
              <li><Link to="/shop?category=Earrings" className="hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-white transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=Sets" className="hover:text-white transition-colors">Gift Sets</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white mb-5">
              Help
            </h4>
            <ul className="space-y-3 text-sm text-velmora-warm">
              <li><span className="hover:text-white transition-colors cursor-pointer">Shipping & Returns</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Size Guide</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Care Instructions</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Contact Us</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">FAQ</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white mb-5">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-velmora-warm">
              <li><span className="hover:text-white transition-colors cursor-pointer">Our Story</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Sustainability</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Press</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Careers</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-5">
            <span className="text-xs text-velmora-warm hover:text-white transition-colors cursor-pointer">
              <Instagram className="w-4 h-4" />
            </span>
            <span className="text-xs text-velmora-warm hover:text-white transition-colors cursor-pointer">
              <Facebook className="w-4 h-4" />
            </span>
            <span className="text-xs text-velmora-warm hover:text-white transition-colors cursor-pointer">
              <Twitter className="w-4 h-4" />
            </span>
          </div>
          <p className="text-xs text-velmora-warm/70">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-velmora-warm/70">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
