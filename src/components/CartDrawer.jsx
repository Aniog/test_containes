import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-50 animate-fade-in"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full sm:w-[420px] bg-[#faf8f5] z-50 animate-slide-up flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#e8e4df]">
          <h2 className="velmora-heading text-lg tracking-[0.15em]">Your Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:text-[#b8860b] transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-6">
              <ShoppingBag className="w-12 h-12 text-[#9a9490] mb-4" />
              <p className="velmora-heading text-lg tracking-[0.1em] mb-2">Your cart is empty</p>
              <p className="text-sm text-[#6b6560] mb-6">Discover our beautiful collection</p>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="velmora-btn-primary"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="p-6 space-y-6">
              {cartItems.map(item => (
                <div key={item.id} className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-24 object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="velmora-product-name text-sm tracking-[0.1em] mb-1">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#6b6560] mb-2">{item.variant} Tone</p>
                    <p className="text-sm font-medium mb-3">${item.price.toFixed(2)}</p>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-[#e8e4df]">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-[#f3f0eb] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-[#f3f0eb] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-[#9a9490] hover:text-[#b8860b] transition-colors underline"
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
        {cartItems.length > 0 && (
          <div className="border-t border-[#e8e4df] p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Subtotal</span>
              <span className="velmora-heading text-lg">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-[#6b6560]">Shipping & taxes calculated at checkout</p>
            <button className="velmora-btn-primary w-full">
              Checkout
            </button>
            <Link
              to="/shop"
              onClick={() => setIsCartOpen(false)}
              className="block text-center text-xs tracking-[0.15em] uppercase hover:text-[#b8860b] transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
