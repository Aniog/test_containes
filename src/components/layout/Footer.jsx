import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--velmora-dark)] text-[var(--velmora-cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="velmora-heading text-2xl tracking-wider">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-[var(--velmora-text-muted)] leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, designed for everyday luxury.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-[var(--velmora-text-muted)] hover:text-[var(--velmora-cream)] transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-[var(--velmora-text-muted)] hover:text-[var(--velmora-cream)] transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-[var(--velmora-text-muted)] hover:text-[var(--velmora-cream)] transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-[var(--velmora-text-muted)] hover:text-[var(--velmora-cream)] transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=sets" className="text-sm text-[var(--velmora-text-muted)] hover:text-[var(--velmora-cream)] transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-[var(--velmora-text-muted)] hover:text-[var(--velmora-cream)] transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-sm text-[var(--velmora-text-muted)] hover:text-[var(--velmora-cream)] transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-sm text-[var(--velmora-text-muted)] hover:text-[var(--velmora-cream)] transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-[var(--velmora-text-muted)] hover:text-[var(--velmora-cream)] transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-[var(--velmora-text-muted)] hover:text-[var(--velmora-cream)] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-[var(--velmora-text-muted)] hover:text-[var(--velmora-cream)] transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-[var(--velmora-text-muted)] hover:text-[var(--velmora-cream)] transition-colors">Journal</Link></li>
              <li><a href="#" className="text-sm text-[var(--velmora-text-muted)] hover:text-[var(--velmora-cream)] transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-[var(--velmora-text-muted)] hover:text-[var(--velmora-cream)] transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="velmora-divider-thin mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--velmora-text-muted)]">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-[var(--velmora-text-muted)] hover:text-[var(--velmora-cream)] transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-[var(--velmora-text-muted)] hover:text-[var(--velmora-cream)] transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-[var(--velmora-text-muted)] hover:text-[var(--velmora-cream)] transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center text-[10px] text-[var(--velmora-text-muted)]">VISA</div>
            <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center text-[10px] text-[var(--velmora-text-muted)]">MC</div>
            <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center text-[10px] text-[var(--velmora-text-muted)]">AMEX</div>
            <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center text-[10px] text-[var(--velmora-text-muted)]">PP</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
