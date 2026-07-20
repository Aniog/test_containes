import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { isOpen, closeCart, items, updateQuantity, removeItem, subtotal } = useCart();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-charcoal-950/40 backdrop-blur-sm z-[70] transition-opacity"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-cream-50 z-[80] shadow-2xl transform transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal-100">
            <h2 className="font-serif text-xl tracking-widest uppercase">
              Your Cart
            </h2>
            <button
              onClick={closeCart}
              className="p-2 -mr-2 hover:opacity-60 transition-opacity"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-charcoal-300 mb-4" />
                <p className="font-serif text-lg text-charcoal-600">
                  Your cart is empty
                </p>
                <p className="text-sm text-charcoal-400 mt-1">
                  Discover our collection
                </p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="mt-6 inline-block bg-charcoal-900 text-cream-50 px-8 py-3 text-xs font-sans font-medium tracking-widest uppercase hover:bg-charcoal-800 transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <Link
                      to={`/product/${item.id}`}
                      onClick={closeCart}
                      className="w-20 h-24 flex-shrink-0 bg-cream-200 overflow-hidden"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <Link
                        to={`/product/${item.id}`}
                        onClick={closeCart}
                        className="font-serif text-sm tracking-widest uppercase text-charcoal-900 hover:text-gold-600 transition-colors"
                      >
                        {item.name}
                      </Link>
                      <p className="text-xs text-charcoal-500 mt-0.5">
                        {item.variant}
                      </p>
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          className="w-6 h-6 border border-charcoal-200 flex items-center justify-center hover:border-charcoal-400 transition-colors"
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity - 1)
                          }
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-medium w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          className="w-6 h-6 border border-charcoal-200 flex items-center justify-center hover:border-charcoal-400 transition-colors"
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity + 1)
                          }
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-charcoal-400 hover:text-charcoal-700 transition-colors"
                        aria-label="Remove item"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      <span className="text-sm font-medium">
                        ${item.price * item.quantity}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-charcoal-100 px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-charcoal-600">Subtotal</span>
                <span className="font-serif text-lg">${subtotal}</span>
              </div>
              <p className="text-xs text-charcoal-400">
                Shipping and taxes calculated at checkout.
              </p>
              <button className="w-full bg-charcoal-900 text-cream-50 py-3.5 text-xs font-sans font-medium tracking-widest uppercase hover:bg-charcoal-800 transition-colors">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full border border-charcoal-300 text-charcoal-800 py-3.5 text-xs font-sans font-medium tracking-widest uppercase hover:border-charcoal-500 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
