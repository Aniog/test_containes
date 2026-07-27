import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'How It Works', path: '/how-it-works' },
  { name: 'Products', path: '/products' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  const scrollToQuote = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById('inquiry-form');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      const el = document.getElementById('inquiry-form');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 bg-primary-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-primary-500 font-bold text-lg tracking-tight">SSourcing</span>
              <span className="text-slate-500 text-[10px] font-medium tracking-wider uppercase">China</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary-500'
                    : 'text-slate-700 hover:text-primary-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA + Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+8613812345678" className="flex items-center gap-1.5 text-sm text-slate-600 hover:text-primary-500 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+86 138 1234 5678</span>
            </a>
            <button
              onClick={scrollToQuote}
              className="bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors"
            >
              Get a Free Sourcing Quote
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-700"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="container mx-auto py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'bg-primary-50 text-primary-500'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-primary-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-slate-100 mt-3">
              <a
                href="tel:+8613812345678"
                className="flex items-center gap-2 px-4 py-2 text-sm text-slate-600"
              >
                <Phone className="w-4 h-4" />
                +86 138 1234 5678
              </a>
              <button
                onClick={scrollToQuote}
                className="w-full mt-2 bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold px-4 py-3 rounded-md transition-colors"
              >
                Get a Free Sourcing Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;