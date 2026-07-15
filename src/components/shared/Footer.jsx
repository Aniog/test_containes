import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-velmora-charcoal text-white/80">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60 max-w-xs">
              Demi-fine jewelry designed to be treasured. Hand-finished with 18K gold plating, made for everyday elegance.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/50 mb-5">Shop</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/50 mb-5">Help</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Care Guide</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Size Guide</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/50 mb-5">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Journal</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Press</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 tracking-wide">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-white/50 hover:text-white transition-colors" aria-label="Instagram">
              <Instagram size={18} strokeWidth={1.5} />
            </a>
            <a href="#" className="text-white/50 hover:text-white transition-colors" aria-label="Facebook">
              <Facebook size={18} strokeWidth={1.5} />
            </a>
          </div>
          <div className="flex items-center gap-3 text-[10px] text-white/40 tracking-wider uppercase">
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
