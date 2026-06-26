import React from 'react';
import { Menu, X, ArrowRight, Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-slate-950">
              ARTITECT<span className="text-amber-600">MACHINERY</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-600 hover:text-slate-950 font-medium transition-colors">Home</Link>
            <a href="#products" className="text-slate-600 hover:text-slate-950 font-medium transition-colors">Products</a>
            <a href="#about" className="text-slate-600 hover:text-slate-950 font-medium transition-colors">About</a>
            <a href="#contact" className="bg-amber-600 text-white px-6 py-2.5 rounded-md font-medium hover:bg-amber-700 transition-colors shadow-sm">Contact Us</a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-950 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-slate-600 hover:text-slate-950 font-medium">Home</Link>
            <a href="#products" className="block px-3 py-2 text-slate-600 hover:text-slate-950 font-medium">Products</a>
            <a href="#about" className="block px-3 py-2 text-slate-600 hover:text-slate-950 font-medium">About</a>
            <a href="#contact" className="block px-3 py-2 bg-amber-600 text-white rounded-md font-medium">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
