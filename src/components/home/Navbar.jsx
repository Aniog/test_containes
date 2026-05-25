import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: '首页', href: '#hero' },
  { label: '关于我们', href: '#about' },
  { label: '产品系列', href: '#products' },
  { label: '品牌优势', href: '#features' },
  { label: '客户评价', href: '#testimonials' },
  { label: '联系我们', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 no-underline">
          <span className="text-2xl">🏡</span>
          <div>
            <div className="text-lg md:text-xl font-serif font-bold text-[#2C1810] leading-tight">维纯家居</div>
            <div className="text-xs text-[#6B5B4E] hidden md:block">用品有限公司</div>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[#6B5B4E] hover:text-[#8B6F47] font-medium transition-colors text-sm no-underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-[#8B6F47] text-white rounded-full px-6 py-2 text-sm font-medium hover:bg-[#C4714A] transition-colors no-underline"
        >
          立即咨询
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-[#2C1810] bg-transparent border-none"
          onClick={() => setOpen(!open)}
          aria-label="菜单"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#F5F0E8] px-4 py-4">
          <ul className="list-none m-0 p-0 flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-[#2C1810] font-medium py-2 no-underline hover:text-[#8B6F47]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="block bg-[#8B6F47] text-white rounded-full px-6 py-2 text-center font-medium hover:bg-[#C4714A] transition-colors no-underline mt-2"
                onClick={() => setOpen(false)}
              >
                立即咨询
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
