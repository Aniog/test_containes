import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, Plus, Minus, Trash2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '@/lib/cart-context';
import { cn } from '@/lib/utils';
import { Toaster } from 'sonner';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, setIsOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-6 md:px-12 flex items-center justify-between',
        isScrolled || !isHome ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="flex-1 hidden md:flex items-center gap-8">
        <Link to="/shop" className={cn("text-xs uppercase tracking-widest hover:opacity-70 transition-opacity", !isScrolled && isHome ? "text-white" : "text-foreground")}>Shop</Link>
        <Link to="/collections" className={cn("text-xs uppercase tracking-widest hover:opacity-70 transition-opacity", !isScrolled && isHome ? "text-white" : "text-foreground")}>Collections</Link>
      </div>

      <Link to="/" className={cn("text-2xl md:text-3xl font-serif tracking-[0.2em] relative left-0 md:left-[5%]", !isScrolled && isHome ? "text-white" : "text-foreground")}>
        VELMORA
      </Link>

      <div className="flex-1 flex items-center justify-end gap-6">
        <div className="hidden md:flex items-center gap-8 mr-8 text-xs uppercase tracking-widest">
          <Link to="/about" className={cn("hover:opacity-70 transition-opacity", !isScrolled && isHome ? "text-white" : "text-foreground")}>About</Link>
          <Link to="/journal" className={cn("hover:opacity-70 transition-opacity", !isScrolled && isHome ? "text-white" : "text-foreground")}>Journal</Link>
        </div>
        <button className={cn("hover:opacity-70 transition-opacity", !isScrolled && isHome ? "text-white" : "text-foreground")}>
          <Search size={20} strokeWidth={1.5} />
        </button>
        <button
          onClick={() => setIsOpen(true)}
          className={cn("relative hover:opacity-70 transition-opacity", !isScrolled && isHome ? "text-white" : "text-foreground")}
        >
          <ShoppingBag size={20} strokeWidth={1.5} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-accent text-[10px] w-4 h-4 rounded-full flex items-center justify-center text-white">
              {cartCount}
            </span>
          )}
        </button>
        <button
          className={cn("md:hidden hover:opacity-70", !isScrolled && isHome ? "text-white" : "text-foreground")}
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-white z-[60] flex flex-col p-8 transition-transform duration-500",
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex justify-end">
          <button onClick={() => setMobileMenuOpen(false)}><X size={32} strokeWidth={1} /></button>
        </div>
        <div className="flex flex-col gap-8 mt-12 text-center">
          <Link to="/shop" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif uppercase tracking-widest">Shop</Link>
          <Link to="/collections" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif uppercase tracking-widest">Collections</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif uppercase tracking-widest">About</Link>
          <Link to="/journal" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif uppercase tracking-widest">Journal</Link>
        </div>
      </div>
    </nav>
  );
};

const CartDrawer = () => {
  const { cart, isOpen, setIsOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 bg-black/30 backdrop-blur-sm z-[70] transition-opacity duration-500",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />
      <div className={cn(
        "fixed top-0 right-0 h-full w-full max-w-md bg-background z-[80] shadow-2xl transition-transform duration-500 ease-out",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          <div className="p-6 border-b flex items-center justify-between">
            <h2 className="text-lg font-serif uppercase tracking-widest">Your Bag</h2>
            <button onClick={() => setIsOpen(false)}><X size={24} strokeWidth={1} /></button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-muted-foreground gap-4">
                <ShoppingBag size={48} strokeWidth={1} />
                <p className="font-serif italic">Your bag is empty</p>
                <Link to="/shop" onClick={() => setIsOpen(false)} className="btn-outline">Start Shopping</Link>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-24 h-32 bg-muted overflow-hidden flex-shrink-0">
                    <img src={item.data.images[0]} alt={item.data.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <h3 className="text-xs uppercase tracking-widest font-medium">{item.data.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">${item.data.price}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-border">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-muted"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-xs">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-muted"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className="p-6 border-t bg-white">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs uppercase tracking-widest font-medium">Subtotal</span>
                <span className="text-lg font-serif tracking-widest">${cartTotal}</span>
              </div>
              <button className="w-full btn-premium py-4">Checkout</button>
              <p className="text-[10px] text-center text-muted-foreground mt-4 uppercase tracking-[0.2em]">
                Shipping & taxes calculated at checkout
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border pt-16 pb-8 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="text-2xl font-serif tracking-[0.2em] mb-6 block">VELMORA</Link>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            Crafted demi-fine jewelry designed for the modern woman. Quiet luxury for every day.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-6">Shop</h4>
          <ul className="space-y-4">
            <li><Link to="/shop" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground">All Jewelry</Link></li>
            <li><Link to="/shop?category=Earrings" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground">Earrings</Link></li>
            <li><Link to="/shop?category=Necklaces" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground">Necklaces</Link></li>
            <li><Link to="/shop?category=Huggies" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground">Huggies</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-6">Help</h4>
          <ul className="space-y-4">
            <li><Link to="/shipping" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground">Shipping</Link></li>
            <li><Link to="/returns" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground">Returns</Link></li>
            <li><Link to="/care" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground">Jewelry Care</Link></li>
            <li><Link to="/contact" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-6">Company</h4>
          <ul className="space-y-4">
            <li><Link to="/about" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground">Our Story</Link></li>
            <li><Link to="/journal" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground">Journal</Link></li>
            <li><Link to="/sustainability" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground">Sustainability</Link></li>
            <li><Link to="/stockists" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground">Stockists</Link></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border gap-6 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
        <div className="flex gap-8">
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </div>
        <div className="flex gap-4 grayscale opacity-50">
          <span className="px-2 border rounded border-muted">VISA</span>
          <span className="px-2 border rounded border-muted">AMEX</span>
          <span className="px-2 border rounded border-muted">GPAY</span>
          <span className="px-2 border rounded border-muted">APPLE</span>
        </div>
      </div>
    </footer>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <CartDrawer />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
};

export default Layout;
