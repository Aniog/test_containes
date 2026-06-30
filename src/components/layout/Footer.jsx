import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-ultra-wide text-white font-semibold">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-stone-400 leading-relaxed">
              Demi-fine jewelry crafted for the modern woman. 18K gold plated, hypoallergenic, and designed to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-super-wide uppercase font-medium text-white mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              <li><Link to="/shop?category=earrings" className="text-sm text-stone-400 hover:text-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-stone-400 hover:text-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-stone-400 hover:text-gold transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-stone-400 hover:text-gold transition-colors">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-super-wide uppercase font-medium text-white mb-5">
              Help
            </h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-stone-400 hover:text-gold transition-colors cursor-pointer">Shipping & Returns</span></li>
              <li><span className="text-sm text-stone-400 hover:text-gold transition-colors cursor-pointer">Care Guide</span></li>
              <li><span className="text-sm text-stone-400 hover:text-gold transition-colors cursor-pointer">FAQ</span></li>
              <li><span className="text-sm text-stone-400 hover:text-gold transition-colors cursor-pointer">Contact Us</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-super-wide uppercase font-medium text-white mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-stone-400 hover:text-gold transition-colors">Our Story</Link></li>
              <li><span className="text-sm text-stone-400 hover:text-gold transition-colors cursor-pointer">Journal</span></li>
              <li><span className="text-sm text-stone-400 hover:text-gold transition-colors cursor-pointer">Sustainability</span></li>
              <li><span className="text-sm text-stone-400 hover:text-gold transition-colors cursor-pointer">Press</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-stone-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            <div className="px-2 py-1 bg-stone-800 rounded text-[10px] text-stone-400 font-medium">VISA</div>
            <div className="px-2 py-1 bg-stone-800 rounded text-[10px] text-stone-400 font-medium">MC</div>
            <div className="px-2 py-1 bg-stone-800 rounded text-[10px] text-stone-400 font-medium">AMEX</div>
            <div className="px-2 py-1 bg-stone-800 rounded text-[10px] text-stone-400 font-medium">PAYPAL</div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-stone-500 hover:text-gold transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="text-stone-500 hover:text-gold transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="text-stone-500 hover:text-gold transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
