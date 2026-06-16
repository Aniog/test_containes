import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-charcoal/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-amber flex items-center justify-center rounded">
              <span className="text-charcoal font-extrabold text-lg tracking-tighter">A</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-sm tracking-[0.25em] uppercase leading-none">
                Artitect
              </span>
              <span className="text-amber text-[10px] tracking-[0.3em] uppercase font-medium leading-none mt-0.5">
                Machinery
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium tracking-wide uppercase transition-colors duration-200 rounded-md ${
                  location.pathname === link.path
                    ? 'text-amber'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="inline-flex items-center px-5 py-2.5 bg-amber text-charcoal text-xs font-semibold tracking-widest uppercase rounded hover:bg-amber-light transition-colors duration-200"
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-charcoal border-t border-stone-700/50 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 text-sm font-medium tracking-wide uppercase rounded-md transition-colors ${
                location.pathname === link.path
                  ? 'text-amber bg-charcoal-light'
                  : 'text-stone-300 hover:text-white hover:bg-charcoal-light'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block px-4 py-3 mt-2 bg-amber text-charcoal text-sm font-semibold tracking-widest uppercase rounded text-center"
          >
            Request Quote
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
