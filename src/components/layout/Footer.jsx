import { Link } from 'react-router-dom';

const footerLinks = {
  shop: [
    { label: 'All Jewelry', href: '/shop' },
    { label: 'Earrings', href: '/shop?category=earrings' },
    { label: 'Necklaces', href: '/shop?category=necklaces' },
    { label: 'Huggies', href: '/shop?category=huggies' },
    { label: 'Gift Sets', href: '/shop?category=sets' },
  ],
  help: [
    { label: 'Shipping & Delivery', href: '/shipping' },
    { label: 'Returns & Exchanges', href: '/returns' },
    { label: 'Size Guide', href: '/size-guide' },
    { label: 'Care Instructions', href: '/care' },
    { label: 'Contact Us', href: '/contact' },
  ],
  company: [
    { label: 'Our Story', href: '/about' },
    { label: 'Journal', href: '/journal' },
    { label: 'Sustainability', href: '/sustainability' },
    { label: 'Press', href: '/press' },
    { label: 'Careers', href: '/careers' },
  ],
};

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com', icon: 'IG' },
  { label: 'Pinterest', href: 'https://pinterest.com', icon: 'PI' },
  { label: 'TikTok', href: 'https://tiktok.com', icon: 'TK' },
];

const paymentIcons = ['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'];

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-cream-100">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-serif text-2xl font-light tracking-[0.25em] text-cream-50 mb-4 inline-block"
            >
              VELMORA
            </Link>
            <p className="font-sans text-sm font-light text-charcoal-300 leading-relaxed max-w-xs mb-6">
              Demi-fine jewelry crafted for the modern woman. Designed to be treasured, made to be worn every day.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 border border-charcoal-700 rounded-full flex items-center justify-center text-[10px] font-sans font-semibold tracking-wider text-charcoal-300 hover:border-gold-500 hover:text-gold-500 transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div>
            <h3 className="text-xs font-sans font-semibold uppercase tracking-ultra-wide text-cream-200 mb-5">
              Shop
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.shop.map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="text-sm font-sans font-light text-charcoal-400 hover:text-cream-100 transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-sans font-semibold uppercase tracking-ultra-wide text-cream-200 mb-5">
              Help
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.help.map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="text-sm font-sans font-light text-charcoal-400 hover:text-cream-100 transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-sans font-semibold uppercase tracking-ultra-wide text-cream-200 mb-5">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="text-sm font-sans font-light text-charcoal-400 hover:text-cream-100 transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs font-sans text-charcoal-600 order-2 md:order-1">
              © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>

            {/* Payment icons */}
            <div className="flex items-center gap-3 order-1 md:order-2">
              {paymentIcons.map((p) => (
                <span
                  key={p}
                  className="px-2 py-1 bg-charcoal-800 rounded text-[9px] font-sans font-semibold tracking-wider text-charcoal-500"
                >
                  {p}
                </span>
              ))}
            </div>

            {/* Legal */}
            <div className="flex items-center gap-4 order-3">
              <Link
                to="/privacy"
                className="text-xs font-sans text-charcoal-600 hover:text-charcoal-400 transition-colors"
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className="text-xs font-sans text-charcoal-600 hover:text-charcoal-400 transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
