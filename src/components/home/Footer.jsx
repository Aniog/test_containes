import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { footerLinks } from '../../data/products';

export default function Footer() {
  return (
    <footer className="bg-[#FAF8F5] pt-16 pb-8 border-t border-[#E8E2D9]">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="font-serif text-xl tracking-[0.2em] text-[#2C2824] hover:opacity-80 transition-opacity"
            >
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-[#6B635A] leading-relaxed">
              Premium demi-fine jewelry crafted to be treasured. Every piece tells a story.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#6B635A] hover:text-[#C9A962] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#6B635A] hover:text-[#C9A962] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#6B635A] hover:text-[#C9A962] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-wider text-[#2C2824] uppercase mb-4">
              Shop
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-[#6B635A] hover:text-[#C9A962] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-wider text-[#2C2824] uppercase mb-4">
              Help
            </h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-[#6B635A] hover:text-[#C9A962] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-wider text-[#2C2824] uppercase mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-[#6B635A] hover:text-[#C9A962] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E8E2D9]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#9A8F82]">
              &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>

            {/* Payment Icons */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-[#9A8F82] mr-2">We accept:</span>
              <div className="flex gap-2">
                {['Visa', 'MC', 'Amex', 'PayPal'].map((card) => (
                  <div
                    key={card}
                    className="px-2 py-1 bg-[#F5F1EB] text-[#6B635A] text-xs font-medium"
                  >
                    {card}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}