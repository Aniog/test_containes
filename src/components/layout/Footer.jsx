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
    { label: 'Our Story', href: '/#about' },
    { label: 'Sustainability', href: '/' },
    { label: 'Press', href: '/' },
    { label: 'Affiliates', href: '/' },
    { label: 'Privacy Policy', href: '/' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-velmora-obsidian text-velmora-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-20 pb-10">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-14">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="font-cormorant font-light text-2xl tracking-widest-xl uppercase text-velmora-white block mb-4"
            >
              Velmora
            </Link>
            <p className="font-inter font-light text-xs text-velmora-white/50 leading-relaxed mb-6 max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be worn every day, treasured forever.
            </p>
            {/* Social */}
            <div className="flex gap-4">
              {[
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Facebook, label: 'Facebook' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-velmora-white/40 hover:text-velmora-gold transition-colors duration-300"
                >
                  <Icon className="w-4 h-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <p className="font-inter text-xs font-medium uppercase tracking-widest text-velmora-white mb-5">
                {heading}
              </p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="font-inter text-xs font-light text-velmora-white/50 hover:text-velmora-gold transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-velmora-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-inter text-xs text-velmora-white/30">
              © 2026 Velmora Fine Jewelry. All rights reserved.
            </p>

            {/* Payment icons */}
            <div className="flex items-center gap-3">
              {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map((method) => (
                <div
                  key={method}
                  className="bg-velmora-white/10 rounded px-2 py-1 font-inter text-[9px] font-medium text-velmora-white/50 uppercase tracking-wide"
                >
                  {method}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
