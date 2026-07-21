import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-400 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-velvet-950 border-l border-warm-800/30 flex flex-col transition-transform duration-400 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-warm-800/30">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-gold-400" />
            <span className="text-sm tracking-wider uppercase text-warm-50">
              Your Cart ({items.length})
            </span>
          </div>
          <button
            onClick={closeCart}
            className="text-warm-400 hover:text-gold-400 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <ShoppingBag className="w-12 h-12 text-warm-700" />
              <p className="text-warm-400 text-sm">Your cart is empty</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn-outline text-xs px-6 py-2"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.key}
                className="flex gap-4 py-4 border-b border-warm-800/20"
              >
                <div className="w-20 h-20 flex-shrink-0 rounded-sm overflow-hidden bg-velvet-800">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xs tracking-wider uppercase text-warm-200 font-serif">
                        {item.name}
                      </h4>
                      <p className="text-xs text-warm-500 mt-0.5">{item.color}</p>
                    </div>
                    <button
                      onClick={() => removeItem(item.key)}
                      className="text-warm-600 hover:text-warm-300 transition-colors ml-2"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-warm-700/40 rounded-sm">
                      <button
                        onClick={() =>
                          updateQuantity(item.key, item.quantity - 1)
                        }
                        className="w-7 h-7 flex items-center justify-center text-warm-400 hover:text-gold-400 transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-7 h-7 flex items-center justify-center text-xs text-warm-200">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.key, item.quantity + 1)
                        }
                        className="w-7 h-7 flex items-center justify-center text-warm-400 hover:text-gold-400 transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <span className="text-sm text-gold-400 font-medium">
                      ${(item.price * item.quantity).toFixed(0)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-warm-800/30 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-warm-300">Subtotal</span>
              <span className="text-lg font-serif text-gold-400">
                ${subtotal.toFixed(0)}
              </span>
            </div>
            <p className="text-xs text-warm-500 text-center">
              Shipping & taxes calculated at checkout
            </p>
            <button className="btn-primary w-full">Checkout</button>
            <button
              onClick={closeCart}
              className="w-full text-center text-xs text-warm-500 hover:text-warm-300 underline underline-offset-4 transition-colors py-1"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
