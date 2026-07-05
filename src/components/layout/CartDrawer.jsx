import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

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
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-cream shadow-soft-lg flex flex-col animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-stone-200">
          <h2 className="font-serif text-2xl text-charcoal">Your Bag</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:text-gold transition-colors"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} strokeWidth={1} className="text-stone-300 mb-4" />
              <p className="text-stone-500 mb-2">Your bag is empty</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="text-gold hover:text-gold-dark transition-colors text-sm underline"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-24 h-30 bg-stone-100 overflow-hidden flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="product-name text-xs text-charcoal mb-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-stone-500 capitalize mb-2">
                      {item.variant} / Qty {item.quantity}
                    </p>
                    <p className="text-sm font-medium text-charcoal mb-3">
                      ${item.price}
                    </p>
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-8 h-8 border border-stone-200 flex items-center justify-center hover:border-gold transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-8 h-8 border border-stone-200 flex items-center justify-center hover:border-gold transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                      <button 
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="ml-auto text-stone-400 hover:text-charcoal transition-colors text-sm"
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
          <div className="p-6 border-t border-stone-200">
            <div className="flex items-center justify-between mb-4">
              <span className="text-stone-600">Subtotal</span>
              <span className="text-lg font-medium text-charcoal">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-stone-500 mb-4">
              Shipping and taxes calculated at checkout
            </p>
            <button className="w-full bg-gold text-charcoal py-4 font-medium hover:bg-gold-dark transition-colors duration-300">
              Checkout
            </button>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="w-full mt-3 border border-charcoal text-charcoal py-3 font-medium hover:bg-charcoal hover:text-cream transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;