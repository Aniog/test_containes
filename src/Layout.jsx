import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Twitter, Linkedin, Mail, Phone, ChevronRight } from 'lucide-react';
import { Toaster } from "@/components/ui/sonner";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Products We Source', path: '/products' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-inter">
      <Toaster position="top-center" richColors />
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#002D62] rounded flex items-center justify-center">
              <span className="text-white font-bold text-xl">SS</span>
            </div>
            <span className="text-2xl font-bold text-[#002D62]">SSourcing <span className="text-[#FF6B00]">China</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-semibold hover:text-[#FF6B00] transition-colors ${
                  location.pathname === link.path ? 'text-[#FF6B00]' : 'text-[#002D62]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact">
              <button className="bg-[#FF6B00] text-white px-6 py-2 rounded-lg font-bold hover:bg-orange-600 transition-colors">
                Free Quote
              </button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-[#002D62]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <nav className="lg:hidden bg-white border-t p-4 flex flex-col gap-4 shadow-lg absolute w-full">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-semibold text-lg py-2 border-b border-gray-50 ${
                  location.pathname === link.path ? 'text-[#FF6B00]' : 'text-[#002D62]'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-[#FF6B00] text-white px-6 py-3 rounded-lg font-bold">
                Get a Free Quote
              </button>
            </Link>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#002D62] text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-[#002D62] font-bold text-lg">SS</span>
                </div>
                <span className="text-xl font-bold">SSourcing China</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Your trusted partner in China sourcing. We help you find, verify, and ship quality products from reliable suppliers.
              </p>
              <div className="flex gap-4">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Quick Links</h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-gray-400 hover:text-[#FF6B00] flex items-center gap-1 group">
                      <ChevronRight size={16} className="text-gray-600 group-hover:text-[#FF6B00]" /> {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Services</h4>
              <ul className="space-y-4">
                <li><Link to="/services" className="text-gray-400 hover:text-white">Product Sourcing</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-white">Factory Audit</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-white">QC Inspection</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-white">Production Tracking</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-white">Amazon FBA Service</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <Mail className="w-5 h-5 text-[#FF6B00] mt-1" />
                  <span className="text-gray-400">info@ssourcingchina.com</span>
                </li>
                <li className="flex gap-3 items-start">
                  <Phone className="w-5 h-5 text-[#FF6B00] mt-1" />
                  <span className="text-gray-400">+86 123 4567 8910</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
            <p>© 2026 SSourcing China. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
