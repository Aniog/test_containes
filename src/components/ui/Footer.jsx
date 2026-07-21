import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const shopLinks = [
  { name: 'All Jewelry', href: '/shop' },
  { name: 'Earrings', href: '/shop?category=earrings' },
  { name: 'Necklaces', href: '/shop?category=necklaces' },
  { name: 'Huggies', href: '/shop?category=huggies' },
  { name: 'Gift Sets', href: '/shop?category=sets' },
];

const helpLinks = [
  { name: 'Shipping & Returns', href: '#' },
  { name: 'Care Guide', href: '#' },
  { name: 'Size Guide', href: '#' },
  { name: 'FAQ', href: '#' },
  { name: 'Contact Us', href: '#' },
];

const companyLinks = [
  { name: 'Our Story', href: '/about' },
  { name: 'Journal', href: '/journal' },
  { name: 'Sustainability', href: '#' },
  { name: 'Press', href: '#' },
  { name: 'Careers', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-cream">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-widest-xl uppercase">
              Velmora
            </Link>
            <p className="mt-4 text-sm text-velmora-taupe max-w-sm leading-relaxed">
              Demi-fine jewelry designed for modern women. Crafted in 18k gold plate, made to be treasured and worn every day.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 border border-velmora-coffee flex items-center justify-center text-velmora-taupe hover:text-velmora-gold hover:border-velmora-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-velmora-coffee flex items-center justify-center text-velmora-taupe hover:text-velmora-gold hover:border-velmora-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-velmora-coffee flex items-center justify-center text-velmora-taupe hover:text-velmora-gold hover:border-velmora-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-medium text-velmora-taupe mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-velmora-cream/80 hover:text-velmora-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-medium text-velmora-taupe mb-5">
              Help
            </h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-velmora-cream/80 hover:text-velmora-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-medium text-velmora-taupe mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-velmora-cream/80 hover:text-velmora-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-velmora-coffee flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velmora-warm-gray">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-velmora-warm-gray">We accept</span>
            <div className="flex gap-2">
              {['Visa', 'MC', 'Amex', 'PayPal'].map((name) => (
                <span
                  key={name}
                  className="px-2 py-1 border border-velmora-coffee text-[10px] text-velmora-taupe"
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
