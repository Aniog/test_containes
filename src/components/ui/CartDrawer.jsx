import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../lib/utils';

export default function CartDrawer() {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <>
      {/* Overlay */}
      <div 
        className={`cart-overlay ${isCartOpen ? 'open' : ''}`}
        onClick={closeCart}
      />
      
      {/* Drawer */}
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between p-6 border-b border-[var(--velmora-border)]">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5" />
            <h2 className="text-lg tracking-[0.1em] uppercase">Your Cart</h2>
          </div>
          <button onClick={closeCart} className="p-2 hover:opacity-60 transition-opacity">
            <X className="w-5 h-5" />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <ShoppingBag className="w-12 h-12 text-[var(--velmora-border)] mb-4" />
            <p className="text-[var(--velmora-text-muted)] mb-6">Your cart is empty</p>
            <button 
              onClick={closeCart}
              className="btn btn-outline"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartItemId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[var(--velmora-bg-alt)] flex-shrink-0">
                    <img 
                      src={item.images[0]} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <p className="product-name text-sm tracking-[0.1em] leading-tight">{item.name}</p>
                        <p className="text-xs text-[var(--velmora-text-muted)] mt-0.5">{item.variant}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="text-[var(--velmora-text-muted)] hover:text-[var(--velmora-text)] p-1"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-sm font-medium mt-1">{formatPrice(item.price)}</p>
                    
                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center border border-[var(--velmora-border)]">
                        <button 
                          onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                          className="p-1.5 hover:bg-[var(--velmora-bg-alt)] transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm tabular-nums">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                          className="p-1.5 hover:bg-[var(--velmora-bg-alt)] transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm text-[var(--velmora-text-muted)]">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-[var(--velmora-border)] space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-[var(--velmora-text-muted)]">Subtotal</span>
                <span className="font-medium">{formatPrice(cartTotal)}</span>
              </div>
              <p className="text-xs text-[var(--velmora-text-muted)]">
                Shipping calculated at checkout
              </p>
              <button className="btn btn-primary w-full">
                Proceed to Checkout
              </button>
              <button 
                onClick={closeCart}
                className="btn btn-outline w-full"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
