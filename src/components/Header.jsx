import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useCart } from '../contexts/CartContext';
import CartDrawer from './CartDrawer';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { setIsOpen, itemCount } = useCart();
  
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
    isScrolled || !isHome 
      ? 'bg-background/95 backdrop-blur-sm shadow-sm text-foreground' 
      : 'bg-transparent text-white'
  }`;

  return (
    <>
      <header className={headerClass}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 relative z-10 w-1/4">
              <span className="font-serif text-2xl tracking-[0.2em] uppercase font-semibold">
                Velmora
              </span>
            </Link>

            {/* Center Navigation */}
            <nav className="hidden md:flex space-x-10 flex-1 justify-center z-10">
              <Link to="/shop" className="text-sm tracking-widest uppercase hover:opacity-70 transition-opacity">Shop</Link>
              <Link to="/shop?collection=necklaces" className="text-sm tracking-widest uppercase hover:opacity-70 transition-opacity">Collections</Link>
              <Link to="#" className="text-sm tracking-widest uppercase hover:opacity-70 transition-opacity">About</Link>
              <Link to="#" className="text-sm tracking-widest uppercase hover:opacity-70 transition-opacity">Journal</Link>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center justify-end space-x-6 w-1/4 z-10">
              <button aria-label="Search" className="hover:opacity-70 transition-opacity">
                <Search className="h-5 w-5" strokeWidth={1.5} />
              </button>
              <button 
                aria-label="Cart" 
                className="relative hover:opacity-70 transition-opacity flex items-center"
                onClick={() => setIsOpen(true)}
              >
                <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
            
          </div>
        </div>
      </header>
      <CartDrawer />
    </>
  );
}

export default Header;
