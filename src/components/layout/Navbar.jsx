import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navItems = [
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

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-primary p-1.5 rounded-sm">
            <Globe className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold tracking-tight font-heading text-primary">SSourcing <span className="text-secondary">China</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors hover:text-primary py-2",
                  isActive ? "text-primary border-b-2 border-primary" : "text-muted-foreground"
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
          <Button asChild size="sm">
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden border-b bg-background p-4 space-y-4 animate-in slide-in-from-top-5">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "block text-lg font-medium py-2",
                  isActive ? "text-primary" : "text-muted-foreground"
                )
              }
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
          <Button asChild className="w-full">
            <Link to="/contact" onClick={() => setIsOpen(false)}>Get a Quote</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
