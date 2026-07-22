import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, CreditCard } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--velmora-bg-dark)] text-[var(--velmora-cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="velmora-heading text-2xl tracking-wider text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-[var(--velmora-text-light)] leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, designed for everyday luxury.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-[var(--velmora-warm)] mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-[var(--velmora-text-light)] hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-[var(--velmora-text-light)] hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-[var(--velmora-text-light)] hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-[var(--velmora-text-light)] hover:text-white transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-[var(--velmora-text-light)] hover:text-white transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-[var(--velmora-warm)] mb-4">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-[var(--velmora-text-light)] hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-sm text-[var(--velmora-text-light)] hover:text-white transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-sm text-[var(--velmora-text-light)] hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-[var(--velmora-text-light)] hover:text-white transition-colors">Care Guide</a></li>
              <li><a href="#" className="text-sm text-[var(--velmora-text-light)] hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-[var(--velmora-warm)] mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-[var(--velmora-text-light)] hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="text-sm text-[var(--velmora-text-light)] hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-[var(--velmora-text-light)] hover:text-white transition-colors">Journal</a></li>
              <li><a href="#" className="text-sm text-[var(--velmora-text-light)] hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--velmora-text-light)]">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {/* Payment icons */}
            <div className="flex items-center gap-2 text-[var(--velmora-text-light)]">
              <CreditCard size={16} />
              <span className="text-xs">Visa</span>
              <span className="text-xs">MC</span>
              <span className="text-xs">Amex</span>
              <span className="text-xs">PayPal</span>
            </div>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-[var(--velmora-text-light)] hover:text-white transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-[var(--velmora-text-light)] hover:text-white transition-colors" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="#" className="text-[var(--velmora-text-light)] hover:text-white transition-colors" aria-label="Twitter">
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
