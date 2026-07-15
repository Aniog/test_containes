import { Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = {
  shop: [
    { label: 'Earrings', href: '/shop?category=earrings' },
    { label: 'Necklaces', href: '/shop?category=necklaces' },
    { label: 'Huggies', href: '/shop?category=huggies' },
    { label: 'Gift Sets', href: '/shop?category=sets' },
  ],
  help: [
    { label: 'Shipping & Returns', href: '#' },
    { label: 'Care Guide', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Contact Us', href: '#' },
  ],
  company: [
    { label: 'Our Story', href: '/#story' },
    { label: 'Sustainability', href: '#' },
    { label: 'Journal', href: '/#journal' },
    { label: 'Press', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-velmora-sand bg-velmora-cream">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="inline-block font-serif text-2xl font-semibold tracking-[0.15em] uppercase text-velmora-ink"
            >
              Velmora
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-velmora-taupe">
              Demi-fine jewelry designed for everyday luxury. Crafted to be
              treasured, made to be worn.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                className="text-velmora-taupe transition-colors hover:text-velmora-gold"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-velmora-taupe transition-colors hover:text-velmora-gold"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-velmora-taupe transition-colors hover:text-velmora-gold"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-velmora-ink">
              Shop
            </h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-velmora-taupe transition-colors hover:text-velmora-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-velmora-ink">
              Help
            </h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-velmora-taupe transition-colors hover:text-velmora-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-velmora-ink">
              Company
            </h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-velmora-taupe transition-colors hover:text-velmora-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-velmora-sand pt-8 md:flex-row">
          <p className="text-xs text-velmora-taupe">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-12 items-center justify-center rounded border border-velmora-sand bg-white text-[10px] font-semibold text-velmora-taupe">
              VISA
            </span>
            <span className="flex h-8 w-12 items-center justify-center rounded border border-velmora-sand bg-white text-[10px] font-semibold text-velmora-taupe">
              MC
            </span>
            <span className="flex h-8 w-12 items-center justify-center rounded border border-velmora-sand bg-white text-[10px] font-semibold text-velmora-taupe">
              AMEX
            </span>
            <span className="flex h-8 w-12 items-center justify-center rounded border border-velmora-sand bg-white text-[10px] font-semibold text-velmora-taupe">
              PP
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
