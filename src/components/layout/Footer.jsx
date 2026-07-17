import { Link } from 'react-router-dom';
import { Globe, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-velmora-charcoal text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.15em] text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-[220px]">
              Demi-fine gold jewelry designed for the modern woman. Crafted to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-white/40 mb-5">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-white/70 hover:text-velmora-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-white/70 hover:text-velmora-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-white/70 hover:text-velmora-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-white/70 hover:text-velmora-gold transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-white/70 hover:text-velmora-gold transition-colors">Bestsellers</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-white/40 mb-5">Help</h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-white/70 cursor-pointer hover:text-velmora-gold transition-colors">Contact Us</span></li>
              <li><span className="text-sm text-white/70 cursor-pointer hover:text-velmora-gold transition-colors">Shipping & Returns</span></li>
              <li><span className="text-sm text-white/70 cursor-pointer hover:text-velmora-gold transition-colors">FAQ</span></li>
              <li><span className="text-sm text-white/70 cursor-pointer hover:text-velmora-gold transition-colors">Size Guide</span></li>
              <li><span className="text-sm text-white/70 cursor-pointer hover:text-velmora-gold transition-colors">Care Guide</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-white/40 mb-5">Company</h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-white/70 cursor-pointer hover:text-velmora-gold transition-colors">About</span></li>
              <li><span className="text-sm text-white/70 cursor-pointer hover:text-velmora-gold transition-colors">Journal</span></li>
              <li><span className="text-sm text-white/70 cursor-pointer hover:text-velmora-gold transition-colors">Sustainability</span></li>
              <li><span className="text-sm text-white/70 cursor-pointer hover:text-velmora-gold transition-colors">Careers</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <span className="text-xs tracking-wider text-white/30">© 2026 Velmora Fine Jewelry</span>
            <span className="text-xs tracking-wider text-white/30 cursor-pointer hover:text-white/50">Privacy</span>
            <span className="text-xs tracking-wider text-white/30 cursor-pointer hover:text-white/50">Terms</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs tracking-wider text-white/40 hover:text-velmora-gold transition-colors cursor-pointer">IG</span>
            <span className="text-xs tracking-wider text-white/40 hover:text-velmora-gold transition-colors cursor-pointer">FB</span>
            <span className="text-xs tracking-wider text-white/40 hover:text-velmora-gold transition-colors cursor-pointer">PT</span>
          </div>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            <span className="text-[10px] tracking-widest uppercase text-white/25">Visa</span>
            <span className="text-[10px] tracking-widest uppercase text-white/25">Mastercard</span>
            <span className="text-[10px] tracking-widest uppercase text-white/25">Amex</span>
            <span className="text-[10px] tracking-widest uppercase text-white/25">PayPal</span>
            <span className="text-[10px] tracking-widest uppercase text-white/25">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
