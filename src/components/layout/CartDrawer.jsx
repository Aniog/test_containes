import { useCartStore } from '@/store/cart';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { formatPrice } from '@/lib/utils';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, getTotal } =
    useCartStore();
  const total = getTotal();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-charcoal-900/40 backdrop-blur-sm z-50"
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-[420px] bg-cream-50 z-50 shadow-elevated flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal-100/50">
              <h2 className="font-serif text-xl tracking-[0.08em] text-charcoal-800">
                Your Cart
              </h2>
              <button
                onClick={closeCart}
                className="p-2 text-charcoal-400 hover:text-charcoal-800 transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-12 h-12 text-charcoal-200 mb-4" strokeWidth={1} />
                  <p className="font-serif text-lg text-charcoal-500 mb-2">
                    Your cart is empty
                  </p>
                  <p className="text-body-sm text-charcoal-400 mb-6">
                    Discover our curated collection of fine jewelry.
                  </p>
                  <Link
                    to="/shop"
                    onClick={closeCart}
                    className="btn-primary text-xs px-6 py-3"
                  >
                    Shop Now
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={`${item.id}-${item.variant}`}
                      className="flex gap-4 py-4 border-b border-charcoal-100/30 last:border-0"
                    >
                      {/* Product image placeholder */}
                      <div className="w-20 h-20 bg-charcoal-50 flex-shrink-0 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-200 to-gold-400 opacity-40" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="product-name text-charcoal-800 text-[11px] truncate">
                          {item.name}
                        </p>
                        <p className="text-body-sm text-charcoal-400 mt-0.5">
                          {item.variant}
                        </p>
                        <p className="text-body-sm font-medium text-charcoal-700 mt-1">
                          {formatPrice(item.price)}
                        </p>

                        {/* Quantity controls */}
                        <div className="flex items-center gap-3 mt-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity - 1)
                            }
                            className="w-7 h-7 border border-charcoal-200 flex items-center justify-center hover:border-charcoal-400 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3 text-charcoal-500" />
                          </button>
                          <span className="text-body-sm text-charcoal-700 w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity + 1)
                            }
                            className="w-7 h-7 border border-charcoal-200 flex items-center justify-center hover:border-charcoal-400 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3 text-charcoal-500" />
                          </button>
                        </div>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-charcoal-300 hover:text-charcoal-600 transition-colors self-start p-1"
                        aria-label="Remove item"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-6 py-5 border-t border-charcoal-100/50">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-body-sm text-charcoal-500 uppercase tracking-wider">
                    Subtotal
                  </span>
                  <span className="font-serif text-lg text-charcoal-800">
                    {formatPrice(total)}
                  </span>
                </div>
                <p className="text-body-sm text-charcoal-400 mb-4">
                  Shipping & taxes calculated at checkout.
                </p>
                <button className="btn-gold w-full text-xs">
                  Proceed to Checkout
                </button>
                <button
                  onClick={closeCart}
                  className="w-full mt-3 text-caption uppercase tracking-wider text-charcoal-500 hover:text-charcoal-800 transition-colors py-2"
                >
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
