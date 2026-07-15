import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import { useCart } from './lib/CartContext';
import { ShoppingBag, X, Minus, Plus, Trash2 } from 'lucide-react';
import { cn } from './lib/utils';

function App() {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Cart Drawer */}
        <div className={cn(
          "fixed inset-0 z-[100] transition-opacity duration-500",
          isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}>
          <div className="absolute inset-0 bg-black/40" onClick={() => setIsCartOpen(false)} />
          <div className={cn(
            "absolute right-0 top-0 w-full max-w-md bg-background h-full shadow-xl flex flex-col transition-transform duration-500",
            isCartOpen ? "translate-x-0" : "translate-x-full"
          )}>
            <div className="p-8 border-b border-border/40 flex justify-between items-center">
              <h2 className="font-serif text-2xl tracking-widest uppercase">Your Bag</h2>
              <button onClick={() => setIsCartOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-8 no-scrollbar">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center gap-6 text-muted-foreground">
                  <ShoppingBag className="w-12 h-12 stroke-[1px]" />
                  <p className="font-serif italic text-lg text-center">Your bag is currently empty.</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="bg-primary text-primary-foreground px-12 py-4 text-[10px] uppercase tracking-widest hover:opacity-90 transition-opacity"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-8">
                  {cart.map((item) => (
                    <div key={`${item.id}-${item.variant}`} className="flex gap-4 pb-8 border-b border-border/20 last:border-0">
                      <div className="w-24 aspect-[4/5] bg-muted shrink-0 relative overflow-hidden">
                        <div 
                          className="w-full h-full"
                          data-strk-bg-id={`cart-item-${item.id}-${item.variant}`}
                          data-strk-bg={`[cart-item-name-${item.id}] luxury jewelry gold`}
                          data-strk-bg-ratio="4x5"
                          data-strk-bg-width="200"
                        />
                      </div>
                      <div className="flex-grow flex flex-col justify-between py-1">
                        <div>
                          <div className="flex justify-between items-start mb-1">
                            <h3 id={`cart-item-name-${item.id}`} className="font-serif text-sm uppercase tracking-widest">{item.name}</h3>
                            <button onClick={() => removeFromCart(item.id, item.variant)}>
                              <Trash2 className="w-4 h-4 text-muted-foreground hover:text-destructive transition-colors" />
                            </button>
                          </div>
                          <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4">{item.variant}</p>
                          <p className="text-sm font-medium">${item.price}</p>
                        </div>
                        <div className="flex items-center border border-border w-max mt-4">
                          <button 
                            className="p-2 hover:bg-muted"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs">{item.quantity}</span>
                          <button 
                            className="p-2 hover:bg-muted"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-8 border-t border-border/40 bg-secondary/10">
                <div className="flex justify-between items-center mb-8 uppercase tracking-widest text-xs font-semibold">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <button className="w-full bg-primary text-primary-foreground py-5 text-[10px] uppercase tracking-widest hover:opacity-90 transition-opacity mb-4">
                  Proceed to Checkout
                </button>
                <p className="text-[10px] text-center text-muted-foreground italic">
                  Shipping & taxes calculated at checkout
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
