import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const handleCheckout = () => {
    alert('Thank you for shopping with Velmora! This is a demo storefront — checkout would connect to a real payment processor.');
    closeCart();
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`cart-overlay ${isCartOpen ? 'open' : ''}`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#E5DFD6]">
            <h2 className="font-medium tracking-[0.1em] text-sm uppercase">Your Cart</h2>
            <button onClick={closeCart} className="text-[#6B635C] hover:text-[#1A1816]">
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          {cart.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
              <p className="text-[#6B635C] mb-6">Your cart is empty</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn btn-outline text-sm"
              >
                Browse Collection
              </Link>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
                {cart.map((item) => (
                  <div key={item.cartItemId} className="flex gap-4">
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
                          <p className="product-name text-xs tracking-[0.08em] leading-tight mb-1">
                            {item.name}
                          </p>
                          <p className="text-xs text-[#6B635C]">{item.selectedVariant}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="text-[#6B635C] hover:text-red-600"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <p className="text-sm mt-1">${item.price}</p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center border border-[#E5DFD6] hover:border-[#B8976A]"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center border border-[#E5DFD6] hover:border-[#B8976A]"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-[#E5DFD6] px-6 py-6 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-[#6B635C]">Subtotal</span>
                  <span className="font-medium">${getCartTotal()}</span>
                </div>
                <p className="text-xs text-[#6B635C]">
                  Shipping calculated at checkout
                </p>
                <button
                  onClick={handleCheckout}
                  className="btn btn-gold w-full justify-center"
                >
                  Proceed to Checkout
                </button>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="block text-center text-xs tracking-[0.05em] text-[#6B635C] hover:text-[#1A1816] transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
