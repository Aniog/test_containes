import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-velmora-ink text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-[0.3em] text-white">
              VELMORA
            </Link>
            <p className="text-sm text-white/50 mt-4 leading-relaxed max-w-xs">
              Demi-fine gold jewelry designed for everyday elegance. Crafted with care, meant to be treasured.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-white/50 hover:text-velmora-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-white/50 hover:text-velmora-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-white/50 hover:text-velmora-gold transition-colors" aria-label="Pinterest">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a9.98 9.98 0 0 1 5.5 18.1" />
                  <path d="M12 2a9.98 9.98 0 0 0-5.5 18.1" />
                </svg>
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-sm tracking-[0.15em] uppercase mb-4 text-white">Shop</h4>
            <div className="space-y-2.5">
              <Link to="/shop?category=earrings" className="block text-sm text-white/50 hover:text-velmora-gold transition-colors">Earrings</Link>
              <Link to="/shop?category=necklaces" className="block text-sm text-white/50 hover:text-velmora-gold transition-colors">Necklaces</Link>
              <Link to="/shop" className="block text-sm text-white/50 hover:text-velmora-gold transition-colors">Huggies</Link>
              <Link to="/shop" className="block text-sm text-white/50 hover:text-velmora-gold transition-colors">Gift Sets</Link>
              <Link to="/shop" className="block text-sm text-white/50 hover:text-velmora-gold transition-colors">All Jewelry</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-serif text-sm tracking-[0.15em] uppercase mb-4 text-white">Help</h4>
            <div className="space-y-2.5">
              <a href="#" className="block text-sm text-white/50 hover:text-velmora-gold transition-colors">Shipping & Returns</a>
              <a href="#" className="block text-sm text-white/50 hover:text-velmora-gold transition-colors">Size Guide</a>
              <a href="#" className="block text-sm text-white/50 hover:text-velmora-gold transition-colors">Jewelry Care</a>
              <a href="#" className="block text-sm text-white/50 hover:text-velmora-gold transition-colors">FAQs</a>
              <a href="#" className="block text-sm text-white/50 hover:text-velmora-gold transition-colors">Contact Us</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-sm tracking-[0.15em] uppercase mb-4 text-white">Company</h4>
            <div className="space-y-2.5">
              <Link to="/about" className="block text-sm text-white/50 hover:text-velmora-gold transition-colors">Our Story</Link>
              <Link to="/journal" className="block text-sm text-white/50 hover:text-velmora-gold transition-colors">Journal</Link>
              <a href="#" className="block text-sm text-white/50 hover:text-velmora-gold transition-colors">Sustainability</a>
              <a href="#" className="block text-sm text-white/50 hover:text-velmora-gold transition-colors">Privacy Policy</a>
              <a href="#" className="block text-sm text-white/50 hover:text-velmora-gold transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

        <div className="hairline mt-14 mb-8" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.15), transparent)' }} />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/40">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}