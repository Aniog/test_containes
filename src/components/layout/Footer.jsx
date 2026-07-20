import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & About */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="serif-heading text-2xl tracking-widest text-white block mb-4">
              VELMORA
            </Link>
            <p className="text-sm text-stone-400 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, designed for everyday luxury.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-stone-400 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-white mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-stone-400 hover:text-primary transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-stone-400 hover:text-primary transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-stone-400 hover:text-primary transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-stone-400 hover:text-primary transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-stone-400 hover:text-primary transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-white mb-4">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-stone-400 hover:text-primary transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-sm text-stone-400 hover:text-primary transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-sm text-stone-400 hover:text-primary transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-stone-400 hover:text-primary transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-stone-400 hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-stone-400 hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-stone-400 hover:text-primary transition-colors">Journal</Link></li>
              <li><a href="#" className="text-sm text-stone-400 hover:text-primary transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-stone-400 hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-stone-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-stone-500">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-stone-500">We accept</span>
            <div className="flex gap-2">
              <div className="w-10 h-6 bg-stone-700 rounded flex items-center justify-center text-[8px] text-stone-400 font-medium">VISA</div>
              <div className="w-10 h-6 bg-stone-700 rounded flex items-center justify-center text-[8px] text-stone-400 font-medium">MC</div>
              <div className="w-10 h-6 bg-stone-700 rounded flex items-center justify-center text-[8px] text-stone-400 font-medium">AMEX</div>
              <div className="w-10 h-6 bg-stone-700 rounded flex items-center justify-center text-[8px] text-stone-400 font-medium">PP</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
