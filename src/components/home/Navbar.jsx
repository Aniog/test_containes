import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Bike } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Bikes', to: '/bikes' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a2e]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-white font-black text-xl tracking-tight">
            <Bike className="w-7 h-7 text-[#e94560]" />
            <span>VELOX</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              to="/bikes"
              className="bg-[#e94560] hover:bg-[#c73652] text-white font-semibold px-5 py-2 rounded-xl text-sm transition-colors"
            >
              Shop Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#16213e] border-t border-white/10 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `font-medium text-base transition-colors ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/bikes"
            onClick={() => setOpen(false)}
            className="bg-[#e94560] hover:bg-[#c73652] text-white font-semibold px-5 py-2 rounded-xl text-sm text-center transition-colors"
          >
            Shop Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
