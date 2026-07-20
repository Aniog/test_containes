import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Navbar() {
  const { cartCount, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = cn(
    'fixed top-0 w-full z-40 transition-all duration-300 ease-in-out border-b border-transparent',
    {
      'bg-background text-foreground border-border py-4': isScrolled || !isHome,
      'bg-transparent text-white py-6': !isScrolled && isHome,
    }
  );

  const links = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '#' },
    { name: 'About', path: '#' },
    { name: 'Journal', path: '#' },
  ];

  return (
    <header className={navClass}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        
        {/* Mobile menu trigger */}
        <div className="md:hidden flex-1">
           <Sheet>
            <SheetTrigger asChild>
              <button aria-label="Menu" className="p-2 -ml-2">
                <Menu className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-12">
                {links.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.path} 
                    className="text-2xl font-heading tracking-wide hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <div className="flex-1 md:flex-none flex justify-center md:justify-start">
          <Link to="/" className="font-heading text-2xl md:text-3xl tracking-[0.2em] font-medium uppercase">
            Velmora
          </Link>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex flex-1 justify-center gap-8">
          {links.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="text-sm tracking-widest uppercase hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <button aria-label="Search" className="p-2 hover:text-accent transition-colors hidden md:block">
            <Search className="w-5 h-5" strokeWidth={1.5} />
          </button>
          <button 
            aria-label="Cart" 
            className="p-2 -mr-2 relative hover:text-accent transition-colors"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-accent text-accent-foreground text-[10px] font-medium flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
}