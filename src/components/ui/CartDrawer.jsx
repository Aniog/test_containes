import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } =
    useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-[#FAF9F7] shadow-xl animate-slide-up">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#E8E4DE]">
            <h2
              className="text-lg tracking-[0.1em] uppercase"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Your Cart
            </h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1 hover:text-[#C9A962] transition-colors duration-300"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-[#E8E4DE] mb-4" />
                <p className="text-[#6B6560] mb-4">Your cart is empty</p>
                <Link
                  to="/shop"
                  onClick={() => setIsCartOpen(false)}
                  className="text-sm tracking-[0.1em] uppercase text-[#C9A962] hover:text-[#B8954F] transition-colors duration-300"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4"
                  >
                    <div className="w-20 h-24 bg-[#F5F3EF] flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-sm tracking-[0.1em] uppercase mb-1"
                        style={{ fontFamily: 'var(--font-serif)' }}
                      >
                        {item.name}
                      </h3>
                      <p className="text-xs text-[#6B6560] capitalize mb-2">
                        {item.variant} Tone
                      </p>
                      <p className="text-sm text-[#C9A962] mb-3">
                        ${item.price}
                      </p>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity - 1)
                          }
                          className="w-8 h-8 flex items-center justify-center border border-[#E8E4DE] hover:border-[#C9A962] transition-colors duration-300"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity + 1)
                          }
                          className="w-8 h-8 flex items-center justify-center border border-[#E8E4DE] hover:border-[#C9A962] transition-colors duration-300"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="ml-auto text-xs text-[#6B6560] hover:text-[#C9A962] transition-colors duration-300"
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
          {cart.length > 0 && (
            <div className="p-6 border-t border-[#E8E4DE]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-[#6B6560]">Subtotal</span>
                <span
                  className="text-lg"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-[#6B6560] mb-4">
                Shipping and taxes calculated at checkout
              </p>
              <button className="w-full py-4 bg-[#C9A962] text-white text-sm tracking-[0.1em] uppercase hover:bg-[#B8954F] transition-colors duration-300 shadow-[0_4px_12px_rgba(201,169,98,0.3)]">
                Checkout
              </button>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="block text-center text-sm text-[#6B6560] mt-4 hover:text-[#C9A962] transition-colors duration-300"
              >
                Continue Shopping
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}