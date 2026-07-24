import React from 'react';
import { useCart } from '../lib/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';

export default function CartDrawer() {
  const { isCartOpen, closeCart, items, removeItem, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/40 z-40 transition-opacity" 
        onClick={closeCart}
      />
      <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-background shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-serif text-2xl tracking-wide uppercase">Your Cart</h2>
          <button onClick={closeCart} className="p-2 hover:bg-muted rounded-full transition-colors">
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-muted-foreground space-y-4">
              <ShoppingBag className="w-12 h-12 stroke-[1]" />
              <p className="font-serif text-xl">Your cart is empty</p>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-24 h-24 bg-muted overflow-hidden">
                    <img 
                      src={item.imgUrl} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-serif text-sm tracking-widest uppercase">{item.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">Variant: {item.variant}</p>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-muted-foreground hover:text-foreground text-sm"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center border border-border">
                        <button 
                          className="px-2 py-1 hover:bg-muted"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-4 text-sm">{item.quantity}</span>
                        <button 
                          className="px-2 py-1 hover:bg-muted"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
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
          <div className="p-6 border-t border-border bg-background">
            <div className="flex justify-between items-center mb-6">
              <span className="font-serif text-lg">Subtotal</span>
              <span className="font-medium text-lg">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">Shipping and taxes calculated at checkout.</p>
            <button className="w-full py-4 bg-primary text-primary-foreground font-medium uppercase tracking-widest hover:bg-primary/90 transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}