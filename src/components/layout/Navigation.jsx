import { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu } from 'lucide-react';
import { useCart } from '../cart/CartProvider';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems, setIsOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-brand-50/95 backdrop-blur-md shadow-sm text-brand-900 border-b border-brand-200/50' 
          : 'bg-transparent text-brand-900 md:text-white'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu */}
          <div className="md:hidden flex-1">
            <button className="p-2 -ml-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Desktop Links */}
          <nav className="hidden md:flex flex-1 items-center gap-8 text-sm font-medium tracking-wide uppercase">
            <a href="/shop" className="hover:text-accent transition-colors">Shop</a>
            <a href="/collections/all" className="hover:text-accent transition-colors">Collections</a>
            <a href="/about" className="hover:text-accent transition-colors">About</a>
            <a href="/journal" className="hover:text-accent transition-colors">Journal</a>
          </nav>

          {/* Logo */}
          <a href="/" className="font-serif text-3xl tracking-widest text-center flex-1 md:flex-none">
            VELMORA
          </a>

          {/* Right Icons */}
          <div className="flex-1 flex items-center justify-end gap-4 md:gap-6">
            <button className="p-2 hover:text-accent transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button 
              className="p-2 -mr-2 hover:text-accent transition-colors relative"
              onClick={() => setIsOpen(true)}
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-accent text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}