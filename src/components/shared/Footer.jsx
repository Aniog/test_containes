import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-cream">
      <div className="mx-auto max-w-[1440px] px-4 py-12 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link
              to="/"
              className="font-serif text-3xl font-medium tracking-wide text-ink"
            >
              VELMORA
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
              Demi-fine jewelry made to be worn every day and treasured forever.
            </p>
            <div className="mt-6 flex items-center gap-4 text-ink-muted">
              <a href="#" aria-label="Instagram" className="hover:text-ink">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-ink">
                <Facebook size={20} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-ink">
                <Twitter size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-ink">
              Shop
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-ink-muted">
              <li><Link to="/shop" className="hover:text-ink">All Jewelry</Link></li>
              <li><Link to="/shop" className="hover:text-ink">Earrings</Link></li>
              <li><Link to="/shop" className="hover:text-ink">Necklaces</Link></li>
              <li><Link to="/shop" className="hover:text-ink">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-ink">Gift Sets</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-ink">
              Help
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-ink-muted">
              <li><a href="#" className="hover:text-ink">Shipping</a></li>
              <li><a href="#" className="hover:text-ink">Returns</a></li>
              <li><a href="#" className="hover:text-ink">Size Guide</a></li>
              <li><a href="#" className="hover:text-ink">Contact Us</a></li>
              <li><a href="#" className="hover:text-ink">FAQ</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-ink">
              Company
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-ink-muted">
              <li><Link to="/about" className="hover:text-ink">Our Story</Link></li>
              <li><a href="#" className="hover:text-ink">Journal</a></li>
              <li><a href="#" className="hover:text-ink">Sustainability</a></li>
              <li><a href="#" className="hover:text-ink">Careers</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-ink">
              Payment
            </h4>
            <div className="mt-5 flex flex-wrap gap-2">
              {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map((brand) => (
                <span
                  key={brand}
                  className="rounded border border-hairline px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-ink-muted"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-hairline pt-8 text-xs text-ink-subtle md:flex-row">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ink">Privacy Policy</a>
            <a href="#" className="hover:text-ink">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
