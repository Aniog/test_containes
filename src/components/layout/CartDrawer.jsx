import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 z-[90]" 
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--color-border)]">
            <span className="text-sm tracking-[0.1em] uppercase">Your Cart ({cart.length})</span>
            <button onClick={() => setIsCartOpen(false)} aria-label="Close cart">
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          {cart.length > 0 ? (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-4">
                {cart.map((item) => (
                  <div key={item.cartId} className="flex gap-4 py-4 border-b border-[var(--color-border)]">
                    <img 
                      src={item.images[0]} 
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1 text-sm">
                      <div className="font-medium mb-1">{item.name}</div>
                      <div className="text-[var(--color-text-muted)] mb-2">
                        {item.selectedVariant} · ${item.price}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-[var(--color-border)] rounded">
                          <button 
                            onClick={() => updateQuantity(item.cartId, item.cartQuantity - 1)}
                            className="p-1.5 hover:bg-[var(--color-bg)]"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 text-sm">{item.cartQuantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.cartId, item.cartQuantity + 1)}
                            className="p-1.5 hover:bg-[var(--color-bg)]"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.cartId)}
                          className="text-[var(--color-text-muted)] hover:text-red-600"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-[var(--color-border)]">
                <div className="flex justify-between mb-4 text-sm">
                  <span>Subtotal</span>
                  <span className="font-medium">${cartTotal}</span>
                </div>
                <p className="text-xs text-[var(--color-text-muted)] mb-4">
                  Shipping calculated at checkout
                </p>
                <button className="btn-gold w-full mb-3">
                  Checkout
                </button>
                <Link 
                  to="/shop" 
                  onClick={() => setIsCartOpen(false)}
                  className="block text-center text-sm tracking-[0.05em] hover:text-[var(--color-gold)]"
                >
                  Continue Shopping
                </Link>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
              <ShoppingBag size={48} className="text-[var(--color-border)] mb-4" />
              <p className="text-lg mb-2">Your cart is empty</p>
              <p className="text-sm text-[var(--color-text-muted)] mb-6">
                Discover our collection of demi-fine jewelry
              </p>
              <Link 
                to="/shop" 
                onClick={() => setIsCartOpen(false)}
                className="btn-primary"
              >
                Shop Now
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;