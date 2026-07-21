import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const shopLinks = [
    { to: '/shop', label: 'All Jewelry' },
    { to: '/shop?category=Earrings', label: 'Earrings' },
    { to: '/shop?category=Necklaces', label: 'Necklaces' },
    { to: '/shop?category=Huggies', label: 'Huggies' },
    { to: '/shop?category=Sets', label: 'Gift Sets' },
  ];

  const helpLinks = [
    { to: '#', label: 'Contact Us' },
    { to: '#', label: 'Shipping Info' },
    { to: '#', label: 'Returns & Exchanges' },
    { to: '#', label: 'Size Guide' },
    { to: '#', label: 'Care Instructions' },
  ];

  const companyLinks = [
    { to: '/about', label: 'Our Story' },
    { to: '#', label: 'Sustainability' },
    { to: '#', label: 'Press' },
    { to: '#', label: 'Careers' },
  ];

  return (
    <footer className="bg-[var(--color-charcoal)] text-[var(--color-ivory)]">
      {/* Main Footer */}
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.2em] text-[var(--color-ivory)] hover:text-[var(--color-gold)] transition-colors"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-[var(--color-warm-gray)] leading-relaxed">
              Fine jewelry crafted for the modern woman. Demi-fine pieces that 
              become treasured companions in your everyday elegance.
            </p>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="text-xs font-medium tracking-[0.15em] uppercase text-[var(--color-ivory)] mb-4">
              Shop
            </h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-[var(--color-warm-gray)] hover:text-[var(--color-gold)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h4 className="text-xs font-medium tracking-[0.15em] uppercase text-[var(--color-ivory)] mb-4">
              Help
            </h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-[var(--color-warm-gray)] hover:text-[var(--color-gold)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-xs font-medium tracking-[0.15em] uppercase text-[var(--color-ivory)] mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-[var(--color-warm-gray)] hover:text-[var(--color-gold)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-[var(--color-mocha)]">
          <div className="max-w-md">
            <h4 className="text-sm font-medium text-[var(--color-ivory)] mb-2">
              Join the Velmora Community
            </h4>
            <p className="text-xs text-[var(--color-warm-gray)] mb-4">
              Subscribe for exclusive offers and early access to new collections.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 bg-transparent border border-[var(--color-mocha)] text-[var(--color-ivory)] placeholder-[var(--color-warm-gray)] text-sm focus:outline-none focus:border-[var(--color-gold)] transition-colors"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--color-mocha)]">
        <div className="container py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-xs text-[var(--color-warm-gray)]">
              &copy; {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>

            {/* Payment Icons */}
            <div className="flex items-center gap-4">
              <span className="text-[10px] text-[var(--color-warm-gray)] uppercase tracking-wider">
                We Accept
              </span>
              <div className="flex items-center gap-3">
                {/* Visa */}
                <svg className="h-5 w-auto text-[var(--color-warm-gray)]" viewBox="0 0 50 16" fill="currentColor">
                  <path d="M19.5 15.5h-3.2l2-12.5h3.2l-2 12.5zm7.4-12.2c-.6-.3-1.6-.5-2.8-.5-3.1 0-5.3 1.6-5.3 3.9 0 1.7 1.5 2.6 2.7 3.2 1.2.5 1.6.9 1.6 1.4 0 .7-.9 1.1-1.8 1.1-1.2 0-1.8-.2-2.8-.6l-.4-.2-.4 2.5c.7.3 1.9.6 3.2.6 3.3 0 5.5-1.6 5.5-4 0-1.4-.8-2.5-2.6-3.4-1.1-.6-1.8-.9-1.8-1.4 0-.5.5-.9 1.7-.9.9 0 1.7.2 2.2.4l.3.1.4-2.3zm7.5-.3h-2.3c-.7 0-1.3.2-1.6.9l-4.4 11.6h3.1l.6-1.8h3.8l.4 1.8h2.7l-2.3-12.5zm-3.5 8.1l1.2-3.3.3-.9.2 1 .7 3.2h-2.4zm9.5-8.1l-3.1 8.4-.3-1.5c-.5-1.8-2.2-3.8-4.1-4.7l2.8 7.8h3.1l5.1-10h-3.5z"/>
                </svg>
                {/* Mastercard */}
                <svg className="h-5 w-auto text-[var(--color-warm-gray)]" viewBox="0 0 50 32" fill="currentColor">
                  <circle cx="20" cy="16" r="12" opacity="0.5"/>
                  <circle cx="30" cy="16" r="12" opacity="0.5"/>
                </svg>
                {/* Amex */}
                <svg className="h-5 w-auto text-[var(--color-warm-gray)]" viewBox="0 0 50 32" fill="currentColor">
                  <rect x="5" y="6" width="40" height="20" rx="2" opacity="0.5"/>
                </svg>
                <span className="text-xs text-[var(--color-warm-gray)]">+ more</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-[var(--color-warm-gray)] hover:text-[var(--color-gold)] transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-[var(--color-warm-gray)] hover:text-[var(--color-gold)] transition-colors" aria-label="Pinterest">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="text-[var(--color-warm-gray)] hover:text-[var(--color-gold)] transition-colors" aria-label="TikTok">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div className="mt-6 pt-6 border-t border-[var(--color-mocha)] flex flex-wrap justify-center gap-6">
            <a href="#" className="text-xs text-[var(--color-warm-gray)] hover:text-[var(--color-gold)] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-[var(--color-warm-gray)] hover:text-[var(--color-gold)] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-[var(--color-warm-gray)] hover:text-[var(--color-gold)] transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
