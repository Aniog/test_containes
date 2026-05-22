import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Gamepad2, Menu, X, Search, ShoppingCart, Flame, Newspaper, Tag, Store } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home', icon: Flame },
  { to: '/news', label: 'News', icon: Newspaper },
  { to: '/deals', label: 'Deals', icon: Tag },
  { to: '/store', label: 'Store', icon: Store },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-[#0f0f13]/95 backdrop-blur-md border-b border-[#2a2a3a]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
              <Gamepad2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              GameVault
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === to
                    ? 'text-white bg-[#1e1e2a]'
                    : 'text-gray-400 hover:text-white hover:bg-[#1e1e2a]'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <button className="hidden md:flex items-center gap-2 bg-[#1e1e2a] border border-[#2a2a3a] text-gray-400 hover:text-white rounded-lg px-3 py-2 text-sm transition-colors">
              <Search className="w-4 h-4" />
              <span>Search games...</span>
            </button>
            <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-violet-500 rounded-full" />
            </button>
            <button
              className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#2a2a3a] bg-[#0f0f13]">
          <nav className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === to
                    ? 'text-white bg-[#1e1e2a]'
                    : 'text-gray-400 hover:text-white hover:bg-[#1e1e2a]'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-2 bg-[#1e1e2a] border border-[#2a2a3a] rounded-lg px-3 py-2">
              <Search className="w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search games..."
                className="bg-transparent text-sm text-white placeholder-gray-500 outline-none flex-1"
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
