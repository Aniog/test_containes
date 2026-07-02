import { Link } from 'react-router-dom';

export default function Footer() {
  const shopLinks = [
    { label: 'All Jewelry', to: '/shop' },
    { label: 'Earrings', to: '/shop?category=earrings' },
    { label: 'Necklaces', to: '/shop?category=necklaces' },
    { label: 'Huggies', to: '/shop?category=huggies' },
    { label: 'Gift Sets', to: '/shop' },
  ];

  const helpLinks = [
    { label: 'Shipping & Returns', to: '/about' },
    { label: 'Size Guide', to: '/about' },
    { label: 'Care Instructions', to: '/about' },
    { label: 'FAQ', to: '/about' },
    { label: 'Contact Us', to: '/about' },
  ];

  const companyLinks = [
    { label: 'Our Story', to: '/about' },
    { label: 'Journal', to: '/journal' },
    { label: 'Sustainability', to: '/about' },
    { label: 'Press', to: '/about' },
  ];

  return (
    <footer className="bg-obsidian-950 border-t border-obsidian-800/30">
      {/* Newsletter + Payment bar */}
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block">
              <span className="font-serif text-2xl font-light tracking-[0.15em] text-cream-50">
                VELMORA
              </span>
            </Link>
            <p className="mt-4 text-sm text-obsidian-400 leading-relaxed max-w-xs">
              Crafted to be treasured. Premium demi-fine 18K gold plated jewelry designed for the modern woman.
            </p>
            {/* Social links */}
            <div className="flex gap-4 mt-6">
              {['Instagram', 'Pinterest', 'TikTok'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs tracking-widest uppercase text-obsidian-500 hover:text-gold-400 transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs tracking-widest-xl uppercase text-obsidian-300 mb-5">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-obsidian-400 hover:text-gold-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs tracking-widest-xl uppercase text-obsidian-300 mb-5">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-obsidian-400 hover:text-gold-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs tracking-widest-xl uppercase text-obsidian-300 mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-obsidian-400 hover:text-gold-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-obsidian-800/30 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-obsidian-600">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map((method) => (
              <span key={method} className="text-[10px] tracking-wider uppercase text-obsidian-600 border border-obsidian-800/50 px-2 py-1 rounded-sm">
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
