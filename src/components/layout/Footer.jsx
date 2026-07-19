import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

// Pinterest SVG (not in lucide-react)
const PinterestIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.853 0 1.267.641 1.267 1.408 0 .858-.546 2.141-.828 3.33-.236.995.499 1.806 1.476 1.806 1.772 0 3.137-1.868 3.137-4.566 0-2.387-1.715-4.057-4.163-4.057-2.836 0-4.5 2.127-4.5 4.326 0 .856.33 1.775.741 2.276a.3.3 0 0 1 .069.286c-.076.313-.244.995-.277 1.134-.044.183-.146.222-.337.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
  </svg>
);

const footerLinks = {
  Shop: [
    { label: 'All Jewelry', href: '/shop' },
    { label: 'Earrings', href: '/shop?category=earrings' },
    { label: 'Necklaces', href: '/shop?category=necklaces' },
    { label: 'Huggies', href: '/shop?category=huggies' },
    { label: 'Gift Sets', href: '/shop?category=sets' },
  ],
  Help: [
    { label: 'Shipping & Returns', href: '/' },
    { label: 'Size Guide', href: '/' },
    { label: 'Care Instructions', href: '/' },
    { label: 'FAQ', href: '/' },
    { label: 'Contact Us', href: '/' },
  ],
  Company: [
    { label: 'Our Story', href: '/#about' },
    { label: 'Sustainability', href: '/' },
    { label: 'Press', href: '/' },
    { label: 'Careers', href: '/' },
    { label: 'Affiliates', href: '/' },
  ],
};

const Footer = () => (
  <footer className="bg-charcoal text-cream/80">
    <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-cream/10">
        {/* Brand */}
        <div className="col-span-2 lg:col-span-2">
          <Link to="/" className="font-serif text-2xl tracking-[0.25em] uppercase text-cream block mb-4">
            Velmora
          </Link>
          <p className="text-sm text-cream/60 leading-relaxed max-w-xs">
            Demi-fine gold jewelry crafted for the modern woman. Designed to be treasured, worn every day.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" aria-label="Instagram" className="text-cream/50 hover:text-gold transition-colors">
              <Instagram size={18} strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Facebook" className="text-cream/50 hover:text-gold transition-colors">
              <Facebook size={18} strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Pinterest" className="text-cream/50 hover:text-gold transition-colors">
              <PinterestIcon size={18} />
            </a>
          </div>
        </div>

        {/* Links */}
        {Object.entries(footerLinks).map(([section, links]) => (
          <div key={section}>
            <h4 className="text-xs tracking-widest uppercase text-cream/40 mb-5 font-medium">{section}</h4>
            <ul className="flex flex-col gap-3">
              {links.map(link => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-cream/60 hover:text-gold transition-colors"
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
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
        <p className="text-xs text-cream/30">
          © 2024 Velmora Fine Jewelry. All rights reserved.
        </p>

        {/* Payment icons */}
        <div className="flex items-center gap-3">
          {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map(p => (
            <span
              key={p}
              className="text-[9px] tracking-wider uppercase text-cream/30 border border-cream/15 px-2 py-1"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
