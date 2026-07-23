import { useState } from 'react';
import { Menu, X, Ear } from 'lucide-react';

const navLinks = [
  { label: '首页', href: '#hero' },
  { label: '听力知识', href: '#knowledge' },
  { label: '风险自测', href: '#selftest' },
  { label: '保护建议', href: '#tips' },
  { label: '常见问题', href: '#faq' },
  { label: '联系我们', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNav = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center shadow-md">
              <Ear className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-slate-900">听力健康</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-slate-600 hover:text-cyan-600 font-medium transition-colors text-sm"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNav('#selftest')}
              className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-5 py-2 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg text-sm"
            >
              免费自测
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-left text-slate-700 hover:text-cyan-600 font-medium py-2 border-b border-slate-50 last:border-0"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#selftest')}
            className="mt-2 bg-cyan-600 text-white font-semibold px-5 py-3 rounded-xl text-center"
          >
            免费自测
          </button>
        </div>
      )}
    </nav>
  );
}
