import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { label: 'All Jewelry', href: '/shop' },
      { label: 'Earrings', href: '/shop?category=earrings' },
      { label: 'Necklaces', href: '/shop?category=necklaces' },
      { label: 'Huggies', href: '/shop?category=huggies' },
      { label: 'Gift Sets', href: '/shop?category=sets' },
    ],
    help: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'Shipping Info', href: '/shipping' },
      { label: 'Returns & Exchanges', href: '/returns' },
      { label: 'Size Guide', href: '/size-guide' },
      { label: 'FAQs', href: '/faq' },
    ],
    company: [
      { label: 'Our Story', href: '/about' },
      { label: 'Sustainability', href: '/sustainability' },
      { label: 'Journal', href: '/journal' },
      { label: 'Careers', href: '/careers' },
    ],
  };

  return (
    <footer className="bg-[#2D2926] text-white">
      {/* Main Footer */}
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <Link 
              to="/" 
              className="font-serif text-2xl tracking-[0.2em] font-medium text-white"
            >
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-400 max-w-xs">
              Premium demi-fine jewelry crafted for the modern woman. 
              Timeless pieces designed to be treasured.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-[#C9A962] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-[#C9A962] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://pinterest.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-[#C9A962] transition-colors"
                aria-label="Pinterest"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="label-uppercase text-xs tracking-widest text-gray-400 mb-4">
              Shop
            </h3>
            <ul className="space-y-3">
              {footerLinks.shop.map(link => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="text-sm text-gray-300 hover:text-[#C9A962] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="label-uppercase text-xs tracking-widest text-gray-400 mb-4">
              Help
            </h3>
            <ul className="space-y-3">
              {footerLinks.help.map(link => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="text-sm text-gray-300 hover:text-[#C9A962] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="label-uppercase text-xs tracking-widest text-gray-400 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map(link => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="text-sm text-gray-300 hover:text-[#C9A962] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              © {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>
            
            {/* Payment Icons */}
            <div className="flex items-center gap-3">
              <span className="text-[10px] text-gray-500 uppercase tracking-wider">We accept</span>
              <div className="flex gap-2">
                <div className="px-2 py-1 bg-gray-800 rounded text-[10px] font-medium text-gray-400">
                  Visa
                </div>
                <div className="px-2 py-1 bg-gray-800 rounded text-[10px] font-medium text-gray-400">
                  Mastercard
                </div>
                <div className="px-2 py-1 bg-gray-800 rounded text-[10px] font-medium text-gray-400">
                  Amex
                </div>
                <div className="px-2 py-1 bg-gray-800 rounded text-[10px] font-medium text-gray-400">
                  PayPal
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
