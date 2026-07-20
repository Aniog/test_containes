import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-velmora-sand bg-velmora-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <Link
              to="/"
              className="font-serif text-2xl font-medium tracking-ultra text-velmora-charcoal"
            >
              VELMORA
            </Link>
            <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-velmora-taupe">
              Demi-fine jewelry crafted to be treasured. Designed in New York,
              made for everyday luxury.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                className="text-velmora-taupe transition-colors hover:text-velmora-charcoal"
                aria-label="Instagram"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="text-velmora-taupe transition-colors hover:text-velmora-charcoal"
                aria-label="Facebook"
              >
                <Facebook size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-velmora-charcoal">
              Shop
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="/shop"
                      className="font-sans text-sm text-velmora-taupe transition-colors hover:text-velmora-charcoal"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-velmora-charcoal">
              Help
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
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
                    className="font-sans text-sm text-velmora-taupe transition-colors hover:text-velmora-charcoal"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-velmora-charcoal">
              Company
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {['Our Story', 'Sustainability', 'Press', 'Careers', 'Affiliates'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-sans text-sm text-velmora-taupe transition-colors hover:text-velmora-charcoal"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-velmora-sand pt-8 md:flex-row">
          <p className="text-xs text-velmora-taupe">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights
            reserved.
          </p>
          <div className="flex items-center gap-3">
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map(
              (method) => (
                <span
                  key={method}
                  className="rounded border border-velmora-sand px-2 py-1 text-[10px] uppercase tracking-wider text-velmora-taupe"
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