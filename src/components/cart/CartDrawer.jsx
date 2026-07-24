import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useEffect } from 'react';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalItems, totalPrice } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream-50 z-50 shadow-2xl transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="font-serif text-xl tracking-widest uppercase text-charcoal">
              Cart ({totalItems})
            </h2>
            <button
              onClick={closeCart}
              className="p-2 text-charcoal hover:text-gold-600 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-gray-300 mb-4" />
                <p className="font-serif text-lg text-charcoal mb-2">Your cart is empty</p>
                <p className="text-sm text-gray-400">Discover our collection and find your perfect piece.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4 pb-6 border-b border-gray-100"
                  >
                    {/* Product image placeholder */}
                    <div className="w-20 h-20 bg-cream-200 flex-shrink-0 flex items-center justify-center">
                      <ShoppingBag className="w-6 h-6 text-gold-400" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm tracking-widest uppercase text-charcoal truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-400 mt-0.5">{item.variant}</p>
                      <p className="font-sans text-sm font-medium text-charcoal mt-1">
                        ${item.price}
                      </p>

                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center border border-gray-200 hover:border-gold-400 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-sans w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center border border-gray-200 hover:border-gold-400 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="ml-auto text-xs text-gray-400 hover:text-red-500 transition-colors underline"
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
            <div className="border-t border-gray-200 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-sans text-sm text-gray-500 uppercase tracking-wider">Subtotal</span>
                <span className="font-serif text-xl text-charcoal">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-gray-400">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full text-center">
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
