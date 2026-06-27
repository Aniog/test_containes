import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';

const CartDrawer = () => {
  const { 
    cart, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity,
    cartTotal 
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[70]">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-[var(--color-cream)] shadow-lg animate-slide-up">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[var(--color-border)]">
            <h2 className="font-serif text-xl">Your Cart</h2>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:bg-[var(--color-bg-secondary)] rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-[var(--color-text-muted)] mb-4" />
                <p className="font-sans text-[var(--color-text-secondary)] mb-4">
                  Your cart is empty
                </p>
                <Button 
                  variant="secondary" 
                  size="sm"
                  onClick={() => setIsCartOpen(false)}
                >
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div 
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4"
                  >
                    <div className="w-20 h-24 bg-[var(--color-bg-secondary)] overflow-hidden flex-shrink-0">
                      <img 
                        src={item.images[0]} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="product-name text-xs mb-1">
                        {item.name}
                      </h3>
                      <p className="font-sans text-sm text-[var(--color-text-muted)] mb-2">
                        {item.variant}
                      </p>
                      <p className="font-sans text-sm font-medium mb-3">
                        ${item.price}
                      </p>
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center border border-[var(--color-border)] hover:border-[var(--color-charcoal)] transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-sans text-sm w-6 text-center">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center border border-[var(--color-border)] hover:border-[var(--color-charcoal)] transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button 
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="ml-auto font-sans text-xs text-[var(--color-text-muted)] hover:text-[var(--color-charcoal)] transition-colors"
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

          {/* Footer */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-[var(--color-border)]">
              <div className="flex items-center justify-between mb-4">
                <span className="font-sans text-sm text-[var(--color-text-secondary)]">
                  Subtotal
                </span>
                <span className="font-sans text-lg font-medium">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
              <p className="font-sans text-xs text-[var(--color-text-muted)] mb-4">
                Shipping and taxes calculated at checkout
              </p>
              <Button variant="primary" size="full">
                Checkout
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;