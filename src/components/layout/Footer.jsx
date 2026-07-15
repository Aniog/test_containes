import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Main Footer */}
        <div className="py-16 md:py-20 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <h2
                className="text-2xl tracking-[0.3em] text-[#FAF8F5]"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                VELMORA
              </h2>
            </Link>
            <p className="text-sm text-[#FAF8F5]/60 leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted to be treasured. Everyday luxury, accessible to all.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#FAF8F5]/40 mb-5 font-medium">
              Shop
            </h3>
            <ul className="space-y-3">
              {['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals', 'Bestsellers'].map(item => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-[#FAF8F5]/70 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#FAF8F5]/40 mb-5 font-medium">
              Help
            </h3>
            <ul className="space-y-3">
              {['Shipping Info', 'Returns & Exchanges', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-[#FAF8F5]/70 hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#FAF8F5]/40 mb-5 font-medium">
              Company
            </h3>
            <ul className="space-y-3">
              {['Our Story', 'Sustainability', 'Journal', 'Careers', 'Press', 'Affiliates'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-[#FAF8F5]/70 hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#FAF8F5]/10" />

        {/* Bottom */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social */}
          <div className="flex items-center gap-5">
            <a href="#" className="text-[#FAF8F5]/50 hover:text-primary transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="text-[#FAF8F5]/50 hover:text-primary transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="text-[#FAF8F5]/50 hover:text-primary transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="text-[#FAF8F5]/50 hover:text-primary transition-colors" aria-label="Email">
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Payment Icons */}
          <div className="flex items-center gap-3">
            {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map(method => (
              <span
                key={method}
                className="text-[10px] uppercase tracking-wider text-[#FAF8F5]/30 bg-[#FAF8F5]/5 px-2 py-1 rounded"
              >
                {method}
              </span>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-[#FAF8F5]/30">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
