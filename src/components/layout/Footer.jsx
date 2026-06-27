import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-velmora-base text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-serif text-xl tracking-[0.15em] mb-3">VELMORA</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Demi-fine jewelry for the modern woman. Crafted with 18K gold plating and designed to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-velmora-gold mb-4">Shop</h4>
            <div className="flex flex-col gap-2 text-sm text-white/60">
              <Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link>
              <Link to="/shop?category=Earrings" className="hover:text-white transition-colors">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="hover:text-white transition-colors">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="hover:text-white transition-colors">Huggies</Link>
              <Link to="/shop?category=Sets" className="hover:text-white transition-colors">Gift Sets</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-velmora-gold mb-4">Help</h4>
            <div className="flex flex-col gap-2 text-sm text-white/60">
              <Link to="#" className="hover:text-white transition-colors">Shipping & Returns</Link>
              <Link to="#" className="hover:text-white transition-colors">Size Guide</Link>
              <Link to="#" className="hover:text-white transition-colors">Care Guide</Link>
              <Link to="#" className="hover:text-white transition-colors">FAQs</Link>
              <Link to="#" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-velmora-gold mb-4">Company</h4>
            <div className="flex flex-col gap-2 text-sm text-white/60">
              <Link to="#" className="hover:text-white transition-colors">Our Story</Link>
              <Link to="#" className="hover:text-white transition-colors">Sustainability</Link>
              <Link to="#" className="hover:text-white transition-colors">Journal</Link>
              <Link to="#" className="hover:text-white transition-colors">Careers</Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-white/40">
            <Instagram className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
            <Facebook className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
          </div>
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-white/40">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
