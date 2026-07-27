import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Services', path: '/services' },
    { title: 'How It Works', path: '/how-it-works' },
    { title: 'Products', path: '/products' },
    { title: 'Case Studies', path: '/case-studies' },
    { title: 'Blog', path: '/blog' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={cn(
      "fixed w-full z-50 transition-all duration-300 border-b",
      isScrolled ? "bg-white py-3 shadow-md border-gray-200" : "bg-transparent py-5 border-transparent"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className={cn(
            "text-2xl font-bold tracking-tight",
            isScrolled ? "text-navy-900" : "text-navy-900"
          )}>
            SSourcing<span className="text-blue-600">China</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-600",
                location.pathname === link.path ? "text-blue-600" : (isScrolled ? "text-gray-700" : "text-gray-800")
              )}
            >
              {link.title}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-navy-900 text-white px-5 py-2.5 rounded text-sm font-semibold hover:bg-navy-800 transition-colors shadow-sm"
          >
            Free Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "lg:hidden absolute top-full left-0 w-full bg-white shadow-xl flex flex-col p-6 transition-all duration-300 border-t",
        isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
      )}>
        {navLinks.map((link) => (
          <Link
            key={link.title}
            to={link.path}
            className="py-3 text-lg font-medium border-b border-gray-100 last:border-0 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            {link.title}
          </Link>
        ))}
        <Link
          to="/contact"
          className="mt-6 bg-navy-900 text-white text-center py-4 rounded-lg font-bold shadow-lg"
          onClick={() => setIsOpen(false)}
        >
          Get a Free Quote
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
