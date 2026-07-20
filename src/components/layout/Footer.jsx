import { Link } from 'react-router-dom';
import { Instagram, Facebook, Pinterest } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-[0.2em] text-gold">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-taupe leading-relaxed max-w-48">
              Demi-fine jewelry crafted with intention. Designed to be treasured, every day.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-taupe hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-taupe hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-taupe hover:text-gold transition-colors" aria-label="Pinterest">
                <Pinterest className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-cream mb-4">Shop</h4>
            <ul className="space-y-2.5">
              <li><Link to="/shop" className="text-sm text-taupe hover:text-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-taupe hover:text-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-taupe hover:text-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-taupe hover:text-gold transition-colors">Huggies</Link></li>
              <li><Link to="/shop?tag=gift" className="text-sm text-taupe hover:text-gold transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-cream mb-4">Help</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-sm text-taupe hover:text-gold transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-taupe hover:text-gold transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-taupe hover:text-gold transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-taupe hover:text-gold transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm text-taupe hover:text-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-cream mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-sm text-taupe hover:text-gold transition-colors">Our Story</a></li>
              <li><a href="#" className="text-sm text-taupe hover:text-gold transition-colors">Journal</a></li>
              <li><a href="#" className="text-sm text-taupe hover:text-gold transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-taupe hover:text-gold transition-colors">Stockists</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-taupe">&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-taupe">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}