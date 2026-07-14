import { Link } from 'react-router-dom';

export default function Footer() {
  const shopLinks = [
    { to: '/shop?category=earrings', label: 'Earrings' },
    { to: '/shop?category=necklaces', label: 'Necklaces' },
    { to: '/shop?category=huggies', label: 'Huggies' },
    { to: '/shop', label: 'All Jewelry' },
  ];

  const helpLinks = [
    { to: '#', label: 'Shipping & Returns' },
    { to: '#', label: 'Size Guide' },
    { to: '#', label: 'Care Instructions' },
    { to: '#', label: 'FAQ' },
  ];

  const companyLinks = [
    { to: '/about', label: 'Our Story' },
    { to: '#', label: 'Sustainability' },
    { to: '#', label: 'Press' },
    { to: '#', label: 'Contact' },
  ];

  return (
    <footer className="bg-dark-surface text-cream/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl text-cream font-semibold tracking-wide">
              VELMORA
            </Link>
            <p className="text-sm text-cream/60 mt-3 leading-relaxed">
              Crafted to be treasured. Demi-fine jewelry for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-cream/50 mb-4 font-medium">Shop</h4>
            <ul className="space-y-2.5">
              {shopLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-cream/70 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-cream/50 mb-4 font-medium">Help</h4>
            <ul className="space-y-2.5">
              {helpLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-cream/70 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-cream/50 mb-4 font-medium">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-cream/70 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-cream/40">Visa</span>
            <span className="text-xs text-cream/40">Mastercard</span>
            <span className="text-xs text-cream/40">Apple Pay</span>
            <span className="text-xs text-cream/40">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
