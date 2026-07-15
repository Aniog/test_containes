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
    <footer className="bg-[#2C2522] text-[#F8F5F1] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-6 pb-12 border-b border-[#4A4139]">
          {/* Logo */}
          <div className="col-span-2 md:col-span-2">
            <div className="logo text-[#F8F5F1] mb-4">VELMORA</div>
            <p className="text-[#9A8F85] text-sm max-w-xs">
              Fine demi-gold jewelry, crafted to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-xs tracking-[0.1em] uppercase text-[#B89778] mb-4">Shop</div>
            <ul className="space-y-2">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="footer-link text-[#D9D0C4] hover:text-[#F8F5F1]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <div className="text-xs tracking-[0.1em] uppercase text-[#B89778] mb-4">Help</div>
            <ul className="space-y-2">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="footer-link text-[#D9D0C4] hover:text-[#F8F5F1]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs tracking-[0.1em] uppercase text-[#B89778] mb-4">Company</div>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="footer-link text-[#D9D0C4] hover:text-[#F8F5F1]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#9A8F85]">
          <div className="flex items-center gap-4">
            <span>© {currentYear} Velmora Fine Jewelry</span>
            <span className="hidden md:inline">·</span>
            <Link to="/about" className="hover:text-[#F8F5F1]">Privacy</Link>
            <Link to="/about" className="hover:text-[#F8F5F1]">Terms</Link>
          </div>

          {/* Payment Icons (text representation) */}
          <div className="flex items-center gap-3 tracking-[0.15em] text-[10px]">
            <span>VISA</span>
            <span>MC</span>
            <span>AMEX</span>
            <span>APPLE PAY</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#F8F5F1]">IG</a>
            <a href="#" className="hover:text-[#F8F5F1]">PIN</a>
            <a href="#" className="hover:text-[#F8F5F1]">TT</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
