import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X, Plus, Minus } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 -ml-2"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/shop" className="text-sm uppercase tracking-widest hover:text-accent transition-colors">Shop</Link>
          <Link to="/collections" className="text-sm uppercase tracking-widest hover:text-accent transition-colors">Collections</Link>
          <Link to="/about" className="text-sm uppercase tracking-widest hover:text-accent transition-colors">About</Link>
          <Link to="/journal" className="text-sm uppercase tracking-widest hover:text-accent transition-colors">Journal</Link>
        </nav>

        {/* Logo */}
        <Link 
          to="/" 
          className={`font-serif tracking-widest text-2xl md:text-3xl font-medium absolute left-1/2 transform -translate-x-1/2 transition-colors ${
            isScrolled ? 'text-foreground' : 'text-foreground'
          }`}
        >
          VELMORA
        </Link>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button aria-label="Search">
            <Search className="w-5 h-5 hover:text-accent transition-colors" />
          </button>
          <button 
            aria-label="Cart" 
            className="relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag className="w-5 h-5 hover:text-accent transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-accent text-accent-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-50 flex flex-col p-6 animate-in slide-in-from-left">
          <div className="flex justify-between items-center mb-12">
            <span className="font-serif tracking-widest text-xl">VELMORA</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 -mr-2">
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-6">
            <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className="text-lg uppercase tracking-widest">Shop</Link>
            <div className="h-px w-full bg-border" />
            <Link to="/collections" onClick={() => setIsMobileMenuOpen(false)} className="text-lg uppercase tracking-widest">Collections</Link>
            <div className="h-px w-full bg-border" />
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg uppercase tracking-widest">About</Link>
            <div className="h-px w-full bg-border" />
            <Link to="/journal" onClick={() => setIsMobileMenuOpen(false)} className="text-lg uppercase tracking-widest">Journal</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif tracking-widest text-2xl block mb-6">VELMORA</Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Quiet luxury demi-fine jewelry. Crafted to be treasured, designed for the modern muse.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6 tracking-wide">Shop</h4>
            <ul className="flex flex-col gap-4 text-sm text-muted-foreground">
              <li><Link to="/shop" className="hover:text-foreground transition-colors">All Jewelry</Link></li>
              <li><Link to="/category/earrings" className="hover:text-foreground transition-colors">Earrings</Link></li>
              <li><Link to="/category/huggies" className="hover:text-foreground transition-colors">Huggies</Link></li>
              <li><Link to="/category/necklaces" className="hover:text-foreground transition-colors">Necklaces</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 tracking-wide">Help</h4>
            <ul className="flex flex-col gap-4 text-sm text-muted-foreground">
              <li><Link to="/faq" className="hover:text-foreground transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-foreground transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/jewelry-care" className="hover:text-foreground transition-colors">Jewelry Care</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 tracking-wide">Company</h4>
            <ul className="flex flex-col gap-4 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link to="/journal" className="hover:text-foreground transition-colors">Journal</Link></li>
              <li><Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground tracking-wider">
            &copy; {new Date().getFullYear()} VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-4">
            {/* Social Icons Placeholder */}
            <span className="w-12 h-6 bg-border opacity-50 block rounded-sm"></span>
            <span className="w-12 h-6 bg-border opacity-50 block rounded-sm"></span>
            <span className="w-12 h-6 bg-border opacity-50 block rounded-sm"></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const CartDrawer = () => {
  const { isCartOpen, setIsCartOpen, cartItems, cartTotal, updateQuantity, removeFromCart } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />
      
      <div className="fixed inset-y-0 right-0 w-full md:w-[400px] bg-background shadow-2xl z-50 flex flex-col animate-in slide-in-from-right duration-300">
        <div className="p-6 flex items-center justify-between border-b border-border">
          <h2 className="font-serif text-xl tracking-widest uppercase">Your Cart</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-secondary rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-6">
              <ShoppingBag className="w-16 h-16 text-muted-foreground/30" />
              <div>
                <p className="text-lg font-serif mb-2">Your cart is empty</p>
                <p className="text-sm text-muted-foreground mb-6">Discover our latest arrivals and timeless classics.</p>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="bg-foreground text-background px-8 py-3 uppercase tracking-widest text-sm hover:bg-foreground/90 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-24 h-24 bg-secondary bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} />
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="font-serif uppercase tracking-wider text-sm leading-snug">{item.name}</h3>
                        <p className="text-sm font-medium whitespace-nowrap">${item.price}</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 capitalize">{item.variant}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-border">
                        <button 
                          className="px-2 py-1 hover:bg-secondary transition-colors"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 py-1 text-sm text-center min-w-[2.5rem]">
                          {item.quantity}
                        </span>
                        <button 
                          className="px-2 py-1 hover:bg-secondary transition-colors"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-4"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-6 border-t border-border bg-secondary/30">
            <div className="flex justify-between text-lg mb-6">
              <span className="font-serif">Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground text-center mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <button className="w-full bg-foreground text-background py-4 uppercase tracking-widest text-sm hover:bg-foreground/90 transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 mt-20">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
