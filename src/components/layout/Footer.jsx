import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const footerLinks = {
  Shop: [
    { label: 'Earrings', href: '/shop?category=earrings' },
    { label: 'Necklaces', href: '/shop?category=necklaces' },
    { label: 'Huggies', href: '/shop?category=huggies' },
    { label: 'Gift Sets', href: '/shop?category=sets' },
    { label: 'Bestsellers', href: '/shop' },
  ],
  Help: [
    { label: 'Shipping & Returns', href: '/help' },
    { label: 'Size Guide', href: '/help' },
    { label: 'Care Instructions', href: '/help' },
    { label: 'FAQ', href: '/help' },
    { label: 'Contact Us', href: '/contact' },
  ],
  Company: [
    { label: 'Our Story', href: '/about' },
    { label: 'Sustainability', href: '/about' },
    { label: 'Journal', href: '/journal' },
    { label: 'Press', href: '/press' },
    { label: 'Careers', href: '/careers' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-obsidian text-warm-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest text-warm-white font-light">
              VELMORA
            </Link>
            <p className="font-sans text-xs text-warm-white/50 mt-4 leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be treasured, worn every day.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-warm-white/40 hover:text-gold transition-colors duration-300">
                <Instagram size={16} />
              </a>
              <a href="#" aria-label="Facebook" className="text-warm-white/40 hover:text-gold transition-colors duration-300">
                <Facebook size={16} />
              </a>
              <a href="#" aria-label="Twitter" className="text-warm-white/40 hover:text-gold transition-colors duration-300">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-sans text-xs tracking-widest uppercase text-warm-white/40 mb-4">
                {section}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="font-sans text-xs text-warm-white/60 hover:text-gold transition-colors duration-300"
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
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-warm-white/30">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE'].map(p => (
              <span
                key={p}
                className="font-sans text-[9px] tracking-wider text-warm-white/30 border border-white/10 px-1.5 py-0.5"
              >
                {p}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a href="#" className="font-sans text-xs text-warm-white/30 hover:text-warm-white/60 transition-colors">
              Privacy
            </a>
            <a href="#" className="font-sans text-xs text-warm-white/30 hover:text-warm-white/60 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
