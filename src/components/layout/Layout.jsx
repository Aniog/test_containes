import React, { useEffect, useRef } from 'react';
import { ShoppingBag, Search, Menu, X, Minus, Plus } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useStore } from '../../store';
import { Button } from '@/components/ui/button.jsx';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet.jsx';
import { Separator } from '@/components/ui/separator.jsx';

export default function Layout({ children }) {
  const containerRef = useRef(null);
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const { cart, isCartOpen, closeCart, openCart, removeFromCart, updateQuantity } = useStore();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  useEffect(() => {
    // Schedule ImageHelper after React has committed any cart state changes that might render new images
    const frameId = window.requestAnimationFrame(() => {
       ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [cart, isCartOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col antialiased">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isHome && !isScrolled
            ? 'bg-transparent text-white'
            : 'bg-background/95 backdrop-blur-md text-foreground border-b shadow-sm'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <div className="flex-1 hidden md:flex items-center gap-8">
            <Link to="/collection" className="text-sm tracking-widest uppercase hover:opacity-70 transition-opacity">Shop</Link>
            <Link to="/collection" className="text-sm tracking-widest uppercase hover:opacity-70 transition-opacity">Collections</Link>
            <Link to="#" className="text-sm tracking-widest uppercase hover:opacity-70 transition-opacity">About</Link>
            <Link to="#" className="text-sm tracking-widest uppercase hover:opacity-70 transition-opacity">Journal</Link>
          </div>

          <div className="flex-1 md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2 -ml-2">
                  <Menu className="w-5 h-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-6 mt-12">
                  <Link to="/collection" className="text-2xl font-heading tracking-tight">Shop</Link>
                  <Link to="/collection" className="text-2xl font-heading tracking-tight">Collections</Link>
                  <Link to="#" className="text-2xl font-heading tracking-tight">About</Link>
                  <Link to="#" className="text-2xl font-heading tracking-tight">Journal</Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          <div className="flex-1 text-center">
            <Link to="/" className="font-heading text-3xl tracking-widest">
              VELMORA
            </Link>
          </div>

          <div className="flex-1 flex justify-end items-center gap-4">
            <button className="p-2 hover:opacity-70 transition-opacity">
              <Search className="w-5 h-5" />
            </button>
            <Sheet open={isCartOpen} onOpenChange={(open) => open ? openCart() : closeCart()}>
              <SheetTrigger asChild>
                <button className="p-2 hover:opacity-70 transition-opacity relative">
                  <ShoppingBag className="w-5 h-5" />
                  {cart.length > 0 && (
                    <span className="absolute top-1 right-1 w-4 h-4 bg-primary text-primary-foreground text-[10px] rounded-full flex items-center justify-center font-medium">
                      {cart.reduce((acc, item) => acc + item.quantity, 0)}
                    </span>
                  )}
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[400px] flex flex-col">
                <SheetHeader>
                  <SheetTitle className="font-heading text-2xl font-normal">Your Cart</SheetTitle>
                </SheetHeader>
                <div className="flex-1 overflow-y-auto py-6">
                  {cart.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-muted-foreground space-y-4">
                      <ShoppingBag className="w-12 h-12 opacity-20" />
                      <p>Your cart is empty.</p>
                      <Button onClick={() => { closeCart(); }} asChild variant="outline" className="mt-4 rounded-none h-12 px-8 uppercase tracking-widest">
                        <Link to="/collection">Continue Shopping</Link>
                      </Button>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-6">
                      {cart.map((item, index) => (
                        <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                          <div className="w-24 h-24 bg-muted relative">
                            <img
                              className="w-full h-full object-cover"
                              data-strk-img-id={item.imgId}
                              data-strk-img={`[${item.titleId}]`}
                              data-strk-img-ratio="1x1"
                              data-strk-img-width="200"
                              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                              alt={item.name}
                            />
                          </div>
                          <div className="flex-1 flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-start">
                              <h4 id={`cart-t-${item.id}-${index}`} className="font-heading text-lg leading-none pt-1">{item.name}</h4>
                                <button onClick={() => removeFromCart(item.id, item.variant)} className="text-muted-foreground hover:text-foreground">
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                              <p className="text-sm text-muted-foreground mt-1">Tone: {item.variant}</p>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                              <div className="flex items-center border border-border">
                                <button onClick={() => updateQuantity(item.id, item.variant, Math.max(1, item.quantity - 1))} className="p-2 hover:bg-muted">
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="w-8 text-center text-sm">{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)} className="p-2 hover:bg-muted">
                                  <Plus className="w-3 h-3" />
                                </button>
                              </div>
                              <p className="font-medium">${item.price}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {cart.length > 0 && (
                  <div className="pt-6 border-t border-border space-y-4">
                    <div className="flex justify-between text-lg">
                      <span>Subtotal</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <p className="text-sm text-muted-foreground text-center">Shipping & taxes calculated at checkout.</p>
                    <Button className="w-full rounded-none h-14 text-sm uppercase tracking-widest bg-primary hover:bg-primary/90 text-primary-foreground">
                      Checkout
                    </Button>
                  </div>
                )}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            <div className="space-y-6 md:col-span-1">
              <Link to="/" className="font-heading text-3xl tracking-widest block">
                VELMORA
              </Link>
              <p className="text-background/70 text-sm max-w-xs leading-relaxed">
                Crafting quiet luxury for everyday wear. Demi-fine pieces meant to be treasured, layered, and lived in.
              </p>
            </div>
            
            <div>
              <h4 className="font-heading tracking-wide uppercase text-sm mb-6 opacity-50">Shop</h4>
              <ul className="space-y-4 text-sm text-background/80">
                <li><Link to="/collection" className="hover:text-white transition-colors">All Jewelry</Link></li>
                <li><Link to="/collection?category=Earrings" className="hover:text-white transition-colors">Earrings</Link></li>
                <li><Link to="/collection?category=Necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
                <li><Link to="/collection?category=Huggies" className="hover:text-white transition-colors">Huggies</Link></li>
                <li><Link to="/collection?category=Sets" className="hover:text-white transition-colors">Gift Sets</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading tracking-wide uppercase text-sm mb-6 opacity-50">Help</h4>
              <ul className="space-y-4 text-sm text-background/80">
                <li><Link to="#" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Jewelry Care</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading tracking-wide uppercase text-sm mb-6 opacity-50">Company</h4>
              <ul className="space-y-4 text-sm text-background/80">
                <li><Link to="#" className="hover:text-white transition-colors">Our Story</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Sustainability</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Journal</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-background/50">
            <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">TikTok</a>
              <a href="#" className="hover:text-white transition-colors">Pinterest</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}