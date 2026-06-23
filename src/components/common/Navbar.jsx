import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

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
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="bg-blue-900 text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><Phone size={14} /> +86 123 4567 8901</span>
            <span className="flex items-center gap-1"><Mail size={14} /> info@ssourcingchina.com</span>
          </div>
          <div className="hidden md:block">
            Professional China Sourcing Agent
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-900">SSourcing</span>
            <span className="text-2xl font-light text-slate-500 text-sm mt-1 uppercase tracking-widest hidden sm:inline">China</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-blue-900 ${
                    isActive ? 'text-blue-900 font-semibold' : 'text-slate-600'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="bg-amber-600 text-white px-6 py-2.5 rounded-md text-sm font-semibold hover:bg-amber-700 transition-colors"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium py-2 ${
                    isActive ? 'text-blue-900' : 'text-slate-600'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-amber-600 text-white px-6 py-3 rounded-md text-center font-semibold mt-2"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
