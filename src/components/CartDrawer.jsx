import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    closeCart,
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
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="p-6 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[#E5DFD6]">
            <h3 className="text-lg tracking-[0.1em] uppercase">Your Cart</h3>
            <button onClick={closeCart} aria-label="Close cart">
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          {cart.length > 0 ? (
            <>
              <div className="flex-1 overflow-y-auto py-6 space-y-6">
                {cart.map((item) => (
                  <div key={item.cartId} className="flex gap-4">
                    <div className="w-20 h-20 bg-[#F8F5F1] flex-shrink-0">
                      <img
                        src={item.image1}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <div>
                          <p className="product-name text-sm tracking-[0.1em] pr-2">{item.name}</p>
                          <p className="text-xs text-[#6B635C] mt-0.5">{item.selectedVariant}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.cartId)}
                          className="text-[#6B635C] hover:text-[#2C2825]"
                          aria-label="Remove item"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-[#E5DFD6]">
                          <button
                            onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                            className="p-1.5 hover:bg-[#F8F5F1]"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                            className="p-1.5 hover:bg-[#F8F5F1]"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-[#E5DFD6] pt-6 space-y-4">
                <div className="flex justify-between text-sm tracking-[0.05em]">
                  <span>Subtotal</span>
                  <span className="font-medium">${cartTotal.toFixed(2)}</span>
                </div>
                <p className="text-xs text-[#6B635C]">Shipping calculated at checkout</p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="btn btn-primary w-full"
                >
                  Checkout
                </Link>
                <button
                  onClick={closeCart}
                  className="btn btn-outline w-full text-sm"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <ShoppingBag size={48} className="text-[#E5DFD6] mb-4" />
              <p className="text-lg mb-2">Your cart is empty</p>
              <p className="text-sm text-[#6B635C] mb-6">Discover our collection of fine jewelry</p>
              <Link to="/shop" onClick={closeCart} className="btn btn-primary">
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