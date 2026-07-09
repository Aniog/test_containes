import { Link } from 'react-router-dom';

export default function Footer() {
  const shopLinks = [
    { label: 'Earrings', to: '/shop?category=earrings' },
    { label: 'Necklaces', to: '/shop?category=necklaces' },
    { label: 'Huggies', to: '/shop?category=huggies' },
    { label: 'Gift Sets', to: '/shop' },
  ];

  const helpLinks = [
    { label: 'Shipping & Returns', to: '#' },
    { label: 'Size Guide', to: '#' },
    { label: 'Care Instructions', to: '#' },
    { label: 'FAQ', to: '#' },
  ];

  const companyLinks = [
    { label: 'Our Story', to: '/#about' },
    { label: 'Sustainability', to: '#' },
    { label: 'Press', to: '#' },
    { label: 'Contact', to: '#' },
  ];

  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-semibold text-cream tracking-wide">
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              Demi-fine jewelry crafted for the modern woman. Timeless pieces designed to be treasured.
            </p>
            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              {['Instagram', 'Pinterest', 'TikTok'].map(social => (
                <a
                  key={social}
                  href="#"
                  className="text-xs uppercase tracking-wider text-cream/50 hover:text-gold transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-lg text-cream mb-4">Shop</h4>
            <ul className="space-y-2.5">
              {shopLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-cream/60 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-serif text-lg text-cream mb-4">Help</h4>
            <ul className="space-y-2.5">
              {helpLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-cream/60 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-lg text-cream mb-4">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-cream/60 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {['Visa', 'Mastercard', 'Amex', 'Apple Pay'].map(method => (
              <span key={method} className="text-[10px] uppercase tracking-wider text-cream/40 border border-cream/20 px-2 py-0.5 rounded-sm">
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
