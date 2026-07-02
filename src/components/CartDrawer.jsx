import React from 'react';
import { Minus, Plus, X, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from './ui/Button';

export function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/40 z-50 transition-opacity backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />
      
      <div className="fixed inset-y-0 right-0 w-full sm:w-96 bg-background shadow-2xl z-50 flex flex-col transform transition-transform duration-300 ease-in-out">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-serif text-2xl">Your Cart ({cartItems.length})</h2>
          <button 
            onClick={() => setIsCartOpen(false)} 
            className="p-2 -mr-2 hover:bg-muted rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-muted-foreground p-8">
              <ShoppingBag className="w-12 h-12 opacity-50" />
              <p className="font-medium text-lg">Your cart is empty.</p>
              <Button variant="solid" onClick={() => setIsCartOpen(false)}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="w-24 h-24 bg-muted overflow-hidden flex-shrink-0">
                  {/* We'll use a placeholder or data-strk-img here. For now, solid bg is fine if image fails. */}
                  <img 
                     src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                     data-strk-img={item.product.images.primary}
                     data-strk-img-id={`cart-img-${item.id}`}
                     data-strk-img-ratio="1x1"
                     data-strk-img-width="200"
                     alt={item.product.name}
                     className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-serif uppercase tracking-wider text-sm">{item.product.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{item.color}</p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-muted-foreground hover:text-foreground p-1"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="mt-auto flex justify-between items-end">
                    <div className="flex items-center border border-border">
                      <button 
                        className="p-1.5 hover:bg-muted"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button 
                        className="p-1.5 hover:bg-muted"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <span className="font-medium">${item.product.price}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 bg-stone-50 border-t border-border mt-auto">
            <div className="flex justify-between items-center mb-6 pt-2">
              <span className="font-medium text-lg">Subtotal</span>
              <span className="font-medium text-lg">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-4 text-center">Shipping & taxes calculated at checkout</p>
            <Button variant="solid" className="w-full">
              Checkout
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
