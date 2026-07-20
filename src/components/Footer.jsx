import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-subtle bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl tracking-brand uppercase text-foreground"
            >
              Velmora
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Demi-fine gold jewelry crafted for everyday luxury and moments worth remembering.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-brand text-foreground">
              Shop
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li><Link to="/shop" className="hover:text-accent transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-accent transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-accent transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-accent transition-colors">Huggies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-brand text-foreground">
              Help
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li><Link to="/shipping" className="hover:text-accent transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="hover:text-accent transition-colors">Jewelry Care</Link></li>
              <li><Link to="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-brand text-foreground">
              Company
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li><Link to="/about" className="hover:text-accent transition-colors">Our Story</Link></li>
              <li><Link to="/sustainability" className="hover:text-accent transition-colors">Sustainability</Link></li>
              <li><Link to="/journal" className="hover:text-accent transition-colors">Journal</Link></li>
              <li><Link to="/careers" className="hover:text-accent transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-subtle pt-8 md:flex-row">
          <p className="text-xs text-muted">
            © {currentYear} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-muted">
            <Link to="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram size={18} className="hover:text-accent transition-colors" />
            </Link>
            <Link to="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook size={18} className="hover:text-accent transition-colors" />
            </Link>
            <Link to="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <Twitter size={18} className="hover:text-accent transition-colors" />
            </Link>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted">
            <span className="rounded border border-subtle px-2 py-1">Visa</span>
            <span className="rounded border border-subtle px-2 py-1">Mastercard</span>
            <span className="rounded border border-subtle px-2 py-1">Amex</span>
            <span className="rounded border border-subtle px-2 py-1">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
