import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    shop: [
      { name: 'All Jewelry', path: '/shop' },
      { name: 'Earrings', path: '/shop?category=earrings' },
      { name: 'Necklaces', path: '/shop?category=necklaces' },
      { name: 'Huggies', path: '/shop?category=huggies' },
      { name: 'Sets', path: '/shop?category=sets' },
    ],
    help: [
      { name: 'Contact Us', path: '/contact' },
      { name: 'Shipping & Returns', path: '/shipping' },
      { name: 'Care Guide', path: '/care' },
      { name: 'FAQs', path: '/faqs' },
    ],
    company: [
      { name: 'Our Story', path: '/about' },
      { name: 'Journal', path: '/journal' },
      { name: 'Sustainability', path: '/sustainability' },
      { name: 'Careers', path: '/careers' },
    ],
  };

  const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'Apple Pay', 'PayPal'];

  return (
    <footer className="bg-[#1A1A1A] text-[#FAF8F5] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wide">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-[#8B8580] leading-relaxed">
              Premium demi-fine jewelry crafted to be treasured. Every piece tells a story of elegance and timeless beauty.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="p-2 border border-[#8B8580]/30 rounded-full hover:border-[#C9A962] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 border border-[#8B8580]/30 rounded-full hover:border-[#C9A962] transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 border border-[#8B8580]/30 rounded-full hover:border-[#C9A962] transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-serif text-lg mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-[#8B8580] hover:text-[#C9A962] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-serif text-lg mb-4">Help</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-[#8B8580] hover:text-[#C9A962] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-serif text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-[#8B8580] hover:text-[#C9A962] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment & Copyright */}
        <div className="pt-8 border-t border-[#8B8580]/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[#8B8580]">
              &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center space-x-3">
              {paymentIcons.map((icon) => (
                <span key={icon} className="text-xs text-[#8B8580] px-2 py-1 border border-[#8B8580]/20">
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