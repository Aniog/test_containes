import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[var(--color-charcoal)] text-white">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & About */}
          <div className="md:col-span-1">
            <Link to="/" className="serif-heading text-3xl tracking-wider block mb-4">
              VELMORA
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Demi-fine gold jewelry crafted for everyday luxury. Timeless pieces, accessible prices.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/60 hover:text-[var(--color-gold)] transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-[var(--color-gold)] transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-[var(--color-gold)] transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-[var(--color-gold)] transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm tracking-wider uppercase mb-4">Shop</h3>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-white/60 hover:text-[var(--color-gold)] transition-colors text-sm">All Products</Link></li>
              <li><Link to="/shop?category=earrings" className="text-white/60 hover:text-[var(--color-gold)] transition-colors text-sm">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-white/60 hover:text-[var(--color-gold)] transition-colors text-sm">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-white/60 hover:text-[var(--color-gold)] transition-colors text-sm">Huggies</Link></li>
              <li><Link to="/shop" className="text-white/60 hover:text-[var(--color-gold)] transition-colors text-sm">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-sm tracking-wider uppercase mb-4">Help</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/60 hover:text-[var(--color-gold)] transition-colors text-sm">Shipping Info</a></li>
              <li><a href="#" className="text-white/60 hover:text-[var(--color-gold)] transition-colors text-sm">Returns & Exchanges</a></li>
              <li><a href="#" className="text-white/60 hover:text-[var(--color-gold)] transition-colors text-sm">Size Guide</a></li>
              <li><a href="#" className="text-white/60 hover:text-[var(--color-gold)] transition-colors text-sm">Care Instructions</a></li>
              <li><a href="#" className="text-white/60 hover:text-[var(--color-gold)] transition-colors text-sm">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-white/60 hover:text-[var(--color-gold)] transition-colors text-sm">Our Story</Link></li>
              <li><a href="#" className="text-white/60 hover:text-[var(--color-gold)] transition-colors text-sm">Sustainability</a></li>
              <li><a href="#" className="text-white/60 hover:text-[var(--color-gold)] transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-white/60 hover:text-[var(--color-gold)] transition-colors text-sm">Press</a></li>
              <li><a href="#" className="text-white/60 hover:text-[var(--color-gold)] transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-white/40 text-xs">We accept</span>
            <div className="flex gap-2">
              <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center text-white/60 text-xs">VISA</div>
              <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center text-white/60 text-xs">MC</div>
              <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center text-white/60 text-xs">AMEX</div>
              <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center text-white/60 text-xs">PP</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
