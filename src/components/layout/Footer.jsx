import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    shop: [
      { label: 'All Jewelry', path: '/shop' },
      { label: 'Earrings', path: '/shop?category=earrings' },
      { label: 'Necklaces', path: '/shop?category=necklaces' },
      { label: 'Huggies', path: '/shop?category=huggies' },
      { label: 'Gift Sets', path: '/shop?category=sets' },
    ],
    help: [
      { label: 'Shipping Info', path: '/shipping' },
      { label: 'Returns & Exchanges', path: '/returns' },
      { label: 'Size Guide', path: '/size-guide' },
      { label: 'Care Instructions', path: '/care' },
      { label: 'FAQ', path: '/faq' },
    ],
    company: [
      { label: 'Our Story', path: '/about' },
      { label: 'Journal', path: '/journal' },
      { label: 'Sustainability', path: '/sustainability' },
      { label: 'Contact Us', path: '/contact' },
    ],
  };

  return (
    <footer style={{ backgroundColor: 'var(--velmora-dark)', color: '#fff' }}>
      <div className="velmora-container mx-auto px-4 md:px-8 py-16">
        {/* Newsletter */}
        <div className="text-center mb-16 pb-16" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <h3 className="velmora-heading text-3xl md:text-4xl mb-4" style={{ color: 'var(--velmora-accent-light)' }}>
            Stay in the Light
          </h3>
          <p className="text-sm tracking-wide mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Join for 10% off your first order and early access to new collections.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 text-sm bg-transparent border outline-none placeholder:text-white/40"
              style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}
            />
            <button className="velmora-btn-accent whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="velmora-heading-lg text-2xl tracking-[0.2em] font-light" style={{ color: '#fff' }}>
              VELMORA
            </Link>
            <p className="text-sm mt-4 leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, designed for everyday luxury.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs tracking-[0.15em] uppercase font-semibold mb-4" style={{ color: 'var(--velmora-accent-light)' }}>
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: 'rgba(255,255,255,0.6)' }}
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
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a href="#" className="transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }} aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }} aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }} aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }} aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['Visa', 'MC', 'Amex', 'PayPal'].map((brand) => (
              <span
                key={brand}
                className="text-[10px] px-2 py-1 rounded border"
                style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.5)' }}
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
