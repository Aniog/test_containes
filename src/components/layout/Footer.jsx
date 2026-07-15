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
  { label: 'Shipping & Returns', href: '#', external: true },
  { label: 'Care Guide', href: '#', external: true },
  { label: 'FAQ', href: '#', external: true },
  { label: 'Contact Us', href: '#', external: true },
];

const companyLinks = [
  { label: 'Our Story', href: '/about' },
  { label: 'Journal', href: '/journal' },
  { label: 'Sustainability', href: '#', external: true },
  { label: 'Careers', href: '#', external: true },
];

export default function Footer() {
  return (
    <footer className="bg-base text-ivory">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.18em] font-semibold uppercase inline-block mb-5"
            >
              Velmora
            </Link>
            <p className="text-ivory/70 text-sm leading-relaxed max-w-sm mb-6">
              Demi-fine gold jewelry designed to be treasured. Thoughtfully crafted,
              fairly priced, and made for everyday luxury.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.16em] font-medium mb-5 text-ivory/90">
              Shop
            </h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-ivory/60 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.16em] font-medium mb-5 text-ivory/90">
              Help
            </h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      className="text-sm text-ivory/60 hover:text-gold transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm text-ivory/60 hover:text-gold transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.16em] font-medium mb-5 text-ivory/90">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      className="text-sm text-ivory/60 hover:text-gold transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm text-ivory/60 hover:text-gold transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-ivory/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-ivory/50 uppercase tracking-wide">We accept</span>
            <div className="flex gap-2">
              {['Visa', 'Mastercard', 'Amex', 'PayPal'].map((name) => (
                <span
                  key={name}
                  className="bg-ivory/10 text-ivory/70 text-[10px] px-2 py-1 rounded"
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
