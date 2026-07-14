import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const shopLinks = [
    { to: '/shop', label: 'All Jewelry' },
    { to: '/shop?category=earrings', label: 'Earrings' },
    { to: '/shop?category=necklaces', label: 'Necklaces' },
    { to: '/shop?category=huggies', label: 'Huggies' },
  ];

  const helpLinks = [
    { to: '/about', label: 'Shipping' },
    { to: '/about', label: 'Returns' },
    { to: '/about', label: 'Care Guide' },
    { to: '/about', label: 'Contact' },
  ];

  const companyLinks = [
    { to: '/about', label: 'Our Story' },
    { to: '/journal', label: 'Journal' },
    { to: '/about', label: 'Sustainability' },
    { to: '/about', label: 'Press' },
  ];

  return (
    <footer className="bg-velmora-bg-alt border-t border-velmora-border pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-6 mb-12">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="nav-logo text-xl tracking-[0.15em]">
              VELMORA
            </Link>
            <p className="mt-3 text-xs text-velmora-text-muted leading-relaxed">
              Quiet luxury, crafted to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-xs uppercase tracking-[0.1em] text-velmora-text-muted mb-4">Shop</div>
            <ul className="space-y-2">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="footer-link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <div className="text-xs uppercase tracking-[0.1em] text-velmora-text-muted mb-4">Help</div>
            <ul className="space-y-2">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="footer-link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs uppercase tracking-[0.1em] text-velmora-text-muted mb-4">Company</div>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="footer-link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs uppercase tracking-[0.1em] text-velmora-text-muted mb-4">Contact</div>
            <div className="space-y-2 text-sm text-velmora-text-muted">
              <p>hello@velmora.com</p>
              <p>+1 (310) 555-0192</p>
              <div className="pt-2 flex gap-4 text-velmora-text">
                <a href="#" aria-label="Instagram" className="hover:text-velmora-gold">IG</a>
                <a href="#" aria-label="Pinterest" className="hover:text-velmora-gold">PT</a>
                <a href="#" aria-label="TikTok" className="hover:text-velmora-gold">TT</a>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Icons + Copyright */}
        <div className="pt-8 border-t border-velmora-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-velmora-text-muted">
          <div className="flex items-center gap-4">
            <span>WE ACCEPT</span>
            <span className="tracking-[0.15em]">VISA · MASTERCARD · AMEX · APPLE PAY</span>
          </div>
          <div>
            © {currentYear} Velmora Fine Jewelry. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
