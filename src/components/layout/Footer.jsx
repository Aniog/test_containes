import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const footerLinks = {
  shop: [
    { label: 'All Jewelry', href: '/shop' },
    { label: 'Earrings', href: '/shop?category=earrings' },
    { label: 'Necklaces', href: '/shop?category=necklaces' },
    { label: 'Huggies', href: '/shop?category=huggies' },
    { label: 'Gift Sets', href: '/shop?category=sets' }
  ],
  help: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Shipping & Returns', href: '/shipping' },
    { label: 'Size Guide', href: '/size-guide' },
    { label: 'Care Instructions', href: '/care' },
    { label: 'FAQs', href: '/faq' }
  ],
  company: [
    { label: 'Our Story', href: '/about' },
    { label: 'Journal', href: '/journal' },
    { label: 'Sustainability', href: '/sustainability' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press', href: '/press' }
  ]
};

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' }
];

const paymentIcons = [
  { name: 'Visa', icon: 'visa' },
  { name: 'Mastercard', icon: 'mastercard' },
  { name: 'Amex', icon: 'amex' },
  { name: 'PayPal', icon: 'paypal' },
  { name: 'Apple Pay', icon: 'applepay' }
];

export default function Footer() {
  return (
    <footer className="bg-[#1C1917] text-white">
      {/* Main Footer */}
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.15em] text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-[#A8A29E] leading-relaxed">
              Demi-fine jewelry crafted with intention. Each piece is designed to become a cherished part of your story.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A8A29E] hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-[#A8A29E] mb-4">
              Shop
            </h3>
            <ul className="space-y-3">
              {footerLinks.shop.map(link => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-[#A8A29E] mb-4">
              Help
            </h3>
            <ul className="space-y-3">
              {footerLinks.help.map(link => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-[#A8A29E] mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map(link => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
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
      <div className="border-t border-white/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-xs text-[#A8A29E]">
              © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>

            {/* Payment Icons */}
            <div className="flex items-center gap-4">
              {paymentIcons.map(icon => (
                <div
                  key={icon.name}
                  className="h-6 w-10 bg-white/10 rounded flex items-center justify-center"
                  title={icon.name}
                >
                  <span className="text-[8px] font-medium text-white/60 uppercase">
                    {icon.name.slice(0, 4)}
                  </span>
                </div>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-xs text-[#A8A29E] hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-xs text-[#A8A29E] hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
