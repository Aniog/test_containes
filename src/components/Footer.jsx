import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-velmora-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <p className="font-serif text-xl tracking-widest uppercase">Velmora</p>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the modern woman. Designed in small
              batches, made to be treasured.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide font-medium mb-4 text-white/50">
              Shop
            </p>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide font-medium mb-4 text-white/50">
              Help
            </p>
            <ul className="space-y-2 text-sm text-white/70">
              <li><span className="hover:text-white transition-colors cursor-pointer">Shipping & Returns</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">FAQ</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Contact Us</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Size Guide</span></li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide font-medium mb-4 text-white/50">
              Company
            </p>
            <ul className="space-y-2 text-sm text-white/70">
              <li><span className="hover:text-white transition-colors cursor-pointer">Our Story</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Sustainability</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Careers</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Press</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/40 hover:text-white transition-colors cursor-pointer">
              <Instagram className="w-4 h-4" />
            </span>
            <span className="text-xs text-white/40 hover:text-white transition-colors cursor-pointer">
              <Facebook className="w-4 h-4" />
            </span>
          </div>
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
