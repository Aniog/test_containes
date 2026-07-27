import React from 'react';

import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <header className="border-b border-slate-200 py-4 shadow-sm bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link to="/" className="text-2xl font-bold text-primary">SSourcing China</Link>
          </div>
          <nav className="hidden lg:flex gap-6 items-center">
            <Link to="/" className="font-medium hover:text-secondary transition">Home</Link>
            <Link to="/services" className="font-medium hover:text-secondary transition">Services</Link>
            <Link to="/how-it-works" className="font-medium hover:text-secondary transition">How It Works</Link>
            <Link to="/products" className="font-medium hover:text-secondary transition">Products</Link>
            <Link to="/case-studies" className="font-medium hover:text-secondary transition">Case Studies</Link>
            <Link to="/blog" className="font-medium hover:text-secondary transition">Blog</Link>
            <Link to="/contact" className="px-5 py-2.5 bg-secondary text-white rounded-md font-semibold hover:bg-secondary/90 transition shadow-sm">Free Quote</Link>
          </nav>
          {/* Mobile Menu Button - simplified for now */}
          <button className="lg:hidden p-2 text-slate-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <h3 className="text-white font-bold text-xl mb-6">SSourcing China</h3>
              <p className="mb-6 leading-relaxed">Your professional sourcing partner on the ground in China. We help you find, verify, and ship quality products with zero stress.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
              <ul className="space-y-4">
                <li><Link to="/services" className="hover:text-white transition">Our Services</Link></li>
                <li><Link to="/how-it-works" className="hover:text-white transition">How It Works</Link></li>
                <li><Link to="/products" className="hover:text-white transition">Products We Source</Link></li>
                <li><Link to="/case-studies" className="hover:text-white transition">Case Studies</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Services</h4>
              <ul className="space-y-4">
                <li><Link to="/services" className="hover:text-white transition">Supplier Sourcing</Link></li>
                <li><Link to="/services" className="hover:text-white transition">Factory Audit</Link></li>
                <li><Link to="/services" className="hover:text-white transition">Quality Control</Link></li>
                <li><Link to="/services" className="hover:text-white transition">Shipping Management</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
              <p className="mb-4">Guangzhou, Guangdong, China</p>
              <p className="mb-2">Email: info@ssourcingchina.com</p>
              <p>Phone: +86 123 4567 8901</p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
