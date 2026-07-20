import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, drawerOpen, closeDrawer, removeItem, updateQuantity, totalPrice } = useCart();

  return (
    <>
      {/* Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[60] transition-opacity"
          onClick={closeDrawer}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-ivory z-[70] shadow-2xl transform transition-transform duration-300 ease-out ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200">
            <h2 className="font-serif text-xl tracking-wider text-stone-900">Your Cart</h2>
            <button
              onClick={closeDrawer}
              className="p-1 text-stone-500 hover:text-stone-900 transition-colors"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={48} className="text-stone-300 mb-4" strokeWidth={1} />
                <p className="font-serif text-lg text-stone-500 mb-2">Your cart is empty</p>
                <p className="text-sm text-stone-400 mb-6">Discover our handcrafted collection</p>
                <Link
                  to="/collection"
                  onClick={closeDrawer}
                  className="inline-block bg-stone-900 text-white px-6 py-2.5 text-xs tracking-widest uppercase font-sans font-medium hover:bg-gold transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4 py-4 border-b border-stone-100"
                  >
                    {/* Product image swatch */}
                    <div className="w-20 h-20 bg-gradient-to-br from-gold-light to-gold rounded overflow-hidden flex-shrink-0 flex items-center justify-center">
                      <ShoppingBag size={20} className="text-white/60" strokeWidth={1.5} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm font-semibold text-stone-900 uppercase tracking-wider">
                        {item.name}
                      </h3>
                      <p className="text-xs text-stone-500 mt-0.5">{item.variant}</p>
                      <p className="text-sm font-medium text-stone-800 mt-1">${item.price}</p>

                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-stone-200 rounded">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1.5 text-stone-500 hover:text-stone-900"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="px-2 text-xs font-medium text-stone-800 min-w-[20px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1.5 text-stone-500 hover:text-stone-900"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-xs text-stone-400 underline hover:text-stone-700 transition-colors"
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
            <div className="border-t border-stone-200 px-6 py-5 space-y-4">
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-stone-500">Subtotal</span>
                <span className="font-serif text-lg font-semibold text-stone-900">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-stone-400">Shipping & taxes calculated at checkout</p>
              <button className="w-full bg-stone-900 text-white py-3.5 text-xs tracking-widest uppercase font-sans font-medium hover:bg-gold transition-colors">
                Proceed to Checkout
              </button>
              <button
                onClick={closeDrawer}
                className="w-full text-center text-xs tracking-wider uppercase text-stone-500 hover:text-stone-900 transition-colors py-1"
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
