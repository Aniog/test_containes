import { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = ['Explore', 'Gallery', 'Seasons', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white font-serif font-bold text-xl">
          <Leaf className="w-5 h-5 text-green-leaf" />
          Into the Wild
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#explore"
          className="hidden md:inline-block bg-green-forest hover:bg-green-leaf text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
        >
          Start Exploring
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-md px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-2">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-white/80 hover:text-white text-base font-medium block"
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#explore"
            className="mt-4 inline-block bg-green-forest text-white text-sm font-semibold px-5 py-2 rounded-full"
            onClick={() => setOpen(false)}
          >
            Start Exploring
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
