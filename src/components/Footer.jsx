import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const footerLinks = {
  Shop: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'],
  Help: ['Shipping & Returns', 'Care Guide', 'FAQ', 'Contact Us'],
  Company: ['Our Story', 'Sustainability', 'Careers', 'Press'],
};

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-3xl tracking-[0.12em]">
              VELMORA
            </Link>
            <p className="mt-4 max-w-sm text-warmGray leading-relaxed">
              Demi-fine jewelry designed to be worn, loved, and treasured. Crafted in small batches for everyday luxury.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-warmGray hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-warmGray hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-warmGray hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-warmGray">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link to="/shop" className="text-sm hover:text-gold transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 md:flex-row">
          <p className="text-xs text-warmGray">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-3 text-xs text-warmGray">
            <span className="rounded border border-cream/20 px-2 py-1">Visa</span>
            <span className="rounded border border-cream/20 px-2 py-1">Mastercard</span>
            <span className="rounded border border-cream/20 px-2 py-1">Amex</span>
            <span className="rounded border border-cream/20 px-2 py-1">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
