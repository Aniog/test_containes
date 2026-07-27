import { useState } from 'react';
import { Menu, X, Microscope } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Worlds', href: '#worlds' },
  { label: 'Science', href: '#science' },
  { label: 'Explore', href: '#explore' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-deep-space/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="#hero" className="flex items-center gap-2 text-teal-glow font-extrabold text-xl tracking-tight">
          <Microscope className="w-6 h-6" />
          MicroCosmos
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-muted-blue hover:text-teal-glow transition-colors text-sm font-medium tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-soft-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-dark-navy border-t border-white/10 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-soft-white hover:text-teal-glow transition-colors text-base font-medium"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
