import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const shopLinks = [
    { name: 'Earrings', href: '/shop?category=earrings' },
    { name: 'Necklaces', href: '/shop?category=necklaces' },
    { name: 'Collections', href: '/collections' },
    { name: 'Bestsellers', href: '/shop?sort=bestsellers' },
  ];

  const helpLinks = [
    { name: 'Shipping', href: '/shipping' },
    { name: 'Returns', href: '/returns' },
    { name: 'Care Guide', href: '/care-guide' },
    { name: 'FAQ', href: '/faq' },
  ];

  const companyLinks = [
    { name: 'Our Story', href: '/about' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'Journal', href: '/journal' },
    { name: 'Careers', href: '/careers' },
  ];

  return (
    <footer className="bg-velmora-charcoal text-velmora-alabaster pt-20 pb-10 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="text-3xl font-serif tracking-widest block">
              VELMORA
            </Link>
            <p className="text-velmora-alabaster/60 max-w-sm leading-relaxed font-sans text-sm">
              Crafting timeless fine jewelry with an editorial lens. Our pieces are designed to be treasured, worn daily, and passed down to generations.
            </p>
            <div className="flex space-x-6 pt-4">
              <Instagram className="w-5 h-5 cursor-pointer hover:text-velmora-gold transition-colors" />
              <Facebook className="w-5 h-5 cursor-pointer hover:text-velmora-gold transition-colors" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-velmora-gold transition-colors" />
              <Mail className="w-5 h-5 cursor-pointer hover:text-velmora-gold transition-colors" />
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-6 font-sans font-semibold">Shop</h4>
            <ul className="space-y-4">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-velmora-alabaster/60 hover:text-velmora-gold transition-colors font-sans"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-6 font-sans font-semibold">Help</h4>
            <ul className="space-y-4">
              {helpLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-velmora-alabaster/60 hover:text-velmora-gold transition-colors font-sans"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-6 font-sans font-semibold">Company</h4>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-velmora-alabaster/60 hover:text-velmora-gold transition-colors font-sans"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-velmora-alabaster/10 pt-10 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 text-[10px] uppercase tracking-widest text-velmora-alabaster/40 font-sans">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex space-x-8">
            <span className="cursor-pointer hover:text-velmora-gold">Privacy Policy</span>
            <span className="cursor-pointer hover:text-velmora-gold">Terms of Service</span>
            <span className="cursor-pointer hover:text-velmora-gold">Cookie Settings</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
