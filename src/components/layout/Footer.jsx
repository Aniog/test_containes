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
  { label: 'Size Guide', href: '#' },
  { label: 'Care Instructions', href: '#' },
  { label: 'FAQ', href: '#' },
  { label: 'Contact Us', href: '#' },
];

const companyLinks = [
  { label: 'Our Story', href: '#about' },
  { label: 'Journal', href: '#journal' },
  { label: 'Sustainability', href: '#' },
  { label: 'Press', href: '#' },
  { label: 'Careers', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-cream-200">
      <div className="section-padding py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/">
              <h2 className="font-serif text-3xl font-semibold tracking-ultra-wide text-cream-50 mb-4">
                VELMORA
              </h2>
            </Link>
            <p className="text-sm text-cream-300 leading-relaxed max-w-xs mb-6">
              Crafted to be treasured. Demi-fine gold jewelry designed for the modern woman — 
              premium quality at an accessible price.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-cream-300 hover:text-gold-400 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a href="#" className="text-cream-300 hover:text-gold-400 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a href="#" className="text-cream-300 hover:text-gold-400 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-ultra-wide uppercase text-cream-50 mb-5">
              Shop
            </h3>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-cream-300 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-ultra-wide uppercase text-cream-50 mb-5">
              Help
            </h3>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-cream-300 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-ultra-wide uppercase text-cream-50 mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-cream-300 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-charcoal-700 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-400">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Payment icons */}
            <div className="flex items-center gap-3 text-cream-400">
              <span className="text-xs tracking-wide">VISA</span>
              <span className="text-[8px]">|</span>
              <span className="text-xs tracking-wide">Mastercard</span>
              <span className="text-[8px]">|</span>
              <span className="text-xs tracking-wide">AMEX</span>
              <span className="text-[8px]">|</span>
              <span className="text-xs tracking-wide">PayPal</span>
              <span className="text-[8px]">|</span>
              <span className="text-xs tracking-wide">Apple Pay</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
