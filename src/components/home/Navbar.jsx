import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Breeds', href: '#breeds' },
  { label: 'Fun Facts', href: '#facts' },
  { label: 'Care Tips', href: '#care' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 text-stone-900 font-extrabold text-xl no-underline">
          <span className="text-2xl">🐾</span>
          <span>DogWorld</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-stone-600 hover:text-amber-500 font-medium transition-colors no-underline"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#care"
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 py-2 rounded-full transition-colors no-underline text-sm"
          >
            Adopt a Dog
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-stone-700 bg-transparent border-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-stone-200 px-4 pb-4 flex flex-col gap-4 pt-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-stone-700 hover:text-amber-500 font-medium no-underline"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#care"
            onClick={() => setOpen(false)}
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 py-2 rounded-full transition-colors no-underline text-sm text-center"
          >
            Adopt a Dog
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
