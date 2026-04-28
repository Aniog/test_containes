import { useState } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

const navLinks = ['Features', 'How It Works', 'Use Cases', 'FAQ'];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase().replace(/\s+/g, '-'))?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Cpu className="w-7 h-7 text-indigo-400" />
          <span className="text-xl font-bold text-white tracking-tight">AiVerse</span>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className="text-slate-300 hover:text-indigo-400 transition-colors text-sm font-medium bg-transparent border-none cursor-pointer"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => scrollTo('features')}
          className="hidden md:block bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors border-none cursor-pointer"
        >
          Get Started
        </button>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-300 bg-transparent border-none cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-slate-300 hover:text-indigo-400 text-sm font-medium text-left bg-transparent border-none cursor-pointer"
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollTo('features')}
            className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors border-none cursor-pointer w-fit"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
