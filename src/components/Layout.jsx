import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import CartDrawer from './CartDrawer';

export default function Layout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { count, setIsOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground">
      <header 
        className={`fixed w-full top-0 z-50 transition-all duration-300 group ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-sm border-b border-border py-4 text-foreground' 
            : isHome 
              ? 'bg-transparent py-6 text-white hover:bg-background/90 hover:text-foreground'
              : 'bg-background py-6 text-foreground'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>

          <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-medium">
            <Link to="/collections">Shop</Link>
            <Link to="/collections">Collections</Link>
            <Link to="/about">About</Link>
            <Link to="/journal">Journal</Link>
          </nav>

          <Link to="/" className="text-3xl font-serif tracking-widest text-center absolute left-1/2 -translate-x-1/2">
            VELMORA
          </Link>

          <div className="flex items-center gap-4">
            <button className="p-2 hidden md:block">
              <Search className="w-5 h-5" />
            </button>
            <button 
              className="p-2 relative"
              onClick={() => setIsOpen(true)}
            >
              <ShoppingBag className="w-5 h-5" />
              {count > 0 && (
                <span className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center font-medium">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-background">
          <div className="p-4 flex justify-between border-b border-border">
            <span className="text-xl font-serif tracking-widest">VELMORA</span>
            <button onClick={() => setMobileMenuOpen(false)} className="p-2">
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col p-8 gap-6 text-lg uppercase tracking-widest">
            <Link to="/collections" onClick={() => setMobileMenuOpen(false)}>Shop</Link>
            <Link to="/collections" onClick={() => setMobileMenuOpen(false)}>Collections</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/journal" onClick={() => setMobileMenuOpen(false)}>Journal</Link>
          </nav>
        </div>
      )}

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-serif tracking-widest mb-4">VELMORA</h3>
              <p className="text-muted-foreground max-w-sm">
                Fine jewelry crafted for the everyday. Meaningful pieces designed to be treasured for a lifetime.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-lg tracking-wider mb-4 uppercase">Shop</h4>
              <ul className="flex flex-col gap-2 text-muted-foreground">
                <li><Link to="/collections?category=earrings" className="hover:text-foreground transition-colors">Earrings</Link></li>
                <li><Link to="/collections?category=necklaces" className="hover:text-foreground transition-colors">Necklaces</Link></li>
                <li><Link to="/collections?category=huggies" className="hover:text-foreground transition-colors">Huggies</Link></li>
                <li><Link to="/collections" className="hover:text-foreground transition-colors">All Jewelry</Link></li>
              </ul>
            </div>
             <div>
              <h4 className="font-serif text-lg tracking-wider mb-4 uppercase">Company</h4>
              <ul className="flex flex-col gap-2 text-muted-foreground">
                <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
                <li><Link to="/faq" className="hover:text-foreground transition-colors">FAQ</Link></li>
                <li><Link to="/shipping" className="hover:text-foreground transition-colors">Shipping & Returns</Link></li>
                <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
            <div className="flex gap-4">
              <span>Instagram</span>
              <span>Pinterest</span>
              <span>TikTok</span>
            </div>
          </div>
        </div>
      </footer>
      <CartDrawer />
    </div>
  );
}