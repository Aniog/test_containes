import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-stone-200">
          <h2 className="serif-heading text-xl tracking-wider">YOUR BAG ({totalItems})</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-stone-100 rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-stone-600" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-6">
              <ShoppingBag className="w-12 h-12 text-stone-300 mb-4" />
              <p className="serif-heading text-lg text-stone-600 mb-2">Your bag is empty</p>
              <p className="text-sm text-stone-400 mb-6">Discover our collection of demi-fine jewelry</p>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="btn-primary"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="p-6 space-y-6">
              {items.map(item => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-20 bg-stone-100 rounded overflow-hidden flex-shrink-0">
                    <div
                      className="w-full h-full bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center"
                      data-strk-bg-id={`cart-thumb-${item.imageId}`}
                      data-strk-bg="[cart-item]"
                      data-strk-bg-ratio="1x1"
                      data-strk-bg-width="200"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="product-name text-sm text-stone-800 truncate">{item.name}</h3>
                    <p className="text-xs text-stone-500 mt-0.5">{item.variant}</p>
                    <p className="text-sm font-medium text-stone-800 mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 border border-stone-300 rounded flex items-center justify-center hover:bg-stone-100 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 border border-stone-300 rounded flex items-center justify-center hover:bg-stone-100 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto text-xs text-stone-400 hover:text-red-500 transition-colors"
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
          <div className="border-t border-stone-200 p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-stone-600">Subtotal</span>
              <span className="serif-heading text-lg">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-stone-400">Shipping & taxes calculated at checkout</p>
            <button className="btn-dark w-full">
              Checkout
            </button>
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-full text-sm text-stone-500 hover:text-stone-800 transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
