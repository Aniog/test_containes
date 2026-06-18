import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = ['Features', 'Series', 'Specs', 'Buy'];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-14">
        <span className="text-gray-900 font-semibold text-lg tracking-tight">Apple Watch</span>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l}>
              <button
                onClick={() => scrollTo(l)}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                {l}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-gray-700 hover:text-gray-900"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="text-left text-base text-gray-700 hover:text-gray-900 font-medium"
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
