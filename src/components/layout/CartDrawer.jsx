import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { isOpen, setIsOpen, items, updateQuantity, removeItem, cartTotal } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50 transition-opacity" 
        onClick={() => setIsOpen(false)}
      />
      
      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full md:w-[400px] bg-background shadow-2xl z-50 flex flex-col animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-serif text-xl tracking-wider">Your Cart</h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-muted rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-muted-foreground space-y-4">
              <ShoppingBag className="w-12 h-12 stroke-[1]" />
              <p className="tracking-wide">Your cart is currently empty.</p>
              <button 
                onClick={() => setIsOpen(false)}
                className="mt-4 px-6 py-3 border border-foreground tracking-widest text-sm hover:bg-foreground hover:text-background transition-colors uppercase"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant || 'default'}`} className="flex gap-4">
                  <div className="h-24 w-24 bg-muted flex-shrink-0">
                    <img 
                      src={item.image || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f0f0f0'/%3E%3C/svg%3E"} 
                      alt={item.name} 
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  
                  <div className="flex flex-col flex-1 justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-serif text-lg leading-tight uppercase tracking-wider">{item.name}</h3>
                        {item.variant && (
                          <p className="text-sm text-muted-foreground mt-1 capitalize">{item.variant}</p>
                        )}
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-muted-foreground hover:text-foreground transition-colors p-1"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="flex justify-between items-end mt-4">
                      {/* Quantity Selector */}
                      <div className="flex items-center border border-border h-9">
                        <button 
                          className="px-3 h-full hover:bg-muted transition-colors"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button 
                          className="px-3 h-full hover:bg-muted transition-colors"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="tracking-widest">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border p-6 bg-background">
            <div className="flex justify-between items-center mb-6">
              <span className="tracking-wide uppercase text-sm">Subtotal</span>
              <span className="font-serif text-xl">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-6 text-center">Shipping & taxes calculated at checkout</p>
            <Link 
              to="/checkout"
              onClick={() => setIsOpen(false)}
              className="w-full block text-center bg-foreground text-background py-4 uppercase tracking-widest text-sm hover:bg-primary transition-colors"
            >
              Checkout
            </Link>
          </div>
        )}
      </div>
    </>
  );
}