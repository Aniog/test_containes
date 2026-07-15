import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

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
      { name: 'Shipping & Returns', path: '/shipping-returns' },
      { name: 'Care Instructions', path: '/care' },
      { name: 'FAQs', path: '/faqs' },
      { name: 'Size Guide', path: '/size-guide' }
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
    <footer className="bg-[#0D0D0D] border-t border-[#333333]">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] text-[#F5F5F0]">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-[#A8A8A0] leading-relaxed">
              Crafted to be treasured. Premium demi-fine jewelry for the modern woman.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-[#333333] text-[#A8A8A0] hover:text-[#C9A962] hover:border-[#C9A962] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-[#333333] text-[#A8A8A0] hover:text-[#C9A962] hover:border-[#C9A962] transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-[#333333] text-[#A8A8A0] hover:text-[#C9A962] hover:border-[#C9A962] transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.15em] text-[#F5F5F0] mb-4">
              Shop
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-[#A8A8A0] hover:text-[#C9A962] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.15em] text-[#F5F5F0] mb-4">
              Help
            </h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-[#A8A8A0] hover:text-[#C9A962] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.15em] text-[#F5F5F0] mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-[#A8A8A0] hover:text-[#C9A962] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.15em] text-[#F5F5F0] mb-4">
              Contact
            </h4>
            <p className="text-sm text-[#A8A8A0]">
              hello@velmora.com
            </p>
            <p className="text-sm text-[#A8A8A0] mt-2">
              +1 (555) 123-4567
            </p>
          </div>
        </div>

        {/* Payment Icons */}
        <div className="flex flex-wrap gap-3 mt-12 pt-8 border-t border-[#333333]">
          {paymentIcons.map((icon) => (
            <span
              key={icon}
              className="px-3 py-1.5 text-xs text-[#A8A8A0] border border-[#333333]"
            >
              {icon}
            </span>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#A8A8A0]">
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs text-[#A8A8A0] hover:text-[#C9A962] transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-[#A8A8A0] hover:text-[#C9A962] transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
