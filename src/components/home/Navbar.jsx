import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = ['首页', '服务', '关于我们', '案例', '联系我们'];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#1D3557] sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-[#E63946] rounded-lg p-1.5">
            <Zap className="w-5 h-5 text-[#F1FAEE]" />
          </div>
          <span className="text-[#F1FAEE] font-bold text-xl tracking-tight">
            Red<span className="text-[#FF6B6B]">Blue</span>
          </span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-[#A8DADC] hover:text-[#F1FAEE] text-sm font-medium transition-colors duration-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button className="hidden md:block bg-[#E63946] hover:bg-[#C1121F] text-[#F1FAEE] font-semibold text-sm px-6 py-2.5 rounded-full transition-colors duration-200">
          立即开始
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#F1FAEE]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#1D3557] border-t border-[#457B9D] px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-[#A8DADC] hover:text-[#F1FAEE] text-base font-medium transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <button className="mt-6 w-full bg-[#E63946] hover:bg-[#C1121F] text-[#F1FAEE] font-semibold py-3 rounded-full transition-colors">
            立即开始
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
