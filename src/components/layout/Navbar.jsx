import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCartStore } from '@/store';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const CartItem = ({ item }) => {
  const { updateQuantity, removeItem } = useCartStore();

  return (
    <div className="flex py-4 border-b border-border last:border-0 relative">
      <div className="h-32 w-24 flex-shrink-0 relative overflow-hidden bg-muted rounded-md object-cover">
        <img
          data-strk-img-id={`prod-${item.product.id}-img-1`}
          data-strk-img={`[prod-${item.product.id}-title] primary image close up jewelry product shot on neutral background`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="150"
          alt={item.product.name}
          className="h-full w-full object-cover object-center"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
        />
      </div>
      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-foreground">
            <h3 id={`prod-${item.product.id}-title`} className="font-serif">
              <Link to={`/product/${item.product.id}`}>{item.product.name}</Link>
            </h3>
            <p className="ml-4">${(item.product.price * item.quantity).toFixed(2)}</p>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">{item.tone}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="flex items-center border border-border">
            <button
              className="p-1.5 px-3 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => updateQuantity(item.product.id, item.tone, item.quantity - 1)}
              aria-label="Decrease quantity"
            >
              <Minus className="h-3 w-3" />
            </button>
            <span className="w-8 text-center">{item.quantity}</span>
            <button
               className="p-1.5 px-3 text-muted-foreground hover:text-foreground transition-colors"
               onClick={() => updateQuantity(item.product.id, item.tone, item.quantity + 1)}
               aria-label="Increase quantity"
            >
              <Plus className="h-3 w-3" />
            </button>
          </div>
          <div className="flex">
            <button
              onClick={() => removeItem(item.product.id, item.tone)}
              className="font-medium text-muted-foreground hover:text-destructive transition-colors flex items-center gap-1"
            >
              <Trash2 className="h-4 w-4" />
              <span className="sr-only">Remove</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, cartTotal } = useCartStore();

  // Load images when cart drawer opens
  const containerRef = React.useRef(null);
  React.useEffect(() => {
    if (isOpen) {
        const frameId = window.requestAnimationFrame(() => {
            ImageHelper.loadImages(strkImgConfig, containerRef.current);
        });
        return () => window.cancelAnimationFrame(frameId);
    }
  }, [isOpen, items]); // add items as dep so updating items loads images


  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0 border-l border-border bg-background" ref={containerRef}>
        <SheetHeader className="p-6 border-b border-border text-left">
          <SheetTitle className="font-serif text-3xl font-medium tracking-wide">Your Cart</SheetTitle>
        </SheetHeader>
        
        <div className="flex-1 overflow-y-auto p-6 bg-background">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <ShoppingCart className="h-12 w-12 text-muted-foreground/30" />
              <p className="text-muted-foreground text-lg font-serif italic">Your cart is currently empty.</p>
              <Button onClick={() => setIsOpen(false)} variant="outline" className="mt-4 rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors uppercase tracking-widest text-xs px-8 py-6">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="flow-root">
              <ul className="-my-4 divide-y divide-border">
                {items.map((item) => (
                  <li key={`${item.product.id}-${item.tone}`}>
                    <CartItem item={item} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border p-6 bg-background">
            <div className="flex justify-between text-lg font-medium text-foreground mb-4">
              <p className="font-serif">Subtotal</p>
              <p>${cartTotal.toFixed(2)}</p>
            </div>
            <p className="text-sm text-muted-foreground mb-6 font-serif italic">
              Shipping and taxes calculated at checkout.
            </p>
            <Button className="w-full rounded-none bg-primary text-primary-foreground hover:bg-primary/90 h-14 text-base font-medium tracking-widest uppercase shadow-sm">
              Checkout
            </Button>
            <div className="mt-6 flex justify-center text-center text-sm text-muted-foreground">
              <button
                type="button"
                className="font-medium text-foreground hover:text-foreground/80 flex items-center gap-2 transition-colors uppercase tracking-widest text-xs font-serif"
                onClick={() => setIsOpen(false)}
              >
                Continue Shopping
                <span aria-hidden="true" className="font-sans"> &rarr;</span>
              </button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};


const Navbar = () => {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';
    const { itemCount, setIsOpen } = useCartStore();
    const navigate = useNavigate();
  
    React.useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 20) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    // We want the navbar to be transparent on top of the home page, but solid otherwise.
    const isTransparent = isHome && !isScrolled && !mobileMenuOpen;
  
    const navLinks = [
        { name: 'Shop', path: '/shop' },
        { name: 'Collections', path: '/shop' },
        { name: 'About', path: '/about' },
        { name: 'Journal', path: '/journal' }
    ]

    return (
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isTransparent
            ? 'bg-gradient-to-b from-black/50 to-transparent text-white border-transparent py-2'
            : 'bg-background/95 backdrop-blur-md text-foreground border-b border-border shadow-sm py-0'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                className="p-2 -ml-2 text-inherit"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open menu</span>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
  
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center justify-center lg:flex-1 lg:justify-start">
              <Link to="/" className="font-serif text-3xl md:text-4xl tracking-widest font-normal uppercase">
                VELMORA
              </Link>
            </div>
  
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex lg:gap-x-8 xl:gap-x-12">
                {navLinks.map((link) => (
                    <Link
                    key={link.name}
                    to={link.path}
                    className="text-xs font-semibold tracking-[0.2em] uppercase hover:opacity-70 transition-opacity"
                  >
                    {link.name}
                  </Link>
                ))}
            </nav>
  
            {/* Right Icons */}
            <div className="flex items-center justify-end lg:flex-1 gap-4">
              <button className="p-2 text-inherit hover:opacity-70 transition-opacity">
                <span className="sr-only">Search</span>
                <Search className="h-5 w-5 font-light" />
              </button>
              
              <button 
                className="p-2 text-inherit hover:opacity-70 transition-opacity relative"
                onClick={() => setIsOpen(true)}
              >
                <span className="sr-only">Cart</span>
                <ShoppingCart className="h-5 w-5 font-light" />
                {itemCount > 0 && (
                  <span className={`absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold leading-none rounded-full transform translate-x-1/4 -translate-y-1/4 ${isTransparent ? 'bg-white text-black' : 'bg-primary text-primary-foreground'}`}>
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
  
        {/* Mobile menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            mobileMenuOpen ? 'max-h-96 bg-background text-foreground border-b border-border shadow-lg opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
             {navLinks.map((link) => (
                <Link
                    key={link.name}
                    to={link.path}
                     className="block px-3 py-4 text-sm font-semibold tracking-[0.2em] uppercase border-b border-border/50 last:border-0"
                     onClick={() => setMobileMenuOpen(false)}
                >
                    {link.name}
                </Link>
             ))}
          </div>
        </div>
        <CartDrawer />
      </header>
    );
  };
  
  export default Navbar;