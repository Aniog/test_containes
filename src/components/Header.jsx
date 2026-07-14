import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, X, Minus, Plus } from 'lucide-react';
import { useCart } from '../lib/cart-context';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import { Separator } from './ui/separator';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, itemCount } = useCart();
  
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = `fixed top-0 w-full z-50 transition-all duration-300 border-b ${
    isHome && !isScrolled
      ? 'bg-transparent border-transparent text-white'
      : 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-border text-foreground'
  }`;

  return (
    <>
      <header className={headerClass}>
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <div className="w-1/3 text-sm font-medium tracking-wide">
            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-6">
              <Link to="/shop" className="hover:text-accent transition-colors">SHOP</Link>
              <Link to="/collections" className="hover:text-accent transition-colors">COLLECTIONS</Link>
              <Link to="/about" className="hover:text-accent transition-colors">ABOUT</Link>
              <Link to="/journal" className="hover:text-accent transition-colors">JOURNAL</Link>
            </nav>
            {/* Mobile menu could go here */}
          </div>
          
          <div className="w-1/3 text-center">
            <Link to="/" className="font-serif text-3xl tracking-widest uppercase">
              VELMORA
            </Link>
          </div>
          
          <div className="w-1/3 flex justify-end gap-6 items-center">
            <button aria-label="Search" className="hover:text-accent transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button 
              aria-label="Cart" 
              className="hover:text-accent transition-colors relative"
              onClick={() => setIsOpen(true)}
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Cart Drawer */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="w-full sm:max-w-md flex flex-col h-full bg-background border-l-0 sm:border-l">
          <SheetHeader className="pb-4">
            <SheetTitle className="font-serif text-2xl font-normal">Your Cart ({itemCount})</SheetTitle>
          </SheetHeader>
          
          <div className="flex-1 overflow-hidden">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-muted-foreground gap-4">
                <ShoppingBag className="w-12 h-12 stroke-1" />
                <p>Your cart is empty.</p>
                <Button 
                  variant="outline" 
                  className="mt-4 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <ScrollArea className="h-full pr-4">
                <div className="flex flex-col gap-6 pt-4">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                      <div className="w-24 h-32 bg-secondary rounded-sm overflow-hidden flex-shrink-0">
                        {item.image ? (
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full bg-muted flex border-border border"></div>
                        )}
                      </div>
                      
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <div className="flex justify-between items-start">
                            <h3 className="font-serif text-lg leading-tight uppercase tracking-wider">{item.title}</h3>
                            <button 
                              onClick={() => removeItem(item.id, item.variant)}
                              className="text-muted-foreground hover:text-foreground"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                          {item.variant && (
                            <p className="text-sm text-muted-foreground mt-1 capitalize">{item.variant}</p>
                          )}
                          <p className="text-sm font-medium mt-2">${item.price.toFixed(2)}</p>
                        </div>
                        
                        <div className="flex items-center gap-4 mt-auto">
                          <div className="flex items-center border border-border rounded-sm">
                            <button 
                              className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground"
                              onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center text-sm">{item.quantity}</span>
                            <button 
                              className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground"
                              onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            )}
          </div>
          
          {items.length > 0 && (
            <div className="pt-6 pb-2 border-t border-border mt-auto">
              <div className="flex justify-between items-center mb-6">
                <span className="font-serif text-lg">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">Shipping and taxes calculated at checkout.</p>
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12 uppercase tracking-widest text-xs font-semibold">
                Checkout
              </Button>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}