import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-velvet text-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.15em] font-medium text-cream"
            >
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-taupe leading-relaxed max-w-xs">
              Demi-fine jewelry crafted to be treasured. Designed in small batches with
              intention, quality, and timeless elegance.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-taupe hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-taupe hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-taupe hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] font-medium text-cream mb-5">
              Shop
            </h4>
            <ul className="flex flex-col gap-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="/shop"
                      className="text-sm text-taupe hover:text-gold transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] font-medium text-cream mb-5">
              Help
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                'Shipping & Returns',
                'Size Guide',
                'Care Instructions',
                'FAQ',
                'Contact Us',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-taupe hover:text-gold transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] font-medium text-cream mb-5">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {['Our Story', 'Sustainability', 'Press', 'Careers', 'Affiliates'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-taupe hover:text-gold transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-charcoal flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-taupe">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {['VISA', 'MC', 'AMEX', 'PayPal'].map((pay) => (
              <span
                key={pay}
                className="px-2 py-1 border border-charcoal text-[10px] text-taupe uppercase tracking-wider"
              >
                {pay}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
