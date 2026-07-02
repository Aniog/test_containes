import { Link } from 'react-router-dom';

const shopLinks = [
  { to: '/shop', label: 'All Jewelry' },
  { to: '/shop?category=earrings', label: 'Earrings' },
  { to: '/shop?category=necklaces', label: 'Necklaces' },
  { to: '/shop?category=huggies', label: 'Huggies' },
  { to: '/shop?category=sets', label: 'Gift Sets' },
];

const helpLinks = [
  { to: '#', label: 'Shipping & Returns' },
  { to: '#', label: 'Size Guide' },
  { to: '#', label: 'FAQ' },
  { to: '#', label: 'Contact Us' },
];

const companyLinks = [
  { to: '/about', label: 'Our Story' },
  { to: '/journal', label: 'Journal' },
  { to: '#', label: 'Sustainability' },
  { to: '#', label: 'Press' },
];

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="font-sans text-overline uppercase tracking-[0.15em] text-warm-gray mb-5">
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.to}
              className="font-sans text-body text-charcoal/80 hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-deep-brown text-white">
      <div className="max-w-7xl mx-auto container-px section-padding">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] font-medium text-white">
              VELMORA
            </Link>
            <p className="font-sans text-body text-white/60 mt-4 max-w-xs leading-relaxed">
              Crafted to be treasured. Demi-fine 18K gold plated jewelry designed for the modern woman who values quality and intention.
            </p>
            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              {['Instagram', 'Pinterest', 'TikTok'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-colors duration-300"
                  aria-label={social}
                >
                  <span className="font-sans text-[10px] uppercase tracking-wider">
                    {social[0]}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Shop" links={shopLinks} />
          <FooterColumn title="Help" links={helpLinks} />
          <FooterColumn title="Company" links={companyLinks} />
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-caption text-white/40">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {/* Payment icons */}
            {['Visa', 'MC', 'Amex', 'PayPal', 'Apple'].map((method) => (
              <div
                key={method}
                className="h-7 px-2.5 bg-white/10 rounded flex items-center justify-center"
              >
                <span className="font-sans text-[9px] uppercase tracking-wider text-white/50">
                  {method}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
