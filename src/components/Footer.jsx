import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="inline-block font-serif text-2xl font-semibold uppercase tracking-[0.25em]"
            >
              Velmora
            </Link>
            <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-ivory/80">
              Demi-fine gold jewelry designed to be treasured. Crafted for the
              moments that matter most.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-gold">
              Shop
            </h4>
            <ul className="space-y-3 font-sans text-sm text-ivory/80">
              <li>
                <Link to="/shop" className="hover:text-gold transition-colors">
                  All Jewelry
                </Link>
              </li>
              <li>
                <Link to="/shop?category=earrings" className="hover:text-gold transition-colors">
                  Earrings
                </Link>
              </li>
              <li>
                <Link to="/shop?category=necklaces" className="hover:text-gold transition-colors">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link to="/shop?category=huggies" className="hover:text-gold transition-colors">
                  Huggies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-gold">
              Help
            </h4>
            <ul className="space-y-3 font-sans text-sm text-ivory/80">
              <li>
                <Link to="/shipping" className="hover:text-gold transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/care" className="hover:text-gold transition-colors">
                  Jewelry Care
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-gold transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-gold">
              Company
            </h4>
            <ul className="space-y-3 font-sans text-sm text-ivory/80">
              <li>
                <Link to="/about" className="hover:text-gold transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/journal" className="hover:text-gold transition-colors">
                  Journal
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="hover:text-gold transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/press" className="hover:text-gold transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-ivory/20 pt-8 md:flex-row">
          <p className="font-sans text-xs text-ivory/60">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/velmora"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ivory/80 transition-colors hover:text-gold"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://facebook.com/velmora"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ivory/80 transition-colors hover:text-gold"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="h-6 w-10 rounded bg-ivory/20" aria-label="Visa" />
            <span className="h-6 w-10 rounded bg-ivory/20" aria-label="Mastercard" />
            <span className="h-6 w-10 rounded bg-ivory/20" aria-label="Amex" />
            <span className="h-6 w-10 rounded bg-ivory/20" aria-label="PayPal" />
          </div>
        </div>
      </div>
    </footer>
  );
}
