import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

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
      <div
        className="overlay open"
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="p-6 border-b border-[#E5DFD6] flex items-center justify-between">
          <h3 className="serif text-xl tracking-[0.1em]">Your Cart</h3>
          <button onClick={() => setIsCartOpen(false)} aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center px-6">
            <p className="text-[#6B6560] mb-4">Your cart is empty</p>
            <button
              onClick={() => setIsCartOpen(false)}
              className="btn btn-outline text-sm"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="p-6 space-y-6 flex-1">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#F5F2ED] flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="product-name text-sm tracking-[0.1em] pr-2">
                          {item.name}
                        </p>
                        <p className="text-xs text-[#6B6560] mt-1">
                          {item.selectedVariant} · ${item.price}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-[#6B6560] hover:text-[#2C2825]"
                        aria-label="Remove item"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E5DFD6]">
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="p-1.5 hover:bg-[#F5F2ED]"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="p-1.5 hover:bg-[#F5F2ED]"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="text-sm font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-[#E5DFD6] bg-[#F8F5F1]">
              <div className="flex justify-between mb-6 text-sm">
                <span className="tracking-[0.05em]">Total</span>
                <span className="font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <button className="btn btn-primary w-full mb-3">
                Proceed to Checkout
              </button>
              <p className="text-center text-xs text-[#6B6560]">
                Shipping calculated at checkout
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;