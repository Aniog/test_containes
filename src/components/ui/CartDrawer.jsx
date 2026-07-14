import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '../../context/CartContext';
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
        className="fixed inset-0 bg-black/40 z-[60]"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-[#F8F5F1] z-[70] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#D4C5B5]">
          <h2 className="font-serif text-xl tracking-[2px]">YOUR CART</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-[#2C2522] hover:text-[#8B7355]"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <p className="text-[#6B6058] mb-6">Your cart is empty</p>
            <Link
              to="/shop"
              onClick={() => setIsCartOpen(false)}
              className="px-8 py-3 bg-[#2C2522] text-white text-sm tracking-[2px] hover:bg-[#8B7355] transition-colors"
            >
              SHOP COLLECTION
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#EDE8E0] flex-shrink-0">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-serif text-sm tracking-[1px] text-[#2C2522]">
                          {item.name}
                        </p>
                        <p className="text-xs text-[#8B7355] mt-0.5">
                          {item.selectedVariant}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-[#8B7355] hover:text-[#2C2522]"
                      >
                        <X size={14} />
                      </button>
                    </div>
                    <p className="text-sm mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() =>
                          updateQuantity(item.cartId, item.quantity - 1)
                        }
                        className="w-7 h-7 flex items-center justify-center border border-[#D4C5B5] hover:bg-[#EDE8E0]"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.cartId, item.quantity + 1)
                        }
                        className="w-7 h-7 flex items-center justify-center border border-[#D4C5B5] hover:bg-[#EDE8E0]"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-[#D4C5B5] px-6 py-6">
              <div className="flex justify-between mb-6 text-sm">
                <span>TOTAL</span>
                <span className="font-medium">${cartTotal}</span>
              </div>
              <button className="w-full py-4 bg-[#2C2522] text-white text-sm tracking-[2px] hover:bg-[#8B7355] transition-colors mb-3">
                CHECKOUT
              </button>
              <p className="text-center text-xs text-[#6B6058]">
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