import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { 
    name: 'Services', 
    path: '/services',
    dropdown: [
      { name: 'Supplier Verification', path: '/services#supplier-verification' },
      { name: 'Quality Inspection', path: '/services#quality-inspection' },
      { name: 'Production Follow-up', path: '/services#production-followup' },
      { name: 'Shipping Coordination', path: '/services#shipping' },
    ]
  },
  { name: 'How It Works', path: '/how-it-works' },
  { name: 'Products', path: '/products' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  
  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path.split('#')[0]);
  };
  
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#1e3a5f] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">SS</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#1e3a5f] font-bold text-lg leading-tight">SSourcing</span>
              <span className="text-[#4a6fa5] text-xs leading-tight">China</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div 
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.path}
                  className={cn(
                    'flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                    isActive(link.path)
                      ? 'text-[#1e3a5f] bg-[#f7fafc]'
                      : 'text-[#2d3748] hover:text-[#1e3a5f] hover:bg-[#f7fafc]'
                  )}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-4 h-4 ml-1" />}
                </Link>
                
                {link.dropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-[#2d3748] hover:text-[#1e3a5f] hover:bg-[#f7fafc]"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button to="/contact" size="sm">
              Get a Free Quote
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#2d3748] hover:text-[#1e3a5f]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.path}
                  className={cn(
                    'block px-4 py-3 text-base font-medium rounded-lg',
                    isActive(link.path)
                      ? 'text-[#1e3a5f] bg-[#f7fafc]'
                      : 'text-[#2d3748] hover:bg-[#f7fafc]'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <div className="pl-4 mt-1 space-y-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-[#4a6fa5] hover:text-[#1e3a5f] hover:bg-[#f7fafc] rounded-lg"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 px-4">
              <Button to="/contact" className="w-full" onClick={() => setIsOpen(false)}>
                Get a Free Quote
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
