import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="serif text-2xl font-semibold tracking-[0.2em] uppercase block mb-4">
              Velmora
            </Link>
            <p className="text-sm text-warm-gray-light leading-relaxed max-w-xs">
              Demi-fine jewelry crafted to be treasured. Designed in small batches for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-5 text-warm-gray-light">Shop</h4>
            <ul className="space-y-3 text-sm text-warm-gray-light">
              <li><Link to="/shop" className="hover:text-cream transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-cream transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-cream transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-cream transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-cream transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-5 text-warm-gray-light">Help</h4>
            <ul className="space-y-3 text-sm text-warm-gray-light">
              <li><span className="hover:text-cream transition-colors cursor-pointer">Shipping & Returns</span></li>
              <li><span className="hover:text-cream transition-colors cursor-pointer">Size Guide</span></li>
              <li><span className="hover:text-cream transition-colors cursor-pointer">Care Instructions</span></li>
              <li><span className="hover:text-cream transition-colors cursor-pointer">FAQ</span></li>
              <li><span className="hover:text-cream transition-colors cursor-pointer">Contact Us</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-5 text-warm-gray-light">Company</h4>
            <ul className="space-y-3 text-sm text-warm-gray-light">
              <li><span className="hover:text-cream transition-colors cursor-pointer">Our Story</span></li>
              <li><span className="hover:text-cream transition-colors cursor-pointer">Sustainability</span></li>
              <li><span className="hover:text-cream transition-colors cursor-pointer">Press</span></li>
              <li><span className="hover:text-cream transition-colors cursor-pointer">Careers</span></li>
              <li><span className="hover:text-cream transition-colors cursor-pointer">Privacy Policy</span></li>
            </ul>
          </div>
        </div>

        <div className="hairline bg-warm-gray/20 my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-warm-gray-light">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <span className="hover:text-cream transition-colors cursor-pointer"><Instagram size={18} /></span>
            <span className="hover:text-cream transition-colors cursor-pointer"><Facebook size={18} /></span>
            <span className="hover:text-cream transition-colors cursor-pointer"><Twitter size={18} /></span>
          </div>
          <div className="flex items-center gap-2 text-xs text-warm-gray-light">
            <span className="px-2 py-1 border border-warm-gray/30 rounded">Visa</span>
            <span className="px-2 py-1 border border-warm-gray/30 rounded">MC</span>
            <span className="px-2 py-1 border border-warm-gray/30 rounded">Amex</span>
            <span className="px-2 py-1 border border-warm-gray/30 rounded">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
