import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Cpu } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Hardware' },
  { to: '/blueprints', label: 'Blueprints' },
  { to: '/forge', label: 'The Forge' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-[20px] bg-[#1A1A1B]/80 border-b border-[#C0C0C0]/20 shadow-lg shadow-black/40'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <div className="absolute inset-0 bg-[#C0C0C0]/10 rounded border border-[#C0C0C0]/30 group-hover:border-[#C0C0C0]/60 transition-colors" />
            <Cpu className="w-4 h-4 text-[#C0C0C0] relative z-10" />
          </div>
          <span className="font-orbitron font-bold text-sm tracking-[0.2em] uppercase text-metallic">
            TITAN<span className="text-[#C0C0C0]/50">-</span>CORE
          </span>
        </NavLink>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `font-orbitron text-xs tracking-[0.15em] uppercase transition-all duration-300 relative group ${
                    isActive
                      ? 'text-white'
                      : 'text-[#C0C0C0]/60 hover:text-[#C0C0C0]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-[#C0C0C0] to-transparent transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button className="font-orbitron text-xs tracking-[0.15em] uppercase px-5 py-2 border border-[#C0C0C0]/30 text-[#C0C0C0] hover:border-[#C0C0C0]/70 hover:bg-[#C0C0C0]/5 transition-all duration-300 rounded">
            Get a Quote
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#C0C0C0] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden backdrop-blur-[20px] bg-[#1A1A1B]/95 border-b border-[#C0C0C0]/20">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `font-orbitron text-xs tracking-[0.15em] uppercase block py-2 transition-colors ${
                      isActive ? 'text-white' : 'text-[#C0C0C0]/60'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li>
              <button className="w-full font-orbitron text-xs tracking-[0.15em] uppercase px-5 py-2 border border-[#C0C0C0]/30 text-[#C0C0C0] rounded mt-2">
                Get a Quote
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
