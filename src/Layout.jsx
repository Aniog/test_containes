import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Products', href: '/products' },
    { name: 'Case Studies', href: '/cases' },
    { name: 'Contact', href: '/contact', isButton: true },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-800">
      {/* Top bar (optional contact info) */}
      <div className="bg-slate-900 text-slate-300 py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>Trusted China Sourcing Partner for Global Buyers</div>
          <div className="flex items-center gap-4">
            <span>info@ssourcingchina.com</span>
            <span>+86 123 4567 8900</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <Globe className="h-8 w-8 text-blue-600" />
                <span className="font-bold text-2xl tracking-tight text-slate-900">SSourcing</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={
                    item.isButton
                      ? "bg-blue-600 text-white px-5 py-2.5 rounded-md font-medium hover:bg-blue-700 transition duration-150 inline-flex items-center"
                      : `text-base font-medium hover:text-blue-600 transition duration-150 ${
                          location.pathname === item.href ? 'text-blue-600' : 'text-slate-600'
                        }`
                  }
                >
                  {item.name}
                  {item.isButton && <ChevronRight className="ml-1 h-4 w-4" />}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 hover:text-slate-900 focus:outline-none p-2"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b absolute w-full left-0">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={
                    item.isButton
                      ? "w-full text-center mt-4 bg-blue-600 text-white px-5 py-3 rounded-md font-medium hover:bg-blue-700 transition duration-150 flex justify-center items-center"
                      : `block px-3 py-3 rounded-md text-base font-medium ${
                          location.pathname === item.href
                            ? 'text-blue-600 bg-blue-50'
                            : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                        }`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-4 text-white">
                <Globe className="h-6 w-6 text-blue-500" />
                <span className="font-bold text-xl tracking-tight">SSourcing</span>
              </Link>
              <p className="text-slate-400 text-sm mb-4">
                Your reliable partner in China. We handle supplier verification, quality control, 
                and shipping, so you can focus on growing your business.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/services" className="hover:text-white transition">Services</Link></li>
                <li><Link to="/how-it-works" className="hover:text-white transition">How It Works</Link></li>
                <li><Link to="/products" className="hover:text-white transition">Products We Source</Link></li>
                <li><Link to="/cases" className="hover:text-white transition">Case Studies</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>Supplier Sourcing</li>
                <li>Factory Audits</li>
                <li>Quality Inspections</li>
                <li>Logistics & Shipping</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Guangzhou, Guangdong, China</li>
                <li>info@ssourcingchina.com</li>
                <li>+86 123 4567 8900</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
