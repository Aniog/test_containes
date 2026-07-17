import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, Minus, Plus } from 'lucide-react';
import { useCartStore } from './store/cartStore';
import { CartThumbImage } from './components/ProductImage';

// We'll extract Nav, Footer, and Cart Drawer into their own components inside this file for simplicity, 
// or I can create separate files. Let's create separate component files if they get too big.

const CartDrawer = () => {
  const { isOpen, closeCart, items, updateQuantity, removeItem, cartTotal } = useCartStore();

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50 transition-opacity"
        onClick={closeCart}
      />
      <div className="fixed inset-y-0 right-0 w-full max-w-md bg-background shadow-2xl z-50 flex flex-col transform transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-serif uppercase tracking-widest">Your Cart</h2>
          <button onClick={closeCart} className="p-2 transition-colors hover:text-primary">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
              <ShoppingBag className="w-12 h-12 text-muted-foreground stroke-1" />
              <p className="text-muted-foreground">Your cart is currently empty.</p>
              <button 
                onClick={closeCart} 
                className="mt-4 px-8 py-3 bg-foreground text-background uppercase tracking-widest text-sm hover:bg-primary transition-colors duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.cartItemId} className="flex gap-4">
                <div className="w-24 h-32 bg-muted relative overflow-hidden flex-shrink-0">
                  <CartThumbImage
                    productId={item.id}
                    alt={item.name}
                    className="object-cover w-full h-full"
                    idQuery="[cart-item-name]"
                  />
                </div>
                <div className="flex flex-col flex-1 py-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 id="cart-item-name" className="font-serif uppercase tracking-wider text-sm">{item.name}</h3>
                      <p className="text-xs text-muted-foreground mt-1 capitalize">{item.variant}</p>
                    </div>
                    <button onClick={() => removeItem(item.cartItemId)} className="text-muted-foreground hover:text-foreground">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center border border-border">
                      <button 
                        onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                        className="px-2 py-1 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-sm text-center min-w-[2rem]">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                        className="px-2 py-1 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <p className="text-sm tracking-widest">${item.price}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-border bg-background">
            <div className="flex justify-between items-center mb-6">
              <span className="uppercase tracking-widest text-sm">Subtotal</span>
              <span className="font-serif text-xl tracking-widest">${cartTotal().toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-4 text-center">Shipping & taxes calculated at checkout.</p>
            <button className="w-full py-4 bg-foreground text-background uppercase tracking-widest text-sm hover:bg-primary transition-colors duration-300">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { openCart, cartCount } = useCartStore();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = `fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
    isScrolled || !isHome 
      ? 'bg-background/90 backdrop-blur-md border-b border-border text-foreground py-4' 
      : 'bg-transparent text-white/90 py-6'
  }`;

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <div className="flex-1 flex gap-6 sm:gap-8 hidden md:flex items-center text-sm font-medium tracking-widest uppercase">
          <Link to="/shop" className="hover:opacity-75 transition-opacity">Shop</Link>
          <Link to="/shop" className="hover:opacity-75 transition-opacity">Collections</Link>
          <Link to="/" className="hover:opacity-75 transition-opacity">About</Link>
        </div>
        
        <div className="flex-1 md:hidden">
          <button className="p-2 -ml-2">
            <Menu className="w-5 h-5" />
          </button>
        </div>

        <Link to="/" className="flex-none text-center">
          <span className="font-serif text-2xl tracking-[0.25em] uppercase">Velmora</span>
        </Link>

        <div className="flex-1 flex justify-end gap-4 items-center">
          <button className="p-2 hover:opacity-75 transition-opacity">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 hover:opacity-75 transition-opacity relative" onClick={openCart}>
            <ShoppingBag className="w-5 h-5" />
            {cartCount() > 0 && (
              <span className="absolute top-1 right-0 w-4 h-4 rounded-full bg-primary text-primary-foreground text-[10px] flex items-center justify-center font-medium">
                {cartCount()}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          <div className="md:col-span-2 lg:col-span-1">
            <Link to="/">
              <span className="font-serif text-2xl tracking-[0.25em] uppercase text-primary">Velmora</span>
            </Link>
            <p className="mt-6 text-background/60 text-sm max-w-xs leading-relaxed">
              Crafted to be treasured. Demi-fine jewelry designed for the modern romantic.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif uppercase tracking-widest text-sm mb-6 text-primary">Shop</h4>
            <ul className="space-y-4 text-sm text-background/80">
              <li><Link to="/shop" className="hover:text-primary transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-primary transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-primary transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-primary transition-colors">Huggies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif uppercase tracking-widest text-sm mb-6 text-primary">Help</h4>
            <ul className="space-y-4 text-sm text-background/80">
              <li><Link to="/" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Materials & Care</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif uppercase tracking-widest text-sm mb-6 text-primary">Company</h4>
            <ul className="space-y-4 text-sm text-background/80">
              <li><Link to="/" className="hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Journal</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Sustainability</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-background/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-background/40">
          <p>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/" className="hover:text-background/80 transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-background/80 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <CartDrawer />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}