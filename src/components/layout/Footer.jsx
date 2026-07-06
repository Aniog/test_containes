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
    <footer className="bg-dark-surface text-dark-text">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-medium tracking-section">
              VELMORA
            </Link>
            <p className="text-sm text-dark-text/60 mt-4 leading-relaxed">
              Crafted with intention. Worn with confidence. Demi-fine jewelry for the modern woman.
            </p>
            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              {['Instagram', 'Pinterest', 'TikTok'].map(social => (
                <a
                  key={social}
                  href="#"
                  className="text-xs text-dark-text/50 hover:text-accent transition-colors uppercase tracking-wide"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-sans font-semibold uppercase tracking-widest mb-4 text-dark-text/80">Shop</h4>
            <ul className="space-y-2.5">
              {shopLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-dark-text/60 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs font-sans font-semibold uppercase tracking-widest mb-4 text-dark-text/80">Help</h4>
            <ul className="space-y-2.5">
              {helpLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-dark-text/60 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-sans font-semibold uppercase tracking-widest mb-4 text-dark-text/80">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-dark-text/60 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-dark-text/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-dark-text/40">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {['Visa', 'Mastercard', 'Amex', 'Apple Pay', 'PayPal'].map(method => (
              <span key={method} className="text-[10px] text-dark-text/40 border border-dark-text/20 px-2 py-0.5 rounded-sm">
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
