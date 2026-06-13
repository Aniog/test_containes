import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <a href="#" className="font-bold text-2xl tracking-tight text-white hover:text-slate-200 transition-colors">
          ARTITECT
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          <a href="#home" className="text-sm font-medium hover:text-blue-400 transition-colors">Home</a>
          <a href="#features" className="text-sm font-medium hover:text-blue-400 transition-colors">Advantages</a>
          <a href="#products" className="text-sm font-medium hover:text-blue-400 transition-colors">Machines</a>
          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-medium transition-colors">
            Get a Quote
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-slate-300 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700 absolute w-full">
          <div className="flex flex-col px-4 py-4 gap-4">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-slate-200 hover:text-white pb-2 border-b border-slate-700">Home</a>
            <a href="#features" onClick={() => setIsMenuOpen(false)} className="text-slate-200 hover:text-white pb-2 border-b border-slate-700">Advantages</a>
            <a href="#products" onClick={() => setIsMenuOpen(false)} className="text-slate-200 hover:text-white pb-2 border-b border-slate-700">Machines</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-md font-medium mt-2">
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
