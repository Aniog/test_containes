import { Link } from 'react-router-dom';

const footerLinks = {
  Shop: [
    { label: 'All Jewelry', to: '/shop' },
    { label: 'Earrings', to: '/shop?category=earrings' },
    { label: 'Necklaces', to: '/shop?category=necklaces' },
    { label: 'Huggies', to: '/shop?category=huggies' },
    { label: 'Gift Sets', to: '/shop?category=earrings' },
  ],
  Help: [
    { label: 'Shipping & Returns', to: '/about' },
    { label: 'Size Guide', to: '/about' },
    { label: 'FAQ', to: '/about' },
    { label: 'Contact Us', to: '/about' },
    { label: 'Care Instructions', to: '/about' },
  ],
  Company: [
    { label: 'Our Story', to: '/about' },
    { label: 'Sustainability', to: '/about' },
    { label: 'Journal', to: '/journal' },
    { label: 'Press', to: '/about' },
    { label: 'Careers', to: '/about' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-velmora-bg border-t border-velmora-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-[0.15em] text-velmora-text font-light">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-velmora-text-muted leading-relaxed max-w-xs">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman who appreciates quiet luxury.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              {['Instagram', 'Pinterest', 'TikTok'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-9 h-9 border border-velmora-border rounded-full flex items-center justify-center text-velmora-text-muted hover:border-velmora-gold hover:text-velmora-gold transition-all duration-300 text-xs"
                  aria-label={platform}
                >
                  {platform[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-velmora-text mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-velmora-text-muted hover:text-velmora-gold transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-velmora-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velmora-text-muted">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {/* Payment Icons */}
            <div className="flex items-center gap-3">
              {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map((brand) => (
                <span
                  key={brand}
                  className="text-[10px] font-medium tracking-wider text-velmora-text-muted border border-velmora-border rounded px-2 py-1"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
