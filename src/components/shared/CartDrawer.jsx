import { Link } from 'react-router-dom';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export default function CartDrawer() {
  const { isOpen, closeCart, items, updateQuantity, removeItem, subtotal } = useCart();

  return (
    <div
      className={`fixed inset-0 z-[70] transition-opacity ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="absolute inset-0 bg-charcoal/40" onClick={closeCart} />
      <div
        className={`absolute right-0 top-0 bottom-0 w-full max-w-md bg-ivory text-charcoal flex flex-col transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-serif text-xl tracking-widest uppercase">
            Your Cart
          </h2>
          <button onClick={closeCart} aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="font-serif text-lg text-taupe mb-2">Your cart is empty</p>
              <p className="text-sm text-taupe/80">
                Discover pieces crafted to be treasured.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn-primary mt-6 inline-block"
              >
                Shop Collection
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.id}-${item.tone}`} className="flex gap-4">
                <div className="w-20 h-20 bg-[#F2EDE6] flex-shrink-0 overflow-hidden">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="product-name text-sm font-medium leading-tight">
                        {item.name}
                      </p>
                      <p className="text-xs text-taupe mt-0.5 capitalize">
                        {item.tone} tone
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id, item.tone)}
                      className="p-1 text-taupe hover:text-red-600 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-border">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.tone, item.quantity - 1)
                        }
                        className="p-1.5 hover:bg-white transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.tone, item.quantity + 1)
                        }
                        className="p-1.5 hover:bg-white transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <span className="text-sm font-medium">
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
          <div className="px-6 py-5 border-t border-border bg-white">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm uppercase tracking-widest text-taupe">
                Subtotal
              </span>
              <span className="font-serif text-lg">${subtotal.toFixed(0)}</span>
            </div>
            <p className="text-xs text-taupe mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <button className="btn-primary w-full text-center">Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
}
