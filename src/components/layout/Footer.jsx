import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const shopLinks = [
    { label: 'Earrings', path: '/shop?category=Earrings' },
    { label: 'Necklaces', path: '/shop?category=Necklaces' },
    { label: 'Huggies', path: '/shop?category=Huggies' },
    { label: 'New Arrivals', path: '/shop?sort=newest' },
    { label: 'Best Sellers', path: '/shop?sort=bestsellers' },
  ];

  const helpLinks = [
    { label: 'FAQ', path: '/faq' },
    { label: 'Shipping & Returns', path: '/shipping' },
    { label: 'Size Guide', path: '/size-guide' },
    { label: 'Care Instructions', path: '/care' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const companyLinks = [
    { label: 'Our Story', path: '/about' },
    { label: 'Journal', path: '/journal' },
    { label: 'Press', path: '/press' },
    { label: 'Sustainability', path: '/sustainability' },
    { label: 'Affiliate Program', path: '/affiliate' },
  ];

  return (
    <footer className="bg-[#2A2520] text-[#FAF8F5] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div>
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.2em] block mb-6"
            >
              VELMORA
            </Link>
            <p className="text-sm leading-relaxed text-[#E8E0D8] mb-8">
              Demi-fine jewelry crafted to be treasured. Each piece is designed with intention,
              made with care, and meant to be worn every day.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#8B7355] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#8B7355] transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="font-serif text-lg mb-6 tracking-wider uppercase">
              Shop
            </h3>
            <ul className="space-y-4">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-[#E8E0D8] hover:text-[#8B7355] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h3 className="font-serif text-lg mb-6 tracking-wider uppercase">
              Help
            </h3>
            <ul className="space-y-4">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-[#E8E0D8] hover:text-[#8B7355] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-serif text-lg mb-6 tracking-wider uppercase">
              Company
            </h3>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-[#E8E0D8] hover:text-[#8B7355] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment Icons & Copyright */}
        <div className="mt-16 pt-8 border-t border-[#6B5E54] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-[#E8E0D8]">Secure payment:</span>
            <div className="flex space-x-2">
              <div className="w-10 h-6 bg-[#E8E0D8] rounded opacity-60" />
              <div className="w-10 h-6 bg-[#E8E0D8] rounded opacity-60" />
              <div className="w-10 h-6 bg-[#E8E0D8] rounded opacity-60" />
            </div>
          </div>

          <p className="text-sm text-[#6B5E54]">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
