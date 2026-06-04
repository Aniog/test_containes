import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Microscope } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/explore', label: 'Explore' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-[#D9EDE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#3DBFA8] flex items-center justify-center">
              <Microscope className="w-4 h-4 text-white" />
            </div>
            <span className="text-base font-black tracking-tight text-[#2C3E50]">
              Micro<span className="text-[#3DBFA8]">Cosmos</span>
            </span>
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? 'text-[#3DBFA8] font-semibold' : 'text-[#7F8C8D] hover:text-[#2C3E50]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/explore"
              className="bg-[#3DBFA8] text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-[#2CA898] transition-colors"
            >
              Discover
            </NavLink>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-[#7F8C8D] hover:text-[#2C3E50] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#D9EDE8]">
          <div className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#E8F7F4] text-[#3DBFA8] font-semibold'
                      : 'text-[#7F8C8D] hover:bg-[#F5FAF8] hover:text-[#2C3E50]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/explore"
              className="mt-1 bg-[#3DBFA8] text-white text-sm font-semibold px-4 py-2.5 rounded-lg text-center hover:bg-[#2CA898] transition-colors"
            >
              Discover
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

