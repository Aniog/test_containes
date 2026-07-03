import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black/40 z-[60] transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md bg-[#FDFBFA] z-[70] shadow-xl transform transition-transform duration-300 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-warm-200">
            <h2 className="font-serif text-lg tracking-wide-xl uppercase">
              Cart ({totalItems})
            </h2>
            <button onClick={closeCart} className="p-1 hover:text-gold-600 transition-colors" aria-label="Close cart">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-warm-400">
                <ShoppingBag className="w-12 h-12 mb-4" />
                <p className="text-sm">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4 py-4 border-b border-warm-200 last:border-0"
                  >
                    <div className="w-20 h-20 bg-warm-200 rounded overflow-hidden flex-shrink-0">
                      <img
                        src={item.images?.[0]}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs tracking-wide-lg uppercase font-sans font-medium text-ink">
                        {item.name}
                      </h3>
                      <p className="text-xs text-warm-500 mt-0.5">{item.variant}</p>
                      <p className="text-sm font-medium text-ink mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-warm-300 rounded">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1 hover:text-gold-600 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-xs font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1 hover:text-gold-600 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-xs text-warm-500 hover:text-gold-600 transition-colors"
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
            <div className="border-t border-warm-200 px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-sans text-ink">Subtotal</span>
                <span className="font-serif text-lg font-medium">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-warm-500">Shipping & taxes calculated at checkout</p>
              <button className="w-full bg-ink text-white py-3 text-sm tracking-wide-lg uppercase font-sans hover:bg-ink/90 transition-colors">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full text-xs tracking-wide-lg uppercase text-ink hover:text-gold-600 transition-colors text-center block"
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