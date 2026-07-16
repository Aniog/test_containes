import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const shopLinks = [
    { label: 'Earrings', href: '/shop?category=earrings' },
    { label: 'Necklaces', href: '/shop?category=necklaces' },
    { label: 'Huggies', href: '/shop?category=huggies' },
    { label: 'Gift Sets', href: '/shop?category=sets' },
    { label: 'New Arrivals', href: '/shop' },
  ];

  const helpLinks = [
    { label: 'Shipping & Returns', href: '#' },
    { label: 'Size Guide', href: '#' },
    { label: 'Care Instructions', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Contact Us', href: '#' },
  ];

  const companyLinks = [
    { label: 'Our Story', href: '/about' },
    { label: 'Sustainability', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Journal', href: '/journal' },
  ];

  return (
    <footer className="bg-charcoal text-ivory/70">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-cormorant text-2xl font-medium tracking-[0.18em] uppercase text-ivory block mb-4">
              Velmora
            </Link>
            <p className="font-inter text-xs leading-relaxed text-ivory/50 mb-6 max-w-[200px]">
              Demi-fine gold jewelry crafted for the modern woman. Wear it every day.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-ivory/40 hover:text-gold transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" className="text-ivory/40 hover:text-gold transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-inter text-[10px] uppercase tracking-[0.16em] text-ivory/40 mb-5">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="font-inter text-xs text-ivory/60 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-inter text-[10px] uppercase tracking-[0.16em] text-ivory/40 mb-5">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="font-inter text-xs text-ivory/60 hover:text-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-inter text-[10px] uppercase tracking-[0.16em] text-ivory/40 mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="font-inter text-xs text-ivory/60 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ivory/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-[10px] text-ivory/30 tracking-wide">
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map(method => (
              <span
                key={method}
                className="font-inter text-[9px] uppercase tracking-wide text-ivory/30 border border-ivory/15 px-2 py-1 rounded-sm"
              >
                {method}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="font-inter text-[10px] text-ivory/30 hover:text-ivory/60 transition-colors">Privacy</a>
            <a href="#" className="font-inter text-[10px] text-ivory/30 hover:text-ivory/60 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
