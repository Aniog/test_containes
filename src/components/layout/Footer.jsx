import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const shopLinks = [
    { to: '/shop?category=earrings', label: 'Earrings' },
    { to: '/shop?category=necklaces', label: 'Necklaces' },
    { to: '/shop?category=huggies', label: 'Huggies' },
    { to: '/shop?category=sets', label: 'Sets' }
  ];

  const helpLinks = [
    { to: '/shipping', label: 'Shipping & Returns' },
    { to: '/care', label: 'Jewelry Care' },
    { to: '/faq', label: 'FAQ' },
    { to: '/contact', label: 'Contact Us' }
  ];

  const companyLinks = [
    { to: '/about', label: 'Our Story' },
    { to: '/journal', label: 'Journal' },
    { to: '/sustainability', label: 'Sustainability' }
  ];

  return (
    <footer className="bg-[#1A1A1A] text-[#FDFCFA] pt-20 pb-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] text-[#FDFCFA]">
              VELMORA
            </Link>
            <p className="mt-4 text-[#9A9A9A] text-sm leading-relaxed max-w-xs">
              Crafted to be treasured. Demi-fine jewelry designed for the modern woman who appreciates quiet luxury and timeless elegance.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-[#9A9A9A]/30 rounded-full hover:border-[#C9A962] hover:text-[#C9A962] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-[#9A9A9A]/30 rounded-full hover:border-[#C9A962] hover:text-[#C9A962] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a
                href="mailto:hello@velmora.com"
                className="p-2 border border-[#9A9A9A]/30 rounded-full hover:border-[#C9A962] hover:text-[#C9A962] transition-colors"
                aria-label="Email"
              >
                <Mail size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.15em] uppercase text-[#9A9A9A] mb-4">
              Shop
            </h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-[#FDFCFA]/80 hover:text-[#C9A962] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.15em] uppercase text-[#9A9A9A] mb-4">
              Help
            </h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-[#FDFCFA]/80 hover:text-[#C9A962] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.15em] uppercase text-[#9A9A9A] mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-[#FDFCFA]/80 hover:text-[#C9A962] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#9A9A9A]/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[#9A9A9A]">
              &copy; {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>
            
            {/* Payment Icons */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-[#9A9A9A]">We accept</span>
              <div className="flex gap-2">
                {['Visa', 'MC', 'Amex', 'Apple Pay'].map((card) => (
                  <span
                    key={card}
                    className="px-2 py-1 text-xs bg-[#FDFCFA]/10 text-[#9A9A9A] rounded"
                  >
                    {card}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}