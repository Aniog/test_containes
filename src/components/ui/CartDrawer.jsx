import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    getCartTotal,
  } = useCart();

  const total = getCartTotal();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="cart-overlay open"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="cart-drawer open" role="dialog" aria-label="Shopping cart">
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E5DFD6]">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} />
            <span className="font-medium tracking-wide text-sm">YOUR CART</span>
          </div>
          <button
            onClick={closeCart}
            className="text-[#6B645E] hover:text-[#1C1917]"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag size={48} className="text-[#E5DFD6] mb-4" />
            <p className="text-[#6B645E] mb-6">Your cart is empty</p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="btn btn-outline"
            >
              BROWSE COLLECTION
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 py-4 border-b border-[#E5DFD6]">
                  <div className="w-20 h-20 bg-[#F5F2ED] flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="product-name text-xs tracking-[0.06em] pr-2">
                          {item.name}
                        </p>
                        <p className="text-xs text-[#6B645E] mt-0.5">{item.variant}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-[#6B645E] hover:text-[#1C1917] text-xs"
                      >
                        <X size={14} />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E5DFD6]">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center hover:bg-[#F5F2ED]"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-7 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center hover:bg-[#F5F2ED]"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
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

            {/* Footer */}
            <div className="border-t border-[#E5DFD6] px-6 py-5 bg-[#F8F5F0]">
              <div className="flex justify-between items-baseline mb-4">
                <span className="text-sm tracking-wide">TOTAL</span>
                <span className="text-xl font-medium">${total.toFixed(2)}</span>
              </div>
              <p className="text-xs text-[#6B645E] mb-4">
                Shipping calculated at checkout
              </p>
              <button
                onClick={() => {
                  alert('Thank you for your interest! Checkout would be integrated here.');
                  closeCart();
                }}
                className="btn btn-primary w-full mb-3"
              >
                PROCEED TO CHECKOUT
              </button>
              <Link
                to="/shop"
                onClick={closeCart}
                className="block text-center text-xs tracking-widest text-[#6B645E] hover:text-[#B8976A]"
              >
                CONTINUE SHOPPING
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;