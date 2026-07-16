import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { isOpen, closeCart, items, removeItem, updateQuantity } = useCartStore();

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={closeCart}
      />
      <div className={`fixed inset-y-0 right-0 w-full max-w-md bg-background shadow-2xl z-50 flex flex-col transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-serif">Your Cart</h2>
          <button onClick={closeCart} className="text-muted-foreground hover:text-foreground">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className={`flex-1 overflow-y-auto p-6 ${items.length === 0 ? 'flex flex-col' : ''}`}>
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4">
              <p className="text-muted-foreground">Your cart is empty.</p>
              <button 
                onClick={closeCart}
                className="text-sm border-b border-foreground pb-1"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <Link to={`/product/${item.id}`} onClick={closeCart} className="w-24 h-24 bg-muted flex-shrink-0 relative overflow-hidden group">
                    <img 
                      src={item.image || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"} 
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                  
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <Link 
                          to={`/product/${item.id}`}
                          onClick={closeCart}
                          className="font-serif uppercase tracking-widest text-sm hover:text-muted-foreground transition-colors pr-6 block"
                        >
                          {item.name}
                        </Link>
                        <button 
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Color: {item.variant}</p>
                    </div>
                    
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center border border-border">
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="px-2 py-1 text-muted-foreground hover:text-foreground"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-4 text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="px-2 py-1 text-muted-foreground hover:text-foreground"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-border bg-background mt-auto flex-shrink-0">
            <div className="flex justify-between mb-4 font-serif text-lg">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">Shipping and taxes calculated at checkout.</p>
            <button className="w-full bg-primary text-primary-foreground py-4 uppercase tracking-widest text-sm font-medium hover:bg-primary/90 transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;