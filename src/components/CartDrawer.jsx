import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    cartTotal,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div
        className={`cart-overlay ${isCartOpen ? 'open' : ''}`}
        onClick={() => setIsCartOpen(false)}
      />
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="p-6 border-b border-[#e5e0d8] flex items-center justify-between">
          <h3 className="serif text-xl">Your Cart</h3>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-[#6b635c] hover:text-[#2c2825]"
          >
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] px-6 text-center">
            <p className="text-[#6b635c] mb-6">Your cart is empty</p>
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
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#f5f2ed] flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="product-name text-sm tracking-wider">{item.name}</p>
                        <p className="text-xs text-[#6b635c] mt-0.5">{item.selectedVariant}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-[#6b635c] hover:text-[#2c2825]"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#e5e0d8]">
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="p-1.5 hover:bg-[#f5f2ed]"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="p-1.5 hover:bg-[#f5f2ed]"
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

            <div className="p-6 border-t border-[#e5e0d8] bg-[#faf8f5]">
              <div className="flex justify-between mb-6 text-sm">
                <span>Subtotal</span>
                <span className="font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-[#6b635c] mb-4 text-center">
                Shipping calculated at checkout
              </p>
              <button className="btn btn-primary w-full mb-3">
                Checkout
              </button>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="block text-center text-sm text-[#6b635c] hover:text-[#2c2825]"
              >
                Continue Shopping
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;