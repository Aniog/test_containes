import { Link } from 'react-router-dom';
import { Instagram, Facebook, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-deep-bronze text-sand/80">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-[0.25em] text-cream">
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-sand/60 max-w-xs">
              Demi-fine jewelry crafted for the modern woman. 18K gold-plated,
              hypoallergenic, designed to be treasured every day.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-sm tracking-[0.1em] text-cream mb-4">SHOP</h4>
            <div className="flex flex-col gap-2.5">
              {['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'].map(
                (link) => (
                  <Link
                    key={link}
                    to="/shop"
                    className="text-sm text-sand/60 hover:text-gold transition-colors duration-300"
                  >
                    {link}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-serif text-sm tracking-[0.1em] text-cream mb-4">HELP</h4>
            <div className="flex flex-col gap-2.5">
              {['Shipping & Returns', 'FAQ', 'Contact Us', 'Care Guide', 'Size Guide'].map(
                (link) => (
                  <Link
                    key={link}
                    to="/shop"
                    className="text-sm text-sand/60 hover:text-gold transition-colors duration-300"
                  >
                    {link}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-sm tracking-[0.1em] text-cream mb-4">COMPANY</h4>
            <div className="flex flex-col gap-2.5">
              {['Our Story', 'Sustainability', 'Journal', 'Affiliates', 'Wholesale'].map(
                (link) => (
                  <Link
                    key={link}
                    to="/shop"
                    className="text-sm text-sand/60 hover:text-gold transition-colors duration-300"
                  >
                    {link}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-sand/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            {[Instagram, Facebook, Globe].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-sand/50 hover:text-gold transition-colors duration-300"
                aria-label="Social media"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4 text-xs tracking-wider text-sand/40">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>Apple Pay</span>
          </div>
          <p className="text-xs text-sand/40 tracking-wide">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
