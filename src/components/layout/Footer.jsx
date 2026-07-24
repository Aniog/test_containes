import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

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
    { label: 'Our Story', href: '/#story' },
    { label: 'Sustainability', href: '/' },
    { label: 'Press', href: '/' },
    { label: 'Affiliates', href: '/' },
    { label: 'Privacy Policy', href: '/' },
  ],
};

const paymentIcons = ['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE PAY'];

export default function Footer() {
  return (
    <footer className="bg-velmora-obsidian text-velmora-cream/70">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link to="/" className="font-serif text-2xl font-light tracking-[0.25em] uppercase text-velmora-cream block mb-4">
              Velmora
            </Link>
            <p className="font-sans text-sm leading-relaxed text-velmora-cream/50 max-w-xs mb-6">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be worn every day, treasured for a lifetime.
            </p>
            {/* Social */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-velmora-cream/40 hover:text-velmora-gold transition-colors duration-300" aria-label="Instagram">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-velmora-cream/40 hover:text-velmora-gold transition-colors duration-300" aria-label="Facebook">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-velmora-cream mb-5">
                {title}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="font-sans text-sm text-velmora-cream/50 hover:text-velmora-gold transition-colors duration-300"
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
      <div className="border-t border-velmora-cream/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-velmora-cream/30 tracking-wide">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-2">
            {paymentIcons.map(icon => (
              <div
                key={icon}
                className="px-2 py-1 border border-velmora-cream/10 rounded-sm"
              >
                <span className="font-sans text-[9px] font-medium tracking-wider text-velmora-cream/30 uppercase">
                  {icon}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
