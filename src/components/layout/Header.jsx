import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { items, setIsOpen } = useCartStore();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  // If on homepage and not scrolled, background is transparent. 
  // Otherwise, solid background.
  const headerBg = isHome && !isScrolled 
    ? 'bg-transparent text-white border-transparent' 
    : 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 text-foreground border-b';

  const logoColor = isHome && !isScrolled ? 'text-white' : 'text-foreground';
  const navHover = isHome && !isScrolled ? 'hover:text-white/80' : 'hover:text-foreground/70';

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${headerBg}`}>
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <Menu className="w-6 h-6" />
        </div>

        {/* Logo */}
        <div className="flex-1 md:flex-none text-center md:text-left">
          <Link to="/" className={`font-serif text-2xl tracking-widest uppercase font-semibold ${logoColor}`}>
            VELMORA
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
          <Link to="/shop" className={`transition-colors uppercase tracking-widest ${navHover}`}>Shop</Link>
          <Link to="/shop?category=earrings" className={`transition-colors uppercase tracking-widest ${navHover}`}>Collections</Link>
          <Link to="#" className={`transition-colors uppercase tracking-widest ${navHover}`}>About</Link>
          <Link to="#" className={`transition-colors uppercase tracking-widest ${navHover}`}>Journal</Link>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center space-x-5 flex-1 justify-end md:flex-none">
          <button className={`transition-colors ${navHover}`} aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button 
            className={`transition-colors relative ${navHover}`} 
            aria-label="Cart"
            onClick={() => setIsOpen(true)}
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
