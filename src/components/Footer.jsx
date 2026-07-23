import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-warm-gray bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="font-serif text-3xl tracking-wide">
              VELMORA
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone-light">
              Demi-fine jewelry crafted to be treasured. Designed for everyday
              elegance and moments worth remembering.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold">Shop</h4>
            <ul className="mt-5 space-y-3 text-sm text-stone-light">
              <li><Link to="/shop" className="transition hover:text-cream">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="transition hover:text-cream">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="transition hover:text-cream">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="transition hover:text-cream">Huggies</Link></li>
              <li><Link to="/shop?category=sets" className="transition hover:text-cream">Gift Sets</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold">Help</h4>
            <ul className="mt-5 space-y-3 text-sm text-stone-light">
              <li><Link to="/shipping" className="transition hover:text-cream">Shipping & Returns</Link></li>
              <li><Link to="/care" className="transition hover:text-cream">Jewelry Care</Link></li>
              <li><Link to="/faq" className="transition hover:text-cream">FAQ</Link></li>
              <li><Link to="/contact" className="transition hover:text-cream">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold">Company</h4>
            <ul className="mt-5 space-y-3 text-sm text-stone-light">
              <li><Link to="/about" className="transition hover:text-cream">Our Story</Link></li>
              <li><Link to="/journal" className="transition hover:text-cream">Journal</Link></li>
              <li><Link to="/sustainability" className="transition hover:text-cream">Sustainability</Link></li>
              <li><Link to="/press" className="transition hover:text-cream">Press</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-stone-light">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="https://instagram.com" className="text-stone-light transition hover:text-cream" aria-label="Instagram">
              <Instagram size={18} />
            </Link>
            <Link to="https://facebook.com" className="text-stone-light transition hover:text-cream" aria-label="Facebook">
              <Facebook size={18} />
            </Link>
            <Link to="https://twitter.com" className="text-stone-light transition hover:text-cream" aria-label="Twitter">
              <Twitter size={18} />
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded bg-white/10 px-2 py-1 text-[10px] uppercase tracking-wider text-stone-light">Visa</span>
            <span className="rounded bg-white/10 px-2 py-1 text-[10px] uppercase tracking-wider text-stone-light">MC</span>
            <span className="rounded bg-white/10 px-2 py-1 text-[10px] uppercase tracking-wider text-stone-light">Amex</span>
            <span className="rounded bg-white/10 px-2 py-1 text-[10px] uppercase tracking-wider text-stone-light">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
