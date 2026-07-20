import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 text-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="font-serif text-xl tracking-super-wide uppercase text-cream-50"
            >
              Velmora
            </Link>
            <p className="mt-3 text-sm text-cream-300/60 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for everyday elegance. 18K gold plated,
              hypoallergenic, designed to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-[11px] font-sans font-medium tracking-widest uppercase text-cream-300/80 mb-4">
              Shop
            </h4>
            <ul className="space-y-2.5">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="/shop"
                      className="text-sm text-cream-300/50 hover:text-cream-50 transition-colors"
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
            <h4 className="text-[11px] font-sans font-medium tracking-widest uppercase text-cream-300/80 mb-4">
              Help
            </h4>
            <ul className="space-y-2.5">
              {['Shipping', 'Returns', 'Sizing Guide', 'Care Instructions', 'Contact Us'].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="/"
                      className="text-sm text-cream-300/50 hover:text-cream-50 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] font-sans font-medium tracking-widest uppercase text-cream-300/80 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {['About Us', 'Journal', 'Sustainability', 'Careers', 'Press'].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="/about"
                      className="text-sm text-cream-300/50 hover:text-cream-50 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-cream-100/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-300/40">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-cream-300/40 hover:text-cream-50 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-cream-300/40 hover:text-cream-50 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
