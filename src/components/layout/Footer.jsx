import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    shop: [
      { name: 'Earrings', path: '/collections?category=earrings' },
      { name: 'Necklaces', path: '/collections?category=necklaces' },
      { name: 'Huggies', path: '/collections?category=huggies' },
      { name: 'All Jewelry', path: '/collections' }
    ],
    help: [
      { name: 'Shipping & Returns', path: '/shipping' },
      { name: 'Jewelry Care', path: '/care' },
      { name: 'Contact Us', path: '/contact' },
      { name: 'FAQs', path: '/faqs' }
    ],
    company: [
      { name: 'Our Story', path: '/about' },
      { name: 'Journal', path: '/journal' },
      { name: 'Sustainability', path: '/sustainability' }
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' }
  ];

  const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal'];

  return (
    <footer className="bg-[#0D0D0D] border-t border-[#333333]">
      <div className="container">
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Social */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-2xl tracking-[0.3em] text-[#F5F5F0]">
                VELMORA
              </span>
            </Link>
            <p className="text-sm text-[#A8A8A0] mb-6 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Quality pieces for the modern woman.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-[#A8A8A0] hover:text-[#C9A962] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm uppercase tracking-wider text-[#F5F5F0] mb-4 font-semibold">
              Shop
            </h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-[#A8A8A0] hover:text-[#F5F5F0] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-sm uppercase tracking-wider text-[#F5F5F0] mb-4 font-semibold">
              Help
            </h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-[#A8A8A0] hover:text-[#F5F5F0] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm uppercase tracking-wider text-[#F5F5F0] mb-4 font-semibold">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-[#A8A8A0] hover:text-[#F5F5F0] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-[#333333] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#A8A8A0]">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {paymentIcons.map((icon) => (
              <div
                key={icon}
                className="px-2 py-1 bg-[#1A1A1A] text-[#A8A8A0] text-xs rounded"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;