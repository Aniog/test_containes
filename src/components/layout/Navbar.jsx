import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navbar = ({ isTransparent }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleCart, cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isTransparent && !isScrolled
      ? 'bg-transparent text-white border-b border-transparent'
      : 'bg-velmora-bg text-velmora-dark border-b border-velmora-accent/10 shadow-sm'
  }`;

  const linkClass = "hover:text-velmora-accent transition-colors uppercase tracking-widest text-[11px] font-medium";

  return (
    <>
      <nav className={navClasses}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Mobile Menu Button */}
            <div className="flex-1 md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 -ml-2"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

            {/* Logo */}
            <div className="flex-1 md:flex-none flex justify-center md:justify-start">
              <Link to="/" className="font-serif text-2xl tracking-[0.2em] uppercase">
                Velmora
              </Link>
            </div>

            {/* Desktop Center Links */}
            <div className="hidden md:flex flex-1 justify-center space-x-10">
              <Link to="/shop" className={linkClass}>Shop</Link>
              <Link to="/collections" className={linkClass}>Collections</Link>
              <Link to="/about" className={linkClass}>About</Link>
              <Link to="/journal" className={linkClass}>Journal</Link>
            </div>

            {/* Right Icons */}
            <div className="flex-1 flex justify-end items-center space-x-4">
              <button className="p-2 hover:text-velmora-accent transition-colors" aria-label="Search">
                <Search className="w-5 h-5" />
              </button>
              <button 
                className="p-2 hover:text-velmora-accent transition-colors relative"
                onClick={toggleCart}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 bg-velmora-accent text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed top-0 left-0 bottom-0 w-4/5 max-w-sm bg-velmora-bg z-[70] transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b border-velmora-accent/10">
          <span className="font-serif text-xl tracking-[0.2em] uppercase">Velmora</span>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex flex-col p-6 space-y-6">
          <Link to="/shop" className={`${linkClass} text-sm`} onClick={() => setIsMobileMenuOpen(false)}>Shop All</Link>
          <Link to="/collections/earrings" className={`${linkClass} text-sm`} onClick={() => setIsMobileMenuOpen(false)}>Earrings</Link>
          <Link to="/collections/necklaces" className={`${linkClass} text-sm`} onClick={() => setIsMobileMenuOpen(false)}>Necklaces</Link>
          <Link to="/collections/huggies" className={`${linkClass} text-sm`} onClick={() => setIsMobileMenuOpen(false)}>Huggies</Link>
          <hr className="border-velmora-accent/10" />
          <Link to="/about" className={`${linkClass} text-sm`} onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          <Link to="/journal" className={`${linkClass} text-sm`} onClick={() => setIsMobileMenuOpen(false)}>Journal</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;