import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCartStore } from '../../store/useCart';
import CartDrawer from '../cart/CartDrawer';

const Layout = () => {
  const { pathname } = useLocation();
  const { openCart, itemCount } = useCartStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Check if we are on the homepage
  const isHome = pathname === '/';

  // Handle scroll to change navbar styling on homepage
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    if (isHome) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setIsScrolled(true); // Always solid on non-home pages
    }
  }, [isHome]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navClass = `fixed top-0 w-full z-40 transition-all duration-300 ${
    isScrolled 
      ? 'bg-background text-foreground shadow-sm py-4' 
      : 'bg-transparent text-white py-6'
  }`;

  return (
    <div className="flex flex-col min-h-screen">
      <header className={navClass}>
        <div className="container px-4 md:px-8 mx-auto flex items-center justify-between">
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2" 
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Nav Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-medium">
            <Link to="/shop" className="hover:opacity-70 transition-opacity">Shop</Link>
            <Link to="/shop?category=Necklaces" className="hover:opacity-70 transition-opacity">Necklaces</Link>
            <Link to="/about" className="hover:opacity-70 transition-opacity">About</Link>
          </nav>

          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 text-2xl md:text-3xl font-serif uppercase tracking-[0.2em] font-light">
            <Link to="/">Velmora</Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4 md:gap-6">
            <button className="hover:opacity-70 transition-opacity hidden md:block" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button 
              className="relative hover:opacity-70 transition-opacity" 
              onClick={openCart}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] flex items-center justify-center w-4 h-4 rounded-full">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background text-foreground flex flex-col pt-20 px-8">
          <button 
            className="absolute top-6 right-6 p-2" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
          
          <nav className="flex flex-col gap-8 text-2xl font-serif uppercase tracking-widest mt-10">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop All</Link>
            <Link to="/shop?category=Necklaces">Necklaces</Link>
            <Link to="/shop?category=Earrings">Earrings</Link>
            <Link to="/about">About Us</Link>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 flex flex-col w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-primary/5 text-foreground py-16 md:py-24 border-t">
        <div className="container px-4 md:px-8 mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <h3 className="text-xl font-serif uppercase tracking-[0.2em] mb-6">Velmora</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Quiet luxury demi-fine jewelry. Crafted to be treasured, worn to be lived in.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold uppercase tracking-wider text-sm mb-6">Shop</h4>
            <ul className="flex flex-col gap-4 text-muted-foreground text-sm">
              <li><Link to="/shop" className="hover:text-foreground">All Jewelry</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-foreground">Necklaces</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-foreground">Earrings</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-foreground">Huggies</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold uppercase tracking-wider text-sm mb-6">Help</h4>
            <ul className="flex flex-col gap-4 text-muted-foreground text-sm">
              <li><a href="#" className="hover:text-foreground">FAQ</a></li>
              <li><a href="#" className="hover:text-foreground">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-foreground">Jewelry Care</a></li>
              <li><a href="#" className="hover:text-foreground">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold uppercase tracking-wider text-sm mb-6">Connect</h4>
            <ul className="flex flex-col gap-4 text-muted-foreground text-sm">
              <li><a href="#" className="hover:text-foreground">Instagram</a></li>
              <li><a href="#" className="hover:text-foreground">Pinterest</a></li>
              <li><a href="#" className="hover:text-foreground">TikTok</a></li>
            </ul>
          </div>
        </div>
        <div className="container px-4 md:px-8 mx-auto mt-16 pt-8 border-t border-border/50 text-xs text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* Cart Drawer rendered at Root Level */}
      <CartDrawer />
    </div>
  );
};

export default Layout;
