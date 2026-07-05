import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const shopLinks = [
    { label: 'All Jewelry', path: '/shop' },
    { label: 'Earrings', path: '/shop?category=Earrings' },
    { label: 'Necklaces', path: '/shop?category=Necklaces' },
    { label: 'Huggies', path: '/shop?category=Huggies' },
  ];

  const helpLinks = [
    { label: 'Shipping', path: '/about' },
    { label: 'Returns', path: '/about' },
    { label: 'Care Guide', path: '/journal' },
    { label: 'Contact', path: '/about' },
  ];

  const companyLinks = [
    { label: 'Our Story', path: '/about' },
    { label: 'Journal', path: '/journal' },
    { label: 'Sustainability', path: '/about' },
    { label: 'Press', path: '/journal' },
  ];

  return (
    <footer className="bg-[#1C1917] text-[#F5F2ED] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-6 pb-12 border-b border-white/10">
          {/* Logo */}
          <div className="col-span-2 md:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-[#9A9288] max-w-xs">
              Timeless demi-fine jewelry, crafted with intention and designed to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase text-[#9A9288] mb-4">Shop</div>
            <ul className="space-y-2 text-sm">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="footer-link text-[#F5F2ED] hover:text-[#B8976A]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase text-[#9A9288] mb-4">Help</div>
            <ul className="space-y-2 text-sm">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="footer-link text-[#F5F2ED] hover:text-[#B8976A]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase text-[#9A9288] mb-4">Company</div>
            <ul className="space-y-2 text-sm">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="footer-link text-[#F5F2ED] hover:text-[#B8976A]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#9A9288]">
          <div>
            © {currentYear} Velmora Fine Jewelry. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            {/* Payment Icons (text representation) */}
            <div className="flex items-center gap-3 tracking-[0.1em]">
              VISA · MC · AMEX · APPLE PAY
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B8976A] transition-colors">
                IG
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B8976A] transition-colors">
                PT
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
