import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
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
      {/* Overlay */}
      <div
        className="overlay open"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="cart-drawer open">
        <div className="p-6 border-b border-[#E5DFD6] flex items-center justify-between">
          <span className="uppercase tracking-[0.15em] text-sm">Your Cart</span>
          <button onClick={() => setIsCartOpen(false)} aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] px-6 text-center">
            <p className="text-[#6B655F] mb-6">Your cart is empty</p>
            <Link
              to="/shop"
              onClick={() => setIsCartOpen(false)}
              className="btn btn-primary"
            >
              Shop Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="p-6 space-y-6 flex-1 overflow-auto">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#F2EFEA] flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="product-name text-xs tracking-[0.12em] pr-2">
                          {item.name}
                        </p>
                        <p className="text-xs text-[#6B655F] mt-1">
                          {item.selectedVariant}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-[#6B655F] hover:text-[#2C2825]"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E5DFD6]">
                        <button
                          onClick={() =>
                            updateQuantity(item.cartId, item.quantity - 1)
                          }
                          className="p-1.5 hover:bg-[#F2EFEA]"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.cartId, item.quantity + 1)
                          }
                          className="p-1.5 hover:bg-[#F2EFEA]"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="text-sm font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-[#E5DFD6] mt-auto">
              <div className="flex justify-between mb-6 text-sm">
                <span className="uppercase tracking-[0.1em]">Total</span>
                <span className="font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <button className="btn btn-primary w-full mb-3">
                Proceed to Checkout
              </button>
              <p className="text-center text-xs text-[#6B655F]">
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