import React, { useEffect, useRef } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import Button from './Button';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { 
    cart, 
    isCartOpen, 
    closeCart, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal 
  } = useCart();

  const drawerRef = useRef(null);
  const total = getCartTotal();
  const shipping = total > 0 ? 0 : 0; // Free shipping
  const grandTotal = total + shipping;

  // Close on outside click (allows continued browsing while cart is open)
  useEffect(() => {
    if (!isCartOpen) return;

    const handleClickOutside = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        closeCart();
      }
    };

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeCart();
      }
    };

    // Use capture to ensure we can close even if other handlers stop propagation
    document.addEventListener('mousedown', handleClickOutside, true);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isCartOpen, closeCart]);

  return (
    <>
      {/* Subtle non-blocking backdrop for visual separation (does not intercept clicks) */}
      <div 
        className={`cart-backdrop ${isCartOpen ? 'open' : ''}`}
        aria-hidden="true"
      />
      
      {/* Drawer */}
      <div 
        ref={drawerRef} 
        className={`cart-drawer ${isCartOpen ? 'open' : ''}`} 
        role="dialog" 
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between p-6 border-b border-[var(--color-border-light)]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            <h2 className="font-medium tracking-[0.08em] uppercase text-sm">Your Cart</h2>
          </div>
          <button 
            onClick={closeCart} 
            className="p-2 hover:bg-[var(--color-bg-alt)] transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 p-6 text-center">
            <ShoppingBag className="w-12 h-12 text-[var(--color-border)] mb-4" />
            <p className="text-[var(--color-text-muted)] mb-6">Your cart is empty</p>
            <Button variant="outline-gold" onClick={closeCart}>
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[var(--color-bg-alt)] flex-shrink-0">
                    <img 
                      src={item.images[0]} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <p className="product-name text-sm leading-tight pr-2">{item.name}</p>
                        <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{item.selectedVariant}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] p-1"
                        aria-label="Remove item"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="gold-text text-sm font-medium mb-3">${item.price}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-[var(--color-border)]">
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="p-1.5 hover:bg-[var(--color-bg-alt)] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm tabular-nums">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="p-1.5 hover:bg-[var(--color-bg-alt)] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="text-sm font-medium tabular-nums">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-[var(--color-border-light)] bg-[var(--color-surface)]">
              <div className="space-y-2 mb-6 text-sm">
                <div className="flex justify-between">
                  <span className="text-[var(--color-text-muted)]">Subtotal</span>
                  <span className="tabular-nums">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-text-muted)]">Shipping</span>
                  <span className="text-[var(--color-gold)]">Free</span>
                </div>
                <div className="divider my-2" />
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span className="tabular-nums">${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              <Button variant="primary" size="full" className="mb-3">
                Proceed to Checkout
              </Button>
              <p className="text-center text-xs text-[var(--color-text-muted)]">
                or <Link to="/shop" onClick={closeCart} className="underline hover:text-[var(--color-gold)]">continue shopping</Link>
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
