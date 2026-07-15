import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-velmora-charcoal text-white">
      <div className="section-padding py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-super text-white">
              VELMORA
            </Link>
            <p className="text-velmora-stone text-sm mt-4 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the modern woman. Gold-plated pieces designed to be treasured, every day.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-velmora-stone hover:text-velmora-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-velmora-stone hover:text-velmora-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-velmora-stone hover:text-velmora-gold transition-colors" aria-label="Pinterest">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-velmora-gold mb-4">Shop</h4>
            <ul className="space-y-3">
              {['Earrings', 'Necklaces', 'Huggies', 'Sets', 'All Products'].map((item) => (
                <li key={item}>
                  <Link
                    to="/shop"
                    className="text-sm text-velmora-stone hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-velmora-gold mb-4">Help</h4>
            <ul className="space-y-3">
              {['Shipping & Returns', 'Size Guide', 'Care Guide', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-velmora-stone hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-velmora-gold mb-4">Company</h4>
            <ul className="space-y-3">
              {['Our Story', 'Sustainability', 'Journal', 'Stockists', 'Careers'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-velmora-stone hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="hairline-divider border-velmora-smoke/20 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velmora-stone">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-velmora-stone">Visa</span>
            <span className="text-xs text-velmora-stone">Mastercard</span>
            <span className="text-xs text-velmora-stone">Amex</span>
            <span className="text-xs text-velmora-stone">PayPal</span>
            <span className="text-xs text-velmora-stone">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}