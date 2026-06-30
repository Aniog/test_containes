import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const footerLinks = {
  Shop: [
    { label: 'Earrings', href: '/shop?category=earrings' },
    { label: 'Necklaces', href: '/shop?category=necklaces' },
    { label: 'Huggies', href: '/shop?category=huggies' },
    { label: 'Gift Sets', href: '/shop?category=sets' },
    { label: 'New Arrivals', href: '/shop' },
  ],
  Help: [
    { label: 'Shipping & Returns', href: '/' },
    { label: 'Size Guide', href: '/' },
    { label: 'Care Instructions', href: '/' },
    { label: 'FAQ', href: '/' },
    { label: 'Contact Us', href: '/' },
  ],
  Company: [
    { label: 'Our Story', href: '/#story' },
    { label: 'Sustainability', href: '/' },
    { label: 'Press', href: '/' },
    { label: 'Affiliates', href: '/' },
    { label: 'Privacy Policy', href: '/' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-obsidian text-ivory">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest text-ivory block mb-4">
              VELMORA
            </Link>
            <p className="text-taupe-light text-sm leading-relaxed mb-6 max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be worn, treasured, and passed on.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="text-taupe-light hover:text-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="text-taupe-light hover:text-gold transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Twitter / X" className="text-taupe-light hover:text-gold transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs tracking-widest uppercase font-semibold text-ivory mb-5">
                {title}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-taupe-light hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-taupe-light">
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>
          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE PAY'].map(p => (
              <span
                key={p}
                className="text-[9px] tracking-wider text-taupe-light border border-taupe/30 px-2 py-1 rounded-sm"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
