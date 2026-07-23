import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer({ isOpen, onClose }) {
  const { state, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-[#FAF9F7] z-50 shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E8E4DF]">
          <h2 className="font-serif text-2xl">Your Cart</h2>
          <button
            onClick={onClose}
            className="p-2 hover:text-[#C9A96E] transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {state.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-6">
              <p className="font-serif text-xl mb-2">Your cart is empty</p>
              <p className="text-sm text-[#6B6560] mb-6">Discover pieces you'll love</p>
              <Link
                to="/shop"
                onClick={onClose}
                className="btn-primary"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="p-6 space-y-6">
              {state.items.map((item) => (
                <div key={`${item.productId}-${item.variant}`} className="flex gap-4">
                  {/* Image placeholder */}
                  <div className="w-20 h-24 bg-[#E8E4DF] flex-shrink-0" />

                  <div className="flex-1 min-w-0">
                    <h3 className="product-name text-[#1A1A1A] mb-1">{item.name}</h3>
                    <p className="text-xs text-[#6B6560] capitalize mb-2">{item.variant} tone</p>
                    <p className="text-sm font-medium mb-3">${item.price.toFixed(2)}</p>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-[#E8E4DF]">
                        <button
                          className="p-1.5 hover:text-[#C9A96E] transition-colors"
                          onClick={() => updateQuantity(item.productId, item.variant, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button
                          className="p-1.5 hover:text-[#C9A96E] transition-colors"
                          onClick={() => updateQuantity(item.productId, item.variant, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <button
                        className="p-1.5 text-[#9B9590] hover:text-red-500 transition-colors"
                        onClick={() => removeItem(item.productId, item.variant)}
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="border-t border-[#E8E4DF] p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#6B6560]">Subtotal</span>
              <span className="font-serif text-xl">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-[#9B9590]">Shipping & taxes calculated at checkout</p>
            <button className="btn-accent w-full">
              Checkout
            </button>
            <Link
              to="/shop"
              onClick={onClose}
              className="block text-center text-xs tracking-widest uppercase text-[#6B6560] hover:text-[#1A1A1A] transition-colors py-2"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
