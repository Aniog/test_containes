import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function CartDrawer() {
  const { isOpen, closeCart, items, updateQuantity, removeItem, subtotal } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[70] bg-ink-900/40 backdrop-blur-sm transition-opacity"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-[80] h-full w-full max-w-md bg-cream-50 shadow-2xl transform transition-transform duration-500 ease-luxury ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-ink-200 px-6 py-5">
            <h2 className="font-serif text-xl tracking-widest text-ink-900 uppercase">
              Your Bag
            </h2>
            <button onClick={closeCart} aria-label="Close cart" className="text-ink-500 hover:text-ink-900 transition-colors">
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={40} className="text-ink-300 mb-4" strokeWidth={1} />
                <p className="font-serif text-lg text-ink-500">Your bag is empty</p>
                <p className="text-sm text-ink-400 mt-1">Explore our collection to find something beautiful.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-sm bg-ink-100">
                      <img
                        src={item.image}
                        alt={item.displayName}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <p className="font-serif text-sm tracking-widest uppercase text-ink-900">
                          {item.name}
                        </p>
                        <p className="text-xs text-ink-400 mt-0.5">{item.variant} Tone</p>
                        <p className="text-sm font-medium text-ink-700 mt-1">
                          {formatPrice(item.price)}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center border border-ink-200 rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="px-2 py-1 hover:bg-ink-100 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="px-2 text-xs font-medium text-ink-700 min-w-[1.5rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="px-2 py-1 hover:bg-ink-100 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-xs text-ink-400 underline hover:text-ink-700 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-ink-200 px-6 py-5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-ink-500">Subtotal</span>
                <span className="font-serif text-lg text-ink-900">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-ink-400 mb-4">Shipping and taxes calculated at checkout.</p>
              <button className="w-full bg-ink-900 text-cream-50 py-3.5 text-xs tracking-widest uppercase font-medium hover:bg-ink-800 transition-colors rounded-sm">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full mt-2 border border-ink-900 text-ink-900 py-3.5 text-xs tracking-widest uppercase font-medium hover:bg-ink-900 hover:text-cream-50 transition-colors rounded-sm"
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
