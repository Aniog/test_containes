import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = ['Features', 'How It Works', 'Pricing', 'Testimonials'];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-md bg-[#050816]/80">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="text-white font-bold text-xl tracking-tight">AI Site</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-slate-400 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="text-slate-300 hover:text-white text-sm font-medium transition-colors px-4 py-2">
            Sign In
          </button>
          <button className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-all duration-200 shadow-lg shadow-violet-500/20">
            Get Started Free
          </button>
        </div>

        <button
          className="md:hidden text-slate-300 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#050816]/95 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
          <button className="mt-2 bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg w-full">
            Get Started Free
          </button>
        </div>
      )}
    </nav>
  );
}
