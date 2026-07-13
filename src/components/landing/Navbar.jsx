import { Link } from 'react-router-dom';
import { Zap, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-slate-900 text-lg">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            Launchpad
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors text-sm">
              Features
            </a>
            <a href="#contact" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors text-sm">
              Contact
            </a>
            <Link
              to="/contacts"
              className="text-slate-600 hover:text-indigo-600 font-medium transition-colors text-sm"
            >
              View contacts
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
            >
              Get started
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-3">
          <a
            href="#features"
            onClick={() => setMobileOpen(false)}
            className="block text-slate-700 font-medium py-2"
          >
            Features
          </a>
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block text-slate-700 font-medium py-2"
          >
            Contact
          </a>
          <Link
            to="/contacts"
            onClick={() => setMobileOpen(false)}
            className="block text-slate-700 font-medium py-2"
          >
            View contacts
          </Link>
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block bg-indigo-600 text-white font-semibold px-4 py-2.5 rounded-lg text-center"
          >
            Get started
          </a>
        </div>
      )}
    </header>
  );
}
