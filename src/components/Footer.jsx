import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const SHOP_LINKS = [
  { label: 'All Jewelry', href: '/shop' },
  { label: 'Earrings', href: '/shop?category=earrings' },
  { label: 'Necklaces', href: '/shop?category=necklaces' },
  { label: 'Huggies', href: '/shop?category=huggies' },
  { label: 'Gift Sets', href: '/shop?category=sets' },
];

const HELP_LINKS = [
  { label: 'Shipping & Returns', href: '#' },
  { label: 'Size Guide', href: '#' },
  { label: 'Care Instructions', href: '#' },
  { label: 'FAQ', href: '#' },
  { label: 'Contact Us', href: '#' },
];

const COMPANY_LINKS = [
  { label: 'Our Story', href: '/about' },
  { label: 'Sustainability', href: '#' },
  { label: 'Press', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Journal', href: '/journal' },
];

export default function Footer() {
  return (
    <footer className="bg-velmora-charcoal text-velmora-cream">
      <div className="section-padding py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl font-semibold tracking-widest-xl uppercase text-velmora-cream inline-block mb-4"
            >
              Velmora
            </Link>
            <p className="text-sm text-velmora-taupe leading-relaxed mb-6 max-w-xs">
              Demi-fine jewelry designed for everyday luxury. Crafted with care, worn with confidence.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-velmora-taupe hover:text-velmora-gold transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-velmora-taupe hover:text-velmora-gold transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-velmora-taupe hover:text-velmora-gold transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-velmora-cream mb-5">
              Shop
            </h3>
            <ul className="flex flex-col gap-3">
              {SHOP_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-velmora-taupe hover:text-velmora-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-velmora-cream mb-5">
              Help
            </h3>
            <ul className="flex flex-col gap-3">
              {HELP_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-velmora-taupe hover:text-velmora-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-velmora-cream mb-5">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-velmora-taupe hover:text-velmora-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-velmora-taupe">
              &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-velmora-taupe">Visa</span>
              <span className="text-xs text-velmora-taupe">Mastercard</span>
              <span className="text-xs text-velmora-taupe">Amex</span>
              <span className="text-xs text-velmora-taupe">PayPal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}