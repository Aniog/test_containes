import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Layout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Products', href: '#products' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">AM</span>
                </div>
                <div className="hidden sm:block">
                  <span className="text-slate-900 font-bold text-lg tracking-tight">ARTITECT</span>
                  <span className="text-slate-600 font-medium text-sm ml-1">MACHINERY</span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="#contact"
                className="bg-slate-900 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-slate-800 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                Get a Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200">
              <div className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-slate-600 hover:text-slate-900 font-medium py-2 transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-slate-800 transition-colors"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-16 lg:pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">AM</span>
                </div>
                <div>
                  <span className="font-bold text-lg tracking-tight">ARTITECT</span>
                  <span className="text-slate-400 font-medium text-sm ml-1">MACHINERY</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Premium metal sheet folding machines engineered for precision, durability, and performance. Trusted by industries worldwide.
              </p>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-semibold text-white mb-4">Products</h4>
              <ul className="space-y-3">
                <li><a href="#products" className="text-slate-400 hover:text-white transition-colors text-sm">Double Folding Machine</a></li>
                <li><a href="#products" className="text-slate-400 hover:text-white transition-colors text-sm">Sheet Metal Folder</a></li>
                <li><a href="#products" className="text-slate-400 hover:text-white transition-colors text-sm">Metal Folder Machine</a></li>
                <li><a href="#products" className="text-slate-400 hover:text-white transition-colors text-sm">Metal Folding Machine</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#about" className="text-slate-400 hover:text-white transition-colors text-sm">About Us</a></li>
                <li><a href="#features" className="text-slate-400 hover:text-white transition-colors text-sm">Features</a></li>
                <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors text-sm">Contact</a></li>
                <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors text-sm">Get a Quote</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-white mb-4">Contact Us</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">Email:</span>
                  <span>sales@artitectmachinery.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">Phone:</span>
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">Hours:</span>
                  <span>Mon-Fri: 9AM - 6PM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © 2026 ARTITECT MACHINERY. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;