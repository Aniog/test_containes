import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { Badge } from '../components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '../components/ui/sheet';

export function Navbar() {
  const { toggleCart, itemCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomepage = location.pathname === '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navClasses = cn(
    'fixed top-0 w-full z-40 transition-all duration-300',
    {
      'bg-transparent text-white': isHomepage && !isScrolled,
      'bg-background/95 backdrop-blur-sm shadow-sm text-foreground': !isHomepage || isScrolled
    }
  );

  const links = [
    { name: 'Shop', href: '/collection' },
    { name: 'Collections', href: '/collection' },
    { name: 'About', href: '#' },
    { name: 'Journal', href: '#' },
  ];

  return (
    <header className={navClasses}>
      {/* Top Banner */}
      <div className="bg-primary px-4 py-1.5 text-center text-primary-foreground text-xs md:text-sm font-medium tracking-wide">
        Free Worldwide Shipping on all orders.
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Mobile Menu & Search (Left) */}
          <div className="flex items-center md:hidden w-1/3">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="p-2 -ml-2">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-6 mt-8">
                  {links.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="text-lg font-serif uppercase tracking-widest hover:text-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <button className="p-2 hidden sm:block">
              <Search className="h-5 w-5" />
            </button>
          </div>

          {/* Desktop Nav (Center-Left) */}
          <nav className="hidden md:flex w-1/3 justify-start space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm uppercase tracking-widest font-medium hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Logo (Center) */}
          <div className="flex justify-center w-1/3">
            <Link to="/" className="text-3xl md:text-4xl font-serif tracking-widest font-normal uppercase whitespace-nowrap">
              Velmora
            </Link>
          </div>

          {/* Icons (Right) */}
          <div className="flex items-center justify-end w-1/3 space-x-2 md:space-x-4">
             <button className="p-2 md:hidden">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 hidden md:block" aria-label="Search">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 relative flex items-center" onClick={toggleCart} aria-label="Open cart">
              <ShoppingBag className="h-5 w-5" />
              {itemCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-[10px] bg-primary rounded-full">
                  {itemCount}
                </Badge>
              )}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}