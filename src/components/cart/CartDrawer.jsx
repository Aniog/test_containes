import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[60] transition-opacity"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-ivory z-[70] transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col shadow-2xl`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200">
          <h2 className="font-serif text-xl font-semibold text-stone-900">Your Cart</h2>
          <button
            onClick={closeCart}
            className="p-2 text-stone-600 hover:text-stone-900 transition-colors bg-transparent border-none"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-stone-300 mb-4" />
              <p className="text-stone-500 text-sm">Your cart is empty</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-4 text-sm text-gold hover:text-gold-dark font-medium no-underline"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-cream flex-shrink-0 flex items-center justify-center">
                    <span className="text-xs text-stone-400 text-center px-1">{item.name}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-sm font-medium text-stone-900 uppercase tracking-product truncate">
                      {item.name}
                    </h4>
                    <p className="text-xs text-stone-500 mt-0.5 capitalize">{item.variant} tone</p>
                    <p className="text-sm font-medium text-stone-900 mt-1">${item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-stone-300 text-stone-600 hover:border-gold hover:text-gold transition-colors bg-transparent rounded-none"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium text-stone-900 w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-stone-300 text-stone-600 hover:border-gold hover:text-gold transition-colors bg-transparent rounded-none"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs text-stone-400 hover:text-red-600 transition-colors bg-transparent border-none underline"
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
          <div className="px-6 py-5 border-t border-stone-200 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-stone-600">Subtotal ({itemCount} items)</span>
              <span className="text-lg font-serif font-semibold text-stone-900">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-stone-400">Shipping calculated at checkout</p>
            <button className="w-full py-3.5 bg-gold text-white text-sm font-medium uppercase tracking-widest hover:bg-gold-dark transition-colors border-none rounded-none">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full py-2 text-sm text-stone-600 hover:text-gold transition-colors bg-transparent border-none underline"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
