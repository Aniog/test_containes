import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, subtotal } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-velmora-base/40 backdrop-blur-sm"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-velmora-cream h-full shadow-2xl flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-warm">
          <h2 className="font-serif text-2xl tracking-wide">Your Cart</h2>
          <button onClick={closeCart} className="p-1 hover:text-velmora-gold transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-velmora-stone">
              <ShoppingBag className="w-12 h-12 mb-4 opacity-40" />
              <p className="font-serif text-lg">Your cart is empty</p>
              <p className="text-sm mt-1">Discover something beautiful.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-velmora-sand rounded overflow-hidden flex-shrink-0">
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-base tracking-wide truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-velmora-stone mt-0.5 uppercase tracking-wider">
                      {item.variant}
                    </p>
                    <p className="text-sm font-medium mt-1">
                      ${item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.variant, item.quantity - 1)
                        }
                        className="w-7 h-7 border border-velmora-warm rounded flex items-center justify-center hover:border-velmora-gold transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.variant, item.quantity + 1)
                        }
                        className="w-7 h-7 border border-velmora-warm rounded flex items-center justify-center hover:border-velmora-gold transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs text-velmora-stone underline hover:text-velmora-gold transition-colors"
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
          <div className="px-6 py-5 border-t border-velmora-warm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-velmora-stone">Subtotal</span>
              <span className="font-serif text-xl">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-stone mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <button className="w-full bg-velmora-base text-white py-3.5 text-xs uppercase tracking-widest font-medium hover:bg-velmora-gold transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
