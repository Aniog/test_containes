import { Link, Outlet } from 'react-router-dom';
import { Menu, X, Hammer, Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-brand-light text-brand-dark">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <Hammer className="h-8 w-8 text-brand-primary" />
                <span className="font-bold text-2xl tracking-tighter text-brand-primary">
                  ARTITECT<span className="text-brand-secondary">MACHINERY</span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-brand-gray hover:text-brand-primary px-3 py-2 font-medium transition-colors">
                Home
              </Link>
              <Link to="/products" className="text-brand-gray hover:text-brand-primary px-3 py-2 font-medium transition-colors">
                Products
              </Link>
              <Link to="/contact" className="text-brand-gray hover:text-brand-primary px-3 py-2 font-medium transition-colors">
                Contact Us
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-brand-gray hover:text-brand-primary focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-brand-gray hover:text-brand-primary hover:bg-gray-50 rounded-md"
              >
                Home
              </Link>
              <Link
                to="/products"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-brand-gray hover:text-brand-primary hover:bg-gray-50 rounded-md"
              >
                Products
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-brand-gray hover:text-brand-primary hover:bg-gray-50 rounded-md"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-white pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Hammer className="h-6 w-6 text-brand-secondary" />
                <span className="font-bold text-xl tracking-tighter text-white">
                  ARTITECT<span className="text-brand-secondary">MACHINERY</span>
                </span>
              </div>
              <p className="text-gray-400 max-w-xs">
                Premium double folding machines and sheet metal folders designed for precision, efficiency, and durability.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2 inline-block">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
                </li>
                <li>
                  <Link to="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2 inline-block">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-brand-secondary mt-0.5" />
                  <span className="text-gray-400">123 Industrial Parkway,<br />Manufacturing District, 45678</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-brand-secondary" />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-brand-secondary" />
                  <span className="text-gray-400">sales@artitectmachinery.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Artitect Machinery. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
