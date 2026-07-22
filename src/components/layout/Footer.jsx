import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-velmora-charcoal text-white">
      <div className="container-wide section-padding py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-superwide font-semibold">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-[220px]">
              Demi-fine jewelry for the modern woman. Designed to be treasured, crafted to last.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <Instagram className="w-4 h-4 text-white/60 hover:text-velmora-gold transition-colors cursor-pointer" />
              <Facebook className="w-4 h-4 text-white/60 hover:text-velmora-gold transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-superwide uppercase font-medium mb-5 text-white/50">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-white/70 hover:text-velmora-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="text-sm text-white/70 hover:text-velmora-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="text-sm text-white/70 hover:text-velmora-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="text-sm text-white/70 hover:text-velmora-gold transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=Sets" className="text-sm text-white/70 hover:text-velmora-gold transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-superwide uppercase font-medium mb-5 text-white/50">Help</h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-white/70 hover:text-velmora-gold transition-colors cursor-pointer">Shipping & Returns</span></li>
              <li><span className="text-sm text-white/70 hover:text-velmora-gold transition-colors cursor-pointer">Size Guide</span></li>
              <li><span className="text-sm text-white/70 hover:text-velmora-gold transition-colors cursor-pointer">Jewelry Care</span></li>
              <li><span className="text-sm text-white/70 hover:text-velmora-gold transition-colors cursor-pointer">FAQ</span></li>
              <li><span className="text-sm text-white/70 hover:text-velmora-gold transition-colors cursor-pointer">Contact Us</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-superwide uppercase font-medium mb-5 text-white/50">Company</h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-white/70 hover:text-velmora-gold transition-colors cursor-pointer">Our Story</span></li>
              <li><span className="text-sm text-white/70 hover:text-velmora-gold transition-colors cursor-pointer">Sustainability</span></li>
              <li><span className="text-sm text-white/70 hover:text-velmora-gold transition-colors cursor-pointer">Journal</span></li>
              <li><span className="text-sm text-white/70 hover:text-velmora-gold transition-colors cursor-pointer">Wholesale</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 order-2 md:order-1">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-white/40 order-1 md:order-2">
            <span className="tracking-widest uppercase text-[10px]">Visa</span>
            <span className="tracking-widest uppercase text-[10px]">Mastercard</span>
            <span className="tracking-widest uppercase text-[10px]">Amex</span>
            <span className="tracking-widest uppercase text-[10px]">PayPal</span>
            <span className="tracking-widest uppercase text-[10px]">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
