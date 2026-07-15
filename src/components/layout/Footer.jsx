import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

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
  { label: 'Careers', href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-velmora-ink text-velmora-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-serif text-3xl tracking-widest uppercase text-white"
            >
              Velmora
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-velmora-stone max-w-sm">
              Demi-fine jewelry, designed to be treasured. Crafted in 18K gold plate,
              made for everyday moments and unforgettable ones.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                aria-label="Instagram"
                className="text-velmora-stone hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-velmora-stone hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Pinterest"
                className="text-velmora-stone hover:text-white transition-colors text-sm font-serif"
              >
                P
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white mb-5">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-velmora-stone hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white mb-5">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-velmora-stone hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-velmora-stone hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velmora-stone">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-velmora-stone">Visa</span>
            <span className="text-xs text-velmora-stone">Mastercard</span>
            <span className="text-xs text-velmora-stone">Amex</span>
            <span className="text-xs text-velmora-stone">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
