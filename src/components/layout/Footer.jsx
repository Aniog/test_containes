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
    { label: 'Press', path: '/about' },
  ];

  return (
    <footer className="bg-velmora-dark text-velmora-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-12 pb-12 border-b border-white/20">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif-custom text-2xl tracking-[0.15em]">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Fine jewelry, thoughtfully made.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans-custom text-xs tracking-[0.15em] uppercase mb-4 text-white/60">Shop</h4>
            <ul className="space-y-2">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="footer-link text-white/80 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans-custom text-xs tracking-[0.15em] uppercase mb-4 text-white/60">Help</h4>
            <ul className="space-y-2">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="footer-link text-white/80 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans-custom text-xs tracking-[0.15em] uppercase mb-4 text-white/60">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="footer-link text-white/80 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-sans-custom text-xs tracking-[0.15em] uppercase mb-4 text-white/60">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">IG</a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">PT</a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">TT</a>
            </div>
            <a href="mailto:hello@velmora.com" className="text-sm text-white/80 hover:text-white">
              hello@velmora.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50 tracking-[0.08em]">
          <div>© {currentYear} Velmora Fine Jewelry. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/70">Privacy</a>
            <a href="#" className="hover:text-white/70">Terms</a>
            <a href="#" className="hover:text-white/70">Accessibility</a>
          </div>
          <div className="flex gap-3 text-[10px]">
            <span>VISA</span>
            <span>MC</span>
            <span>AMEX</span>
            <span>PP</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
