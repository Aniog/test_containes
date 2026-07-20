import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

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
      {/* Overlay */}
      <div
        className={`cart-overlay ${isCartOpen ? 'open' : ''}`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#E5E0D8]">
            <div className="font-serif text-xl tracking-[0.1em]">Your Cart</div>
            <button onClick={() => setIsCartOpen(false)} className="p-2">
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          {cart.length > 0 ? (
            <>
              <div className="flex-1 overflow-auto px-6 py-6 space-y-6">
                {cart.map((item) => (
                  <div key={item.cartId} className="flex gap-4">
                    <div className="w-20 h-20 bg-[#F5F2ED] flex-shrink-0">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <div>
                          <div className="product-name text-sm tracking-wider pr-2">
                            {item.name}
                          </div>
                          <div className="text-xs text-[#6B6560] mt-0.5">
                            {item.selectedVariant} · ${item.price}
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.cartId)}
                          className="text-[#6B6560] hover:text-[#1A1816]"
                        >
                          <X size={14} />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-[#E5E0D8]">
                          <button
                            onClick={() => updateQuantity(item.cartId, item.cartQuantity - 1)}
                            className="p-1.5 hover:bg-[#F5F2ED]"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 text-sm">{item.cartQuantity}</span>
                          <button
                            onClick={() => updateQuantity(item.cartId, item.cartQuantity + 1)}
                            className="p-1.5 hover:bg-[#F5F2ED]"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <div className="font-medium">
                          ${(item.price * item.cartQuantity).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-[#E5E0D8] p-6 space-y-4">
                <div className="flex justify-between text-lg">
                  <span>Total</span>
                  <span className="font-medium">${cartTotal.toFixed(2)}</span>
                </div>
                <button className="btn btn-primary w-full">
                  Proceed to Checkout
                </button>
                <p className="text-center text-xs text-[#6B6560]">
                  Free worldwide shipping on orders over $75
                </p>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
              <ShoppingBag size={48} className="text-[#E5E0D8] mb-4" />
              <p className="text-lg mb-2">Your cart is empty</p>
              <p className="text-sm text-[#6B6560] mb-6">
                Discover our collection of demi-fine jewelry
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="btn btn-outline"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;