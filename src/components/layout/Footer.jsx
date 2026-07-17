import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-text-primary text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Logo & social */}
          <div className="col-span-2">
            <Link to="/" className="font-serif text-xl tracking-wider font-semibold">
              VELMORA
            </Link>
            <p className="text-sm text-white/50 mt-3 max-w-xs leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Everyday elegance, responsibly made.
            </p>
            <div className="flex gap-4 mt-5">
              <a href="#" className="text-white/50 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-white/50 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-white/50 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-medium mb-4 text-white/60">Shop</h4>
            <div className="space-y-2.5">
              <Link to="/shop?category=Earrings" className="block text-sm text-white/50 hover:text-white transition-colors">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="block text-sm text-white/50 hover:text-white transition-colors">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="block text-sm text-white/50 hover:text-white transition-colors">Huggies</Link>
              <Link to="/shop?category=Sets" className="block text-sm text-white/50 hover:text-white transition-colors">Sets</Link>
              <Link to="/shop" className="block text-sm text-white/50 hover:text-white transition-colors">All Jewelry</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-medium mb-4 text-white/60">Help</h4>
            <div className="space-y-2.5">
              <a href="#" className="block text-sm text-white/50 hover:text-white transition-colors">Shipping & Returns</a>
              <a href="#" className="block text-sm text-white/50 hover:text-white transition-colors">Care Guide</a>
              <a href="#" className="block text-sm text-white/50 hover:text-white transition-colors">FAQ</a>
              <a href="#" className="block text-sm text-white/50 hover:text-white transition-colors">Contact Us</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-medium mb-4 text-white/60">Company</h4>
            <div className="space-y-2.5">
              <Link to="/about" className="block text-sm text-white/50 hover:text-white transition-colors">Our Story</Link>
              <a href="#" className="block text-sm text-white/50 hover:text-white transition-colors">Sustainability</a>
              <Link to="/journal" className="block text-sm text-white/50 hover:text-white transition-colors">Journal</Link>
              <a href="#" className="block text-sm text-white/50 hover:text-white transition-colors">Careers</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="hairline-divider border-white/10 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/40">
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
