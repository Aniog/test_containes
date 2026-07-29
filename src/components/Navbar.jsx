import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Products', href: '/products' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="bg-primary text-white py-2 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm font-medium">
          <div className="flex items-center gap-6">
            <a href="tel:+86123456789" className="flex items-center gap-2 hover:text-slate-200 transition">
              <Phone size={16} /> <span>+86 123 4567 8901</span>
            </a>
            <a href="mailto:info@ssourcingchina.com" className="hidden md:flex items-center gap-2 hover:text-slate-200 transition">
              <Mail size={16} /> <span>info@ssourcingchina.com</span>
            </a>
          </div>
          <div className="hidden md:block">
            Professional China Sourcing Agent
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-extrabold tracking-tight text-primary">
              SSourcing<span className="text-accent">China</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-semibold transition-colors hover:text-primary",
                    isActive ? "text-primary" : "text-slate-600"
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="bg-primary text-white px-5 py-2.5 rounded-md text-sm font-bold hover:bg-primary-hover transition"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-primary p-2 transition"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile nav */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 py-4 px-4 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "block px-4 py-2 text-base font-semibold transition-colors",
                    isActive ? "text-primary bg-slate-50 border-l-4 border-primary" : "text-slate-600"
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 block w-full text-center bg-primary text-white px-4 py-3 rounded-md font-bold hover:bg-primary-hover transition"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
