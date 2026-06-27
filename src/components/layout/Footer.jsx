import { Link } from 'react-router-dom';

const columns = [
  {
    title: 'Shop',
    links: [
      { label: 'Earrings', to: '/shop?category=earrings' },
      { label: 'Necklaces', to: '/shop?category=necklaces' },
      { label: 'Huggies', to: '/shop?category=huggies' },
      { label: 'Gift Sets', to: '/shop' },
      { label: 'New Arrivals', to: '/shop' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Returns', to: '/about' },
      { label: 'Care Guide', to: '/about' },
      { label: 'Size Guide', to: '/about' },
      { label: 'FAQ', to: '/about' },
      { label: 'Contact Us', to: '/about' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', to: '/about' },
      { label: 'Journal', to: '/journal' },
      { label: 'Sustainability', to: '/about' },
      { label: 'Careers', to: '/about' },
    ],
  },
];

const socialIcons = [
  { label: 'Instagram', href: '#' },
  { label: 'Pinterest', href: '#' },
  { label: 'TikTok', href: '#' },
  { label: 'Facebook', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-velmora-charcoal text-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Logo column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-[0.25em] text-velmora-gold block mb-4">
              VELMORA
            </Link>
            <p className="text-sm text-velmora-sand leading-relaxed max-w-xs">
              Crafted to be treasured. Demi-fine 18K gold-plated jewelry designed for the modern woman.
            </p>
            <div className="flex gap-4 mt-6">
              {socialIcons.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-velmora-sand hover:text-velmora-gold transition-colors text-sm tracking-wider uppercase"
                  aria-label={s.label}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-serif text-lg text-velmora-gold-light mb-4 tracking-wider uppercase">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-velmora-sand hover:text-velmora-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-velmora-warm-brown/40 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-velmora-taupe">
              &copy; 2026 Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              {/* Payment icons */}
              {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map((p) => (
                <span key={p} className="text-[10px] text-velmora-taupe tracking-wider uppercase border border-velmora-warm-brown/30 rounded px-2 py-0.5">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
