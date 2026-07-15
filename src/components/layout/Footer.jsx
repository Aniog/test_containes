import { Link } from 'react-router-dom';
import { Instagram, Facebook, Pinterest } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-warm-900 text-cream-300">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-[0.3em] font-semibold text-cream">
              VELMORA
            </Link>
            <p className="text-xs text-cream-400 mt-4 leading-relaxed max-w-[200px]">
              Demi-fine jewelry designed to be treasured. Crafted in 18K gold plate for everyday radiance.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-[10px] tracking-widest uppercase text-cream-400 mb-4">Shop</h4>
            <ul className="space-y-2.5">
              <li><Link to="/shop" className="text-xs text-cream-300 hover:text-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-xs text-cream-300 hover:text-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-xs text-cream-300 hover:text-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-xs text-cream-300 hover:text-gold transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=sets" className="text-xs text-cream-300 hover:text-gold transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-[10px] tracking-widest uppercase text-cream-400 mb-4">Help</h4>
            <ul className="space-y-2.5">
              <li><span className="text-xs text-cream-300 hover:text-gold transition-colors cursor-pointer">Shipping & Returns</span></li>
              <li><span className="text-xs text-cream-300 hover:text-gold transition-colors cursor-pointer">Size Guide</span></li>
              <li><span className="text-xs text-cream-300 hover:text-gold transition-colors cursor-pointer">Care Guide</span></li>
              <li><span className="text-xs text-cream-300 hover:text-gold transition-colors cursor-pointer">FAQs</span></li>
              <li><span className="text-xs text-cream-300 hover:text-gold transition-colors cursor-pointer">Contact Us</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] tracking-widest uppercase text-cream-400 mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="text-xs text-cream-300 hover:text-gold transition-colors">Our Story</Link></li>
              <li><span className="text-xs text-cream-300 hover:text-gold transition-colors cursor-pointer">Sustainability</span></li>
              <li><span className="text-xs text-cream-300 hover:text-gold transition-colors cursor-pointer">Stores</span></li>
              <li><span className="text-xs text-cream-300 hover:text-gold transition-colors cursor-pointer">Careers</span></li>
              <li><span className="text-xs text-cream-300 hover:text-gold transition-colors cursor-pointer">Press</span></li>
            </ul>
          </div>
        </div>

        <hr className="border-cream-400/10 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <span className="text-[10px] tracking-widest uppercase text-cream-400">© 2026 Velmora</span>
            <span className="text-[10px] text-cream-400 hover:text-cream-300 transition-colors cursor-pointer">Privacy</span>
            <span className="text-[10px] text-cream-400 hover:text-cream-300 transition-colors cursor-pointer">Terms</span>
          </div>
          <div className="flex items-center gap-4">
            <Instagram className="w-4 h-4 text-cream-400 hover:text-gold transition-colors cursor-pointer" />
            <Facebook className="w-4 h-4 text-cream-400 hover:text-gold transition-colors cursor-pointer" />
            <Pinterest className="w-4 h-4 text-cream-400 hover:text-gold transition-colors cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}