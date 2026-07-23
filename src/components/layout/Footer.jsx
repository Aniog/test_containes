import { Link } from 'react-router-dom';
import { Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-espresso text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-[0.25em] text-gold-light">
              VELMORA
            </Link>
            <p className="text-sm text-taupe mt-3 leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted to be treasured. Elevated essentials for the modern woman.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-taupe hover:text-gold-light transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-taupe hover:text-gold-light transition-colors" aria-label="Pinterest">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.936 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.768 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.739a.36.36 0 01.083.345c-.091.379-.293 1.194-.333 1.361-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
              </a>
              <a href="#" className="text-taupe hover:text-gold-light transition-colors" aria-label="Youtube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold-light mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-taupe hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop" className="text-sm text-taupe hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop" className="text-sm text-taupe hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop" className="text-sm text-taupe hover:text-white transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-taupe hover:text-white transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold-light mb-4">Help</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm text-taupe hover:text-white transition-colors">Shipping & Delivery</Link></li>
              <li><Link to="/" className="text-sm text-taupe hover:text-white transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/" className="text-sm text-taupe hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/" className="text-sm text-taupe hover:text-white transition-colors">Track Order</Link></li>
              <li><Link to="/" className="text-sm text-taupe hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold-light mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm text-taupe hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/" className="text-sm text-taupe hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link to="/" className="text-sm text-taupe hover:text-white transition-colors">Journal</Link></li>
              <li><Link to="/" className="text-sm text-taupe hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-taupe">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-taupe">Visa</span>
            <span className="text-xs text-taupe">Mastercard</span>
            <span className="text-xs text-taupe">Amex</span>
            <span className="text-xs text-taupe">PayPal</span>
            <span className="text-xs text-taupe">Klarna</span>
          </div>
        </div>
      </div>
    </footer>
  );
}