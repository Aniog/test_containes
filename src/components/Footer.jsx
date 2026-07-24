import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const shopLinks = [
  { label: 'All Jewelry', href: '/shop' },
  { label: 'Earrings', href: '/shop?category=earrings' },
  { label: 'Necklaces', href: '/shop?category=necklaces' },
  { label: 'Huggies', href: '/shop?category=huggies' },
  { label: 'Gift Sets', href: '/shop?category=sets' },
];

const helpLinks = [
  { label: 'Shipping & Returns', href: '#' },
  { label: 'Care Guide', href: '#' },
  { label: 'FAQ', href: '#' },
  { label: 'Contact Us', href: '#' },
];

const companyLinks = [
  { label: 'Our Story', href: '/about' },
  { label: 'Journal', href: '/journal' },
  { label: 'Sustainability', href: '#' },
  { label: 'Press', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-base text-canvas">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              to="/"
              className="font-serif text-xl font-medium tracking-[0.15em] text-canvas"
            >
              VELMORA
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-canvas/70">
              Demi-fine jewelry designed to be treasured. Hand-finished in 18K gold plate, made for everyday luxury.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-canvas/70 transition-colors hover:text-canvas" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-canvas/70 transition-colors hover:text-canvas" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-canvas/70 transition-colors hover:text-canvas" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-canvas/50">
              Shop
            </h4>
            <ul className="mt-5 space-y-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-canvas/80 transition-colors hover:text-canvas"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-canvas/50">
              Help
            </h4>
            <ul className="mt-5 space-y-3">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-canvas/80 transition-colors hover:text-canvas"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-canvas/50">
              Company
            </h4>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-canvas/80 transition-colors hover:text-canvas"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-canvas/10 pt-8 md:flex-row">
          <p className="text-xs text-canvas/50">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-canvas/50">We accept:</span>
            <div className="flex gap-2">
              {['Visa', 'Mastercard', 'Amex', 'PayPal'].map((name) => (
                <span
                  key={name}
                  className="flex h-6 items-center rounded bg-canvas/10 px-2 text-[10px] font-medium text-canvas/70"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
