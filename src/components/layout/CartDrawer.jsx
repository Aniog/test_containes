import React from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />
      
      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-velmora-dark animate-slide-in-right">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-velmora-border">
            <h2 className="font-serif text-xl text-velmora-text">Your Cart</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-velmora-muted hover:text-velmora-gold transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-velmora-muted mb-6">Your cart is empty</p>
                <Button 
                  variant="secondary" 
                  onClick={() => setIsOpen(false)}
                >
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-24 h-24 bg-velmora-card overflow-hidden">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="product-title text-sm mb-1">{item.name}</h3>
                      <p className="text-velmora-gold text-sm mb-2">${item.price}</p>
                      <p className="text-velmora-muted text-xs mb-3 capitalize">{item.variant} Tone</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center border border-velmora-border text-velmora-muted hover:border-velmora-gold hover:text-velmora-gold transition-colors duration-300"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="text-velmora-text w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center border border-velmora-border text-velmora-muted hover:border-velmora-gold hover:text-velmora-gold transition-colors duration-300"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-velmora-muted hover:text-velmora-error transition-colors duration-300"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t border-velmora-border">
              <div className="flex items-center justify-between mb-4">
                <span className="text-velmora-muted">Subtotal</span>
                <span className="text-velmora-text text-lg">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-velmora-muted text-sm mb-4">Shipping calculated at checkout</p>
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