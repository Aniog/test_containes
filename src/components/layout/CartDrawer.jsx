import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[70]">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[#1A1918]/50 transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-[#FAF9F7] shadow-[0_25px_50px_rgba(26,25,24,0.15)] animate-slide-up">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#E5E2DE]">
            <h2 className="font-serif text-2xl font-medium text-[#1A1918]">Your Cart</h2>
            <button
              onClick={closeCart}
              className="p-2 hover:opacity-70 transition-opacity"
              aria-label="Close cart"
            >
              <X className="w-5 h-5 text-[#1A1918]" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-16 h-16 text-[#E5E2DE] mb-4" />
                <p className="text-[#6B6560] mb-6">Your cart is empty</p>
                <button
                  onClick={closeCart}
                  className="btn-secondary text-sm"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4"
                  >
                    <Link
                      to={`/product/${item.id}`}
                      onClick={closeCart}
                      className="w-24 h-24 bg-[#E8DCC4] flex-shrink-0 overflow-hidden"
                    >
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                    <div className="flex-1">
                      <Link
                        to={`/product/${item.id}`}
                        onClick={closeCart}
                        className="font-serif uppercase tracking-[0.15em] text-sm text-[#1A1918] hover:text-[#C9A962] transition-colors"
                      >
                        {item.name}
                      </Link>
                      <p className="text-sm text-[#6B6560] capitalize mt-1">{item.variant} Tone</p>
                      <p className="text-sm font-semibold text-[#1A1918] mt-1">${item.price}</p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-8 h-8 border border-[#E5E2DE] flex items-center justify-center hover:border-[#C9A962] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-8 h-8 border border-[#E5E2DE] flex items-center justify-center hover:border-[#C9A962] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="ml-auto text-sm text-[#6B6560] hover:text-[#C9A962] transition-colors"
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
            <div className="p-6 border-t border-[#E5E2DE]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#6B6560]">Subtotal</span>
                <span className="text-xl font-semibold text-[#1A1918]">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-sm text-[#6B6560] mb-4">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full text-center text-sm text-[#6B6560] hover:text-[#C9A962] mt-4 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}