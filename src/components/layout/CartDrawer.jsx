import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    totalPrice,
  } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-cream shadow-xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-warm-200">
            <h2 className="font-serif text-xl text-warm-900">Your Cart</h2>
            <button
              onClick={closeCart}
              className="text-warm-500 hover:text-warm-900 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-10 h-10 text-warm-300 mb-4" />
                <p className="text-warm-500 text-sm">Your cart is empty</p>
                <p className="text-warm-400 text-xs mt-1">Add some pieces to get started</p>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-20 h-24 bg-warm-100 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="product-name truncate">{item.name}</h3>
                      <p className="text-warm-500 text-xs mt-0.5 capitalize">
                        {item.variant} tone
                      </p>
                      <p className="text-sm text-warm-900 mt-1 font-sans">
                        ${item.price.toFixed(2)}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-warm-200">
                          <button
                            className="p-1.5 hover:bg-warm-100 transition-colors"
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity - 1)
                            }
                            disabled={item.quantity <= 1}
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs font-sans">
                            {item.quantity}
                          </span>
                          <button
                            className="p-1.5 hover:bg-warm-100 transition-colors"
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity + 1)
                            }
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          className="text-warm-400 hover:text-warm-900 text-xs transition-colors"
                          onClick={() => removeItem(item.id, item.variant)}
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
                <span className="text-sm text-warm-900 font-sans">Subtotal</span>
                <span className="text-lg font-serif text-warm-900">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-warm-400 text-xs">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full text-center">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full text-center text-sm text-warm-500 hover:text-warm-900 transition-colors py-2"
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