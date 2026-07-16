import { useCart } from '@/lib/cart';
import { formatPrice, cn } from '@/lib/utils';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const {
    isOpen,
    closeCart,
    items,
    removeItem,
    updateQuantity,
    totalItems,
    totalPrice,
  } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-charcoal/40 backdrop-blur-sm z-[60]"
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-cream z-[70] shadow-medium flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-champagne">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-charcoal" />
                <h2 className="font-serif text-xl text-charcoal">
                  Your Bag
                </h2>
                <span className="text-xs text-warm-gray font-sans">
                  ({totalItems} {totalItems === 1 ? 'item' : 'items'})
                </span>
              </div>
              <button
                onClick={closeCart}
                className="p-2 hover:text-gold transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center px-6">
                  <ShoppingBag className="w-12 h-12 text-champagne mb-4" />
                  <p className="font-serif text-xl text-charcoal mb-2">
                    Your bag is empty
                  </p>
                  <p className="text-sm text-warm-gray mb-6">
                    Looks like you haven't added any treasures yet.
                  </p>
                  <Link
                    to="/shop"
                    onClick={closeCart}
                    className="btn-primary"
                  >
                    Continue Shopping
                  </Link>
                </div>
              ) : (
                <div className="divide-y divide-champagne">
                  {items.map((item, index) => (
                    <motion.div
                      key={`${item.product.id}-${item.tone}`}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex gap-4 px-6 py-5"
                    >
                      {/* Product image */}
                      <div className="w-20 h-20 bg-ivory rounded overflow-hidden flex-shrink-0">
                        <div className="w-full h-full bg-gradient-to-br from-gold/10 to-champagne/30 flex items-center justify-center">
                          <span className="text-[8px] font-sans uppercase tracking-wider text-warm-gray text-center px-1">
                            {item.product.name}
                          </span>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="font-serif text-sm uppercase tracking-ultra-wide text-charcoal truncate">
                              {item.product.name}
                            </h3>
                            <p className="text-xs text-warm-gray mt-0.5 capitalize">
                              {item.tone} tone
                            </p>
                          </div>
                          <button
                            onClick={() => removeItem(index)}
                            className="p-1 text-warm-gray hover:text-charcoal transition-colors flex-shrink-0"
                            aria-label="Remove item"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="flex items-center justify-between mt-3">
                          {/* Quantity */}
                          <div className="flex items-center border border-champagne rounded">
                            <button
                              onClick={() => updateQuantity(index, item.quantity - 1)}
                              className="p-1.5 hover:text-gold transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center text-xs font-sans font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(index, item.quantity + 1)}
                              className="p-1.5 hover:text-gold transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          {/* Price */}
                          <p className="font-sans text-sm font-medium text-charcoal">
                            {formatPrice(item.product.price * item.quantity)}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-champagne px-6 py-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-sm text-warm-gray uppercase tracking-wider">
                    Subtotal
                  </span>
                  <span className="font-serif text-xl text-charcoal">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
                <p className="text-xs text-warm-gray">
                  Shipping & taxes calculated at checkout
                </p>
                <button className="btn-primary w-full">
                  Checkout
                </button>
                <button
                  onClick={closeCart}
                  className="w-full text-center text-xs text-warm-gray uppercase tracking-wider hover:text-gold transition-colors py-1"
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
