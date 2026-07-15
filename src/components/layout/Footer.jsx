import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

export default function Footer() {
  const paymentIcons = [
    'Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay', 'Klarna'
  ];

  return (
    <footer className="bg-[#1A1A18] text-[#D4CEC4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.15em] text-white inline-block mb-4">
              VELMORA
            </Link>
            <p className="text-[12px] leading-relaxed text-[#D4CEC4]/70 max-w-xs">
              Demi-fine gold jewelry crafted to be treasured. Elevated essentials for the modern woman.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href="#" aria-label="Instagram" className="text-[#D4CEC4]/60 hover:text-gold transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Pinterest" className="text-[#D4CEC4]/60 hover:text-gold transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.905 2.168-2.905 1.024 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.97-5.365 11.97-11.987C23.97 5.367 18.627 0 12.017 0z"/></svg>
              </a>
              <a href="#" aria-label="Facebook" className="text-[#D4CEC4]/60 hover:text-gold transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.15em] text-white mb-4">Shop</h4>
            <ul className="space-y-2.5">
              <li><Link to="/shop/earrings" className="text-[12px] hover:text-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop/necklaces" className="text-[12px] hover:text-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop/huggies" className="text-[12px] hover:text-gold transition-colors">Huggies</Link></li>
              <li><Link to="/collections" className="text-[12px] hover:text-gold transition-colors">Collections</Link></li>
              <li><Link to="/bestsellers" className="text-[12px] hover:text-gold transition-colors">Bestsellers</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.15em] text-white mb-4">Help</h4>
            <ul className="space-y-2.5">
              <li><Link to="/shipping" className="text-[12px] hover:text-gold transition-colors">Shipping & Delivery</Link></li>
              <li><Link to="/returns" className="text-[12px] hover:text-gold transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/care" className="text-[12px] hover:text-gold transition-colors">Jewelry Care</Link></li>
              <li><Link to="/faq" className="text-[12px] hover:text-gold transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-[12px] hover:text-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.15em] text-white mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="text-[12px] hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/journal" className="text-[12px] hover:text-gold transition-colors">Journal</Link></li>
              <li><Link to="/sustainability" className="text-[12px] hover:text-gold transition-colors">Sustainability</Link></li>
              <li><Link to="/gift-cards" className="text-[12px] hover:text-gold transition-colors">Gift Cards</Link></li>
            </ul>
          </div>
        </div>

        {/* Payment & bottom */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {paymentIcons.map((icon) => (
                <span key={icon} className="text-[10px] text-[#D4CEC4]/50 uppercase tracking-wider">
                  {icon}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-[#D4CEC4]/50">
              &copy; 2026 Velmora Fine Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}