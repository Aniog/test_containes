import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { state, closeCart, removeItem, updateQuantity, totalPrice, totalItems } = useCart();
  
  if (!state.isOpen) return null;
  
  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50 transition-opacity duration-300"
        onClick={closeCart}
      />
      
      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-[var(--color-warm-white)] z-50 shadow-2xl transform transition-transform duration-300">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[var(--color-border)]">
            <h2 className="serif-heading text-2xl">Your Cart ({totalItems})</h2>
            <button onClick={closeCart} className="p-2 hover:bg-[var(--color-cream)] rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Cart items */}
          <div className="flex-1 overflow-y-auto p-6">
            {state.items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-16 h-16 text-[var(--color-light-gray)] mb-4" />
                <p className="serif-heading text-xl mb-2">Your cart is empty</p>
                <p className="text-sm text-[var(--color-warm-gray)] mb-6">Discover our beautiful collection</p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="btn-accent"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {state.items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="product-name text-sm mb-1">{item.name}</h3>
                      <p className="text-xs text-[var(--color-warm-gray)] mb-2 capitalize">{item.variant} tone</p>
                      <p className="text-sm font-medium mb-3">${item.price}</p>
                      
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center border border-[var(--color-border)] rounded hover:border-[var(--color-gold)] transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-sm w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center border border-[var(--color-border)] rounded hover:border-[var(--color-gold)] transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="ml-auto text-xs text-[var(--color-warm-gray)] hover:text-red-500 transition-colors"
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
          {state.items.length > 0 && (
            <div className="border-t border-[var(--color-border)] p-6">
              <div className="flex justify-between mb-4">
                <span className="text-sm">Subtotal</span>
                <span className="font-medium">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-[var(--color-warm-gray)] mb-4">Shipping & taxes calculated at checkout</p>
              <button className="btn-accent w-full">
                Checkout
              </button>
              <Link
                to="/shop"
                onClick={closeCart}
                className="block text-center text-sm text-[var(--color-warm-gray)] hover:text-[var(--color-gold)] mt-4 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
