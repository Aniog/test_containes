import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = ['Features', 'How It Works', 'Pricing', 'Testimonials'];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase().replace(/\s+/g, '-'))?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050816]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="text-white font-bold text-xl tracking-tight">AI Site</span>
        </div>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className="text-gray-400 hover:text-white text-sm font-medium transition-colors"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button className="text-gray-300 hover:text-white text-sm font-medium transition-colors px-4 py-2">
            Log in
          </button>
          <button className="bg-gradient-to-r from-violet-600 to-cyan-500 text-white text-sm font-semibold px-5 py-2 rounded-full hover:opacity-90 transition-opacity">
            Get Started
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#050816] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-gray-300 hover:text-white text-sm font-medium text-left transition-colors"
            >
              {link}
            </button>
          ))}
          <button className="bg-gradient-to-r from-violet-600 to-cyan-500 text-white text-sm font-semibold px-5 py-2 rounded-full hover:opacity-90 transition-opacity w-full mt-2">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
