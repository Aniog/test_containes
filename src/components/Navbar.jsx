import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Hammer } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Hammer className="h-8 w-8 text-blue-800" />
              <span className="text-xl font-extrabold tracking-tighter text-slate-900 uppercase">
                Artitect Machinery
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium text-slate-600 hover:text-blue-800 transition-colors">Home</Link>
            <Link to="/products" className="text-sm font-medium text-slate-600 hover:text-blue-800 transition-colors">Products</Link>
            <Link to="/contact" className="text-sm font-medium text-slate-600 hover:text-blue-800 transition-colors">Contact</Link>
            <Button asChild>
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 p-4 space-y-4">
          <Link to="/" className="block text-base font-medium text-slate-600" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/products" className="block text-base font-medium text-slate-600" onClick={() => setIsOpen(false)}>Products</Link>
          <Link to="/contact" className="block text-base font-medium text-slate-600" onClick={() => setIsOpen(false)}>Contact</Link>
          <Button asChild className="w-full">
            <Link to="/contact" onClick={() => setIsOpen(false)}>Get Quote</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
