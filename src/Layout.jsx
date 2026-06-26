import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Factory } from 'lucide-react';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <nav className="bg-slate-900 text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-3">
                <Factory className="h-8 w-8 text-blue-400" />
                <span className="font-bold text-xl tracking-wider">ARTITECT MACHINERY</span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm tracking-wide font-medium transition-colors ${
                    isActive(item.href) ? 'text-blue-400' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-sm font-medium transition-colors text-sm tracking-wide"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-white"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-medium ${
                    isActive(item.href) ? 'bg-slate-900 text-blue-400' : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4 text-white">
                <Factory className="h-6 w-6 text-blue-400" />
                <span className="font-bold text-lg tracking-wider">ARTITECT MACHINERY</span>
              </div>
              <p className="text-sm max-w-sm mb-6 leading-relaxed">
                Precision engineering meets elegant design. We manufacture state-of-the-art sheet metal folding machines for modern industrial applications.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold tracking-wider text-sm mb-4 uppercase">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/products" className="hover:text-blue-400 transition-colors">Products</Link></li>
                <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold tracking-wider text-sm mb-4 uppercase">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li>info@artitectmachinery.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Industrial Way<br/>Engineering District, TX 75001</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-sm flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Artitect Machinery. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;