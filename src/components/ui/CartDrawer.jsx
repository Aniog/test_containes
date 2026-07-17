import React, { useRef, useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const CartDrawer = () => {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const drawerRef = useRef(null);

  const formatPrice = (price) => `$${price}`;

  // Click outside to close (non-blocking overlay pattern for premium feel)
  useEffect(() => {
    if (!isCartOpen) return;

    const handleClickOutside = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        closeCart();
      }
    };

    // Use capture to ensure we can close even if other handlers run
    document.addEventListener('mousedown', handleClickOutside, true);
    return () => document.removeEventListener('mousedown', handleClickOutside, true);
  }, [isCartOpen, closeCart]);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Visual dim overlay — non-blocking so page remains interactive (quick add while cart open) */}
          <motion.div
            className="cart-overlay open cart-overlay-nonblocking"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            ref={drawerRef}
            className="cart-drawer open"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
        <div className="flex items-center justify-between p-6 border-b border-[var(--color-border)]">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} />
            <span className="font-medium tracking-[0.1em] text-sm uppercase">Your Cart</span>
          </div>
          <button onClick={closeCart} className="p-1 hover:text-[var(--color-gold)] transition-colors">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <ShoppingBag size={48} className="text-[var(--color-border)] mb-4" />
            <p className="text-[var(--color-text-muted)] mb-6">Your cart is empty</p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="btn btn-primary"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-20 bg-[var(--color-bg-alt)] flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <p className="product-name text-xs tracking-[0.15em] leading-tight pr-2">
                          {item.name}
                        </p>
                        <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                          {item.variant}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] p-1 -mr-1"
                      >
                        <X size={14} />
                      </button>
                    </div>
                    <p className="text-sm font-medium mb-3">{formatPrice(item.price)}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="qty-selector">
                        <button
                          className="qty-btn"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus size={12} />
                        </button>
                        <span className="qty-value">{item.quantity}</span>
                        <button
                          className="qty-btn"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <span className="text-sm font-medium">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-[var(--color-border)] space-y-4">
              <div className="flex justify-between items-baseline">
                <span className="text-sm tracking-[0.05em] uppercase">Total</span>
                <span className="text-xl font-medium">{formatPrice(getCartTotal())}</span>
              </div>
              <p className="text-xs text-[var(--color-text-muted)]">
                Shipping calculated at checkout
              </p>
              <button
                className="btn btn-primary w-full"
                onClick={() => {
                  alert('Checkout would be implemented with a real payment provider.');
                  closeCart();
                }}
              >
                Proceed to Checkout
              </button>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn btn-outline w-full text-center block"
              >
                Continue Shopping
              </Link>
            </div>
          </>
        )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
