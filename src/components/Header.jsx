import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight text-slate-900 uppercase">
          ARTITECT <span className="font-light text-amber-600">MACHINERY</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <Link to="/" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Home</Link>
          <a href="#products" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Products</a>
          <a href="#features" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Features</a>
          <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-6 py-4 flex flex-col gap-4">
          <Link to="/" className="text-slate-600 hover:text-slate-900 py-2 border-b border-slate-50" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <a href="#products" className="text-slate-600 hover:text-slate-900 py-2 border-b border-slate-50" onClick={() => setIsMenuOpen(false)}>Products</a>
          <a href="#features" className="text-slate-600 hover:text-slate-900 py-2 border-b border-slate-50" onClick={() => setIsMenuOpen(false)}>Features</a>
          <a href="#contact" className="text-slate-600 hover:text-slate-900 py-2" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;