import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Microscope } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: '/', label: '首页' },
    { to: '/explore', label: '探索微观' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-[#050d1a]/85 backdrop-blur-md border-b border-[#1a3050] z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 group">
          <Microscope className="w-6 h-6 text-[#00d4c8] group-hover:scale-110 transition-transform" />
          <span className="text-xl font-bold text-white tracking-tight">
            Micro<span className="text-[#00d4c8]">Cosmos</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors ${
                isActive(link.to)
                  ? 'text-[#00d4c8]'
                  : 'text-slate-300 hover:text-[#00d4c8]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/explore"
            className="bg-[#00d4c8] text-[#050d1a] text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#00b8ad] transition-colors"
          >
            开始探索
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a1628] border-t border-[#1a3050] px-4 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`text-base font-medium transition-colors ${
                isActive(link.to) ? 'text-[#00d4c8]' : 'text-slate-300'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/explore"
            onClick={() => setMenuOpen(false)}
            className="bg-[#00d4c8] text-[#050d1a] text-sm font-semibold px-5 py-2 rounded-full text-center hover:bg-[#00b8ad] transition-colors"
          >
            开始探索
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
