import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal-800 text-cream-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-3xl text-cream-100 tracking-widest" style={{ fontWeight: 400 }}>
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-cream-300/70 leading-relaxed">
              Crafted to be treasured. Fine demi-fine jewelry designed for the modern woman.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-cream-300/60 hover:text-gold-400 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream-300/60 hover:text-gold-400 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream-300/60 hover:text-gold-400 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest-xl uppercase text-cream-100 mb-4 font-medium">Shop</h4>
            <ul className="space-y-2.5">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-cream-300/70 hover:text-gold-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widest-xl uppercase text-cream-100 mb-4 font-medium">Help</h4>
            <ul className="space-y-2.5">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-cream-300/70 hover:text-gold-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest-xl uppercase text-cream-100 mb-4 font-medium">Company</h4>
            <ul className="space-y-2.5">
              {['Our Story', 'Sustainability', 'Journal', 'Press', 'Careers'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-cream-300/70 hover:text-gold-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment & Copyright */}
        <div className="border-t border-cream-200/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-cream-300/40 text-xs">
            <span className="px-2 py-1 border border-cream-300/20 rounded text-xs">VISA</span>
            <span className="px-2 py-1 border border-cream-300/20 rounded text-xs">MC</span>
            <span className="px-2 py-1 border border-cream-300/20 rounded text-xs">AMEX</span>
            <span className="px-2 py-1 border border-cream-300/20 rounded text-xs">PayPal</span>
          </div>
          <p className="text-xs text-cream-300/40">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
