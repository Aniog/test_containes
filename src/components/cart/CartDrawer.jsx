import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, cartTotal, cartCount, removeItem, updateQuantity, setCartOpen } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity duration-300"
        onClick={() => setCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-[#FBF9F6] z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8E4DF]">
          <h2 className="font-['Cormorant_Garamond'] text-xl font-semibold tracking-wide text-[#1A1A1A]">
            Shopping Bag ({cartCount})
          </h2>
          <button
            onClick={() => setCartOpen(false)}
            className="p-2 hover:text-[#B8860B] transition-colors duration-300"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-[#D6D3D1] mb-4" />
              <p className="text-[#78716C] font-medium mb-2">Your bag is empty</p>
              <p className="text-sm text-[#A8A29E] mb-6">
                Discover our collection of fine jewelry.
              </p>
              <button
                onClick={() => setCartOpen(false)}
                className="px-6 py-3 bg-[#1A1A1A] text-[#FBF9F6] text-xs font-medium tracking-[0.15em] uppercase hover:bg-[#B8860B] transition-colors duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                  {/* Image placeholder */}
                  <div className="w-20 h-20 bg-[#E8E4DF] rounded-sm flex-shrink-0 flex items-center justify-center">
                    <span className="text-xs text-[#78716C]">IMG</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-sm font-medium text-[#1A1A1A] tracking-wide">
                          {item.name}
                        </h3>
                        <p className="text-xs text-[#78716C] mt-0.5 capitalize">
                          {item.variant === 'gold' ? '18K Gold' : 'Sterling Silver'}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-[#A8A29E] hover:text-[#1A1A1A] transition-colors duration-300"
                        aria-label="Remove item"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E8E4DF] rounded-sm">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 hover:text-[#B8860B] transition-colors duration-300"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-xs font-medium text-[#1A1A1A]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 hover:text-[#B8860B] transition-colors duration-300"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm font-medium text-[#1A1A1A]">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-[#E8E4DF] px-6 py-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-[#78716C]">Subtotal</span>
              <span className="text-lg font-semibold text-[#1A1A1A]">
                ${cartTotal.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-[#A8A29E]">
              Shipping and taxes calculated at checkout.
            </p>
            <button className="w-full py-4 bg-[#1A1A1A] text-[#FBF9F6] text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#B8860B] transition-colors duration-300">
              Checkout
            </button>
            <button
              onClick={() => setCartOpen(false)}
              className="w-full py-3 border border-[#1A1A1A] text-[#1A1A1A] text-xs font-medium tracking-[0.15em] uppercase hover:bg-[#1A1A1A] hover:text-[#FBF9F6] transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
