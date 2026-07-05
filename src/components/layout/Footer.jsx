import { Link } from 'react-router-dom';
import { Instagram, Facebook, Pin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-espresso-900 border-t border-cream-400/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="serif-heading text-xl text-gold tracking-[0.15em]">
              VELMORA
            </Link>
            <p className="text-cream-300/60 text-sm mt-4 leading-relaxed max-w-56">
              Demi-fine jewelry crafted to be treasured. 18K gold-plated pieces for the modern woman.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-cream-300/60 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-cream-300/60 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-cream-300/60 hover:text-gold transition-colors" aria-label="Pinterest">
                <Pin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-cream-200 text-xs tracking-[0.12em] uppercase mb-5 font-medium">Shop</h4>
            <div className="flex flex-col gap-3">
              <Link to="/shop?category=Earrings" className="text-cream-300/60 hover:text-gold text-sm transition-colors">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="text-cream-300/60 hover:text-gold text-sm transition-colors">Necklaces</Link>
              <Link to="/shop?category=Bracelets" className="text-cream-300/60 hover:text-gold text-sm transition-colors">Bracelets</Link>
              <Link to="/shop?category=Sets" className="text-cream-300/60 hover:text-gold text-sm transition-colors">Gift Sets</Link>
              <Link to="/shop" className="text-cream-300/60 hover:text-gold text-sm transition-colors">Shop All</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-cream-200 text-xs tracking-[0.12em] uppercase mb-5 font-medium">Help</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-cream-300/60 hover:text-gold text-sm transition-colors">Shipping & Returns</a>
              <a href="#" className="text-cream-300/60 hover:text-gold text-sm transition-colors">Size Guide</a>
              <a href="#" className="text-cream-300/60 hover:text-gold text-sm transition-colors">Care Instructions</a>
              <a href="#" className="text-cream-300/60 hover:text-gold text-sm transition-colors">FAQ</a>
              <a href="#" className="text-cream-300/60 hover:text-gold text-sm transition-colors">Contact Us</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-cream-200 text-xs tracking-[0.12em] uppercase mb-5 font-medium">Company</h4>
            <div className="flex flex-col gap-3">
              <Link to="/about" className="text-cream-300/60 hover:text-gold text-sm transition-colors">Our Story</Link>
              <a href="#" className="text-cream-300/60 hover:text-gold text-sm transition-colors">Sustainability</a>
              <a href="#" className="text-cream-300/60 hover:text-gold text-sm transition-colors">Journal</a>
              <a href="#" className="text-cream-300/60 hover:text-gold text-sm transition-colors">Stores</a>
              <a href="#" className="text-cream-300/60 hover:text-gold text-sm transition-colors">Careers</a>
            </div>
          </div>
        </div>

        <hr className="hairline-divider mt-14 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream-300/40">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-cream-300/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cream-300/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
