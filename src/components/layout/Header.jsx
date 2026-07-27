import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Products', path: '/products' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300",
      isScrolled ? "bg-white shadow-md py-2" : "bg-white/80 backdrop-blur-sm py-4"
    )}>
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg text-white font-bold text-xl">
            SS
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-primary tracking-tight leading-none">SSourcing</span>
            <span className="text-sm font-semibold text-accent uppercase tracking-widest leading-none mt-1">China</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === link.path ? "text-primary" : "text-slate-600"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-accent text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-accent/90 transition-all shadow-md hover:shadow-lg"
          >
            Get a Free Quote
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-slate-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={cn(
        "lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl transition-all duration-300 overflow-hidden",
        isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="container-custom py-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-lg font-medium py-2",
                location.pathname === link.path ? "text-primary border-l-4 border-primary pl-3" : "text-slate-600 pl-4"
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 px-4">
            <Link
              to="/contact"
              className="block w-full bg-accent text-white py-4 rounded-md text-center font-bold text-lg"
              onClick={() => setIsOpen(false)}
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
