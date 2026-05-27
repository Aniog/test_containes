import { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const navLinks = [
  { label: 'Benefits', href: '#benefits' },
  { label: 'Nutrition', href: '#nutrition' },
  { label: 'Recipes', href: '#recipes' },
  { label: 'Testimonials', href: '#testimonials' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 text-[#2d7a4f] font-extrabold text-xl">
          <Leaf className="w-6 h-6" />
          NutriLife
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-[#2d7a4f] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#cta"
          className="hidden md:inline-block bg-[#2d7a4f] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#245f3e] transition-colors"
        >
          Get Started
        </a>

        <button
          className="md:hidden p-2 text-gray-700 bg-transparent border-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-gray-700 hover:text-[#2d7a4f] border-b border-gray-100 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setOpen(false)}
            className="mt-3 block text-center bg-[#2d7a4f] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#245f3e] transition-colors"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
