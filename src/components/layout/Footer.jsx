import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-velmora-charcoal text-white">
      <div className="section-padding py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-semibold tracking-wider">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-xs">
              Demi-fine gold jewelry designed to be worn, loved, and treasured — every day.
            </p>
            <div className="flex gap-4 mt-5">
              <a href="#" className="text-white/40 hover:text-velmora-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-white/40 hover:text-velmora-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-white/40 hover:text-velmora-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-medium tracking-wider uppercase mb-4 text-white/60">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop?category=Earrings" className="text-sm text-white/40 hover:text-velmora-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="text-sm text-white/40 hover:text-velmora-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="text-sm text-white/40 hover:text-velmora-gold transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=Sets" className="text-sm text-white/40 hover:text-velmora-gold transition-colors">Gift Sets</Link></li>
              <li><Link to="/shop" className="text-sm text-white/40 hover:text-velmora-gold transition-colors">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs font-medium tracking-wider uppercase mb-4 text-white/60">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-white/40 hover:text-velmora-gold transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-white/40 hover:text-velmora-gold transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-white/40 hover:text-velmora-gold transition-colors">Care Guide</a></li>
              <li><a href="#" className="text-sm text-white/40 hover:text-velmora-gold transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm text-white/40 hover:text-velmora-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-medium tracking-wider uppercase mb-4 text-white/60">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-white/40 hover:text-velmora-gold transition-colors">Our Story</a></li>
              <li><a href="#" className="text-sm text-white/40 hover:text-velmora-gold transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-white/40 hover:text-velmora-gold transition-colors">Journal</a></li>
              <li><a href="#" className="text-sm text-white/40 hover:text-velmora-gold transition-colors">Stockists</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-white/30">
            <span>Visa</span>
            <span className="text-white/10">|</span>
            <span>Mastercard</span>
            <span className="text-white/10">|</span>
            <span>Amex</span>
            <span className="text-white/10">|</span>
            <span>PayPal</span>
            <span className="text-white/10">|</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}