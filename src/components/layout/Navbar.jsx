import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Services', to: '/services' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Products We Source', to: '/products' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 no-underline" onClick={() => setMobileOpen(false)}>
            <div className="flex items-center gap-1">
              <span className="text-xl font-bold" style={{ color: '#1a2e4a' }}>SS</span>
              <span className="text-xl font-bold" style={{ color: '#c0392b' }}>ourcing</span>
              <span className="text-xl font-bold" style={{ color: '#1a2e4a' }}> China</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium no-underline transition-colors ${
                    isActive ? 'text-[#c0392b]' : 'text-[#4a5568] hover:text-[#1a2e4a]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => navigate('/contact')}
              className="bg-[#c0392b] hover:bg-[#a93226] text-white font-semibold px-5 py-2 rounded-lg text-sm transition-colors cursor-pointer"
            >
              Get a Free Quote
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-md text-[#4a5568] hover:text-[#1a2e4a] cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#e2e8f0] px-4 py-4">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium no-underline py-2 border-b border-[#f4f6f9] ${
                    isActive ? 'text-[#c0392b]' : 'text-[#4a5568]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <button
              onClick={() => { navigate('/contact'); setMobileOpen(false); }}
              className="mt-2 bg-[#c0392b] hover:bg-[#a93226] text-white font-semibold px-5 py-3 rounded-lg text-sm transition-colors cursor-pointer"
            >
              Get a Free Sourcing Quote
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
