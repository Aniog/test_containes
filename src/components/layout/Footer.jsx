import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { label: 'All Jewelry', href: '/shop' },
      { label: 'Earrings', href: '/shop?category=earrings' },
      { label: 'Necklaces', href: '/shop?category=necklaces' },
      { label: 'Huggies', href: '/shop?category=huggies' },
      { label: 'Gift Sets', href: '/shop?category=sets' },
    ],
    help: [
      { label: 'Shipping & Returns', href: '#' },
      { label: 'Size Guide', href: '#' },
      { label: 'Care Instructions', href: '#' },
      { label: 'FAQs', href: '#' },
      { label: 'Contact Us', href: '#' },
    ],
    company: [
      { label: 'Our Story', href: '#' },
      { label: 'Journal', href: '#' },
      { label: 'Sustainability', href: '#' },
      { label: 'Careers', href: '#' },
    ],
  };

  return (
    <footer className="bg-espresso text-ivory/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-extra-wide text-ivory mb-4 block">
              VELMORA
            </Link>
            <p className="text-ivory/60 text-sm leading-relaxed mb-6 max-w-xs">
              Crafted to be treasured. Demi-fine gold jewelry designed for the modern woman who appreciates quiet luxury.
            </p>
            
            {/* Social links */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-ivory/60 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-ivory/60 hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop links */}
          <div>
            <h4 className="font-medium text-ivory mb-4 text-sm tracking-wide">SHOP</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-ivory/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help links */}
          <div>
            <h4 className="font-medium text-ivory mb-4 text-sm tracking-wide">HELP</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-ivory/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-medium text-ivory mb-4 text-sm tracking-wide">COMPANY</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-ivory/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-ivory/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-ivory/40">
              &copy; {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>

            {/* Payment icons */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-ivory/40">We accept</span>
              <div className="flex items-center gap-2">
                <div className="w-10 h-6 bg-ivory/10 rounded flex items-center justify-center">
                  <span className="text-[10px] font-bold text-ivory/60">VISA</span>
                </div>
                <div className="w-10 h-6 bg-ivory/10 rounded flex items-center justify-center">
                  <span className="text-[10px] font-bold text-ivory/60">MC</span>
                </div>
                <div className="w-10 h-6 bg-ivory/10 rounded flex items-center justify-center">
                  <span className="text-[10px] font-bold text-ivory/60">AMEX</span>
                </div>
                <div className="w-10 h-6 bg-ivory/10 rounded flex items-center justify-center">
                  <span className="text-[10px] font-bold text-ivory/60">PP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
