import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const shopLinks = [
    { label: 'All Jewelry', href: '/shop' },
    { label: 'Earrings', href: '/shop?category=earrings' },
    { label: 'Necklaces', href: '/shop?category=necklaces' },
    { label: 'Huggies', href: '/shop?category=huggies' },
    { label: 'Gift Sets', href: '/shop?category=sets' },
  ];

  const helpLinks = [
    { label: 'Shipping & Returns', href: '#' },
    { label: 'Size Guide', href: '#' },
    { label: 'Care Instructions', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Contact Us', href: '#' },
  ];

  const companyLinks = [
    { label: 'Our Story', href: '#about' },
    { label: 'Sustainability', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Privacy Policy', href: '#' },
  ];

  return (
    <footer className="bg-obsidian text-cream/80">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-light tracking-widest uppercase text-cream">
              Velmora
            </Link>
            <p className="mt-4 text-sm font-sans text-cream/60 leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Hypoallergenic, 18K gold plated, made to last.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-cream/50 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream/50 hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream/50 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-medium text-cream mb-5">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm font-sans text-cream/60 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-medium text-cream mb-5">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm font-sans text-cream/60 hover:text-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-medium text-cream mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm font-sans text-cream/60 hover:text-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-sans text-cream/40">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE'].map(p => (
              <span
                key={p}
                className="text-[9px] font-medium font-sans text-cream/40 border border-cream/20 px-1.5 py-0.5 rounded-sm"
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
