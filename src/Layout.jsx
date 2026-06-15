import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Menu, X, Phone, Mail, Instagram, Linkedin, Facebook } from 'lucide-react';
import { useState } from 'react';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="w-full py-6 flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <span className="text-2xl font-bold tracking-tighter text-black">
                  ARTITECT<span className="text-blue-600">.</span>
                </span>
                <span className="hidden sm:block text-xs font-medium tracking-[0.2em] uppercase text-gray-500 mt-1">
                  MACHINERY
                </span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Link
                to="/contact"
                className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 transition-colors"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open menu</span>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
                {navigation.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-base font-medium text-gray-900"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-black hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-center gap-2">
                <span className="text-2xl font-bold tracking-tighter text-white">
                  ARTITECT<span className="text-blue-600">.</span>
                </span>
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-gray-400 mt-1">
                  MACHINERY
                </span>
              </Link>
              <p className="mt-4 text-gray-400 max-w-md">
                Precision engineering and durable solutions for the modern metalwork industry. Our folding machines are designed for efficiency, accuracy, and longevity.
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-gray-400 hover:text-white"><Facebook className="h-5 w-5" /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Instagram className="h-5 w-5" /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Linkedin className="h-5 w-5" /></a>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-100 tracking-wider uppercase">Products</h3>
              <ul className="mt-4 space-y-4 text-sm text-gray-400">
                <li>Double Folding Machines</li>
                <li>Sheet Metal Folders</li>
                <li>Metal Folder Machines</li>
                <li>Metal Folding Machines</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-100 tracking-wider uppercase">Contact</h3>
              <ul className="mt-4 space-y-4 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" /> +1 (555) 123-4567
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" /> info@artitectmachinery.com
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; 2026 ARTITECT MACHINERY. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-300">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
