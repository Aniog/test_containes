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
  ];

  return (
    <footer className="bg-velmora-text text-velmora-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-16">
          {/* Logo & Tagline */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="logo text-velmora-white text-xl tracking-[0.25em]">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-velmora-text-light leading-relaxed">
              Fine jewelry, thoughtfully crafted for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-velmora-gold-light">
              Shop
            </h4>
            <ul className="space-y-2">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-velmora-gold-light">
              Help
            </h4>
            <ul className="space-y-2">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-velmora-gold-light">
              Company
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-gold mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-velmora-text-light">
          <div className="flex items-center gap-4">
            <span>© {currentYear} Velmora Fine Jewelry</span>
            <span className="hidden md:inline">·</span>
            <Link to="/about" className="footer-link">Privacy</Link>
            <Link to="/about" className="footer-link">Terms</Link>
          </div>

          {/* Payment Icons */}
          <div className="flex items-center gap-3 text-velmora-text-light">
            <span className="tracking-widest text-[10px]">VISA</span>
            <span className="tracking-widest text-[10px]">MC</span>
            <span className="tracking-widest text-[10px]">AMEX</span>
            <span className="tracking-widest text-[10px]">PP</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link">
              IG
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="footer-link">
              PT
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
