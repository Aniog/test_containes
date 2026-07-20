import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-warm-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-ultra-wide font-semibold">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-brand-warm-muted leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, and designed for everyday elegance.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-brand-warm-muted hover:text-brand-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-warm-muted hover:text-brand-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-warm-muted hover:text-brand-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop column */}
          <div>
            <h4 className="font-sans text-xs tracking-wide uppercase mb-5 text-brand-gold-light">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop?category=earrings" className="text-sm text-brand-warm-muted hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-brand-warm-muted hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-brand-warm-muted hover:text-white transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-brand-warm-muted hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop" className="text-sm text-brand-warm-muted hover:text-white transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help column */}
          <div>
            <h4 className="font-sans text-xs tracking-wide uppercase mb-5 text-brand-gold-light">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-brand-warm-muted hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-brand-warm-muted hover:text-white transition-colors">Jewelry Care</a></li>
              <li><a href="#" className="text-sm text-brand-warm-muted hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm text-brand-warm-muted hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-sm text-brand-warm-muted hover:text-white transition-colors">Size Guide</a></li>
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="font-sans text-xs tracking-wide uppercase mb-5 text-brand-gold-light">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-brand-warm-muted hover:text-white transition-colors">Our Story</Link></li>
              <li><a href="#" className="text-sm text-brand-warm-muted hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-brand-warm-muted hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-sm text-brand-warm-muted hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-warm-muted">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-brand-warm-muted hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-brand-warm-muted hover:text-white transition-colors">Terms of Service</a>
          </div>
          {/* Payment icons placeholder */}
          <div className="flex items-center gap-2">
            <div className="px-2 py-1 border border-white/20 rounded text-[10px] text-brand-warm-muted font-sans">VISA</div>
            <div className="px-2 py-1 border border-white/20 rounded text-[10px] text-brand-warm-muted font-sans">MC</div>
            <div className="px-2 py-1 border border-white/20 rounded text-[10px] text-brand-warm-muted font-sans">AMEX</div>
            <div className="px-2 py-1 border border-white/20 rounded text-[10px] text-brand-warm-muted font-sans">PAYPAL</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
