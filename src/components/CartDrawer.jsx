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
        className="fixed inset-0 bg-black/40 z-50"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="cart-drawer fixed right-0 top-0 bottom-0 w-full max-w-md bg-[#F8F5F1] z-50 flex flex-col open">
        <div className="flex items-center justify-between p-6 border-b border-[#E5DFD6]">
          <h3 className="serif text-xl tracking-[0.1em]">Your Cart</h3>
          <button onClick={() => setIsCartOpen(false)} className="p-2">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <p className="text-[#6B605A] mb-6">Your cart is empty</p>
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
            <div className="flex-1 overflow-auto p-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#F0EBE3] flex-shrink-0">
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
                        <p className="text-xs text-[#6B605A] mt-1">
                          {item.variant}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-[#6B605A] hover:text-[#2C2522]"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E5DFD6]">
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="p-1.5 hover:bg-[#F0EBE3]"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="p-1.5 hover:bg-[#F0EBE3]"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="font-medium">${item.price * item.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-[#E5DFD6] space-y-4">
              <div className="flex justify-between text-lg">
                <span>Total</span>
                <span className="font-medium">${cartTotal}</span>
              </div>
              <button className="btn btn-primary w-full">
                Proceed to Checkout
              </button>
              <p className="text-center text-xs text-[#6B605A]">
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