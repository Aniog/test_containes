import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from './CartContext';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Navbar = () => {
  const containerRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount, isCartOpen, setIsCartOpen, cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    if (isCartOpen) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isCartOpen, cart]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop', href: '/shop' },
    { name: 'Collections', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Journal', href: '#' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between',
        isScrolled || !isHome ? 'bg-background border-b border-border py-3' : 'bg-transparent text-white'
      )}
    >
      <div className="flex-1 hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            className="text-xs uppercase tracking-[0.2em] font-sans hover:opacity-70 transition-opacity"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-background">
            <div className="flex flex-col gap-6 mt-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-lg font-serif uppercase tracking-[0.2em]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <Link to="/" className="text-2xl font-serif tracking-[0.3em] font-bold">
        VELMORA
      </Link>

      <div className="flex-1 flex items-center justify-end gap-5">
        <button className="hover:opacity-70 transition-opacity">
          <Search className="w-5 h-5" />
        </button>
        
        <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
          <SheetTrigger asChild>
            <button className="relative hover:opacity-70 transition-opacity">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
          </SheetTrigger>
          <SheetContent className="w-full sm:max-w-md flex flex-col h-full bg-background border-l border-border">
            <div ref={containerRef} className="flex flex-col h-full">
            <SheetHeader className="px-6 py-8 border-b border-border">
              <SheetTitle className="text-xl font-serif uppercase tracking-widest text-center">Your Bag</SheetTitle>
            </SheetHeader>
            
            <ScrollArea className="flex-1 px-6">
              {cart.length === 0 ? (
                <div className="h-[60vh] flex flex-col items-center justify-center text-center gap-4">
                  <p className="text-muted font-serif italic text-lg">Your bag is empty.</p>
                  <Button asChild onClick={() => setIsCartOpen(false)} className="bg-accent hover:bg-accent/90 rounded-none h-12 px-8 uppercase tracking-widest text-xs">
                    <Link to="/shop">Shop Now</Link>
                  </Button>
                </div>
              ) : (
                <div className="py-8 flex flex-col gap-8">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-24 h-32 bg-stone-100 flex-shrink-0 relative overflow-hidden">
                         {/* Placeholder for image */}
                         <img
                          className="w-full h-full object-cover"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                          data-strk-img-id={item.strk_img_id || `cart-img-${item.id}`}
                          data-strk-img={item.image || "Gold jewelry luxury"}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="300"
                          alt={item.name}
                        />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start">
                          <h3 className="text-sm font-serif uppercase tracking-widest">{item.name}</h3>
                          <button onClick={() => removeFromCart(item.id)} className="text-muted hover:text-foreground">
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xs text-muted mt-1 uppercase tracking-widest">${item.price}</p>
                        
                        <div className="mt-auto flex items-center gap-4">
                          <div className="flex items-center border border-border">
                            <button 
                              onClick={() => updateQuantity(item.id, -1)}
                              className="px-3 py-1 hover:bg-stone-50"
                            >-</button>
                            <span className="text-xs w-8 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, 1)}
                              className="px-3 py-1 hover:bg-stone-50"
                            >+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ScrollArea>
            
            {cart.length > 0 && (
              <div className="px-6 py-8 border-t border-border bg-stone-50/50">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs uppercase tracking-[0.2em]">Subtotal</span>
                  <span className="text-lg font-serif tracking-widest">${cartTotal.toFixed(2)}</span>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-none h-14 uppercase tracking-[0.2em] text-xs">
                  Checkout
                </Button>
                <p className="text-[10px] text-center text-muted mt-4 uppercase tracking-[0.1em]">
                  Shipping and taxes calculated at checkout
                </p>
              </div>
            )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
