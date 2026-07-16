import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-ultra-wide font-semibold">
              VELMORA
            </Link>
            <p className="text-sm text-gray-400 font-sans mt-4 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted with intention. Designed for the modern woman who values quality, elegance, and self-expression.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors" aria-label="Pinterest">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors" aria-label="TikTok">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.16v-3.44a4.85 4.85 0 01-3.77-1.82v-.01a4.83 4.83 0 003.77-3.2z"/></svg>
              </a>
            </div>
          </div>

          {/* Shop column */}
          <div>
            <h3 className="text-xs tracking-super-wide uppercase font-sans font-medium mb-5">
              Shop
            </h3>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-gray-400 hover:text-brand-gold transition-colors font-sans">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="text-sm text-gray-400 hover:text-brand-gold transition-colors font-sans">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="text-sm text-gray-400 hover:text-brand-gold transition-colors font-sans">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="text-sm text-gray-400 hover:text-brand-gold transition-colors font-sans">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-gray-400 hover:text-brand-gold transition-colors font-sans">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help column */}
          <div>
            <h3 className="text-xs tracking-super-wide uppercase font-sans font-medium mb-5">
              Help
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-400 hover:text-brand-gold transition-colors font-sans">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-brand-gold transition-colors font-sans">Care Guide</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-brand-gold transition-colors font-sans">FAQ</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-brand-gold transition-colors font-sans">Contact Us</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-brand-gold transition-colors font-sans">Size Guide</a></li>
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-xs tracking-super-wide uppercase font-sans font-medium mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-gray-400 hover:text-brand-gold transition-colors font-sans">Our Story</Link></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-brand-gold transition-colors font-sans">Journal</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-brand-gold transition-colors font-sans">Sustainability</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-brand-gold transition-colors font-sans">Press</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500 font-sans">
              &copy; 2026 Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {/* Payment icons */}
              <div className="flex items-center gap-2">
                <div className="px-2 py-1 border border-gray-600 rounded text-[10px] text-gray-400 font-sans">VISA</div>
                <div className="px-2 py-1 border border-gray-600 rounded text-[10px] text-gray-400 font-sans">MC</div>
                <div className="px-2 py-1 border border-gray-600 rounded text-[10px] text-gray-400 font-sans">AMEX</div>
                <div className="px-2 py-1 border border-gray-600 rounded text-[10px] text-gray-400 font-sans">PAYPAL</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
