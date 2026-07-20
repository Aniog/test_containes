import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const { items, isOpen, cartTotal, closeCart, removeItem, updateQuantity } =
    useCart();

  const cartItems = Object.entries(items);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] bg-stone-950/40 backdrop-blur-sm transition-opacity"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md z-[70] bg-cream-50 shadow-2xl transform transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200">
          <h2 className="font-serif text-lg tracking-[0.15em] text-stone-950 uppercase">
            Your Cart
          </h2>
          <button
            onClick={closeCart}
            className="p-2 text-stone-500 hover:text-stone-950 transition-colors"
            aria-label="Close cart"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto px-6 py-4" style={{ maxHeight: 'calc(100vh - 220px)' }}>
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-20">
              <ShoppingBag size={40} strokeWidth={1} className="text-stone-300 mb-4" />
              <p className="font-serif text-lg text-stone-500 mb-2">
                Your cart is empty
              </p>
              <p className="font-sans text-sm text-stone-400">
                Discover our handcrafted pieces
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {cartItems.map(([key, cartItem]) => (
                <div
                  key={key}
                  className="flex gap-4 py-4 border-b border-stone-100 last:border-b-0"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-20 bg-stone-100 rounded overflow-hidden flex-shrink-0">
                    <img
                      src={cartItem.product.imageUrl}
                      alt={cartItem.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-wider text-stone-950 truncate">
                      {cartItem.product.name}
                    </h3>
                    <p className="font-sans text-xs text-stone-500 mt-0.5 capitalize">
                      {cartItem.variant}
                    </p>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity controls */}
                      <div className="flex items-center border border-stone-200 rounded">
                        <button
                          onClick={() => updateQuantity(key, cartItem.quantity - 1)}
                          className="p-1.5 text-stone-500 hover:text-stone-950 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} strokeWidth={1.5} />
                        </button>
                        <span className="px-3 font-sans text-xs text-stone-950 tabular-nums">
                          {cartItem.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(key, cartItem.quantity + 1)}
                          className="p-1.5 text-stone-500 hover:text-stone-950 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} strokeWidth={1.5} />
                        </button>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="font-sans text-sm font-medium text-stone-950">
                          ${(cartItem.product.price * cartItem.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeItem(key)}
                          className="font-sans text-[10px] uppercase tracking-wider text-stone-400 hover:text-stone-950 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 bg-cream-50 border-t border-stone-200 px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-xs uppercase tracking-wider text-stone-500">
                Subtotal
              </span>
              <span className="font-serif text-lg text-stone-950">
                ${cartTotal.toFixed(2)}
              </span>
            </div>
            <p className="font-sans text-[10px] text-stone-400 mb-4 text-center">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-stone-950 text-cream-50 py-3.5 font-sans text-xs uppercase tracking-[0.18em] font-medium hover:bg-stone-800 transition-colors duration-300">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
