import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const footerLinks = {
  Shop: ['All Jewelry', 'Earrings', 'Necklaces', 'Sets', 'Bestsellers'],
  Help: ['Shipping & Returns', 'Care Guide', 'FAQ', 'Size Guide', 'Contact'],
  Company: ['Our Story', 'Journal', 'Sustainability', 'Careers', 'Press'],
};

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-[0.15em] text-[#F5F0EB] hover:text-[#C9A96E] transition-colors">
              VELMORA
            </Link>
            <p className="mt-4 text-xs text-[#6B6560] leading-relaxed max-w-[200px]">
              Demi-fine gold jewelry crafted for the modern woman. Made to be treasured.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-[#6B6560] hover:text-[#C9A96E] transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-[#6B6560] hover:text-[#C9A96E] transition-colors" aria-label="Pinterest">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
              </a>
              <a href="#" className="text-[#6B6560] hover:text-[#C9A96E] transition-colors" aria-label="Twitter">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs tracking-[0.15em] uppercase text-[#A0988E] mb-5">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link to="/shop" className="text-sm text-[#6B6560] hover:text-[#F5F0EB] transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[#2A2A2A] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6B6560]">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {['Visa', 'MC', 'Amex', 'PayPal', 'Afterpay'].map((method) => (
              <span key={method} className="text-[10px] tracking-wider uppercase text-[#6B6560] border border-[#2A2A2A] px-2.5 py-1 rounded">
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}