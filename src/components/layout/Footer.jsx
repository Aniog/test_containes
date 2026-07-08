import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-text-inverse">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-logo font-medium text-text-inverse">
              VELMORA
            </Link>
            <p className="mt-4 text-text-muted text-sm leading-relaxed">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-text-muted hover:text-text-inverse transition-colors duration-300">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-text-muted hover:text-text-inverse transition-colors duration-300">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Twitter" className="text-text-muted hover:text-text-inverse transition-colors duration-300">
                <Twitter size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-wider font-semibold text-text-inverse mb-4">
              Shop
            </h4>
            <ul className="space-y-2.5">
              <li><Link to="/collection?cat=earrings" className="text-text-muted hover:text-text-inverse text-sm transition-colors duration-300">Earrings</Link></li>
              <li><Link to="/collection?cat=necklaces" className="text-text-muted hover:text-text-inverse text-sm transition-colors duration-300">Necklaces</Link></li>
              <li><Link to="/collection?cat=huggies" className="text-text-muted hover:text-text-inverse text-sm transition-colors duration-300">Huggies</Link></li>
              <li><Link to="/collection?cat=sets" className="text-text-muted hover:text-text-inverse text-sm transition-colors duration-300">Gift Sets</Link></li>
              <li><Link to="/collection" className="text-text-muted hover:text-text-inverse text-sm transition-colors duration-300">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-wider font-semibold text-text-inverse mb-4">
              Help
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-text-muted hover:text-text-inverse text-sm transition-colors duration-300">Shipping Info</a></li>
              <li><a href="#" className="text-text-muted hover:text-text-inverse text-sm transition-colors duration-300">Returns & Exchanges</a></li>
              <li><a href="#" className="text-text-muted hover:text-text-inverse text-sm transition-colors duration-300">Size Guide</a></li>
              <li><a href="#" className="text-text-muted hover:text-text-inverse text-sm transition-colors duration-300">FAQ</a></li>
              <li><a href="#" className="text-text-muted hover:text-text-inverse text-sm transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-wider font-semibold text-text-inverse mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-text-muted hover:text-text-inverse text-sm transition-colors duration-300">Our Story</a></li>
              <li><a href="#" className="text-text-muted hover:text-text-inverse text-sm transition-colors duration-300">Sustainability</a></li>
              <li><a href="#" className="text-text-muted hover:text-text-inverse text-sm transition-colors duration-300">Journal</a></li>
              <li><a href="#" className="text-text-muted hover:text-text-inverse text-sm transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="text-text-muted hover:text-text-inverse text-sm transition-colors duration-300">Press</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-text-muted text-xs">
            <span className="border border-white/20 px-2 py-1 text-[10px] tracking-wider uppercase">Visa</span>
            <span className="border border-white/20 px-2 py-1 text-[10px] tracking-wider uppercase">Mastercard</span>
            <span className="border border-white/20 px-2 py-1 text-[10px] tracking-wider uppercase">Amex</span>
            <span className="border border-white/20 px-2 py-1 text-[10px] tracking-wider uppercase">PayPal</span>
            <span className="border border-white/20 px-2 py-1 text-[10px] tracking-wider uppercase">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
