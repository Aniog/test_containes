import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Globe, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Products', path: '/products' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <NavLink to="/" className="flex items-center space-x-2">
          <Globe className="h-8 w-8 text-blue-900" />
          <span className="text-xl font-bold tracking-tight text-blue-900">SSourcing China</span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex lg:items-center lg:space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors hover:text-blue-900",
                  isActive ? "text-blue-900 border-b-2 border-blue-900" : "text-slate-600"
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="rounded-md bg-amber-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 transition-colors"
          >
            Get a Quote
          </NavLink>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-slate-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t px-4 py-4 space-y-4 shadow-lg">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                cn(
                  "block text-base font-medium transition-colors hover:text-blue-900",
                  isActive ? "text-blue-900" : "text-slate-600"
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block rounded-md bg-amber-500 px-4 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-amber-600"
          >
            Get a Quote
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
