// Velmora Fine Jewelry - Footer Component
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const shopLinks = [
    { name: 'All Products', href: '/collections/all' },
    { name: 'Earrings', href: '/collections/earrings' },
    { name: 'Necklaces', href: '/collections/necklaces' },
    { name: 'Huggies', href: '/collections/huggies' },
    { name: 'Gift Sets', href: '/collections/sets' },
  ];

  const helpLinks = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Shipping & Returns', href: '/shipping' },
    { name: 'Size Guide', href: '/size-guide' },
    { name: 'Care Instructions', href: '/care' },
    { name: 'FAQs', href: '/faq' },
  ];

  const companyLinks = [
    { name: 'Our Story', href: '/about' },
    { name: 'Journal', href: '/journal' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'Careers', href: '/careers' },
  ];

  return (
    <footer className="bg-[#1A1A1A] text-white">
      {/* Main Footer */}
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.15em] text-white mb-4 inline-block"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              VELMORA
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-6" style={{ fontFamily: "'Manrope', sans-serif" }}>
              Demi-fine jewelry crafted for the modern woman. Each piece is designed to be treasured, worn, and loved.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white/60 hover:text-[#B8860B] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white/60 hover:text-[#B8860B] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} strokeWidth={1.5} />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white/60 hover:text-[#B8860B] transition-colors"
                aria-label="Pinterest"
              >
                <svg size={20} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.406.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3
              className="text-xs font-medium tracking-[0.15em] uppercase text-white/40 mb-6"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Shop
            </h3>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/80 hover:text-[#B8860B] transition-colors"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3
              className="text-xs font-medium tracking-[0.15em] uppercase text-white/40 mb-6"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Help
            </h3>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/80 hover:text-[#B8860B] transition-colors"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3
              className="text-xs font-medium tracking-[0.15em] uppercase text-white/40 mb-6"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/80 hover:text-[#B8860B] transition-colors"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p
              className="text-xs text-white/40"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              © {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>

            {/* Payment Icons */}
            <div className="flex items-center gap-4">
              <span className="text-xs text-white/40 uppercase tracking-wider">
                We Accept
              </span>
              <div className="flex items-center gap-2">
                {/* Visa */}
                <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center">
                  <span className="text-[10px] font-bold text-white/60">VISA</span>
                </div>
                {/* Mastercard */}
                <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center">
                  <span className="text-[10px] font-bold text-white/60">MC</span>
                </div>
                {/* Amex */}
                <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center">
                  <span className="text-[8px] font-bold text-white/60">AMEX</span>
                </div>
                {/* PayPal */}
                <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center">
                  <span className="text-[8px] font-bold text-white/60">PayPal</span>
                </div>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="text-xs text-white/40 hover:text-white/60 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-xs text-white/40 hover:text-white/60 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
