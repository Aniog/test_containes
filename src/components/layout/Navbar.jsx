import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Products We Source', path: '/products' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-[#1a2e4a]'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded flex items-center justify-center font-bold text-white text-sm ${scrolled ? 'bg-[#e85d26]' : 'bg-[#e85d26]'}`}>
                SS
              </div>
              <div>
                <span className={`font-bold text-lg leading-none block ${scrolled ? 'text-[#1a2e4a]' : 'text-white'}`}>
                  SSourcing
                </span>
                <span className={`text-xs leading-none ${scrolled ? 'text-[#6b7280]' : 'text-blue-200'}`}>
                  China
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? scrolled
                      ? 'text-[#e85d26] bg-orange-50'
                      : 'text-[#e85d26] bg-white/10'
                    : scrolled
                    ? 'text-[#1f2937] hover:text-[#e85d26] hover:bg-gray-50'
                    : 'text-blue-100 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-[#e85d26] hover:bg-[#c94d1e] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded transition-colors ${
              scrolled ? 'text-[#1a2e4a] hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="section-container py-4">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-[#e85d26] bg-orange-50'
                      : 'text-[#1f2937] hover:text-[#e85d26] hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 bg-[#e85d26] hover:bg-[#c94d1e] text-white font-semibold px-4 py-3 rounded-lg text-sm text-center transition-colors"
              >
                Get a Free Sourcing Quote
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
