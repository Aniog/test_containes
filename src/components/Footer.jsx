import { Link } from 'react-router-dom';

export default function Footer() {
  const columns = [
    {
      title: 'Shop',
      links: [
        { label: 'Earrings', to: '/shop?category=earrings' },
        { label: 'Necklaces', to: '/shop?category=necklaces' },
        { label: 'Huggies', to: '/shop?category=huggies' },
        { label: 'Sets', to: '/shop?category=sets' },
        { label: 'Bestsellers', to: '/shop' },
      ],
    },
    {
      title: 'Help',
      links: [
        { label: 'Shipping & Returns', to: '#' },
        { label: 'Care Guide', to: '#' },
        { label: 'Size Guide', to: '#' },
        { label: 'FAQ', to: '#' },
        { label: 'Contact Us', to: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Our Story', to: '#story' },
        { label: 'Sustainability', to: '#' },
        { label: 'Journal', to: '#' },
        { label: 'Press', to: '#' },
        { label: 'Careers', to: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-brand-charcoal text-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Logo + brand column */}
          <div className="lg:col-span-2">
            <Link to="/">
              <h2 className="font-serif text-3xl tracking-widest-2xl font-light mb-4">VELMORA</h2>
            </Link>
            <p className="font-sans text-sm text-brand-cream/60 max-w-xs leading-relaxed">
              Demi-fine gold jewelry crafted to be treasured. Premium quality, accessible luxury, designed for the modern woman.
            </p>
            <div className="flex gap-4 mt-6">
              {['Instagram', 'Pinterest', 'TikTok'].map(social => (
                <a
                  key={social}
                  href="#"
                  className="font-sans text-xs tracking-wider uppercase text-brand-cream/50 hover:text-brand-gold transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map(col => (
            <div key={col.title}>
              <h3 className="font-sans text-xs tracking-widest-xl uppercase text-brand-cream/40 mb-5">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="font-sans text-sm text-brand-cream/70 hover:text-brand-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-brand-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-brand-cream/40">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map(method => (
              <span key={method} className="font-sans text-[10px] uppercase tracking-wider text-brand-cream/30">
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
