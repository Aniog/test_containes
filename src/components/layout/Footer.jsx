import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const shopLinks = [
  { to: '/shop', label: 'All Jewelry' },
  { to: '/shop/earrings', label: 'Earrings' },
  { to: '/shop/necklaces', label: 'Necklaces' },
  { to: '/shop/huggies', label: 'Huggies' },
  { to: '/shop/sets', label: 'Sets' },
];

const helpLinks = [
  { to: '#', label: 'Shipping & Returns' },
  { to: '#', label: 'Size Guide' },
  { to: '#', label: 'Jewelry Care' },
  { to: '#', label: 'FAQ' },
  { to: '#', label: 'Contact Us' },
];

const companyLinks = [
  { to: '#', label: 'Our Story' },
  { to: '#', label: 'Sustainability' },
  { to: '#', label: 'Journal' },
  { to: '#', label: 'Careers' },
];

const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'Apple Pay', 'Google Pay'];

export default function Footer() {
  return (
    <footer className="bg-[#1A1514] text-[#F5F0EB]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.15em] font-semibold text-[#C8A96E]">
              VELMORA
            </Link>
            <p className="text-sm text-[#7A7268] mt-4 leading-relaxed">
              Demi-fine jewelry crafted for the modern woman. 18K gold-plated pieces designed to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-[#C8A96E] mb-4">Shop</h4>
            <ul className="space-y-2.5">
              {shopLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-[#A9A29B] hover:text-[#F5F0EB] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-[#C8A96E] mb-4">Help</h4>
            <ul className="space-y-2.5">
              {helpLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-[#A9A29B] hover:text-[#F5F0EB] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-[#C8A96E] mb-4">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-[#A9A29B] hover:text-[#F5F0EB] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <hr className="border-[#2C2422] my-10" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-xs text-[#7A7268]">
            <span>&copy; {new Date().getFullYear()} Velmora Fine Jewelry</span>
            <Link to="#" className="hover:text-[#F5F0EB] transition-colors">Privacy</Link>
            <Link to="#" className="hover:text-[#F5F0EB] transition-colors">Terms</Link>
          </div>

          <div className="flex items-center gap-3">
            {paymentIcons.map((icon) => (
              <span key={icon} className="text-[10px] tracking-wider text-[#7A7268] border border-[#2C2422] px-2 py-1 rounded">
                {icon}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="text-[#7A7268] hover:text-[#C8A96E] transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Facebook" className="text-[#7A7268] hover:text-[#C8A96E] transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Twitter" className="text-[#7A7268] hover:text-[#C8A96E] transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
