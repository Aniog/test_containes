import { Link } from 'react-router-dom';
import { Menu, X, Hammer } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Hammer className="w-8 h-8 text-blue-900" />
              <span className="font-bold text-xl tracking-tight text-slate-900 uppercase">ARTITECT</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-slate-600 hover:text-blue-900 font-medium transition-colors">Home</Link>
            <Link to="/#products" className="text-slate-600 hover:text-blue-900 font-medium transition-colors">Products</Link>
            <Link to="/#about" className="text-slate-600 hover:text-blue-900 font-medium transition-colors">About Us</Link>
            <Button className="bg-slate-900 hover:bg-slate-800 text-white px-6">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 hover:text-blue-900 font-medium rounded-md hover:bg-slate-50">Home</Link>
            <Link to="/#products" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 hover:text-blue-900 font-medium rounded-md hover:bg-slate-50">Products</Link>
            <Link to="/#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 hover:text-blue-900 font-medium rounded-md hover:bg-slate-50">About Us</Link>
            <div className="px-3 py-2">
              <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white">
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
