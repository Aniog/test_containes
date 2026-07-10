import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-lightgray leading-relaxed max-w-xs">
              Demi-fine jewelry designed to be treasured. Crafted with care, worn with confidence.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-lightgray mb-5">Shop</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link to="/shop" className="hover:text-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop" className="hover:text-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop" className="hover:text-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop" className="hover:text-gold transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-gold transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-lightgray mb-5">Help</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><span className="hover:text-gold transition-colors cursor-pointer">Shipping & Returns</span></li>
              <li><span className="hover:text-gold transition-colors cursor-pointer">Care Guide</span></li>
              <li><span className="hover:text-gold transition-colors cursor-pointer">Size Guide</span></li>
              <li><span className="hover:text-gold transition-colors cursor-pointer">FAQ</span></li>
              <li><span className="hover:text-gold transition-colors cursor-pointer">Contact Us</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-lightgray mb-5">Company</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><span className="hover:text-gold transition-colors cursor-pointer">Our Story</span></li>
              <li><span className="hover:text-gold transition-colors cursor-pointer">Sustainability</span></li>
              <li><span className="hover:text-gold transition-colors cursor-pointer">Press</span></li>
              <li><span className="hover:text-gold transition-colors cursor-pointer">Careers</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <span className="hover:text-gold transition-colors cursor-pointer">
              <Instagram size={18} strokeWidth={1.5} />
            </span>
            <span className="hover:text-gold transition-colors cursor-pointer">
              <Facebook size={18} strokeWidth={1.5} />
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-6 bg-white/10 rounded-sm" />
            <div className="w-10 h-6 bg-white/10 rounded-sm" />
            <div className="w-10 h-6 bg-white/10 rounded-sm" />
            <div className="w-10 h-6 bg-white/10 rounded-sm" />
          </div>
          <p className="text-xs text-lightgray">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
