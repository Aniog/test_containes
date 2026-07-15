import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    shop: [
      { name: 'All Jewelry', path: '/shop' },
      { name: 'Earrings', path: '/shop?category=earrings' },
      { name: 'Necklaces', path: '/shop?category=necklaces' },
      { name: 'Huggies', path: '/shop?category=huggies' },
      { name: 'Gift Sets', path: '/shop?category=sets' }
    ],
    help: [
      { name: 'Contact Us', path: '/contact' },
      { name: 'Shipping & Returns', path: '/shipping' },
      { name: 'Size Guide', path: '/size-guide' },
      { name: 'Care Instructions', path: '/care' },
      { name: 'FAQs', path: '/faqs' }
    ],
    company: [
      { name: 'Our Story', path: '/about' },
      { name: 'Journal', path: '/journal' },
      { name: 'Sustainability', path: '/sustainability' },
      { name: 'Careers', path: '/careers' }
    ]
  };

  const paymentIcons = [
    { name: 'Visa', svg: 'M3 5h14v14H3z' },
    { name: 'Mastercard', svg: 'M12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z' },
    { name: 'Amex', svg: 'M2 8h20v8H2z' },
    { name: 'PayPal', svg: 'M6 9h12l-1.5 6H7.5z' }
  ];

  return (
    <footer className="bg-[#1A1A1A] text-[#FAF7F2]">
      {/* Main Footer Content */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wider">
              VELMORA
            </Link>
            <p className="mt-4 text-[#8B8178] text-sm leading-relaxed">
              Demi-fine jewelry crafted with intention. Designed for the moments 
              that matter, made accessible for everyone.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#C9A962] mb-4">
              Shop
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-[#8B8178] hover:text-[#FAF7F2] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#C9A962] mb-4">
              Help
            </h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-[#8B8178] hover:text-[#FAF7F2] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#C9A962] mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-[#8B8178] hover:text-[#FAF7F2] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px bg-[#8B8178]/20" />

        {/* Bottom Row */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B8178] hover:text-[#C9A962] transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B8178] hover:text-[#C9A962] transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B8178] hover:text-[#C9A962] transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
          </div>

          {/* Payment Icons */}
          <div className="flex items-center gap-4">
            {paymentIcons.map((icon) => (
              <div
                key={icon.name}
                className="w-10 h-6 bg-[#FAF7F2]/10 rounded flex items-center justify-center"
                title={icon.name}
              >
                <span className="text-[8px] text-[#8B8178]">{icon.name}</span>
              </div>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-[#8B8178]">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
