import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-velmora-dark text-velmora-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest text-white uppercase block mb-4">
              Velmora
            </Link>
            <p className="text-sm text-velmora-muted leading-relaxed">
              Demi-fine gold jewelry, crafted to be treasured.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-velmora-muted hover:text-velmora-gold transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-velmora-muted hover:text-velmora-gold transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-velmora-muted hover:text-velmora-gold transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-velmora-muted hover:text-velmora-gold transition-colors" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-white mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-white mb-4">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">Care Guide</a></li>
              <li><a href="#" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">Our Story</a></li>
              <li><a href="#" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">Journal</a></li>
              <li><a href="#" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">Contact</a></li>
              <li><a href="#" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Payment & bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velmora-muted">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-velmora-muted">We accept</span>
            <div className="flex gap-2">
              {['Visa', 'MC', 'Amex', 'PayPal'].map((method) => (
                <span key={method} className="bg-white/10 text-white/70 text-[10px] px-2 py-1 rounded font-medium">
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
