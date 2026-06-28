import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Settings, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-gray-800">
      {/* Top Bar for Contact Info */}
      <div className="bg-blue-900 text-white py-2 px-4 shadow-sm md:block hidden">
          <div className="container mx-auto flex justify-between items-center text-sm">
             <div className="flex items-center gap-4">
                <span className="flex items-center gap-1"><Phone size={14} className="text-orange-500" /> +1 (555) 123-4567</span>
                <span className="flex items-center gap-1"><Mail size={14} className="text-orange-500" /> info@artitectmachinery.com</span>
             </div>
             <div>
                Precision Engineering, Global Quality.
             </div>
          </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-blue-900 p-2 rounded-md group-hover:bg-blue-800 transition-colors">
              <Settings size={28} className="text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-blue-900 group-hover:text-blue-800 transition-colors">
              ARTITECT <span className="font-light text-gray-600">MACHINERY</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold uppercase tracking-wider transition-colors hover:text-orange-500 ${
                  location.pathname === link.path ? 'text-orange-500 border-b-2 border-orange-500 pb-1' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-semibold transition-colors shadow-sm self-start md:self-auto">
              Request Quote
            </Link>
          </nav>

          {/* Mobile Nav Toggle */}
          <button className="md:hidden text-gray-600 focus:outline-none" onClick={toggleMenu} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
            <nav className="flex flex-col px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg font-medium py-2 border-b border-gray-50 ${
                    location.pathname === link.path ? 'text-orange-500' : 'text-gray-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
               <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="bg-orange-500 text-center text-white px-6 py-3 mt-4 rounded-md font-semibold text-lg">
                  Request Quote
               </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 border-t-4 border-blue-900 mt-auto">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
             <Link to="/" className="flex items-center gap-2 mb-4">
                <Settings size={24} className="text-orange-500" />
                <span className="text-xl font-bold text-white">
                  ARTITECT <span className="font-light">MACHINERY</span>
                </span>
             </Link>
             <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
                Leading manufacturer of high-precision double folders and sheet metal folding machinery. Combining elegant engineering with user-friendly operation.
             </p>
             <div className="flex gap-4">
                {/* Social icons could go here */}
                {["fb", "tw", "in"].map(soc => (
                   <span key={soc} className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer" aria-label={`Follow us on ${soc}`}>
                      <span className="sr-only">{soc}</span>
                   </span>
                ))}
             </div>
          </div>

          <div>
             <h3 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider relative after:content-[''] after:absolute after:bottom--2 after:left-0 after:w-8 after:h-0.5 after:bg-blue-500">Quick Links</h3>
             <ul className="space-y-2">
                {navLinks.map(link => (
                   <li key={link.path}>
                      <Link to={link.path} className="hover:text-orange-400 transition-colors flex items-center gap-2">
                         <span className="text-blue-500 text-xs">▸</span> {link.name}
                      </Link>
                   </li>
                ))}
             </ul>
          </div>

          <div>
             <h3 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider relative after:content-[''] after:absolute after:bottom--2 after:left-0 after:w-8 after:h-0.5 after:bg-blue-500">Contact Us</h3>
             <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                   <Settings className="text-orange-500 mt-1 shrink-0" size={16} />
                   <span>123 Industrial Ave, Tech Park<br/>Engineering City, EC 90210</span>
                </li>
                <li className="flex items-center gap-3">
                   <Phone className="text-orange-500 shrink-0" size={16} />
                   <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3">
                   <Mail className="text-orange-500 shrink-0" size={16} />
                   <span>Contact Us Form</span>
                </li>
             </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
           <p>© {new Date().getFullYear()} Artitect Machinery. All rights reserved.</p>
           <div className="flex gap-4 mt-4 md:mt-0">
               <span className="hover:text-gray-300 cursor-pointer">Privacy Policy</span>
               <span className="hover:text-gray-300 cursor-pointer">Terms of Service</span>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;