import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, Minus, Plus } from 'lucide-react';
import { useCart } from './context/CartContext';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { cartCount, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled || !isHome
      ? 'bg-background/95 backdrop-blur-md shadow-sm py-4'
      : 'bg-transparent py-6'
  }`;

  const linkClasses = `text-sm font-medium tracking-wide transition-colors ${
    isScrolled || !isHome ? 'text-foreground hover:text-accent' : 'text-primary-foreground hover:text-accent'
  }`;
  
  const iconClasses = `w-5 h-5 transition-colors ${
     isScrolled || !isHome ? 'text-foreground hover:text-accent' : 'text-primary-foreground hover:text-accent'
  }`;

  return (
    <>
      <nav className={navClasses}>
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden ${iconClasses}`}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu />
          </button>

          {/* Logo */}
          <Link to="/" className={`text-2xl lg:text-3xl font-serif tracking-widest ${isScrolled || !isHome ? 'text-foreground' : 'text-primary-foreground'}`}>
            VELMORA
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/shop" className={linkClasses}>Shop</Link>
            <Link to="/shop?category=collections" className={linkClasses}>Collections</Link>
            <Link to="/about" className={linkClasses}>About</Link>
            <Link to="/journal" className={linkClasses}>Journal</Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <button className={iconClasses} aria-label="Search">
              <Search />
            </button>
            <button className={`${iconClasses} relative`} onClick={openCart} aria-label="Cart">
              <ShoppingBag />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-background">
          <div className="p-6 flex justify-end">
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col items-center space-y-8 mt-12 text-xl font-serif">
            <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
            <Link to="/shop?category=collections" onClick={() => setIsMobileMenuOpen(false)}>Collections</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link to="/journal" onClick={() => setIsMobileMenuOpen(false)}>Journal</Link>
          </div>
        </div>
      )}
    </>
  );
}

function CartDrawer() {
  const { isCartOpen, closeCart, cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <>  
      {/* Backdrop */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-[60] transition-opacity"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-[90%] sm:w-[400px] bg-background z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-serif text-2xl">Your Cart</h2>
          <button onClick={closeCart} className="text-muted-foreground hover:text-foreground">
             <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
               <ShoppingBag className="w-12 h-12 text-muted-foreground" />
               <p className="text-muted-foreground">Your cart is empty.</p>
               <button onClick={closeCart} className="text-accent underline underline-offset-4 font-medium uppercase tracking-widest text-sm">
                 Continue Shopping
               </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-secondary overflow-hidden shrink-0 relative">
                    <img 
                      src={item.image || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"}
                      alt={item.name} 
                      className="absolute inset-0 w-full h-full object-cover" 
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 id={`cart-product-name-${item.id}`} className="font-serif uppercase tracking-wider text-sm">{item.name}</h3>
                        <button onClick={() => removeFromCart(item.id, item.variant)} className="text-muted-foreground hover:text-foreground">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-muted-foreground text-sm mt-1">{item.variant}</p>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                       <div className="flex items-center border border-border">
                         <button onClick={() => updateQuantity(item.id, item.variant, -1)} className="p-1 px-2 hover:bg-secondary">
                           <Minus className="w-3 h-3" />
                         </button>
                         <span className="w-8 text-center text-sm">{item.quantity}</span>
                         <button onClick={() => updateQuantity(item.id, item.variant, 1)} className="p-1 px-2 hover:bg-secondary">
                           <Plus className="w-3 h-3" />
                         </button>
                       </div>
                       <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t border-border p-6 space-y-4 bg-background">
            <div className="flex justify-between items-center text-lg font-serif">
               <span>Subtotal</span>
               <span>${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-muted-foreground text-sm text-center">Shipping & taxes calculated at checkout.</p>
            <button className="w-full bg-accent text-accent-foreground py-4 font-medium tracking-widest uppercase hover:bg-accent/90 transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="text-2xl font-serif tracking-widest block">VELMORA</Link>
          <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-sm">
            Elevating everyday elegance with demi-fine jewelry crafted to be treasured.
          </p>
        </div>
        
        <div>
          <h4 className="font-serif uppercase tracking-widest mb-6 text-sm">Shop</h4>
          <ul className="space-y-4 text-sm text-primary-foreground/70">
            <li><Link to="/shop?category=earrings" className="hover:text-accent transition-colors">Earrings</Link></li>
            <li><Link to="/shop?category=necklaces" className="hover:text-accent transition-colors">Necklaces</Link></li>
            <li><Link to="/shop?category=huggies" className="hover:text-accent transition-colors">Huggies</Link></li>
            <li><Link to="/shop?category=new" className="hover:text-accent transition-colors">New Arrivals</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif uppercase tracking-widest mb-6 text-sm">Help</h4>
          <ul className="space-y-4 text-sm text-primary-foreground/70">
            <li><a href="#" className="hover:text-accent transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Jewelry Care</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif uppercase tracking-widest mb-6 text-sm">Company</h4>
          <ul className="space-y-4 text-sm text-primary-foreground/70">
            <li><Link to="/about" className="hover:text-accent transition-colors">Our Story</Link></li>
            <li><Link to="/journal" className="hover:text-accent transition-colors">Journal</Link></li>
            <li><a href="#" className="hover:text-accent transition-colors">Sustainability</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 lg:px-12 mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50">
         <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
         <div className="flex space-x-4">
           <a href="#" className="hover:text-primary-foreground">Terms</a>
           <a href="#" className="hover:text-primary-foreground">Privacy</a>
         </div>
      </div>
    </footer>
  )
}

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <CartDrawer />
      <div className="flex-1 flex flex-col w-full">
        {children}
      </div>
      <Footer />
    </div>
  );
}