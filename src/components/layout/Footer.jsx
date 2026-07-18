import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const shopLinks = [
  { to: '/shop', label: 'All Jewelry' },
  { to: '/shop?category=Earrings', label: 'Earrings' },
  { to: '/shop?category=Necklaces', label: 'Necklaces' },
  { to: '/shop?category=Huggies', label: 'Huggies' },
  { to: '/shop?category=Sets', label: 'Gift Sets' },
];

const helpLinks = [
  { to: '/contact', label: 'Contact Us' },
  { to: '/shipping', label: 'Shipping & Delivery' },
  { to: '/returns', label: 'Returns & Exchanges' },
  { to: '/faq', label: 'FAQ' },
];

const companyLinks = [
  { to: '/about', label: 'Our Story' },
  { to: '/journal', label: 'Journal' },
  { to: '/sustainability', label: 'Sustainability' },
  { to: '/careers', label: 'Careers' },
];

export default function Footer() {
  return (
    <footer className="bg-[#252320] text-[#D6D3D1]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.15em] text-white"
            >
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[#A8A39C] max-w-xs">
              Demi-fine jewelry crafted for the modern woman. Thoughtfully designed,
              responsibly made, priced to be lived in.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-[#A8A39C] hover:text-white transition-colors duration-300">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-[#A8A39C] hover:text-white transition-colors duration-300">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Twitter" className="text-[#A8A39C] hover:text-white transition-colors duration-300">
                <Twitter size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-white mb-4">
              Shop
            </h4>
            <ul className="flex flex-col gap-2.5">
              {shopLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[13px] text-[#A8A39C] hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-white mb-4">
              Help
            </h4>
            <ul className="flex flex-col gap-2.5">
              {helpLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[13px] text-[#A8A39C] hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-white mb-4">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[13px] text-[#A8A39C] hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#78716C]">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-[#78716C]">
            <span className="mr-2">We accept</span>
            <span className="tracking-wider">VISA</span>
            <span className="mx-1.5 text-white/20">·</span>
            <span className="tracking-wider">MC</span>
            <span className="mx-1.5 text-white/20">·</span>
            <span className="tracking-wider">AMEX</span>
            <span className="mx-1.5 text-white/20">·</span>
            <span className="tracking-wider">APPLE PAY</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
