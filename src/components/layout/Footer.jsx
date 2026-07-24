import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--velmora-dark)] text-[var(--velmora-cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="serif-heading text-2xl tracking-wider block mb-4">
              VELMORA
            </Link>
            <p className="text-sm text-[var(--velmora-warm-gray)] leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, designed for everyday luxury.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-[var(--velmora-warm-gray)] hover:text-[var(--velmora-gold)] transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-[var(--velmora-warm-gray)] hover:text-[var(--velmora-gold)] transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-[var(--velmora-warm-gray)] hover:text-[var(--velmora-gold)] transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-[var(--velmora-warm-gray)] hover:text-[var(--velmora-gold)] transition-colors" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-[var(--velmora-warm-gray)] hover:text-[var(--velmora-cream)] transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-[var(--velmora-warm-gray)] hover:text-[var(--velmora-cream)] transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-[var(--velmora-warm-gray)] hover:text-[var(--velmora-cream)] transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-[var(--velmora-warm-gray)] hover:text-[var(--velmora-cream)] transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=sets" className="text-sm text-[var(--velmora-warm-gray)] hover:text-[var(--velmora-cream)] transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-[var(--velmora-warm-gray)] hover:text-[var(--velmora-cream)] transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-sm text-[var(--velmora-warm-gray)] hover:text-[var(--velmora-cream)] transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-sm text-[var(--velmora-warm-gray)] hover:text-[var(--velmora-cream)] transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-[var(--velmora-warm-gray)] hover:text-[var(--velmora-cream)] transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-[var(--velmora-warm-gray)] hover:text-[var(--velmora-cream)] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-[var(--velmora-warm-gray)] hover:text-[var(--velmora-cream)] transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-[var(--velmora-warm-gray)] hover:text-[var(--velmora-cream)] transition-colors">Journal</Link></li>
              <li><a href="#" className="text-sm text-[var(--velmora-warm-gray)] hover:text-[var(--velmora-cream)] transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-[var(--velmora-warm-gray)] hover:text-[var(--velmora-cream)] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-[var(--velmora-warm-gray)] hover:text-[var(--velmora-cream)] transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--velmora-warm-gray)]/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--velmora-warm-gray)]">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-[var(--velmora-warm-gray)]">We accept</span>
            <div className="flex gap-2">
              {['Visa', 'MC', 'Amex', 'PayPal'].map((method) => (
                <span
                  key={method}
                  className="px-2 py-1 bg-white/10 rounded text-[10px] text-[var(--velmora-warm-gray)]"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
