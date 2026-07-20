import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const footerLinks = {
  Shop: [
    { label: 'All Jewelry', to: '/shop' },
    { label: 'Earrings', to: '/shop?category=earrings' },
    { label: 'Necklaces', to: '/shop?category=necklaces' },
    { label: 'Huggies', to: '/shop?category=huggies' },
    { label: 'Gift Sets', to: '/shop?category=sets' },
  ],
  Help: [
    { label: 'Shipping & Returns', to: '#' },
    { label: 'Size Guide', to: '#' },
    { label: 'Care Instructions', to: '#' },
    { label: 'FAQ', to: '#' },
    { label: 'Contact Us', to: '#' },
  ],
  Company: [
    { label: 'Our Story', to: '/#story' },
    { label: 'Sustainability', to: '#' },
    { label: 'Press', to: '#' },
    { label: 'Careers', to: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark text-dark-text">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-14">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl font-medium tracking-wide text-white mb-4 block"
            >
              VELMORA
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              Demi-fine gold jewelry, crafted for the modern woman. Designed in
              London. Worn worldwide.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-white/50 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="text-white/50 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="text-white/50 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-sans font-medium uppercase tracking-wider text-white/80 mb-5">
                {title}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-white/50 hover:text-white transition-colors"
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
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/40 hover:text-white/60 transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="text-xs text-white/40 hover:text-white/60 transition-colors cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
