import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { cart, cartTotal, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart } = useCart();

  return (
    <>
      {/* Overlay - sits behind drawer */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-50 transform transition-transform duration-300 ease-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ boxShadow: isCartOpen ? '-4px 0 20px rgba(0,0,0,0.1)' : 'none' }}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#E8E4E0]">
            <h2 className="font-serif text-xl tracking-wider">YOUR CART</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:text-[#C9A962] transition-colors"
              aria-label="Close cart"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          {/* Content */}
          {cart.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center px-6">
              <ShoppingBag size={48} strokeWidth={1} className="text-[#E8E4E0] mb-4" />
              <p className="text-[#8B7E74] text-center mb-6">Your cart is empty</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="btn-secondary"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                {cart.map((item, index) => (
                  <div
                    key={`${item.id}-${item.variant}-${index}`}
                    className="flex gap-4 pb-4 border-b border-[#E8E4E0]"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover bg-[#F5EBE0]"
                    />
                    <div className="flex-1">
                      <h3 className="product-name text-sm mb-1">{item.name}</h3>
                      <p className="text-xs text-[#8B7E74] capitalize mb-2">
                        {item.variant} Gold
                      </p>
                      <p className="font-medium mb-3">${item.price}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-[#E8E4E0]">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-2 hover:bg-[#F5EBE0] transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-2 hover:bg-[#F5EBE0] transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-xs text-[#8B7E74] hover:text-[#A63D40] transition-colors underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-[#E8E4E0] px-6 py-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#8B7E74]">Subtotal</span>
                  <span className="font-medium">${cartTotal.toFixed(2)}</span>
                </div>
                <p className="text-xs text-[#8B7E74]">
                  Shipping and taxes calculated at checkout
                </p>
                <Link
                  to="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="btn-primary w-full text-center block"
                >
                  Checkout
                </Link>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full text-center text-sm text-[#8B7E74] hover:text-[#C9A962] transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
