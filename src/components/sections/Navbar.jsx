import { useState } from 'react';
import { Menu, X, Gamepad2 } from 'lucide-react';

const navLinks = [
  { label: 'Featured', href: '#featured' },
  { label: 'Top Sellers', href: '#top-sellers' },
  { label: 'Genres', href: '#genres' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'News', href: '#news' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1b2838]/95 backdrop-blur border-b border-[#2a475e]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 text-white font-black text-xl tracking-tight">
          <Gamepad2 className="w-7 h-7 text-[#1a9fff]" />
          <span>SteamVault</span>
        </a>

        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[#c6d4df] hover:text-white text-sm font-medium transition"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#"
          className="hidden md:inline-flex bg-[#1a9fff] hover:bg-[#1b8fe0] text-white text-sm font-semibold px-5 py-2 rounded-lg transition"
        >
          Install Steam
        </a>

        <button
          className="md:hidden text-[#c6d4df] hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#1b2838] border-t border-[#2a475e] px-4 pb-4">
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block text-[#c6d4df] hover:text-white text-sm font-medium transition"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="mt-4 block text-center bg-[#1a9fff] hover:bg-[#1b8fe0] text-white text-sm font-semibold px-5 py-2 rounded-lg transition"
          >
            Install Steam
          </a>
        </div>
      )}
    </nav>
  );
}
