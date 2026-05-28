import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: '什么是ETH', href: '#what-is-eth' },
  { label: '核心特性', href: '#features' },
  { label: '数据统计', href: '#stats' },
  { label: '生态系统', href: '#ecosystem' },
  { label: '发展路线', href: '#roadmap' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-[#0a0b1e]/90 border-b border-[#627eea]/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#627eea] to-[#a855f7] flex items-center justify-center shadow-[0_0_15px_rgba(98,126,234,0.5)]">
              <span className="text-white font-bold text-sm">Ξ</span>
            </div>
            <span className="text-white font-bold text-lg tracking-tight">
              以太坊 <span className="text-[#627eea]">ETH</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-400 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="https://ethereum.org"
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-[#627eea] to-[#a855f7] text-white text-sm font-semibold px-5 py-2 rounded-full hover:opacity-90 transition-all duration-200"
            >
              官方网站
            </a>
          </div>

          <button
            className="md:hidden text-slate-400 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0f1035]/95 backdrop-blur-md border-b border-[#627eea]/10 px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-slate-300 hover:text-white text-sm font-medium border-b border-[#627eea]/10 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://ethereum.org"
            target="_blank"
            rel="noreferrer"
            className="mt-4 block text-center bg-gradient-to-r from-[#627eea] to-[#a855f7] text-white text-sm font-semibold px-5 py-2 rounded-full"
          >
            官方网站
          </a>
        </div>
      )}
    </nav>
  );
}
