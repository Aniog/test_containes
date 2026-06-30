import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div 
        className="cart-overlay open" 
        onClick={() => setIsCartOpen(false)}
      />
      <div className="cart-drawer open">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[var(--color-divider)]">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5" />
              <h2 className="text-lg font-medium tracking-[0.08em] uppercase">Your Cart</h2>
            </div>
            <button onClick={() => setIsCartOpen(false)} className="p-2">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          {cart.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
              <ShoppingBag className="w-12 h-12 text-[var(--color-gray-light)] mb-4" />
              <p className="text-[var(--color-gray)]">Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cart.map((item) => (
                  <div key={item.cartId} className="flex gap-4">
                    <div className="w-20 h-20 bg-[var(--color-cream)] flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <div>
                          <p className="product-name text-sm tracking-[0.1em] pr-2">{item.name}</p>
                          <p className="text-xs text-[var(--color-gray)] mt-1">{item.selectedVariant}</p>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.cartId)}
                          className="text-[var(--color-gray-light)] hover:text-[var(--color-base)]"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-[var(--color-divider)]">
                          <button 
                            onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                            className="p-1.5 hover:bg-[var(--color-cream)]"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                            className="p-1.5 hover:bg-[var(--color-cream)]"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-[var(--color-divider)] space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="uppercase tracking-[0.08em]">Subtotal</span>
                  <span className="font-medium">${cartTotal.toFixed(2)}</span>
                </div>
                <p className="text-xs text-[var(--color-gray)]">Shipping calculated at checkout</p>
                <button className="btn btn-primary w-full">
                  Proceed to Checkout
                </button>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="btn btn-outline w-full"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;