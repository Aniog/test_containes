import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const COLS = [
  {
    title: 'Shop',
    links: [
      { to: '/shop', label: 'All Jewelry' },
      { to: '/shop?collection=earrings', label: 'Earrings' },
      { to: '/shop?collection=necklaces', label: 'Necklaces' },
      { to: '/shop?collection=huggies', label: 'Huggies' },
      { to: '/shop?collection=sets', label: 'Gift Sets' },
    ],
  },
  {
    title: 'Help',
    links: [
      { to: '#', label: 'Contact' },
      { to: '#', label: 'Shipping' },
      { to: '#', label: 'Returns' },
      { to: '#', label: 'Jewelry Care' },
      { to: '#', label: 'FAQ' },
    ],
  },
  {
    title: 'Company',
    links: [
      { to: '/about', label: 'Our Story' },
      { to: '/journal', label: 'Journal' },
      { to: '#', label: 'Press' },
      { to: '#', label: 'Sustainability' },
      { to: '#', label: 'Stockists' },
    ],
  },
];

const Footer = () => (
  <footer className="bg-velmora-ink text-velmora-cream mt-24">
    <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 pt-20 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <Link to="/" className="font-serif text-3xl tracking-[0.25em] font-light">
            VELMORA
          </Link>
          <p className="mt-6 text-velmora-cream/70 max-w-xs leading-relaxed">
            Demi-fine jewelry crafted to be lived in, layered, and treasured for years to come.
          </p>
          <div className="mt-8 flex gap-5">
            <a href="#" aria-label="Instagram" className="hover:text-velmora-gold transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-velmora-gold transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-velmora-gold transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Youtube" className="hover:text-velmora-gold transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {COLS.map((col) => (
          <div key={col.title} className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.3em] text-velmora-gold mb-5">
              {col.title}
            </h4>
            <ul className="space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm text-velmora-cream/80 hover:text-velmora-cream transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="md:col-span-2">
          <h4 className="text-xs uppercase tracking-[0.3em] text-velmora-gold mb-5">Payment</h4>
          <div className="flex flex-wrap gap-2">
            {['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE'].map((p) => (
              <span
                key={p}
                className="text-[10px] tracking-widest px-2 py-1 border border-velmora-cream/30 text-velmora-cream/70 rounded-sm"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-velmora-cream/15 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-velmora-cream/60">
        <p>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-velmora-cream">Privacy</a>
          <a href="#" className="hover:text-velmora-cream">Terms</a>
          <a href="#" className="hover:text-velmora-cream">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
