import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from './CartContext';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeFromCart, updateQuantity, subtotal, totalItems } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') closeCart(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [closeCart]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/30 z-[60]"
            onClick={closeCart}
          />
          <motion.div
            ref={drawerRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-[var(--cream)] z-[70] flex flex-col shadow-2xl"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--divider)]">
              <h2 className="font-serif-upper text-sm tracking-widest-xl">Your Cart ({totalItems})</h2>
              <button onClick={closeCart} className="p-1 hover:opacity-60 transition-opacity" aria-label="Close cart">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-10 h-10 text-[var(--warm-gray)] mb-4" strokeWidth={1.2} />
                  <p className="text-[var(--stone)] text-sm">Your cart is empty.</p>
                  <button onClick={closeCart} className="mt-6 text-sm font-medium underline underline-offset-4 decoration-1 hover:text-[var(--gold)] transition-colors">
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <ul className="space-y-6">
                  {items.map((item) => (
                    <li key={item.cartId} className="flex gap-4">
                      <div className="w-20 h-20 bg-[var(--cream-dark)] rounded-sm flex-shrink-0 overflow-hidden">
                        <img
                          src={`https://image.pollinations.ai/prompt/${encodeURIComponent(item.image)}?width=200&height=200&nologo=true`}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="font-serif-upper text-xs tracking-widest text-[var(--ink)]">{item.name}</p>
                            <p className="text-xs text-[var(--stone)] mt-1 capitalize">{item.variant} tone</p>
                          </div>
                          <button onClick={() => removeFromCart(item.cartId)} className="p-1 hover:opacity-50 transition-opacity" aria-label="Remove item">
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center border border-[var(--divider)] rounded-full">
                            <button onClick={() => updateQuantity(item.cartId, item.quantity - 1)} className="px-2 py-1 hover:bg-[var(--cream-dark)] rounded-l-full transition-colors">
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2 text-xs font-medium min-w-[1.5rem] text-center">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.cartId, item.quantity + 1)} className="px-2 py-1 hover:bg-[var(--cream-dark)] rounded-r-full transition-colors">
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <span className="text-sm font-medium">${item.price * item.quantity}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-[var(--divider)] px-6 py-5 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[var(--stone)]">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <p className="text-xs text-[var(--warm-gray)]">Shipping & taxes calculated at checkout.</p>
                <button className="w-full bg-[var(--ink)] text-[var(--cream)] py-3.5 text-sm font-medium tracking-widest-xl uppercase hover:bg-[var(--charcoal)] transition-colors">
                  Checkout
                </button>
                <button onClick={closeCart} className="w-full text-center text-xs text-[var(--stone)] hover:text-[var(--ink)] transition-colors underline underline-offset-4">
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
