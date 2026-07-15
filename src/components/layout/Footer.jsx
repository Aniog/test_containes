import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-[var(--color-border)] bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-[0.18em] uppercase">
              Velmora
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-secondary)]">
              Demi-fine jewelry designed to be worn, gifted, and treasured.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-[var(--color-ink-secondary)] hover:text-[var(--color-ink)]">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-[var(--color-ink-secondary)] hover:text-[var(--color-ink)]">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-[var(--color-ink-secondary)] hover:text-[var(--color-ink)]">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow">Shop</p>
            <ul className="mt-3 space-y-2 text-sm text-[var(--color-ink-secondary)]">
              <li><Link to="/shop?category=earrings" className="hover:text-[var(--color-ink)]">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-[var(--color-ink)]">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-[var(--color-ink)]">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-[var(--color-ink)]">All</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Help</p>
            <ul className="mt-3 space-y-2 text-sm text-[var(--color-ink-secondary)]">
              <li><a href="#" className="hover:text-[var(--color-ink)]">Shipping</a></li>
              <li><a href="#" className="hover:text-[var(--color-ink)]">Returns</a></li>
              <li><a href="#" className="hover:text-[var(--color-ink)]">FAQ</a></li>
              <li><a href="#" className="hover:text-[var(--color-ink)]">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-[var(--color-ink-secondary)]">
              <li><Link to="/about" className="hover:text-[var(--color-ink)]">Our Story</Link></li>
              <li><a href="#" className="hover:text-[var(--color-ink)]">Sustainability</a></li>
              <li><a href="#" className="hover:text-[var(--color-ink)]">Press</a></li>
              <li><a href="#" className="hover:text-[var(--color-ink)]">Careers</a></li>
            </ul>
          </div>
        </div>

        <hr className="divider-soft mt-10" />
        <div className="mt-6 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-[var(--color-ink-muted)]">© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-3 text-xs text-[var(--color-ink-muted)]">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
