import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 text-slate-900 font-bold text-lg no-underline">
          <Zap className="w-5 h-5 text-indigo-600" />
          Launchpad
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-slate-600 hover:text-slate-900 transition-colors no-underline">Features</a>
          <a href="#contact" className="text-sm text-slate-600 hover:text-slate-900 transition-colors no-underline">Contact</a>
          <Link
            to="/contacts"
            className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors no-underline font-medium"
          >
            View Contacts
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 text-slate-600 hover:text-slate-900 bg-transparent border-0"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 py-4 flex flex-col gap-4">
          <a href="#features" className="text-sm text-slate-700 no-underline" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#contact" className="text-sm text-slate-700 no-underline" onClick={() => setMenuOpen(false)}>Contact</a>
          <Link
            to="/contacts"
            className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-lg text-center no-underline font-medium"
            onClick={() => setMenuOpen(false)}
          >
            View Contacts
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
