import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from './lib/CartContext';
import { cn } from './lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount, isCartOpen, setIsCartOpen, cart, removeFromCart, updateQuantity, cartTotal } = useCart();
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
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between",
          isScrolled || !isHome ? "bg-white shadow-sm py-3" : "bg-transparent text-white"
        )}
      >
        <div className="flex-1 hidden md:flex items-center gap-8">
          <Link to="/shop" className="text-xs uppercase tracking-widest hover:opacity-70 transition-opacity">Shop</Link>
          <Link to="/collections" className="text-xs uppercase tracking-widest hover:opacity-70 transition-opacity">Collections</Link>
        </div>

        <Link to="/" className="flex-1 flex justify-start md:justify-center">
          <span className="font-serif text-2xl tracking-[0.2em] font-light">VELMORA</span>
        </Link>

        <div className="flex-1 flex justify-end items-center gap-6">
          <Link to="/about" className="hidden md:block text-xs uppercase tracking-widest hover:opacity-70 transition-opacity">About</Link>
          <button className="hover:opacity-70 transition-opacity"><Search size={20} /></button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative hover:opacity-70 transition-opacity"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-velmora-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
          <button className="md:hidden hover:opacity-70 transition-opacity"><Menu size={20} /></button>
        </div>
      </header>

      <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
        <SheetContent className="w-full sm:max-w-md flex flex-col p-0">
          <SheetHeader className="px-6 py-6 border-b">
            <div className="flex items-center justify-between">
              <SheetTitle className="font-serif text-2xl uppercase tracking-widest">Your Bag ({cartCount})</SheetTitle>
            </div>
          </SheetHeader>
          
          <ScrollArea className="flex-1 px-6">
            {cart.length === 0 ? (
              <div className="h-[60vh] flex flex-col items-center justify-center text-center gap-4">
                <p className="text-stone-500 font-serif italic text-lg">Your bag is empty.</p>
                <Button 
                  variant="outline" 
                  className="rounded-none px-8 uppercase tracking-widest text-xs"
                  onClick={() => setIsCartOpen(false)}
                >
                  Start Shopping
                </Button>
              </div>
            ) : (
              <div className="py-6 space-y-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-24 h-32 bg-stone-100 flex-shrink-0">
                      <img 
                        data-strk-img-id={`cart-item-${item.id}`}
                        data-strk-img={`[cart-item-name-${item.id}] jewelry gold`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="200"
                        className="w-full h-full object-cover"
                        alt={item.name}
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between">
                        <h4 id={`cart-item-name-${item.id}`} className="font-serif uppercase tracking-widest text-sm">{item.name}</h4>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-stone-400 hover:text-black transition-colors"
                        >
                          <X size={16} />
                        </button>
                      </div>
                      <p className="text-stone-500 text-xs mt-1">{item.type}</p>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center border border-stone-200">
                          <button 
                            className="px-2 py-1 text-xs"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >-</button>
                          <span className="px-2 py-1 text-xs min-w-[2rem] text-center">{item.quantity}</span>
                          <button 
                            className="px-2 py-1 text-xs"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >+</button>
                        </div>
                        <span className="text-sm tracking-widest">${item.price * item.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ScrollArea>

          {cart.length > 0 && (
            <SheetFooter className="px-6 py-6 border-t block">
              <div className="flex items-center justify-between mb-6">
                <span className="uppercase tracking-widest text-xs font-semibold">Subtotal</span>
                <span className="font-serif text-xl tracking-widest">${cartTotal}</span>
              </div>
              <p className="text-[10px] text-stone-500 uppercase tracking-widest text-center mb-6">
                Shipping & taxes calculated at checkout
              </p>
              <Button className="w-full bg-velmora-black hover:bg-stone-800 text-white rounded-none py-6 uppercase tracking-[0.2em] text-xs">
                Checkout
              </Button>
            </SheetFooter>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
};

const Footer = () => {
  return (
    <footer className="bg-stone-50 pt-20 pb-10 px-6 border-t border-stone-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="space-y-6">
          <span className="font-serif text-2xl tracking-[0.2em] font-light">VELMORA</span>
          <p className="text-stone-500 text-sm leading-relaxed max-w-xs">
            Timeless demi-fine jewelry designed for the modern woman. 
            Quality craftsmanship meets accessible luxury.
          </p>
        </div>
        
        <div>
          <h4 className="font-serif uppercase tracking-widest text-sm mb-6">Shop</h4>
          <ul className="space-y-4 text-xs uppercase tracking-widest text-stone-500">
            <li><Link to="/shop" className="hover:text-black transition-colors">All Jewelry</Link></li>
            <li><Link to="/shop?category=Earrings" className="hover:text-black transition-colors">Earrings</Link></li>
            <li><Link to="/shop?category=Necklaces" className="hover:text-black transition-colors">Necklaces</Link></li>
            <li><Link to="/shop?category=Sets" className="hover:text-black transition-colors">Sets</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif uppercase tracking-widest text-sm mb-6">Help</h4>
          <ul className="space-y-4 text-xs uppercase tracking-widest text-stone-500">
            <li><Link to="/shipping" className="hover:text-black transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/care" className="hover:text-black transition-colors">Jewelry Care</Link></li>
            <li><Link to="/faq" className="hover:text-black transition-colors">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-black transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif uppercase tracking-widest text-sm mb-6">Connect</h4>
          <div className="flex gap-4 mb-6">
            <button className="text-stone-500 hover:text-black transition-colors">Instagram</button>
            <button className="text-stone-500 hover:text-black transition-colors">Pinterest</button>
            <button className="text-stone-500 hover:text-black transition-colors">TikTok</button>
          </div>
          <div className="space-y-4">
            <h5 className="text-[10px] uppercase tracking-widest text-stone-400">Join our newsletter</h5>
            <div className="flex border-b border-stone-300 pb-2">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent border-none text-[10px] uppercase tracking-widest w-full focus:outline-none"
              />
              <button className="text-[10px] uppercase tracking-widest font-bold ml-2">Join</button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-stone-200">
        <p className="text-[10px] uppercase tracking-widest text-stone-400">
          © {new Date().getFullYear()} VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-8 text-[10px] uppercase tracking-widest text-stone-400">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-velmora-gold selection:text-white">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
