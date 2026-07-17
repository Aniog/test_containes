import { Link } from 'react-router-dom';
import { Instagram, Facebook, Pinterest } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-velmora-ink text-white">
      <div className="container-wide section-padding py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-super text-white">
              VELMORA
            </Link>
            <p className="text-sm text-white/50 mt-4 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted to be treasured. 18K gold-plated pieces designed for everyday elegance.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-white/50 hover:text-velmora-gold transition-colors"><Instagram size={18} /></a>
              <a href="#" className="text-white/50 hover:text-velmora-gold transition-colors"><Facebook size={18} /></a>
              <a href="#" className="text-white/50 hover:text-velmora-gold transition-colors"><Pinterest size={18} /></a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-widest uppercase text-white/70 mb-4">Shop</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/shop" className="text-sm text-white/50 hover:text-white transition-colors">All Jewelry</Link>
              <Link to="/shop?category=Earrings" className="text-sm text-white/50 hover:text-white transition-colors">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="text-sm text-white/50 hover:text-white transition-colors">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="text-sm text-white/50 hover:text-white transition-colors">Huggies</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-widest uppercase text-white/70 mb-4">Help</h4>
            <div className="flex flex-col gap-2.5">
              <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Shipping & Returns</a>
              <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Size Guide</a>
              <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Care Instructions</a>
              <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Contact Us</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-widest uppercase text-white/70 mb-4">Company</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/about" className="text-sm text-white/50 hover:text-white transition-colors">Our Story</Link>
              <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Sustainability</a>
              <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Journal</a>
              <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Stockists</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
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