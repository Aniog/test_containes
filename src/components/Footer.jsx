import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const shopLinks = [
    { label: 'All Jewelry', to: '/shop' },
    { label: 'Earrings', to: '/shop?category=Earrings' },
    { label: 'Necklaces', to: '/shop?category=Necklaces' },
    { label: 'Huggies', to: '/shop?category=Huggies' },
  ];

  const helpLinks = [
    { label: 'Shipping', to: '/about' },
    { label: 'Returns', to: '/about' },
    { label: 'Care Guide', to: '/journal' },
    { label: 'Contact', to: '/about' },
  ];

  const companyLinks = [
    { label: 'Our Story', to: '/about' },
    { label: 'Journal', to: '/journal' },
    { label: 'Sustainability', to: '/about' },
  ];

  return (
    <footer className="footer pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 mb-16">
          {/* Logo */}
          <div>
            <Link to="/" className="nav-logo text-[#F8F5F1] block mb-4">
              VELMORA
            </Link>
            <p className="text-sm opacity-60 max-w-[180px]">
              Fine jewelry, crafted to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 opacity-60">Shop</div>
            <ul className="space-y-2 text-sm">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 opacity-60">Help</div>
            <ul className="space-y-2 text-sm">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 opacity-60">Company</div>
            <ul className="space-y-2 text-sm">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs opacity-60">
          <div>© {currentYear} Velmora Fine Jewelry. All rights reserved.</div>
          
          <div className="flex items-center gap-6">
            <span>18K Gold Plated</span>
            <span>Hypoallergenic</span>
            <span>Ethically Sourced</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Pinterest">PT</a>
            <a href="#" aria-label="TikTok">TT</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
