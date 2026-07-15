import { Link } from 'react-router-dom';
import { Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const linkClass = "text-sm text-taupe hover:text-warm-black transition-colors duration-300";

  return (
    <footer className="bg-warm-dark text-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Logo + social */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest text-warm-white">
              VELMORA
            </Link>
            <p className="text-sm text-taupe-light mt-3 max-w-xs leading-relaxed">
              Fine jewelry crafted for everyday luxury. Ethically made, designed to last.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-taupe-light hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-taupe-light hover:text-gold transition-colors" aria-label="Youtube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs tracking-wider uppercase text-taupe-light mb-4">Shop</h4>
            <div className="space-y-2.5">
              <Link to="/shop" className={linkClass}>All Jewelry</Link>
              <Link to="/shop?category=earrings" className={linkClass}>Earrings</Link>
              <Link to="/shop?category=necklaces" className={linkClass}>Necklaces</Link>
              <Link to="/shop?category=huggies" className={linkClass}>Huggies</Link>
              <Link to="/shop?category=sets" className={linkClass}>Sets</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs tracking-wider uppercase text-taupe-light mb-4">Help</h4>
            <div className="space-y-2.5">
              <a href="#" className={linkClass}>Shipping Info</a>
              <a href="#" className={linkClass}>Returns & Exchanges</a>
              <a href="#" className={linkClass}>Size Guide</a>
              <a href="#" className={linkClass}>Care Instructions</a>
              <a href="#" className={linkClass}>FAQ</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs tracking-wider uppercase text-taupe-light mb-4">Company</h4>
            <div className="space-y-2.5">
              <a href="#" className={linkClass}>Our Story</a>
              <a href="#" className={linkClass}>Sustainability</a>
              <a href="#" className={linkClass}>Journal</a>
              <a href="#" className={linkClass}>Contact</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-taupe/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* Payment icons */}
            {['Visa', 'MC', 'Amex', 'PayPal', 'Klarna'].map((p) => (
              <span key={p} className="text-xs text-taupe-light font-sans">{p}</span>
            ))}
          </div>
          <p className="text-xs text-taupe-light">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}