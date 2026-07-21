import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-velmora-ink text-velmora-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl font-semibold tracking-widest text-white"
            >
              VELMORA
            </Link>
            <p className="mt-4 font-sans text-sm text-velmora-taupe leading-relaxed max-w-xs">
              Demi-fine jewelry crafted to be treasured. Designed in New York, worn everywhere.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold tracking-widest uppercase text-white mb-5">
              Shop
            </h4>
            <ul className="flex flex-col gap-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map((item) => (
                <li key={item}>
                  <Link
                    to="/shop"
                    className="font-sans text-sm text-velmora-taupe hover:text-velmora-gold transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold tracking-widest uppercase text-white mb-5">
              Help
            </h4>
            <ul className="flex flex-col gap-3">
              {['Shipping & Returns', 'Care Guide', 'Size Guide', 'FAQ', 'Contact Us'].map(
                (item) => (
                  <li key={item}>
                    <span className="font-sans text-sm text-velmora-taupe hover:text-velmora-gold transition-colors duration-300 cursor-pointer">
                      {item}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold tracking-widest uppercase text-white mb-5">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {['Our Story', 'Sustainability', 'Careers', 'Press', 'Affiliates'].map((item) => (
                <li key={item}>
                  <span className="font-sans text-sm text-velmora-taupe hover:text-velmora-gold transition-colors duration-300 cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hairline-dark mt-14 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="font-sans text-xs text-velmora-stone">
              &copy; {new Date().getFullYear()} Velmora Fine Jewelry
            </span>
            <span className="font-sans text-xs text-velmora-stone hover:text-velmora-gold transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="font-sans text-xs text-velmora-stone hover:text-velmora-gold transition-colors cursor-pointer">
              Terms of Service
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-velmora-taupe hover:text-velmora-gold transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" strokeWidth={1.5} />
            </a>
            <a
              href="#"
              className="text-velmora-taupe hover:text-velmora-gold transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" strokeWidth={1.5} />
            </a>
            <a
              href="#"
              className="text-velmora-taupe hover:text-velmora-gold transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" strokeWidth={1.5} />
            </a>
          </div>

          <div className="flex items-center gap-3">
            {['Visa', 'Mastercard', 'Amex', 'PayPal'].map((brand) => (
              <div
                key={brand}
                className="bg-velmora-espresso rounded px-2 py-1 font-sans text-[10px] text-velmora-taupe tracking-wide"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
