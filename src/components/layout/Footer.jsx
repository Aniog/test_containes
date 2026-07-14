import { Link } from 'react-router-dom';

const shopLinks = [
  { label: 'Earrings', href: '/shop?category=earrings' },
  { label: 'Necklaces', href: '/shop?category=necklaces' },
  { label: 'Huggies', href: '/shop?category=huggies' },
  { label: 'All Jewelry', href: '/shop' },
];

const helpLinks = [
  { label: 'Shipping & Returns', href: '#' },
  { label: 'Size Guide', href: '#' },
  { label: 'Care Instructions', href: '#' },
  { label: 'FAQ', href: '#' },
];

const companyLinks = [
  { label: 'Our Story', href: '/#about' },
  { label: 'Sustainability', href: '#' },
  { label: 'Press', href: '#' },
  { label: 'Contact', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-light text-cream no-underline tracking-wide">
              VELMORA
            </Link>
            <p className="mt-4 text-sm font-light leading-relaxed text-cream/60">
              Demi-fine jewelry crafted for the modern woman. Timeless pieces designed to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-cream/50 mb-4 font-sans font-medium">
              Shop
            </h4>
            <ul className="space-y-3 list-none p-0 m-0">
              {shopLinks.map(link => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm font-light text-cream/70 no-underline hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-cream/50 mb-4 font-sans font-medium">
              Help
            </h4>
            <ul className="space-y-3 list-none p-0 m-0">
              {helpLinks.map(link => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm font-light text-cream/70 no-underline hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-cream/50 mb-4 font-sans font-medium">
              Company
            </h4>
            <ul className="space-y-3 list-none p-0 m-0">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm font-light text-cream/70 no-underline hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40 font-light">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-cream/40">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
