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
        className="fixed inset-0 bg-black/40 z-50"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-[#f8f6f3] z-50 flex flex-col cart-drawer open">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#e5e0d8]">
          <div className="font-serif text-xl tracking-[0.1em]">YOUR CART</div>
          <button onClick={() => setIsCartOpen(false)} className="text-[#2c2a28]">
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        {cart.length > 0 ? (
          <>
            <div className="flex-1 overflow-auto px-6 py-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#e5e0d8] flex-shrink-0">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <div className="font-serif text-sm tracking-[0.1em] pr-2">{item.name}</div>
                        <div className="text-xs text-[#6b6763] mt-0.5">{item.selectedVariant}</div>
                      </div>
                      <div className="text-sm font-medium whitespace-nowrap">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#e5e0d8]">
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="p-1.5 hover:bg-[#e5e0d8]"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="p-1.5 hover:bg-[#e5e0d8]"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-xs text-[#6b6763] hover:text-[#2c2a28]"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-[#e5e0d8] p-6 space-y-4">
              <div className="flex justify-between text-sm">
                <span>SUBTOTAL</span>
                <span className="font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-[#6b6763]">Shipping calculated at checkout</p>
              <button className="btn btn-primary w-full">CHECKOUT</button>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="block text-center text-sm tracking-[0.05em] hover:text-[#8b7355]"
              >
                CONTINUE SHOPPING
              </Link>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag size={48} className="text-[#e5e0d8] mb-4" />
            <div className="font-serif text-xl mb-2">Your cart is empty</div>
            <p className="text-sm text-[#6b6763] mb-6">Discover our collection of fine jewelry.</p>
            <Link
              to="/shop"
              onClick={() => setIsCartOpen(false)}
              className="btn btn-primary"
            >
              SHOP NOW
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
