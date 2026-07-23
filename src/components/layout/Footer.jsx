import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-charcoal)] text-[var(--color-ivory)]">
      {/* Main footer */}
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo and about */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-serif text-2xl tracking-[0.15em] mb-4">VELMORA</h3>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the modern woman. Quality pieces designed to be treasured.
            </p>
          </div>

          {/* Shop links */}
          <div>
            <h4 className="text-xs uppercase tracking-wider mb-4 text-[var(--color-text-muted)]">Shop</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/shop?category=earrings" className="text-sm hover:text-[var(--color-gold)] transition-colors">
                  Earrings
                </Link>
              </li>
              <li>
                <Link to="/shop?category=necklaces" className="text-sm hover:text-[var(--color-gold)] transition-colors">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link to="/shop?category=huggies" className="text-sm hover:text-[var(--color-gold)] transition-colors">
                  Huggies
                </Link>
              </li>
              <li>
                <Link to="/shop?category=sets" className="text-sm hover:text-[var(--color-gold)] transition-colors">
                  Gift Sets
                </Link>
              </li>
            </ul>
          </div>

          {/* Help links */}
          <div>
            <h4 className="text-xs uppercase tracking-wider mb-4 text-[var(--color-text-muted)]">Help</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/shipping" className="text-sm hover:text-[var(--color-gold)] transition-colors">
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-sm hover:text-[var(--color-gold)] transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm hover:text-[var(--color-gold)] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-[var(--color-gold)] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-xs uppercase tracking-wider mb-4 text-[var(--color-text-muted)]">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm hover:text-[var(--color-gold)] transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/journal" className="text-sm hover:text-[var(--color-gold)] transition-colors">
                  Journal
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-sm hover:text-[var(--color-gold)] transition-colors">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--color-charcoal-light)]">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-xs text-[var(--color-text-muted)]">
              © 2024 Velmora Fine Jewelry. All rights reserved.
            </p>

            {/* Payment icons */}
            <div className="flex items-center gap-4">
              <span className="text-xs text-[var(--color-text-muted)]">We accept</span>
              <div className="flex items-center gap-3">
                {/* Visa */}
                <div className="w-10 h-6 bg-[var(--color-ivory)] rounded flex items-center justify-center">
                  <span className="text-[var(--color-charcoal)] text-[8px] font-bold">VISA</span>
                </div>
                {/* Mastercard */}
                <div className="w-10 h-6 bg-[var(--color-ivory)] rounded flex items-center justify-center">
                  <span className="text-[var(--color-charcoal)] text-[8px] font-bold">MC</span>
                </div>
                {/* Amex */}
                <div className="w-10 h-6 bg-[var(--color-ivory)] rounded flex items-center justify-center">
                  <span className="text-[var(--color-charcoal)] text-[7px] font-bold">AMEX</span>
                </div>
                {/* PayPal */}
                <div className="w-10 h-6 bg-[var(--color-ivory)] rounded flex items-center justify-center">
                  <span className="text-[var(--color-charcoal)] text-[7px] font-bold">PayPal</span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors"
                aria-label="Pinterest"
              >
                Pinterest
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors"
                aria-label="TikTok"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
