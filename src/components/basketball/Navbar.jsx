import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: '首页', href: '#hero' },
  { label: '关于篮球', href: '#about' },
  { label: '球星传奇', href: '#legends' },
  { label: '技术要领', href: '#skills' },
  { label: '联系我们', href: '#contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-court-black/90 backdrop-blur-md border-b border-court-gray">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <a href="#hero" className="flex items-center gap-2 text-court-light font-black text-xl tracking-tight">
          <span className="text-court-orange text-2xl">🏀</span>
          <span>BASKETBALL</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-court-muted hover:text-court-orange text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block bg-court-orange hover:bg-court-orange-dark text-white font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
        >
          加入我们
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-court-light bg-transparent border-0 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-court-dark border-t border-court-gray px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-court-light hover:text-court-orange font-medium transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-court-orange hover:bg-court-orange-dark text-white font-semibold px-5 py-2 rounded-full text-sm text-center transition-colors"
            onClick={() => setOpen(false)}
          >
            加入我们
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
