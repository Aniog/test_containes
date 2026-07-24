import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`overlay ${isCartOpen ? 'active' : ''}`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-[#FAF8F5] z-50 shadow-xl transform transition-transform duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#E8E2D9]">
            <h2 className="font-serif text-xl tracking-wide text-[#2C2824]">
              Your Cart
            </h2>
            <button
              onClick={closeCart}
              className="p-2 text-[#6B635A] hover:text-[#2C2824] transition-colors"
              aria-label="Close cart"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={48} strokeWidth={1} className="text-[#9A8F82] mb-4" />
                <p className="font-serif text-lg text-[#2C2824] mb-2">Your cart is empty</p>
                <p className="text-sm text-[#6B635A] mb-6">Add some beautiful jewelry to get started</p>
                <button
                  onClick={closeCart}
                  className="btn btn-primary"
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
                    <div className="w-24 h-24 bg-[#F5F1EB] overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="product-name text-sm mb-1">{item.name}</h3>
                      <p className="text-sm text-[#6B635A] mb-2">{item.variant}</p>
                      <p className="font-sans text-sm text-[#2C2824] mb-3">
                        ${item.price.toFixed(2)}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-[#E8E2D9]">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-2 text-[#6B635A] hover:text-[#2C2824] transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} strokeWidth={2} />
                          </button>
                          <span className="w-8 text-center text-sm text-[#2C2824]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-2 text-[#6B635A] hover:text-[#2C2824] transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} strokeWidth={2} />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-sm text-[#9A8F82] hover:text-[#2C2824] transition-colors"
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
            <div className="p-6 border-t border-[#E8E2D9]">
              <div className="flex items-center justify-between mb-4">
                <span className="font-sans text-sm text-[#6B635A]">Subtotal</span>
                <span className="font-serif text-lg text-[#2C2824]">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-[#9A8F82] mb-4">
                Shipping and taxes calculated at checkout
              </p>
              <button className="btn btn-accent w-full mb-3">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="btn btn-outline w-full"
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