import React from 'react';
import { Instagram, Twitter } from 'lucide-react';

const paymentIcons = [
  { name: 'Visa', icon: 'VISA' },
  { name: 'Mastercard', icon: 'MC' },
  { name: 'Amex', icon: 'AMEX' },
  { name: 'PayPal', icon: 'PayPal' },
  { name: 'Apple Pay', icon: 'AP' },
  { name: 'Shop Pay', icon: 'Shop' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#FAF7F2]">
      <div className="max-w-8xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="font-serif text-2xl tracking-[0.15em] text-white">
              VELMORA
            </a>
            <p className="text-sm text-[#9C9488] mt-4 leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the everyday. Made to be treasured, designed to last.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-[#9C9488] hover:text-[#C79A5E] transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#9C9488] hover:text-[#C79A5E] transition-colors" aria-label="Pinterest">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.27 1.041-1.002 2.345-1.492 3.142C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
              </a>
              <a href="#" className="text-[#9C9488] hover:text-[#C79A5E] transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.12em] text-white mb-4">Shop</h4>
            <ul className="space-y-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map((item) => (
                <li key={item}>
                  <a href="/shop" className="text-sm text-[#9C9488] hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.12em] text-white mb-4">Help</h4>
            <ul className="space-y-3">
              {['Shipping & Returns', 'Size Guide', 'Care Guide', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-[#9C9488] hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.12em] text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Our Story', 'Journal', 'Sustainability', 'Careers'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-[#9C9488] hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment icons */}
        <div className="mt-12 pt-8 border-t border-[#333]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {paymentIcons.map((p) => (
                <span
                  key={p.name}
                  className="text-xs uppercase tracking-[0.08em] text-[#6B6358]"
                >
                  {p.icon}
                </span>
              ))}
            </div>
            <p className="text-xs text-[#6B6358]">
              &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}