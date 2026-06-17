import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Hammer } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Technical Specs', href: '/specs' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-slate-900 p-2 rounded-lg group-hover:bg-slate-800 transition-colors">
            <Hammer className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-slate-900 tracking-tight leading-none uppercase">
              Artitect
            </span>
            <span className="text-xs font-medium text-slate-500 tracking-widest uppercase">
              Machinery
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                isActive(item.href) ? 'text-blue-600' : 'text-slate-600'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
          >
            Inquire Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-6 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-base font-medium ${
                isActive(item.href) ? 'text-blue-600' : 'text-slate-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-slate-900 text-white px-5 py-3 rounded-lg text-center font-medium"
            onClick={() => setIsOpen(false)}
          >
            Inquire Now
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
