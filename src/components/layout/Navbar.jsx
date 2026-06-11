import { useState } from 'react';
import { TrendingUp, Menu, X } from 'lucide-react';

const navLinks = [
  { label: '财富方法', href: '#methods' },
  { label: '成功案例', href: '#stories' },
  { label: '投资策略', href: '#strategies' },
  { label: '开始行动', href: '#cta' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-900/90 backdrop-blur-md border-b border-navy-600">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 text-gold-400 font-bold text-xl">
          <TrendingUp className="w-6 h-6" />
          <span>财富密码</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-slate-300 hover:text-gold-400 transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#cta"
          className="hidden md:inline-flex items-center bg-gold-400 text-navy-900 font-bold text-sm px-5 py-2 rounded-full hover:bg-gold-500 transition-colors"
        >
          免费开始
        </a>

        <button
          className="md:hidden text-slate-300 hover:text-gold-400 transition-colors bg-transparent border-0 p-1"
          onClick={() => setOpen(!open)}
          aria-label="菜单"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-navy-800 border-t border-navy-600 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-300 hover:text-gold-400 transition-colors font-medium"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            className="inline-flex justify-center bg-gold-400 text-navy-900 font-bold text-sm px-5 py-2 rounded-full hover:bg-gold-500 transition-colors"
            onClick={() => setOpen(false)}
          >
            免费开始
          </a>
        </div>
      )}
    </nav>
  );
}
