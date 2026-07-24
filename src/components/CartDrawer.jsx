import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartTotal,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-[60] backdrop"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className={`fixed top-0 right-0 bottom-0 w-full max-w-md bg-[#F8F5F0] z-[70] cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#E5E0D5]">
            <span className="uppercase tracking-[0.1em] text-sm">Your Cart</span>
            <button onClick={() => setIsCartOpen(false)} aria-label="Close cart">
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          {cart.length > 0 ? (
            <>
              <div className="flex-1 overflow-auto px-6 py-6 space-y-6">
                {cart.map((item) => (
                  <div key={item.cartId} className="flex gap-4">
                    <div className="w-20 h-20 bg-[#E8E4DC] flex-shrink-0">
                      <img
                        src={item.image1}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <div>
                          <div className="product-name text-sm tracking-[0.1em] pr-2">{item.name}</div>
                          <div className="text-xs text-[#5A5A5A] mt-0.5">{item.selectedVariant}</div>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.cartId)}
                          className="text-[#5A5A5A] hover:text-[#0F0F0F]"
                        >
                          <X size={14} />
                        </button>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center border border-[#E5E0D5]">
                          <button
                            onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                            className="p-1.5 hover:bg-[#E8E4DC]"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                            className="p-1.5 hover:bg-[#E8E4DC]"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-[#E5E0D5] p-6 space-y-4">
                <div className="flex justify-between text-sm uppercase tracking-[0.08em]">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <button className="btn-gold w-full">Checkout</button>
                <p className="text-center text-xs text-[#5A5A5A]">Shipping calculated at checkout</p>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
              <ShoppingBag size={48} className="text-[#E5E0D5] mb-4" />
              <p className="text-lg mb-2">Your cart is empty</p>
              <p className="text-sm text-[#5A5A5A] mb-8">Discover our collection of demi-fine jewelry.</p>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="btn-primary"
              >
                Shop Now
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
