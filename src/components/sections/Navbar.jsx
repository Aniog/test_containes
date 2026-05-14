import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: '首页', href: '#hero' },
  { label: '关于我们', href: '#about' },
  { label: '服务项目', href: '#services' },
  { label: '成功案例', href: '#portfolio' },
  { label: '客户评价', href: '#testimonials' },
  { label: '联系我们', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#1A1A2E]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-[#E8431A] flex items-center justify-center font-bold text-white text-lg leading-none">
            秋
          </div>
          <span className="text-white font-bold text-xl tracking-wide">秋易广告</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white/80 hover:text-[#F5A623] text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-[#E8431A] text-white text-sm font-semibold hover:bg-[#F5A623] transition-colors duration-200"
        >
          免费咨询
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1A1A2E]/98 backdrop-blur-md border-t border-white/10">
          <ul className="flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-3 text-white/80 hover:text-[#F5A623] hover:bg-white/5 text-sm font-medium transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="px-6 pt-3">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block text-center px-5 py-2 rounded-full bg-[#E8431A] text-white text-sm font-semibold"
              >
                免费咨询
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
