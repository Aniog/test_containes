import { Link } from 'react-router-dom';
import { Instagram, Facebook, Pinterest } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-velmora-ink text-velmora-sand/80 pt-20 pb-10 section-padding">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.3em] text-velmora-cream">
              VELMORA
            </Link>
            <p className="text-sm mt-4 leading-relaxed text-velmora-sand/60 max-w-[200px]">
              Demi-fine jewelry crafted for the modern woman. Treasured pieces, accessible luxury.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-velmora-cream mb-5 font-medium">Shop</h4>
            <div className="flex flex-col gap-3">
              <Link to="/shop" className="text-sm text-velmora-sand/60 hover:text-velmora-gold transition-colors">Earrings</Link>
              <Link to="/shop" className="text-sm text-velmora-sand/60 hover:text-velmora-gold transition-colors">Necklaces</Link>
              <Link to="/shop" className="text-sm text-velmora-sand/60 hover:text-velmora-gold transition-colors">Huggies</Link>
              <Link to="/shop" className="text-sm text-velmora-sand/60 hover:text-velmora-gold transition-colors">Gift Sets</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-velmora-cream mb-5 font-medium">Help</h4>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-sm text-velmora-sand/60 hover:text-velmora-gold transition-colors">Shipping & Returns</Link>
              <Link to="/" className="text-sm text-velmora-sand/60 hover:text-velmora-gold transition-colors">Size Guide</Link>
              <Link to="/" className="text-sm text-velmora-sand/60 hover:text-velmora-gold transition-colors">Care Guide</Link>
              <Link to="/" className="text-sm text-velmora-sand/60 hover:text-velmora-gold transition-colors">Contact Us</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-velmora-cream mb-5 font-medium">Company</h4>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-sm text-velmora-sand/60 hover:text-velmora-gold transition-colors">Our Story</Link>
              <Link to="/" className="text-sm text-velmora-sand/60 hover:text-velmora-gold transition-colors">Sustainability</Link>
              <Link to="/" className="text-sm text-velmora-sand/60 hover:text-velmora-gold transition-colors">Journal</Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-velmora-smoke/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <a href="#" className="text-velmora-sand/50 hover:text-velmora-gold transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-velmora-sand/50 hover:text-velmora-gold transition-colors" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="#" className="text-velmora-sand/50 hover:text-velmora-gold transition-colors" aria-label="Pinterest">
              <Pinterest size={18} />
            </a>
          </div>

          <div className="flex items-center gap-6 text-xs text-velmora-sand/40">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>Apple Pay</span>
          </div>

          <p className="text-xs text-velmora-sand/40">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
