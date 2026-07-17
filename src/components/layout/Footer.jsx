import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const footerLinks = {
  Shop: [
    { label: 'All Jewelry', href: '/shop' },
    { label: 'Earrings', href: '/shop?category=Earrings' },
    { label: 'Necklaces', href: '/shop?category=Necklaces' },
    { label: 'Huggies', href: '/shop?category=Huggies' },
    { label: 'Gift Sets', href: '/shop?category=Sets' },
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
    { label: 'Careers', href: '/' },
    { label: 'Affiliates', href: '/' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-velmora-obsidian text-velmora-cream/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-8">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 pb-12 border-b border-velmora-stone/40">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-light tracking-[0.18em] text-velmora-cream">
              VELMORA
            </Link>
            <p className="mt-4 text-xs leading-relaxed text-velmora-cream/50 max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be worn every day, treasured forever.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="/" aria-label="Instagram" className="text-velmora-cream/50 hover:text-velmora-gold transition-colors">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="/" aria-label="Facebook" className="text-velmora-cream/50 hover:text-velmora-gold transition-colors">
                <Facebook size={16} strokeWidth={1.5} />
              </a>
              <a href="/" aria-label="Twitter" className="text-velmora-cream/50 hover:text-velmora-gold transition-colors">
                <Twitter size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs uppercase tracking-widest font-medium text-velmora-cream mb-5">
                {heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-xs text-velmora-cream/50 hover:text-velmora-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs text-velmora-cream/30">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE'].map((p) => (
              <span
                key={p}
                className="text-[9px] font-semibold tracking-wider text-velmora-cream/30 border border-velmora-stone/40 px-1.5 py-0.5"
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
