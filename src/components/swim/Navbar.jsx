import { useState } from 'react';
import { Menu, X, Waves } from 'lucide-react';

const links = [
  { label: 'Products', href: '#products' },
  { label: 'Features', href: '#features' },
  { label: 'Brands', href: '#brands' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 text-sky-700 font-extrabold text-xl">
          <Waves className="w-6 h-6 text-cyan-500" />
          SwimGear
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="text-slate-600 hover:text-sky-700 font-medium transition">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#products"
          className="hidden md:inline-flex bg-sky-700 hover:bg-sky-800 text-white rounded-full px-6 py-2 font-semibold text-sm transition"
        >
          Shop Now
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-sky-700 bg-transparent border-0 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-sky-100 px-4 pb-4">
          <ul className="flex flex-col gap-4 pt-4">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-slate-600 hover:text-sky-700 font-medium transition block"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#products"
            className="mt-4 inline-flex bg-sky-700 text-white rounded-full px-6 py-2 font-semibold text-sm"
            onClick={() => setOpen(false)}
          >
            Shop Now
          </a>
        </div>
      )}
    </nav>
  );
}
