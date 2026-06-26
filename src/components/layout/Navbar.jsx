import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-primary">
          SSourcing China
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
          <Link to="/services" className="text-foreground hover:text-primary transition-colors">Services</Link>
          <Link to="/how-it-works" className="text-foreground hover:text-primary transition-colors">How It Works</Link>
          <Link to="/products" className="text-foreground hover:text-primary transition-colors">Products</Link>
          <Link to="/case-studies" className="text-foreground hover:text-primary transition-colors">Case Studies</Link>
          <Link to="/blog" className="text-foreground hover:text-primary transition-colors">Blog</Link>
        </nav>
        <Link to="/contact" className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors">
          Get a Free Quote
        </Link>
      </div>
    </header>
  );
};

export default Navbar;