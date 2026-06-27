import { Link } from 'react-router-dom';

const columns = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', to: '/shop' },
      { label: 'Earrings', to: '/shop?category=earrings' },
      { label: 'Necklaces', to: '/shop?category=necklaces' },
      { label: 'Huggies', to: '/shop?category=huggies' },
      { label: 'Gift Sets', to: '/shop' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Returns', to: '#' },
      { label: 'Size Guide', to: '#' },
      { label: 'FAQ', to: '#' },
      { label: 'Contact Us', to: '#' },
      { label: 'Track Order', to: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', to: '#' },
      { label: 'Journal', to: '#' },
      { label: 'Careers', to: '#' },
      { label: 'Press', to: '#' },
      { label: 'Privacy Policy', to: '#' },
    ],
  },
];

const paymentIcons = ['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'];

const socialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'Pinterest', href: '#' },
  { label: 'TikTok', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-warm-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-12 sm:py-16">
          {/* Logo column */}
          <div className="col-span-2 sm:col-span-1">
            <Link to="/" className="font-serif text-xl text-white tracking-[0.2em] block mb-4">
              VELMORA
            </Link>
            <p className="text-xs leading-relaxed font-sans text-warm-400/80 max-w-[200px]">
              Demi-fine 18K gold-plated jewelry, crafted for the modern woman.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-xs tracking-wider uppercase font-sans text-warm-400/60 hover:text-gold-400 transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs tracking-[0.2em] uppercase font-sans text-white mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-xs font-sans text-warm-400/70 hover:text-gold-400 transition-colors"
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
        <div className="h-px bg-dark-700" />

        {/* Bottom section */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {paymentIcons.map((icon) => (
              <span
                key={icon}
                className="text-[10px] tracking-wider uppercase font-sans text-warm-400/40 border border-dark-700 px-2 py-1"
              >
                {icon}
              </span>
            ))}
          </div>
          <p className="text-[11px] font-sans text-warm-400/40">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
