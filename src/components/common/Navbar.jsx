import React from 'react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
  ];

  const transparentStyles = isHome && !isScrolled;

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between',
        transparentStyles ? 'bg-transparent text-white' : 'bg-background/80 backdrop-blur-md text-foreground border-b border-border'
      )}
    >
      <div className="flex items-center gap-8 flex-1">
        <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm font-medium hover:text-accent transition-colors uppercase tracking-wider"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      <Link to="/" className="flex-1 text-center">
        <h1 className="text-2xl md:text-3xl font-serif tracking-[0.3em] font-medium transition-all">
          VELMORA
        </h1>
      </Link>

      <div className="flex items-center justify-end gap-4 md:gap-6 flex-1">
        <button className="hover:text-accent transition-colors">
          <Search className="w-5 h-5" />
        </button>
        <button 
          className="relative hover:text-accent transition-colors"
          onClick={() => setIsCartOpen(true)}
        >
          <ShoppingBag className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent side="left" className="w-[300px] bg-background">
          <SheetHeader className="mb-8">
            <SheetTitle className="text-left font-serif tracking-[0.2em]">VELMORA</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium hover:text-accent transition-colors uppercase tracking-widest border-b border-border pb-2"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
