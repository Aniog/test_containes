import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
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
      { name: 'Shipping Info', path: '/shipping' },
      { name: 'Returns', path: '/returns' },
      { name: 'Care Guide', path: '/care' },
      { name: 'FAQ', path: '/faq' }
    ],
    company: [
      { name: 'Our Story', path: '/about' },
      { name: 'Journal', path: '/journal' },
      { name: 'Sustainability', path: '/sustainability' },
      { name: 'Careers', path: '/careers' }
    ]
  };

  const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'Apple Pay', 'PayPal'];

  return (
    <footer className="bg-[#1A1A1A] text-[#F5F0E8] pt-20 pb-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] font-semibold text-[#F5F0E8]">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-[#8A8A8A] leading-relaxed max-w-xs">
              Crafted to be treasured. Fine jewelry designed for the modern woman who appreciates quiet luxury and timeless elegance.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 border border-[#8A8A8A] rounded-full hover:border-[#C9A962] hover:text-[#C9A962] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 border border-[#8A8A8A] rounded-full hover:border-[#C9A962] hover:text-[#C9A962] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="mailto:hello@velmora.com" className="p-2 border border-[#8A8A8A] rounded-full hover:border-[#C9A962] hover:text-[#C9A962] transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-[#C9A962]">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-[#8A8A8A] hover:text-[#F5F0E8] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-[#C9A962]">Help</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-[#8A8A8A] hover:text-[#F5F0E8] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-[#C9A962]">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-[#8A8A8A] hover:text-[#F5F0E8] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#333]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[#666]">
              © 2024 Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {paymentIcons.map((icon) => (
                <span
                  key={icon}
                  className="text-xs text-[#666] px-2 py-1 border border-[#333] rounded"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}