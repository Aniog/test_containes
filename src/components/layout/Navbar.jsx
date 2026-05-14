import { useState } from 'react';
import { Menu, X, Coffee } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ['Shop', 'About', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fdf8f0]/95 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-amber-700">
          <Coffee className="w-6 h-6" />
          <span className="font-bold text-xl tracking-tight text-stone-900" style={{ fontFamily: "'Playfair Display', serif" }}>
            Sip & Clay
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-stone-600 hover:text-amber-700 font-medium transition-colors text-sm"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#shop"
          className="hidden md:inline-flex bg-amber-700 text-white hover:bg-amber-800 rounded-full px-5 py-2 text-sm font-semibold transition-colors shadow-sm"
        >
          Shop Now
        </a>

        <button
          className="md:hidden text-stone-700 hover:text-amber-700 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#fdf8f0] border-t border-stone-200 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-stone-700 hover:text-amber-700 font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#shop"
            className="bg-amber-700 text-white hover:bg-amber-800 rounded-full px-5 py-2 text-sm font-semibold text-center transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Shop Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
