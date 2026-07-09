import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { CartDrawer } from '@/components/ui/cart-drawer';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function Layout({ children }) {
  const { totalItems, setIsOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = cn(
    "fixed top-0 w-full z-40 transition-all duration-300 ease-in-out border-b",
    isHome && !isScrolled
      ? "bg-transparent border-transparent text-white"
      : "bg-background/95 backdrop-blur-md border-border/50 text-foreground shadow-sm"
  );

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className={navClass}>
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex-1 flex items-center gap-4 lg:hidden">
            <button className="p-2 -ml-2">
              <Menu className="w-5 h-5" />
            </button>
            <button className="p-2 hidden sm:block">
              <Search className="w-5 h-5" />
            </button>
          </div>

          <div className="hidden lg:flex flex-1 gap-8 text-sm uppercase tracking-widest font-medium">
            <Link to="/shop" className="hover:text-accent transition-colors">Shop</Link>
            <Link to="/collections" className="hover:text-accent transition-colors">Collections</Link>
            <Link to="/about" className="hover:text-accent transition-colors">About</Link>
            <Link to="/journal" className="hover:text-accent transition-colors">Journal</Link>
          </div>

          <Link to="/" className="font-serif text-3xl tracking-widest text-center flex-shrink-0 z-10">
            VELMORA
          </Link>

          <div className="flex-1 flex justify-end items-center gap-4">
            <button className="p-2 hidden lg:block hover:text-accent transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button 
              className="p-2 flex items-center gap-2 hover:text-accent transition-colors group relative"
              onClick={() => setIsOpen(true)}
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-accent text-accent-foreground text-[10px] h-4 w-4 rounded-full flex items-center justify-center font-medium">
                    {totalItems}
                  </span>
                )}
              </div>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-foreground text-background pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <Link to="/" className="font-serif text-3xl tracking-widest block">
                VELMORA
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                Fine jewelry crafted for the modern editorial aesthetic. Designed to be treasured, worn daily, and passed down.
              </p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-accent transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="hover:text-accent transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="hover:text-accent transition-colors"><Twitter className="w-5 h-5" /></a>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl mb-6">Shop</h3>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><Link to="/shop" className="hover:text-accent transition-colors">All Jewelry</Link></li>
                <li><Link to="/shop?category=earrings" className="hover:text-accent transition-colors">Earrings</Link></li>
                <li><Link to="/shop?category=necklaces" className="hover:text-accent transition-colors">Necklaces</Link></li>
                <li><Link to="/shop?category=huggies" className="hover:text-accent transition-colors">Huggies</Link></li>
                <li><Link to="/collections/bestsellers" className="hover:text-accent transition-colors">Bestsellers</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-xl mb-6">Support</h3>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><Link to="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
                <li><Link to="/shipping" className="hover:text-accent transition-colors">Shipping & Returns</Link></li>
                <li><Link to="/jewelry-care" className="hover:text-accent transition-colors">Jewelry Care</Link></li>
                <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-xl mb-6">Newsletter</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Join our list for 10% off your first order and exclusive access to new drops.
              </p>
              <form className="relative border-b border-muted-foreground/30 pb-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-transparent w-full outline-none text-sm placeholder:text-muted-foreground/50 pr-8"
                />
                <button type="submit" className="absolute right-0 top-0 text-muted-foreground hover:text-accent transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-muted-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>

      <CartDrawer />
    </div>
  );
}