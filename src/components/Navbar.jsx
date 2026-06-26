import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Hammer } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Hammer className="w-8 h-8 text-brand-accent" />
              <span className="text-xl font-extrabold tracking-tight text-brand-primary">
                ARTITECT <span className="text-brand-secondary">MACHINERY</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-600 hover:text-brand-accent font-medium transition-colors">Home</Link>
            <Link to="/products" className="text-slate-600 hover:text-brand-accent font-medium transition-colors">Products</Link>
            <Link to="/about" className="text-slate-600 hover:text-brand-accent font-medium transition-colors">About</Link>
            <Link to="/contact" className="px-5 py-2 bg-brand-primary text-white text-sm font-semibold rounded-sm hover:bg-slate-700 transition-all">
              Contact Us
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-4 text-base font-medium text-slate-600 hover:bg-slate-50">Home</Link>
            <Link to="/products" className="block px-3 py-4 text-base font-medium text-slate-600 hover:bg-slate-50">Products</Link>
            <Link to="/about" className="block px-3 py-4 text-base font-medium text-slate-600 hover:bg-slate-50">About</Link>
            <Link to="/contact" className="block px-3 py-4 text-base font-medium text-brand-accent font-bold">Inquire Now</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
