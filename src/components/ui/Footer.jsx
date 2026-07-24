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
    <footer className="footer pt-12 pb-8">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 mb-12">
          {/* Logo & Tagline */}
          <div className="col-span-2 md:col-span-1">
            <div className="logo text-velmora-gold-light mb-3">VELMORA</div>
            <p className="text-xs text-velmora-gold-light/70 max-w-[180px]">
              Quiet luxury, crafted to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <div className="footer-col-title">Shop</div>
            <ul className="space-y-2">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <div className="footer-col-title">Help</div>
            <ul className="space-y-2">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="footer-col-title">Company</div>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="divider bg-velmora-gold-light/20 my-6" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-velmora-gold-light/70">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <span>© {currentYear} Velmora Fine Jewelry</span>
            <span className="hidden md:inline">·</span>
            <Link to="/about">Privacy</Link>
            <Link to="/about">Terms</Link>
          </div>

          {/* Payment Icons (text representation) */}
          <div className="flex items-center gap-3 tracking-[2px] text-[10px]">
            VISA · MASTERCARD · AMEX · PAYPAL
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">IG</a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">PT</a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">TT</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;