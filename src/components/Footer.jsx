import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-base text-text-inverse">
      <div className="container-main py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl tracking-widest font-semibold text-text-inverse"
            >
              VELMORA
            </Link>
            <p className="font-sans text-sm text-text-muted mt-4 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Designed for the modern
              woman who appreciates quiet luxury.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="text-text-muted hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-text-muted hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-text-muted hover:text-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest font-medium text-text-inverse mb-5">
              Shop
            </h4>
            <ul className="flex flex-col gap-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="/shop"
                      className="font-sans text-sm text-text-muted hover:text-gold transition-colors"
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
            <h4 className="font-sans text-xs uppercase tracking-widest font-medium text-text-inverse mb-5">
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
                    className="font-sans text-sm text-text-muted hover:text-gold transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest font-medium text-text-inverse mb-5">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {['Our Story', 'Sustainability', 'Press', 'Careers', 'Affiliates'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-sans text-sm text-text-muted hover:text-gold transition-colors"
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
        <div className="mt-14 pt-8 border-t border-hairline-dark flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map(
              (method) => (
                <span
                  key={method}
                  className="font-sans text-[10px] uppercase tracking-wide text-text-muted border border-hairline-dark px-2 py-1"
                >
                  {method}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
