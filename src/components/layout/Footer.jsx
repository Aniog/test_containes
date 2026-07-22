import { Link } from 'react-router-dom';
import { Instagram, Youtube, Twitter } from 'lucide-react';

const footerLinks = {
  Shop: ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Sets'],
  Help: ['Contact Us', 'Shipping & Returns', 'FAQ', 'Size Guide', 'Care Guide'],
  Company: ['Our Story', 'Journal', 'Sustainability', 'Careers', 'Press'],
};

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#F5F0EB]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.2em] font-semibold text-white"
            >
              VELMORA
            </Link>
            <p className="text-sm text-[#999999] mt-4 leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Elevated essentials
              designed to be treasured.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-[#999999] hover:text-[#C8A45C] transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              
              <a href="#" className="text-[#999999] hover:text-[#C8A45C] transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#999999] hover:text-[#C8A45C] transition-colors" aria-label="Youtube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs tracking-widest uppercase text-white font-medium mb-4">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/shop"
                      className="text-sm text-[#999999] hover:text-[#C8A45C] transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#2A2A2A] mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6B6B6B]">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {/* Payment icons */}
            {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map((method) => (
              <span
                key={method}
                className="text-xs text-[#6B6B6B] border border-[#2A2A2A] px-2 py-1 rounded"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}