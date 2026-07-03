import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

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
      { name: 'Returns & Exchanges', path: '/returns' },
      { name: 'Size Guide', path: '/size-guide' },
      { name: 'FAQ', path: '/faq' }
    ],
    company: [
      { name: 'Our Story', path: '/about' },
      { name: 'Journal', path: '/journal' },
      { name: 'Sustainability', path: '/sustainability' },
      { name: 'Careers', path: '/careers' }
    ]
  };

  const paymentIcons = [
    { name: 'Visa', icon: 'VISA' },
    { name: 'Mastercard', icon: 'MC' },
    { name: 'Amex', icon: 'AMEX' },
    { name: 'PayPal', icon: 'PP' },
    { name: 'Apple Pay', icon: 'AP' }
  ];

  return (
    <footer className="bg-[#2A2520] text-[#F5F1EB]">
      {/* Main Footer */}
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Logo & About */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-serif text-3xl tracking-wide text-[#FAF7F2] hover:text-[#C9A66B] transition-colors"
            >
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-[#C4B8A9] leading-relaxed max-w-sm">
              Demi-fine jewelry crafted for the modern woman. Our pieces are 
              designed to be treasured, worn, and lived in — every day.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#C4B8A9] hover:text-[#C9A66B] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#C4B8A9] hover:text-[#C9A66B] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#C4B8A9] hover:text-[#C9A66B] transition-colors"
                aria-label="Pinterest"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-sans text-sm font-semibold tracking-wider text-[#FAF7F2] mb-4">
              SHOP
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-[#C4B8A9] hover:text-[#C9A66B] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-sans text-sm font-semibold tracking-wider text-[#FAF7F2] mb-4">
              HELP
            </h4>
            <ul className="space-y-3">
              {footerLinks.help.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-[#C4B8A9] hover:text-[#C9A66B] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-sans text-sm font-semibold tracking-wider text-[#FAF7F2] mb-4">
              COMPANY
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-[#C4B8A9] hover:text-[#C9A66B] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#3D3833]">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-xs text-[#9A8E82]">
              © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>

            {/* Payment Icons */}
            <div className="flex items-center gap-3">
              {paymentIcons.map(icon => (
                <div
                  key={icon.name}
                  className="px-2 py-1 bg-[#3D3833] text-[#C4B8A9] text-xs font-semibold rounded"
                >
                  {icon.icon}
                </div>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-xs text-[#9A8E82]">
              <Link to="/privacy" className="hover:text-[#C9A66B] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-[#C9A66B] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
