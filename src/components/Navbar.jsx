import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = ['Features', 'How It Works', 'Testimonials', 'Pricing'];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050816]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white font-bold text-xl">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </div>
          AI Site
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button className="text-slate-300 hover:text-white text-sm font-medium transition-colors px-4 py-2">
            Log in
          </button>
          <button className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-all">
            Get Started
          </button>
        </div>

        <button className="md:hidden text-slate-300" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0a0f2e] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-slate-300 hover:text-white text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
          <button className="bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm font-semibold px-5 py-2 rounded-lg mt-2">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
